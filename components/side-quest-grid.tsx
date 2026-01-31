"use client"

import { motion } from "framer-motion"
import { Eye, Play, Terminal, BookOpen, Users } from "lucide-react"
import { useState, useEffect } from "react"

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration])

  return <span>{count.toLocaleString()}</span>
}

export function SideQuestGrid() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className="px-6 py-40 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
          Side <span className="text-cyan-400">Quests</span>
        </h2>
        <p className="text-lg text-zinc-400">Beyond the main storyline</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* YouTube Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -4 }}
          className="relative p-6 rounded-3xl glass glass-border overflow-hidden group md:col-span-2 lg:col-span-1"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20">
                <Play className="w-4 h-4 text-red-500" fill="currentColor" />
              </div>
              <span className="text-xs font-medium text-zinc-400">YouTube Creator</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">
                  <AnimatedCounter target={15300} />
                </span>
                <span className="text-xs text-zinc-500">subscribers</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-zinc-500" />
                  <span className="text-xl font-semibold text-zinc-300">
                    <AnimatedCounter target={8} />
                    M+
                  </span>
                  <span className="text-xs text-zinc-500">views</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "76%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-400"
                  />
                </div>
                <p className="text-xs text-zinc-500 mt-2">76% to 20K milestone</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Arch Linux Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.02, y: -4 }}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          className="relative p-6 rounded-3xl glass glass-border overflow-hidden group"
        >
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <Terminal className="w-4 h-4 text-blue-400" />
              </div>
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                btw
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">I use Arch</h3>

            <div className="mt-4 p-3 rounded-xl bg-zinc-900/80 border border-zinc-700/50 font-mono text-xs">
              <div className="flex items-center gap-2 text-zinc-500 mb-1">
                <span className="text-cyan-400">❯</span>
                <span className={isHovering ? "text-zinc-300" : ""}>{isHovering ? "neofetch" : "_"}</span>
              </div>
              {isHovering && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-zinc-400 mt-2 space-y-1"
                >
                  <p>
                    <span className="text-blue-400">OS:</span> Arch Linux x86_64
                  </p>
                  <p>
                    <span className="text-blue-400">WM:</span> Hyprland
                  </p>
                  <p>
                    <span className="text-blue-400">Shell:</span> zsh
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Writing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -4 }}
          className="relative p-6 rounded-3xl glass glass-border overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <BookOpen className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-xs font-medium text-zinc-400">Technical Writing</span>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-white">200+</span>
              <span className="text-xs text-zinc-500">reads</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Users className="w-4 h-4" />
              <span>Growing readership</span>
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-800">
              <p className="text-xs text-zinc-500">Sharing knowledge through articles and documentation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
