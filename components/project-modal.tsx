"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Github, ArrowUpRight, Star, GitFork } from "lucide-react"
import { useEffect } from "react"

interface ProjectModalProps {
  project: {
    title: string
    description: string
    fullDescription?: string
    image: string
    tags: string[]
    links: { live: string; github: string }
    stats: { stars: number; forks: number }
    features?: string[]
    icon: any
    gradient: string
  }
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - clickable to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 cursor-pointer"
          />

          {/* Close button - fixed position outside modal container */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="fixed top-6 right-6 z-[100] p-3 rounded-lg bg-zinc-900/90 border border-zinc-700 hover:border-cyan-400/50 hover:bg-zinc-800 transition-all cursor-pointer"
            style={{ pointerEvents: "auto" }}
          >
            <X className="w-6 h-6 text-zinc-300" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-3xl max-h-[90vh] rounded-3xl overflow-hidden glass glass-border">

              <div className="overflow-y-auto max-h-[90vh] pointer-events-auto">
                {/* Hero Image */}
                <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-b from-zinc-800 to-black">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                  />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-screen opacity-80"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                          <project.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
                      </div>
                      <div className="flex gap-3 text-sm text-zinc-400 mb-6">
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" /> {project.stats.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" /> {project.stats.forks}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                      Overview
                    </h3>
                    <p className="text-zinc-300 leading-relaxed text-lg">
                      {project.fullDescription || project.description}
                    </p>
                  </div>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
                        Key Features
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3 text-zinc-300"
                          >
                            <span className="mt-1 text-cyan-400">✦</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs rounded-lg bg-zinc-800/50 text-zinc-300 border border-zinc-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-8 border-t border-zinc-800">
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-white transition-colors font-semibold"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </motion.a>
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                    >
                      Live Demo
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
