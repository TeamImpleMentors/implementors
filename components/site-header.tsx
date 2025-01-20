"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Instagram, Linkedin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { NewsTicker } from "@/components/news-ticker"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "About Sir", href: "#about-sir" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Coordinators", href: "#coords" },
  { name: "Glimpses", href: "#glimpses" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <NewsTicker />
      <div
        className={`bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-all ${scrolled ? "shadow-lg" : ""}`}
      >
        <nav className="container flex items-center justify-between h-20" aria-label="Global">
          <div className="flex lg:flex-1 items-center gap-3">
            <Link href="/" className="relative w-12 h-12 rounded-xl overflow-hidden">
              <Image src="/img3.jpeg" alt="ImpleMentors Logo" fill className="object-cover" priority />
            </Link>
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
            >
              ImpleMentors
            </Link>
          </div>

          <div className="flex lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>

          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
            <div className="flex items-center gap-4 border-r border-slate-200 dark:border-slate-700 pr-4">
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
            <ThemeToggle />
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl px-6 py-6 sm:max-w-sm"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                  <Image src="/img3.jpeg" alt="ImpleMentors Logo" fill className="object-cover" />
                </div>
                <span className="text-xl font-bold">ImpleMentors</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-200 dark:divide-slate-700">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
                <div className="py-6">
                  <div className="flex items-center gap-4 mb-4">
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
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

