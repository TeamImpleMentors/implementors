"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseRadius: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 })

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
    canvas.addEventListener("mousemove", handleMouseMove)

    // Particle settings
    const particleCount = 100
    const particles: Particle[] = []
    const connectionDistance = 150
    const baseRadius = 3
    const baseSpeed = 0.5

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * baseSpeed,
        vy: (Math.random() - 0.5) * baseSpeed,
        radius: Math.random() * baseRadius + 1,
        baseRadius: Math.random() * baseRadius + 1,
      })
    }

    // Animation loop
    let hue = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update hue for color animation
      hue = (hue + 0.1) % 360

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1
        if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1

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
        } else {
          particle.radius = particle.baseRadius
        }

        // Draw particle with gradient
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius)
        gradient.addColorStop(0, `hsla(${hue}, 100%, 70%, 0.8)`)
        gradient.addColorStop(1, `hsla(${hue}, 100%, 70%, 0)`)

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x
          const dy = particles[j].y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            const opacity = (1 - distance / connectionDistance) * 0.8 // Increased opacity
            ctx.strokeStyle = `hsla(${hue}, 100%, 70%, ${opacity})`
            ctx.lineWidth = 2 // Increased line width
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

