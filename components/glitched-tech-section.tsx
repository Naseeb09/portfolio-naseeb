"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Zap, Code, Cpu, Gauge } from "lucide-react"

export function GlitchedTechSection() {
  const coreValues = [
    {
      icon: Code,
      title: "Minimalist Architecture",
      description: "We strip away the non-essential. Every feature serves a functional purpose.",
    },
    {
      icon: Gauge,
      title: "Performance First",
      description: "Speed is a feature. Our tools are built to be instant and responsive.",
    },
    {
      icon: Cpu,
      title: "Built Different",
      description: "Unconventional approaches that challenge the status quo of software design.",
    },
  ]

  return (
    <section id="glitched-tech" className="px-6 py-20 md:py-40 max-w-7xl mx-auto">
      {/* Main Brand Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24"
      >
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 p-[1px] flex-shrink-0 mt-2">
              <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight break-words">
                <span className="text-white">GLITCHED</span>
                <span className="text-cyan-400 block md:inline md:ml-3">TECHNOLOGIES</span>
              </h2>
              <p className="text-sm text-zinc-500 font-mono mt-2">Founded by Khan Jariff Al Naseeb</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
              Systems for <span className="text-cyan-400 font-semibold">Evolution</span>.
            </p>
            <p className="text-lg text-zinc-400 mb-6">
              We engineer digital infrastructure that respects your time. No gimmicks. Just high-performance logic and intentional design. Built to solve real problems, designed to last.
            </p>
            <p className="text-sm text-zinc-500 font-mono">
              Est. 2025 // Based in Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </motion.div>

      {/* Core Philosophy */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-24"
      >
        <h3 className="text-xl font-bold text-white mb-12">// Our Philosophy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-xl glass glass-border hover:border-cyan-400/50 transition-all"
            >
              <div className="p-2.5 w-fit rounded-lg bg-cyan-400/10 border border-cyan-400/20 mb-4 group-hover:bg-cyan-400/20 transition-colors">
                <value.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">{value.title}</h4>
              <p className="text-sm text-zinc-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <h3 className="text-xl font-bold text-white mb-8">// By the Numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "2+", label: "Years Building" },
            { value: "10+", label: "Products" },
            { value: "∞", label: "Possibilities" },
            { value: "24/7", label: "Availability" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl glass glass-border text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center py-12 border-t border-zinc-800"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Interested in what we build?</h3>
        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
          Check out our featured projects and see how we solve complex problems with elegant solutions.
        </p>
        <motion.a
          href="https://glitched-tech.vercel.app/"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all"
        >
          View Projects
          <ArrowUpRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
