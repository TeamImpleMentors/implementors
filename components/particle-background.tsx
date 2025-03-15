"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseRadius: number
  color: string
  alpha: number
  targetAlpha: number
  pulse: boolean
  pulseSpeed: number
  pulseSize: number
  clicked: boolean
  clickTime: number
  hue: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 })
  const particlesRef = useRef<Particle[]>([])
  const [isClicking, setIsClicking] = useState(false)
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size with device pixel ratio
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    // Click interaction
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top

      // Find clicked particles
      let clickedAny = false
      particlesRef.current.forEach((particle) => {
        const dx = clickX - particle.x
        const dy = clickY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < particle.radius + 10) {
          // Particle clicked
          particle.clicked = true
          particle.clickTime = Date.now()
          particle.targetAlpha = 1
          particle.pulse = true
          particle.pulseSize = Math.random() * 3 + 2

          // Add velocity burst
          const angle = Math.random() * Math.PI * 2
          const force = Math.random() * 2 + 1
          particle.vx += Math.cos(angle) * force
          particle.vy += Math.sin(angle) * force

          clickedAny = true
        }
      })

      if (clickedAny) {
        setIsClicking(true)

        if (clickTimeoutRef.current) {
          clearTimeout(clickTimeoutRef.current)
        }

        clickTimeoutRef.current = setTimeout(() => {
          setIsClicking(false)
        }, 300)
      }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("click", handleClick)

    // Particle settings
    const particleCount = 120
    const connectionDistance = 150
    const baseRadius = 3
    const baseSpeed = 0.5

    // Color palette
    const colorPalette = [
      { hue: 210, sat: 100, light: 70 }, // Blue
      { hue: 200, sat: 100, light: 70 }, // Light Blue
      { hue: 190, sat: 100, light: 70 }, // Cyan
      { hue: 220, sat: 100, light: 70 }, // Indigo
    ]

    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      const colorIndex = Math.floor(Math.random() * colorPalette.length)
      const { hue, sat, light } = colorPalette[colorIndex]

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * baseSpeed,
        vy: (Math.random() - 0.5) * baseSpeed,
        radius: Math.random() * baseRadius + 1.5,
        baseRadius: Math.random() * baseRadius + 1.5,
        color: `hsla(${hue}, ${sat}%, ${light}%, 0.8)`,
        alpha: Math.random() * 0.5 + 0.3,
        targetAlpha: Math.random() * 0.5 + 0.3,
        pulse: Math.random() > 0.7,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseSize: Math.random() * 0.5 + 0.5,
        clicked: false,
        clickTime: 0,
        hue,
      })
    }

    particlesRef.current = particles

    // Animation loop
    let globalHue = 210
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update global hue for color animation (slower)
      globalHue = (globalHue + 0.05) % 360

      // Draw connections first (behind particles)
      ctx.globalCompositeOperation = "lighter"

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i]

        for (let j = i + 1; j < particles.length; j++) {
          const particle2 = particles[j]
          const dx = particle2.x - particle.x
          const dy = particle2.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            // Calculate opacity based on distance and particle alphas
            const opacity = (1 - distance / connectionDistance) * Math.min(particle.alpha, particle2.alpha) * 0.8

            // Create gradient for connection
            const gradient = ctx.createLinearGradient(particle.x, particle.y, particle2.x, particle2.y)

            gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${opacity})`)
            gradient.addColorStop(1, `hsla(${particle2.hue}, 100%, 70%, ${opacity})`)

            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = Math.min(particle.radius, particle2.radius) * 0.5
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position with slight acceleration
        particle.vx *= 0.99 // Add slight friction
        particle.vy *= 0.99

        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges with slight dampening
        if (particle.x < 0) {
          particle.x = 0
          particle.vx *= -0.8
        } else if (particle.x > window.innerWidth) {
          particle.x = window.innerWidth
          particle.vx *= -0.8
        }

        if (particle.y < 0) {
          particle.y = 0
          particle.vy *= -0.8
        } else if (particle.y > window.innerHeight) {
          particle.y = window.innerHeight
          particle.vy *= -0.8
        }

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRef.current.radius) {
          // Expand particle size on hover
          particle.radius =
            particle.baseRadius * (1 + ((mouseRef.current.radius - distance) / mouseRef.current.radius) * 2)

          // Add slight movement away from mouse
          const angle = Math.atan2(dy, dx)
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius
          particle.vx -= Math.cos(angle) * force * 0.2
          particle.vy -= Math.sin(angle) * force * 0.2

          // Increase alpha when hovered
          particle.targetAlpha = 0.8
        } else {
          // Return to base radius if not clicked
          if (!particle.clicked) {
            particle.radius = particle.baseRadius
            particle.targetAlpha = Math.random() * 0.5 + 0.3
          }
        }

        // Handle clicked particles
        if (particle.clicked) {
          const elapsedTime = Date.now() - particle.clickTime

          if (elapsedTime > 2000) {
            // Reset after 2 seconds
            particle.clicked = false
          } else {
            // Pulse effect
            const pulsePhase = (elapsedTime % 1000) / 1000
            const pulseFactor = Math.sin(pulsePhase * Math.PI * 2) * 0.5 + 1.5
            particle.radius = particle.baseRadius * pulseFactor * particle.pulseSize

            // Gradually reduce velocity
            particle.vx *= 0.98
            particle.vy *= 0.98
          }
        }

        // Pulse animation
        if (particle.pulse) {
          const time = Date.now() * particle.pulseSpeed
          const pulseFactor = Math.sin(time) * 0.2 + 1
          particle.radius = particle.baseRadius * pulseFactor
        }

        // Smooth alpha transition
        particle.alpha += (particle.targetAlpha - particle.alpha) * 0.05

        // Draw particle with gradient
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 2,
        )

        const particleHue = particle.clicked
          ? (particle.hue + 30) % 360
          : // Shift hue when clicked
            particle.hue

        gradient.addColorStop(0, `hsla(${particleHue}, 100%, 70%, ${particle.alpha})`)
        gradient.addColorStop(0.5, `hsla(${particleHue}, 100%, 70%, ${particle.alpha * 0.5})`)
        gradient.addColorStop(1, `hsla(${particleHue}, 100%, 70%, 0)`)

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Add glow effect for clicked particles
        if (particle.clicked) {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${particleHue}, 100%, 70%, ${particle.alpha * 0.2})`
          ctx.fill()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("click", handleClick)
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      {isClicking && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm z-10">
          Click more particles to create connections!
        </div>
      )}
    </>
  )
}

