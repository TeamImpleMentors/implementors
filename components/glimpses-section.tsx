"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const glimpses = [
  {
    image: "/Jaipuria2.jpg",
    title: "Jaipuria Institute of Management",
    description:
      "ImpleMentors hosted a successful MUN conference at Jaipuria Institute of Management Noida on 13-14 January 2024",
  },
  {
    image: "/Lawrence.jpg",
    title: "The Lawrence School Sanawar",
    description:
      "Hosted and conducted a successful conference at the Lawrence School Sanawar where our work was acknowledged by a renowned UN legal advisor, Ms. Jasteena Dhillon",
  },
  {
    image: "/ShaheedBhagatSingh.jpg",
    title: "Shaheed Bhagat Singh College, DU",
    description:
      "We organised a seminar on learning the aspects and importance of AI and Intellectual Property Rights for academic as well as professional development.",
  },
  {
    image: "/MurthalAdda.jpg",
    title: "Govt Girls Sr Sec School, Murthal Adda",
    description:
      "Education for all - Our specialised initiative to educate and train government school students about unconventional skills",
  },
  {
    image: "/SirsaOpenHouse.jpg",
    title: "Open House Session in Sirsa",
    description:
      "We organised an open house session for Sirsa students where we discussed topics like career development and public speaking.",
  },
  {
    image: "/HGS.jpg",
    title: "Heritage Girls School, Udaipur",
    description:
      "We have been training the students of HGS, Udaipur for various debating competitions and public speaking event as well as in International Relations, International Law, United Nations etc.",
  },
]

export function GlimpsesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % glimpses.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + glimpses.length) % glimpses.length)
  }

  return (
    <section id="glimpses" className="py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center"
        >
          Glimpses of our Work
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg aspect-video bg-slate-100 dark:bg-slate-800">
            <motion.img
              key={currentIndex}
              src={glimpses[currentIndex].image}
              alt={glimpses[currentIndex].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2 hover-text-gradient">{glimpses[currentIndex].title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{glimpses[currentIndex].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

