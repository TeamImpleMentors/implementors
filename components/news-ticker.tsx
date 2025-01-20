"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell } from "lucide-react"

const news = [
  "MUN Conference at The Lawrence School Sanawar(8-10 August)",
  "DAVPPS MUN 2024 (23-24 Aug)",
  "Monthly international workshops on intellectual development",
]

export function NewsTicker() {
  const [currentNews, setCurrentNews] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % news.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-3">
      <div className="absolute inset-0 bg-blue-500/20 backdrop-blur-xl" />

      <div className="container relative flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 text-white font-semibold border-r border-white/20 pr-4">
          <Bell className="h-4 w-4 animate-bounce" />
          <span>Updates</span>
        </div>

        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNews}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm sm:text-base text-white"
            >
              {news[currentNews]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

