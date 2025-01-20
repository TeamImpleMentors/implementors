"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Globe parameters
    const width = canvas.offsetWidth
    const height = canvas.offsetHeight
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) * 0.4
    let rotation = 0

    // Create points on the globe
    const points: [number, number, number][] = []
    for (let i = 0; i < 200; i++) {
      const lat = Math.random() * Math.PI - Math.PI / 2
      const lng = Math.random() * Math.PI * 2
      const r = radius * 0.95 + Math.random() * radius * 0.1
      points.push([lat, lng, r])
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw globe
      rotation += 0.001
      points.forEach(([lat, lng, r]) => {
        const adjustedLng = lng + rotation
        const x = centerX + r * Math.cos(lat) * Math.sin(adjustedLng)
        const y = centerY + r * Math.sin(lat)
        const z = r * Math.cos(lat) * Math.cos(adjustedLng)

        if (z > 0) {
          const alpha = z / radius
          ctx.beginPath()
          ctx.arc(x, y, 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(14, 165, 233, ${alpha})`
          ctx.fill()
        }
      })

      // Draw connections
      points.forEach(([lat1, lng1, r1], i) => {
        const adjustedLng1 = lng1 + rotation
        const x1 = centerX + r1 * Math.cos(lat1) * Math.sin(adjustedLng1)
        const y1 = centerY + r1 * Math.sin(lat1)
        const z1 = r1 * Math.cos(lat1) * Math.cos(adjustedLng1)

        points.slice(i + 1).forEach(([lat2, lng2, r2]) => {
          const adjustedLng2 = lng2 + rotation
          const x2 = centerX + r2 * Math.cos(lat2) * Math.sin(adjustedLng2)
          const y2 = centerY + r2 * Math.sin(lat2)
          const z2 = r2 * Math.cos(lat2) * Math.cos(adjustedLng2)

          const dist = Math.hypot(x2 - x1, y2 - y1)
          if (dist < radius * 0.5 && z1 > 0 && z2 > 0) {
            const alpha = ((1 - dist / (radius * 0.5)) * Math.min(z1, z2)) / radius
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.strokeStyle = `rgba(14, 165, 233, ${alpha * 0.5})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

