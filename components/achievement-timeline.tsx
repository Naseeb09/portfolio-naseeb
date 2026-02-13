"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Brain, Code, Mail, Medal, Shield, Trophy, Users, Rocket, Sparkles } from "lucide-react"

const achievements = [
  {
    year: "2023",
    items: [
      {
        title: "Started @ Dreamers Academy",
        description: "Python programming journey begins",
        icon: Code,
        type: "start",
      },
      { title: "Started @ Bambinos", description: "Speaking + Writing course", icon: BookOpen, type: "start" },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "Robotics Training", description: "Continued at Dreamers Academy", icon: Brain, type: "progress" },
      { title: "AI Learning", description: "Advanced AI curriculum", icon: Brain, type: "progress" },
      {
        title: "Bronze Award @ QCEC 2024",
        description: "First major competition recognition",
        icon: Medal,
        type: "achievement",
      },
      { title: "Completed CS50X", description: "Harvard's legendary course", icon: Award, type: "achievement" },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "CS50 Cybersecurity",
        description: "Security specialization complete",
        icon: Shield,
        type: "achievement",
      },
      { title: "CS50 Puzzle Day", description: "Scored 5/8 in team challenge", icon: Brain, type: "progress" },
      { title: "DJM Email Reply", description: "Personal response from David J. Malan", icon: Mail, type: "rare" },
      { title: "BD AI Olympiad Finalist", description: "National AI competition", icon: Trophy, type: "achievement" },
      { title: "1st Runner Up @ ICTOB S2", description: "Major tech competition", icon: Medal, type: "achievement" },
      { title: "Founded KC IT Club", description: "With school seniors", icon: Users, type: "milestone" },
      { title: "ICTOB S3 Ambassador Co-Lead", description: "Leadership role", icon: Rocket, type: "milestone" },
      { title: "CS50 AI Complete", description: "AI specialization achieved", icon: Brain, type: "achievement" },
      { title: "Gold Award @ QCEC 2025", description: "Top tier recognition", icon: Trophy, type: "legendary" },
    ],
  },
]

const typeStyles = {
  start: "bg-zinc-800/50 border-zinc-700 text-zinc-300",
  progress: "bg-blue-500/10 border-blue-500/40 text-blue-300",
  achievement: "bg-cyan-500/10 border-cyan-500/40 text-cyan-300",
  milestone: "bg-purple-500/10 border-purple-500/40 text-purple-300",
  rare: "bg-amber-500/15 border-amber-500/40 text-amber-300",
  legendary: "bg-gradient-to-r from-yellow-500/15 to-orange-500/15 border-yellow-500/60 text-yellow-300",
}

export function AchievementTimeline() {
  return (
    <section id="timeline" className="px-6 py-20 md:py-40 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-24"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-400/20 to-purple-400/20 text-transparent bg-clip-text border border-cyan-400/30 mb-6"
        >
          ✨ MY JOURNEY
        </motion.span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
          Level Up <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">Log</span>
        </h2>
        <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
          A chronicle of milestones, achievements, and growth across 3 years of relentless development
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/80 via-purple-400/40 to-zinc-800" />

        {achievements.map((yearGroup, yearIndex) => (
          <div key={yearGroup.year} className="mb-32 last:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex items-center justify-center mb-16"
            >
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-2xl shadow-cyan-400/50 border-4 border-black" />
              <span className="ml-20 md:ml-0 px-6 py-3 rounded-2xl glass glass-border text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 border border-cyan-400/40">
                {yearGroup.year}
              </span>
            </motion.div>

            <div className="space-y-6">
              {yearGroup.items.map((item, itemIndex) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: itemIndex % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: itemIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative ml-20 md:ml-0 ${itemIndex % 2 === 0 ? "md:mr-[calc(50%+3rem)] md:text-right" : "md:ml-[calc(50%+3rem)]"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className={`p-6 rounded-2xl border backdrop-blur-xl transition-all ${typeStyles[item.type as keyof typeof typeStyles]} hover:shadow-2xl hover:shadow-cyan-400/20`}
                  >
                    <div className={`flex items-center gap-4 ${itemIndex % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className={`p-3 rounded-xl flex-shrink-0 ${item.type === "legendary" ? "bg-yellow-500/25 border border-yellow-500/40" : item.type === "rare" ? "bg-amber-500/20 border border-amber-500/30" : "bg-zinc-800/70 border border-zinc-700/50"}`}
                      >
                        <item.icon className="w-5 h-5" />
                      </motion.div>
                      <div className={itemIndex % 2 === 0 ? "md:text-right" : ""}>
                        <h4 className="text-base font-bold text-white flex items-center gap-3 flex-wrap">
                          {item.title}
                          {item.type === "rare" && (
                            <motion.span
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              className="text-xs px-3 py-1 rounded-full bg-amber-500/30 text-amber-300 border border-amber-500/50 font-semibold"
                            >
                              RARE LOOT
                            </motion.span>
                          )}
                          {item.type === "legendary" && (
                            <motion.span
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                              className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/40 to-orange-500/40 text-yellow-300 border border-yellow-500/60 font-bold flex items-center gap-1"
                            >
                              <Sparkles className="w-3 h-3" /> LEGENDARY
                            </motion.span>
                          )}
                        </h4>
                        <p className="text-sm text-zinc-400 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
