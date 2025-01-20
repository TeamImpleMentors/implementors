"use client"

import { motion } from "framer-motion"
import { ChevronDown, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "./particle-background"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/80 dark:from-slate-900/50 dark:to-slate-900/80 backdrop-blur-sm" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl sm:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="block text-shadow-lg">ImpleMentors,</span>
            <span className="block mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              "Mentors that implement"
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            An initiative that aims at empowering intellectual development through specifically curated modules.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white border-0 group"
              asChild
            >
              <a href="#about">
                Explore
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center gap-6 justify-center"
          >
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Follow Us</span>
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/imple_mentors/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/team-implementors/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

