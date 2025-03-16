"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ClimateSummitPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  useEffect(() => {
    const hasShown = sessionStorage.getItem("climateSummitPopupShown")
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasBeenShown(true)
        sessionStorage.setItem("climateSummitPopupShown", "true")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {/* Fixed button that's always visible */}
      {!isOpen && hasBeenShown && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg px-6 py-6 text-lg font-bold"
          >
            Register for Climate Justice Summit
          </Button>
        </motion.div>
      )}

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative h-40 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-20" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/90 to-emerald-600/90" />

                {/* Content */}
                <div className="relative p-8 text-center">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-2">Climate Justice Summit 2024</h2>
                    <p className="text-emerald-100 text-lg">A Multi-Stakeholder Dialogue on Climate Justice and Sustainability</p>
                  </motion.div>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <p className="text-emerald-100 text-center">
                  Join us for an impactful discussion on climate justice and sustainable development. Network with
                  experts and learn how you can contribute to a greener future.
                </p>

                {/* Info grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <Calendar className="h-6 w-6 text-emerald-400 mb-2" />
                    <h3 className="text-white font-medium mb-1">Date</h3>
                    <p className="text-emerald-100 text-sm">19th April, 2025</p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <MapPin className="h-6 w-6 text-emerald-400 mb-2" />
                    <h3 className="text-white font-medium mb-1">Venue</h3>
                    <p className="text-emerald-100 text-sm">India International Centre, Lodhi Road, New Delhi</p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <Clock className="h-6 w-6 text-emerald-400 mb-2" />
                    <h3 className="text-white font-medium mb-1">Time</h3>
                    <p className="text-emerald-100 text-sm">8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.div
                    className="flex-1 relative group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => setIsButtonHovered(true)}
                    onHoverEnd={() => setIsButtonHovered(false)}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-lg opacity-70 blur group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
                    <a
                      href="https://forms.gle/ed5qEmg5TQQ8uYMR9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg py-4 font-bold text-lg transition-all duration-200 group"
                    >
                      <Sparkles className="h-5 w-5 text-yellow-300" />
                      Register Now
                      <motion.div
                        animate={{ x: isButtonHovered ? 5 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </a>
                  </motion.div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="sm:flex-[0.4] px-6 py-4 text-emerald-300 hover:text-emerald-200 bg-transparent hover:bg-white/5 rounded-lg transition-colors text-base"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

