"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import { useRef } from "react"
import { MagneticButton } from "./magnetic-button"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/Naseeb09", color: "hover:text-white" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/khan-jariff/", color: "hover:text-blue-500" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/khan_jariff/", color: "hover:text-pink-500" },
  { name: "Email", icon: Mail, href: "mailto:khanjariff09@gmail.com", color: "hover:text-cyan-400" }
]

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={containerRef}
      id="home"
      /* Reduced pt-32 to pt-20 to bring the content back up slightly */
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-20 sm:pb-40 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=""
        >
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          /* Reduced mt-12 to mt-4 to pull the name closer to the navigation */
          className="mb-10 mt-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.95] px-2 sm:px-4 py-2">
            <span className="block">KHAN JARIFF</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 animate-gradient">
              AL NASEEB
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-4 sm:mb-6 leading-relaxed px-2"
        >
          <span className="text-white font-medium">Founder & Lead Engineer</span> @{" "}
          <span className="text-cyan-400 font-semibold">Glitched Technologies</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xs sm:text-sm md:text-base text-zinc-500 max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2"
        >
          Building systems that evolve. Engineering the future through elegant code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 px-2"
        >
          <MagneticButton>
            <button
              onClick={() => scrollToSection("#projects")}
              className="group px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold text-xs sm:text-sm md:text-base transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
            >
              <span className="flex items-center gap-2">
                View My Work
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
          </MagneticButton>

          <MagneticButton>
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border-2 border-zinc-700 text-white font-semibold text-xs sm:text-sm md:text-base hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all"
            >
              Get in Touch
            </button>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap"
        >
          {socialLinks.map((social, index) => (
            <MagneticButton key={social.name} href={social.href}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg glass glass-border flex items-center justify-center text-zinc-400 hover:border-cyan-400/50 transition-all ${social.color}`}
                data-cursor-text={social.name}
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </MagneticButton>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-zinc-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-zinc-700 group-hover:border-cyan-400 transition-colors flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-cyan-400"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-zinc-800 opacity-50" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-zinc-800 opacity-50" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-zinc-800 opacity-50" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-zinc-800 opacity-50" />
    </section>
  )
}
