"use client"

import { motion } from "framer-motion"

const stats = [
  {
    number: "12+",
    label: "Years of Experience",
    description:
      "Training students for careers in Public Policy through modules ranging from Stakeholder Assessment to Inter-Governmental Organisations",
    icon: "/img/experience-icon.png",
  },
  {
    number: "5+",
    label: "Years Since Establishment",
    description:
      "Creating realization for academic exposure in policy making before students occupy positions in Global Political Order",
    icon: "/img/establishment-icon.png",
  },
  {
    number: "5",
    label: "Lakhs Plus",
    description: "Students trained in the areas of Skill Development and Academia",
    icon: "/img/students-icon.png",
  },
  {
    number: "25+",
    label: "International Workshops",
    description:
      "Collaborated with Universities abroad, exploring skills like communication, career building and leadership",
    icon: "/img/workshop-icon.png",
  },
]

export function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-blue-600/10 to-blue-600/5" />
        <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-10" />
      </div>

      <div className="container relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              {/* Glowing border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

              {/* Glass card */}
              <div className="relative bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 p-6">
                {/* Floating icon */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-blue-700 p-2 shadow-lg"
                >
                  <img src={stat.icon || "/placeholder.svg"} alt="" className="w-full h-full object-contain" />
                </motion.div>

                <div className="pt-6 text-center">
                  <motion.h3
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 text-transparent bg-clip-text mb-2"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="font-semibold mb-4 group-hover:text-blue-400 transition-colors">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>

                {/* Animated border lines */}
                <div className="absolute inset-0 rounded-2xl transition-transform duration-700">
                  <div className="absolute inset-0 border-2 border-blue-400/20 rounded-2xl" />
                  <div className="absolute inset-[2px] border border-blue-400/20 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                  <div className="absolute inset-[4px] border border-blue-400/20 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-900/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  )
}

