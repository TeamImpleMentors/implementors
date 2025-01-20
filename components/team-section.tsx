"use client"

import { motion } from "framer-motion"
import { Linkedin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Mr. Rahul Menon",
    role: "Chief Trainer and Advisor",
    image: "/product1.png",
    linkedin: "https://www.linkedin.com/in/rahul-menon-936b3880/",
    details: "rahulmenon.html",
  },
  {
    name: "Ms. Garima Rajpal",
    role: "Academic Trainer, Founder and Pan-India Head",
    image: "/product2.png",
    linkedin: "https://www.linkedin.com/in/garima-rajpal-73b2b1202/",
    details: "garimarajpal.html",
  },
  {
    name: "Ms. Lovisha Jindal",
    role: "Academic Trainer, Founder and Director-Management",
    image: "/product3.png",
    linkedin: "https://www.linkedin.com/in/lovisha-jindal-54763b214/",
    details: "lovishajindal.html",
  },
  {
    name: "Mr. Ishpreet Singh Luthra",
    role: "Associate Academic Trainer and Head of Tech & Social Media",
    image: "/product4.png",
    linkedin: "https://www.linkedin.com/in/ishpreet-singh-luthra-197045205/",
    details: "ishpreetsinghluthra.html",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center"
        >
          Our Mentors
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center text-muted-foreground mb-12"
        >
          Our diverse team comprises of over 150 individuals across the globe, introducing our core team:
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background rounded-lg p-6 shadow-lg text-center"
            >
              <img
                src={member.image || "/Users/kridaysharma/Downloads/implementors-website/public/avatar-4.png"}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
              <div className="flex justify-center space-x-2">
                <Button variant="outline" size="icon" asChild>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href={member.details}>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

