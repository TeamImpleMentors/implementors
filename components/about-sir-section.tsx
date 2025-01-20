"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const features = [
  "United Nations High Commission for Refugees Challenge winner",
  "G20 Speaker",
  "Over a Decade of Experience",
  "Academic Mentor",
]

export function AboutSirSection() {
  return (
    <section id="about-sir" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            src="/img2.jpeg"
            alt="Mr. Rahul Menon"
            className="rounded-lg shadow-xl"
          />

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl mb-6"
            >
              About the
              <br /> Chief Trainer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-muted-foreground mb-8"
            >
              Mr. Rahul Menon, a renowned international relations specialist and esteemed public speaker, mentors
              students globally. Recognized by top media agencies like Times of India and Hindustan Times. He mentored
              the winning team amongst 91,000 institutes to win the best speeches award at the United Nations Refugee
              Challenge. Invited by G20's W20, he engaged with diverse students at Delhi Technological University. His
              impactful contributions have empowered numerous aspirants to fulfill their dreams with dignity.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}

