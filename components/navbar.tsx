"use client"

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { MagneticButton } from "./magnetic-button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" },
]

const roles = ["Full-Stack Engineer", "AI Enthusiast", "Open Source Builder", "Founder @ Glitched Tech"]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)

    const sections = navLinks.map((link) => link.href.replace("#", ""))
    for (const section of sections.reverse()) {
      const element = document.getElementById(section)
      if (element && latest >= element.offsetTop - 200) {
        setActiveSection(section)
        break
      }
    }
  })

  const scrollToSection = (href: string) => {
    setIsMobileOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-3" : "py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? "px-6 py-3 rounded-2xl glass glass-border shadow-2xl shadow-black/50" : ""
            }`}
          >
            {/* Logo with photo */}
            <MagneticButton onClick={() => scrollToSection("#home")}>
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-cyan-400/50 ring-offset-2 ring-offset-black">
                  <Image
                    src="/images/untitled-20design.png"
                    alt="Khan Jariff Al Naseeb"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="hidden sm:block">
                  <span className="text-white font-bold tracking-tight">
                    Khan<span className="text-cyan-400">.</span>
                  </span>
                  <div className="h-4 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentRoleIndex}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-[10px] text-zinc-500 uppercase tracking-wider whitespace-nowrap"
                      >
                        {roles[currentRoleIndex]}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </MagneticButton>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-xl glass glass-border">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    activeSection === link.href.replace("#", "") ? "text-cyan-400" : "text-zinc-400 hover:text-white"
                  }`}
                  data-cursor-hover
                >
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-cyan-400/10 rounded-lg border border-cyan-400/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <MagneticButton
              onClick={() => scrollToSection("#contact")}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
              </span>
              Let's Talk
            </MagneticButton>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 text-white"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileOpen ? 1 : 0,
          pointerEvents: isMobileOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setIsMobileOpen(false)} />
        <motion.div
          initial={false}
          animate={{ y: isMobileOpen ? 0 : -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative pt-24 px-6"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMobileOpen ? 1 : 0, x: isMobileOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-4 text-left text-2xl font-semibold transition-colors border-b border-zinc-800 ${
                  activeSection === link.href.replace("#", "") ? "text-cyan-400" : "text-white hover:text-cyan-400"
                }`}
              >
                <span className="text-zinc-600 text-sm font-mono mr-4">0{index + 1}</span>
                {link.name}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMobileOpen ? 1 : 0, y: isMobileOpen ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              onClick={() => scrollToSection("#contact")}
              className="mt-6 px-6 py-4 rounded-2xl bg-cyan-400 text-black font-bold text-lg"
            >
              Let's Talk
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
