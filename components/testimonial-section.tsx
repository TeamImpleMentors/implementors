"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  title: string
  student: string
  description: string
  image: string
  year: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "United Nations High Commission Challenge Winner",
    student: "Team ImpleMentors",
    description: "Won amongst 91,000 institutions globally in the UNHCR Challenge",
    image: "/assets/testimonials/un-challenge.jpg",
    year: "2023",
  },
  {
    id: 2,
    title: "Harvard MUN Selection",
    student: "Aarav Patel",
    description: "Selected to represent India at Harvard Model United Nations",
    image: "/assets/testimonials/harvard-mun.jpg",
    year: "2024",
  },
  {
    id: 3,
    title: "Best Delegate Award",
    student: "Ananya Gupta",
    description: "Awarded Best Delegate at the National Model United Nations Conference",
    image: "/assets/testimonials/best-delegate.jpg",
    year: "2023",
  },
  {
    id: 4,
    title: "International Debate Championship",
    student: "Rohan Kapoor",
    description: "First place in the International Schools Debate Championship",
    image: "/assets/testimonials/debate-championship.jpg",
    year: "2023",
  },
  {
    id: 5,
    title: "Global Youth Leadership Summit",
    student: "Zara Ahmed",
    description: "Selected as one of 100 global youth leaders for the UN Youth Summit",
    image: "/assets/testimonials/youth-summit.jpg",
    year: "2024",
  },
]

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(handleNext, 8000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            What Our Students Say
          </span>
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white"
            >
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg md:text-xl mb-4 italic">"{testimonials[currentIndex].description}"</p>
                <h3 className="text-xl font-semibold mb-1">{testimonials[currentIndex].student}</h3>
                <p className="text-sm text-gray-300">{testimonials[currentIndex].title}</p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-2 inline-block px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm"
                >
                  {testimonials[currentIndex].year}
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-blue-500"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-blue-400 dark:hover:bg-blue-400"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={toggleAutoPlay}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
          >
            {isPlaying ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </section>
  )
}

