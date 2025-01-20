"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const stats = [
  {
    title: "12+",
    subtitle: "Years of Experience",
    description:
      "in training students for careers in Public Policy through modules ranging from Stakeholder Assessment to the Functioning of Inter-Governmental Organisations along with mentoring them for entrance examinations such as UPSC, CDS, CUET and CLAT.",
    icon: "⭐️",
  },
  {
    title: "5+",
    subtitle: "Years Since Establishment",
    description:
      "For two decades, ImpleMENTORS have strived to create a realisation as for the significance of academic exposure in the form of policy making before students finally go on to occupy positions of relevance in shaping the Global Political Order.",
    icon: "🌟",
  },
  {
    title: "5",
    subtitle: "Lakhs Plus",
    description: "Students trained in the areas of Skill Development and Academia",
    icon: "👥",
  },
  {
    title: "25+",
    subtitle: "International Workshops",
    description:
      "Collaborated with Universities abroad, exploring skills like communication, career building and leadership.",
    icon: "🌍",
  },
]

const features = [
  "Hollistic Soft Skill Development",
  "Engaging in Practical Learning",
  "Experienced and Specialized Instructors",
  "Creating Public Speaking Advocates",
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
        
            <img src="/img3.jpeg" alt="About ImpleMentors" className="relative rounded-lg shadow-2xl w-full" />
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                Who we really are & <br /> why choose us?
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-muted-foreground mb-8"
            >
              Led by UN Awardee Mr. Rahul Menon, our academic initiative empowers students with diverse training in
              public speaking, communication, and critical thinking. Specializing in areas like Law, Economics, and
              Policy-Making, we prepare students for competitive exams and real-world engagement through MUNs and Youth
              Parliaments, fostering holistic growth and career readiness.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.li key={index} className="flex items-center gap-3 group" whileHover={{ x: 10 }}>
                  <span className="flex-shrink-0 h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                  </span>
                  <span className="group-hover:text-blue-500 transition-colors">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="relative group cursor-pointer"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

              {/* Glass card */}
              <div className="relative bg-white/10 dark:bg-black/10 backdrop-blur-lg rounded-lg p-8 shadow-2xl border border-white/20 dark:border-white/10">
                {/* Floating icon */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                >
                  {stat.icon}
                </motion.div>

                <div className="pt-6">
                  {/* Animated counter */}
                  <motion.h3
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2 text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.title}
                  </motion.h3>

                  <p className="font-semibold mb-4 text-center group-hover:text-black dark:group-hover:text-black transition-colors">
                    {stat.subtitle}
                  </p>

                  {/* Description with gradient overlay */}
                  <div className="relative">
                    <p className="text-sm text-muted-foreground text-center">{stat.description}</p>
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/80 to-transparent group-hover:opacity-0 transition-opacity" />
                  </div>
                </div>

                {/* Hover effect lines */}
                <div className="absolute inset-0 rounded-lg transition-transform duration-700">
                  <div className="absolute inset-0 border-2 border-blue-500/20 rounded-lg" />
                  <div className="absolute inset-[2px] border border-blue-500/20 rounded-lg rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                  <div className="absolute inset-[4px] border border-blue-500/20 rounded-lg -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  )
}

