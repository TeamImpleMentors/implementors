"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, FileText, Award, Users, Trophy, Presentation } from "lucide-react"

const journeyItems = [
  {
    year: "2015-Present",
    title: "Training Students",
    description: "Trained students from over 150 institutions globally.",
    icon: Users,
    achievements: ["150+ Partner Institutions", "10,000+ Students Trained", "98% Success Rate"],
  },
  {
    year: "2021",
    title: "UNITED NATIONS AWARD",
    description: "Won the UN Refugee Challenge across 91,000 institutions.",
    icon: Trophy,
    achievements: ["Best Speech Award", "91,000 Competing Institutions", "South-East Asia Winner"],
  },
  {
    year: "March 2023",
    title: "G20 Speaker Invitation",
    description: "Invited by G20 under W20 to address gender digital divide.",
    icon: Presentation,
    achievements: ["Keynote Speaker", "Policy Recommendations", "International Platform"],
  },
  {
    year: "December 2023",
    title: "UN RECOGNITION",
    description: "Work recognized by UN legal advisor Ms. Jasteen Dhillon.",
    icon: Award,
    achievements: ["Official Recognition", "Program Excellence", "Global Impact"],
  },
]

export function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  return (
    <section id="journey" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-100/50 to-white/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900" />
      <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-5" />

      <div className="container relative" ref={containerRef}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Our Journey</span>
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-blue-500/20" />

          {/* Animated progress */}
          <motion.div
            className="absolute left-8 top-0 w-px bg-blue-500"
            style={{
              height: scrollYProgress.get() * 100 + "%",
              transformOrigin: "top",
            }}
          />

          <div className="space-y-12">
            {journeyItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  onViewportEnter={() => setActiveIndex(index)}
                  className="relative"
                >
                  {/* Timeline node */}
                  <motion.div
                    className={`absolute left-8 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 ${
                      activeIndex >= index
                        ? "border-blue-500 bg-blue-500"
                        : "border-blue-500/50 bg-white dark:bg-slate-900"
                    }`}
                    initial={false}
                    animate={
                      activeIndex >= index
                        ? {
                            scale: [1, 1.2, 1],
                            transition: { duration: 0.5 },
                          }
                        : {}
                    }
                  />

                  {/* Content card */}
                  <div className="ml-16">
                    <div className="bg-white/80 dark:bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-colors duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-500" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-blue-500 mb-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">{item.year}</span>
                          </div>

                          <h3 className="text-xl font-bold mb-2 hover-text-gradient">{item.title}</h3>

                          <p className="text-slate-600 dark:text-slate-300 mb-4">{item.description}</p>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {item.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                <span className="text-sm text-slate-500 dark:text-slate-400 hover-text">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

