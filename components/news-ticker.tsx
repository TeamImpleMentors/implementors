"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const news = [
  {
    text: "Model United Nations at the SCINDIA School, Gwalior on (12-14 April, 2025) - Register now for our flagship event",
    highlight: true,
    link: "https://www.scimun.org/",
  },
  {
    text: "Climate Justice Summit (19 April) - Limited seats available!",
    highlight: true,
    link: "https://linktr.ee/theclimatejusticesummit2025",
  },
  {
    text: "MUN Conference at The Lawrence School Sanawar (21-23 August)",
    highlight: false,
    link: "#",
  },
  {
    text: "Workshop 33.0 (22 March)",
    highlight: true,
    link: "https://forms.gle/UkGizi3N5V3jJFAU7",
  },
]

export function NewsTicker() {
  const [currentNews, setCurrentNews] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const tickerRef = useRef<HTMLDivElement>(null)

  // Handle automatic cycling of news items
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % news.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isPaused])

  // Handle touch events for mobile
  const handleTouchStart = () => setIsPaused(true)
  const handleTouchEnd = () => setIsPaused(false)

  // Navigation functions
  const goToPrev = () => {
    setCurrentNews((prev) => (prev - 1 + news.length) % news.length)
  }

  const goToNext = () => {
    setCurrentNews((prev) => (prev + 1) % news.length)
  }

  return (
    <div
      className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 py-3 shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={tickerRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-20" />
      <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm" />

      <div className="container relative flex items-center gap-2 sm:gap-4">
        {/* Label - hidden on extra small screens */}
        <div className="hidden sm:flex items-center gap-2 text-white font-bold border-r border-white/20 pr-4 flex-shrink-0">
          <div className="bg-white/20 rounded-full p-1.5">
            <Bell className="h-4 w-4 text-white" />
          </div>
          <span className="uppercase tracking-wider text-sm">Updates</span>
        </div>

        {/* Mobile navigation - only visible on small screens */}
        <button
          onClick={goToPrev}
          className="flex sm:hidden items-center justify-center h-6 w-6 text-white/80 hover:text-white"
          aria-label="Previous announcement"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* News content */}
        <div className="flex-1 overflow-hidden px-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNews}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                {news[currentNews].highlight && (
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500 text-black flex-shrink-0">
                    Featured
                  </span>
                )}
                <span
                  className={`text-xs xs:text-sm sm:text-base truncate ${
                    news[currentNews].highlight ? "text-yellow-300 font-bold" : "text-white font-medium"
                  }`}
                >
                  {news[currentNews].highlight && "🔥 "}
                  {news[currentNews].text}
                </span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 ml-2 hidden sm:flex items-center gap-1 text-xs flex-shrink-0"
                asChild
              >
                <a
                  href={news[currentNews].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View details about ${news[currentNews].text}`}
                >
                  Details
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile navigation - only visible on small screens */}
        <button
          onClick={goToNext}
          className="flex sm:hidden items-center justify-center h-6 w-6 text-white/80 hover:text-white"
          aria-label="Next announcement"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Mobile link button */}
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 flex sm:hidden items-center justify-center p-1 h-6 w-6"
          asChild
        >
          <a href={news[currentNews].link} target="_blank" rel="noopener noreferrer" aria-label="View details">
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>

        {/* Indicator dots - hidden on small screens */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <div className="flex">
            {news.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentNews(index)}
                className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                  index === currentNews ? "bg-white" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to announcement ${index + 1}`}
                aria-current={index === currentNews ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

