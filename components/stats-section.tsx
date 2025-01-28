"use client"

import { motion } from "framer-motion"

const stats = [
  {
    number: "12+",
    title: "Years of Experience",
    description:
      "in training students for careers in Public Policy through modules ranging from Stakeholder Assessment to the Functioning of Inter-Governmental Organisations along with mentoring them for entrance examinations such as UPSC, CDS, CUET and CLAT.",
    icon: "⭐️",
  },
  {
    number: "5+",
    title: "Years Since Establishment",
    description:
      "For two decades, ImpleMENTORS have strived to create a realisation as for the significance of academic exposure in the form of policy making before students finally go on to occupy positions of relevance in shaping the Global Political Order.",
    icon: "🌟",
  },
  {
    number: "5",
    title: "Lakhs Plus",
    description: "Students trained in the areas of Skill Development and Academia",
    icon: "👥",
  },
  {
    number: "25+",
    title: "International Workshops",
    description:
      "Collaborated with Universities abroad, exploring skills like communication, career building and leadership.",
    icon: "🌍",
  },
]

export function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-900">
      <div className="container relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div
                className={`relative bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 glow-${index + 1}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl mb-4">
                  {stat.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</h3>
                  <p className="font-semibold text-white mb-4">{stat.title}</p>
                  <p className="text-sm text-slate-400">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
  .glow-1 {
    box-shadow: 0 4px 20px -2px rgba(59, 130, 246, 0.5);
  }
  .glow-2 {
    box-shadow: 0 4px 20px -2px rgba(14, 165, 233, 0.5);
  }
  .glow-3 {
    box-shadow: 0 4px 20px -2px rgba(6, 182, 212, 0.5);
  }
  .glow-4 {
    box-shadow: 0 4px 20px -2px rgba(45, 212, 191, 0.5);
  }
`}</style>
    </section>
  )
}

