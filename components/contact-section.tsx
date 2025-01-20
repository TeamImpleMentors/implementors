"use client"

import { motion } from "framer-motion"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Reach out to us today</h2>
            <p className="text-muted-foreground mb-8">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span>+91 8950459926</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span>info@implementors.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-4">
              <Input type="email" placeholder="Your Email" />
              <Input type="text" placeholder="Subject" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

