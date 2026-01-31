"use client"

import { motion } from "framer-motion"
import { Code2, Cpu, Database, Globe, Sparkles, Terminal, Briefcase, GraduationCap, Award } from "lucide-react"

const techStack = [
  { name: "React/Next.js", icon: Code2, color: "text-cyan-400" },
  { name: "TypeScript", icon: Terminal, color: "text-blue-400" },
  { name: "Python", icon: Cpu, color: "text-yellow-400" },
  { name: "AI/ML", icon: Sparkles, color: "text-purple-400" },
  { name: "PostgreSQL", icon: Database, color: "text-emerald-400" },
  { name: "Node.js", icon: Globe, color: "text-green-400" },
]

const highlights = [
  { icon: Award, label: "Gold @ QCEC 2025", color: "text-yellow-400" },
  { icon: GraduationCap, label: "CS50X Certified", color: "text-cyan-400" },
  { icon: Briefcase, label: "15K+ Subscribers", color: "text-red-400" },
]

export function ExecutiveBento() {
  return (
    <section id="about" className="px-6 py-40 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-24"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 mb-6">
          ABOUT ME
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          The <span className="text-cyan-400">Architect</span>
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          A passionate engineer building the future through code, creativity, and relentless curiosity.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Main identity card - spans 2 columns */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="relative p-8 rounded-3xl glass glass-border box-glow overflow-hidden md:col-span-2 md:row-span-2"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-medium text-cyan-400">Available for projects</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
              Founder & Lead Engineer
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 mb-6">@ Glitched Technologies</p>

            <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-2xl">
              I'm a self-taught developer from Bangladesh with a passion for building systems that matter. From
              AI-powered tools to production-grade applications, I engineer solutions that evolve with purpose.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-cyan-400/30 transition-colors"
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-sm font-medium text-zinc-300">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {["System Design", "AI Integration", "Full-Stack", "Open Source", "Content Creation"].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                  className="px-3 py-1.5 text-xs rounded-lg bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech stack widget */}
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.3 }}
          className="relative p-6 rounded-3xl glass glass-border overflow-hidden"
        >
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-400/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-semibold text-white">Tech Stack</h3>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05, x: 2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-800/30 border border-zinc-700/30 hover:border-cyan-400/30 transition-colors"
                >
                  <tech.icon className={`w-4 h-4 ${tech.color}`} />
                  <span className="text-xs font-medium text-zinc-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick stat */}
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.3 }}
          className="relative p-6 rounded-3xl glass glass-border overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <h3 className="text-xs font-semibold text-zinc-400">Experience</h3>
            </div>

            <div>
              <div className="text-3xl font-bold text-white mb-1">3+</div>
              <div className="text-xs text-zinc-500">Years of coding</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
