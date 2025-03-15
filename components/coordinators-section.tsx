"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const coordinators = [
  {
    name: "Ms. Kulmehak Kaur",
    role: "International Coordinator: CALGARY, CANADA 🇨🇦",
    image: "/13.png",
    linkedin: "https://www.linkedin.com/in/kulmehak3008/",
  },
  {
    name: "Adv. Vaibhav Khanna",
    role: "International Coordinator: LONDON, UK 🇬🇧",
    image: "/11.png",
    linkedin: "https://www.linkedin.com/in/advvaibhavkhanna/",
  },
  {
    name: "Ms. Nivedita Goyal",
    role: "Regional Coordinator: Sirsa, Haryana",
    image: "/12.png",
    instagram: "https://www.instagram.com/goyalnivedita/",
  },

]

export function CoordinatorsSection() {
  return (
    <section id="coords" className="py-24 bg-muted/50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center"
        >
          Event Coordinators
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coordinators.map((coordinator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background rounded-lg p-6 shadow-lg text-center"
            >
              <img
                src={coordinator.image || "/placeholder.svg"}
                alt={coordinator.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{coordinator.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{coordinator.role}</p>
              <div className="flex justify-center">
                {coordinator.linkedin && (
                  <Button variant="outline" size="icon" asChild>
                    <a href={coordinator.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {coordinator.instagram && (
                  <Button variant="outline" size="icon" asChild>
                    <a href={coordinator.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

