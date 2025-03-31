"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { X, Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ClimateSummitPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasShown = sessionStorage.getItem("climateSummitPopupShown")

    if (!hasShown) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasBeenShown(true)
        sessionStorage.setItem("climateSummitPopupShown", "true")
      }, 3000)

      return () => clearTimeout(timer)
    } else {
      // If it was shown before, update state
      setHasBeenShown(true)
    }
  }, [])

  const closePopup = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Fixed button that's always visible after popup has been shown once */}
      {!isOpen && hasBeenShown && (
        <div className="fixed bottom-4 right-4 z-40">
          <Button
            onClick={() => setIsOpen(true)}
            className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg border-0 px-3 py-2 text-sm font-bold transition-transform hover:scale-105 active:scale-95"
          >
            Climate Justice Summit
          </Button>
        </div>
      )}

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 overflow-y-auto"
            onClick={closePopup}
          >
            <div
              className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl max-w-sm w-full overflow-hidden m-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with gradient background */}
              <div className="relative h-24 bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center overflow-hidden">
                <h2 className="text-xl md:text-2xl font-bold text-white text-center px-4 drop-shadow-md">
                  Climate Justice Summit 2025
                </h2>
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                  aria-label="Close popup"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-center text-muted-foreground text-sm mb-4">
                  Join us for an impactful discussion on climate justice and sustainable development. Network with
                  experts and learn how you can contribute to a greener future.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Date</h3>
                      <p className="text-sm text-muted-foreground">April 19th, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Venue</h3>
                      <p className="text-sm text-muted-foreground">India International Centre, New Delhi</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Time</h3>
                      <p className="text-sm text-muted-foreground">09:00 AM - 05:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 h-10 text-base font-bold"
                    asChild
                  >
                    <a
                      href="https://forms.gle/Q9HTh7kJqBaA7nuv9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Register Now
                      <ArrowRight className="h-5 w-5 ml-1" />
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex-1 text-slate-500 border-slate-300 hover:bg-slate-100 hover:text-slate-600 dark:border-slate-700 dark:hover:bg-slate-800 h-12"
                    onClick={closePopup}
                  >
                    Maybe Later
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

