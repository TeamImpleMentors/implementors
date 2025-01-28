"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, Target, GraduationCap, BookOpen, CheckIcon as Exam, Globe, Building } from "lucide-react"

const services = [
  {
    title: "Training for Public Speaking and Communication",
    shortDescription:
      "Discover the art of effective communication and master public speaking through our comprehensive training program.",
    description: `Discover the art of effective communication and master the art of public speaking through our comprehensive training program. Our expert instructors will equip you with essential techniques, from captivating storytelling to persuasive body language. Engage diverse audiences with authenticity, and learn to overcome stage fright. Whether you are a beginner or a seasoned speaker, our dynamic courses will empower you to excel in every speaking opportunity that comes your way. Step into the spotlight and make a lasting impact with our transformative public speaking and communication training.`,
    icon: Target,
  },
  {
    title: "Career Counselling For Students",
    shortDescription: "Navigate your career path with expert guidance tailored to your strengths and aspirations.",
    description: `Career counseling is an indispensable resource in today's rapidly changing job market. With an array of career options and evolving industries, individuals often face uncertainty and confusion when making crucial career decisions. Career counseling provides invaluable guidance, helping individuals identify their strengths, interests, and aspirations. Through personalized assessments and expert advice, career counselors pave the way for informed career choices, aligning individual talents with suitable professions. This empowering process maximizes job satisfaction, boosts productivity, and enhances overall career success, making career counseling an essential tool for navigating the ever-evolving landscape of work.`,
    icon: GraduationCap,
  },
  {
    title: "Academic Curriculum Building",
    shortDescription:
      "Design effective and efficient academic curricula aligned with NEP objectives and soft skills development.",
    description: `We help the institutions to formulate an effective and efficient academic curriculum which would be highly beneficial for the overall academic development of the students. This would incorporate NEP and its objectives along with inclusion of soft skills development. Further, the team shall assist the school in development of an activity calendar that shall include national and international competitions.`,
    icon: BookOpen,
  },
  {
    title: "Mentoring for Entrance Examination",
    shortDescription: "Comprehensive preparation for competitive exams with proven success rates.",
    description: `Entrance exams often have vast syllabi and specific question patterns that can be challenging to navigate alone. Coaching institutes offer a systematic approach to cover the required topics, along with valuable tips and techniques to tackle different question types. Regular mock tests and assessments help students gauge their progress and identify areas for improvement. Our students have secured admissions in renowned institutions with high percentile.`,
    icon: Exam,
  },
  {
    title: "Advanced Training on International Debating",
    shortDescription: "Master the art of international debating and enhance your global communication skills.",
    description: `The demand for training in international debating has never been more pressing. As globalization blurs borders and fosters global collaboration, effective communication and persuasive skills are crucial. International debating training equips individuals with the ability to articulate ideas cogently, respect diverse viewpoints, and engage in constructive dialogue. This training not only hones public speaking abilities but also cultivates critical thinking and empathy. As the world becomes increasingly interconnected, mastering the art of international debating empowers individuals to contribute meaningfully to global discussions and effect positive change on a global scale.`,
    icon: Globe,
  },
  {
    title: "Model United Nations Training",
    shortDescription: "Develop diplomacy skills through simulated UN conferences and international relations training.",
    description: `Model United Nations (MUNs) are vital for shaping future leaders by providing a unique platform for young minds to engage in international diplomacy, problem-solving, and consensus-building. Through simulations of UN conferences, participants assume diplomatic roles, developing critical skills in research, public speaking, and negotiation while addressing real-world issues. MUNs promote cultural awareness and empathy, preparing individuals to be informed and responsible global citizens. This dynamic educational experience inspires young leaders to advocate for positive change and contribute meaningfully to addressing global challenges. MUN training for school students is crucial, fostering skills like research, public speaking, negotiation, and teamwork from an early age. This experiential learning enhances global awareness, critical thinking, and cultural understanding, shaping confident, informed leaders ready to tackle global issues.`,
    icon: Building,
  },
]

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-slate-900">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">The Services We Offer</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative" // Removed "group" class
              >
                {/* Glowing border effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur transition-opacity duration-300 ${
                    openIndex === index ? "opacity-75" : "opacity-0"
                  }`}
                />

                {/* Glass card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
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
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white transition-colors">{service.title}</h3>
                      <p className="text-sm text-slate-400 mt-1">{service.shortDescription}</p>
                    </div>

                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="h-6 w-6 text-blue-400" />
                      ) : (
                        <Plus className="h-6 w-6 text-blue-400" />
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
                        <div className="p-6 pt-0 border-t border-white/10">
                          <p className="text-slate-300 leading-relaxed">{service.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

