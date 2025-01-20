"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const services = [
  {
    title: "Training for Public Speaking and Communication",
    description:
      "Discover the art of effective communication and master public speaking through our comprehensive training program.",
    icon: "🎯",
  },
  {
    title: "Career Counselling For Students",
    description: "Navigate your career path with expert guidance tailored to your strengths and aspirations.",
    icon: "🎓",
  },
  {
    title: "Academic Curriculum Building",
    description:
      "Design effective and efficient academic curricula aligned with NEP objectives and soft skills development.",
    icon: "📚",
  },
  {
    title: "Mentoring for Entrance Examination",
    description: "Comprehensive preparation for competitive exams with proven success rates.",
    icon: "📝",
  },
  {
    title: "Advanced Training on International Debating",
    description: "Master the art of international debating and enhance your global communication skills.",
    icon: "🌍",
  },
  {
    title: "Model United Nations Training",
    description: "Develop diplomacy skills through simulated UN conferences and international relations training.",
    icon: "🏛️",
  },
]

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-blue-500/10 to-blue-500/5" />

      {/* Animated background lines */}
      <div className="absolute inset-0 bg-lines opacity-20" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">The Services We Offer</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

              {/* Glass card */}
              <div className="relative bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-xl border border-white/20 dark:border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center gap-4 text-left"
                >
                  {/* Animated icon */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg"
                  >
                    {service.icon}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                  </div>

                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-6 w-6 text-blue-500" />
                    ) : (
                      <Plus className="h-6 w-6 text-blue-500" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      
                        <div className="mt-4 flex gap-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors"
                          >
                            Learn More
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg bg-white/10 text-sm font-medium hover:bg-white/20 transition-colors"
                          >
                            Contact Us
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  )
}

