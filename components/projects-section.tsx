"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Globe, Star, GitFork, Zap, Bot, Cpu, Gamepad2, Palette, FileCode } from "lucide-react"
import { useState } from "react"
import { ProjectModal } from "./project-modal"

const featuredProjects = [
  {
    title: "Glitched OS",
    description:
      "A custom productivity operating system built from scratch. Features AI-powered task management, neural scheduling, and seamless device sync.",
    fullDescription:
      "Glitched OS is a revolutionary productivity operating system that reimagines how developers work. Built with cutting-edge AI, it combines the best of Linux with modern UI/UX. Neural scheduling learns your patterns and optimizes your workflow automatically.",
    image: "/futuristic-dark-operating-system-interface.jpg",
    tags: ["Python", "AI/ML", "Electron", "PostgreSQL", "TensorFlow"],
    features: [
      "Neural-powered task scheduling",
      "Real-time device synchronization",
      "AI-assisted code completion",
      "Custom widget ecosystem",
      "Performance monitoring dashboard",
      "Dark mode by default",
    ],
    links: { live: "https://github.com", github: "https://github.com" },
    stats: { stars: 128, forks: 24 },
    featured: true,
    icon: Cpu,
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "NeuraTalk",
    description:
      "AI-powered chatbot framework with multi-model support. Supports GPT, Claude, and local LLMs with unified API.",
    fullDescription:
      "NeuraTalk is a powerful framework for building intelligent conversational agents. It abstracts away the complexity of different LLM providers with a unified interface. Perfect for building customer support bots, personal assistants, and intelligent automation.",
    image: "/ai-chatbot-dark-interface-with-neural-network.jpg",
    tags: ["TypeScript", "Next.js", "OpenAI", "Vercel AI", "Streaming"],
    features: [
      "Multi-model provider support",
      "Streaming response handling",
      "Context memory management",
      "Function calling integration",
      "Rate limiting & caching",
      "Production-ready error handling",
    ],
    links: { live: "https://github.com", github: "https://github.com" },
    stats: { stars: 89, forks: 15 },
    featured: true,
    icon: Bot,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Pixel Forge",
    description:
      "Real-time collaborative pixel art editor with multiplayer support. Create, share, and remix artwork with friends.",
    fullDescription:
      "Pixel Forge brings collaborative pixel art creation to the web. Work together in real-time with friends, share palettes, and build amazing artwork. Features advanced animation tools and a thriving community of artists.",
    image: "/pixel-art-editor-dark-interface-with-colorful-canv.jpg",
    tags: ["React", "WebSockets", "Canvas API", "Supabase", "Redux"],
    features: [
      "Real-time collaboration",
      "Layer system & blending",
      "Animation timeline editor",
      "Custom color palettes",
      "Community art gallery",
      "Export to multiple formats",
    ],
    links: { live: "https://github.com", github: "https://github.com" },
    stats: { stars: 56, forks: 8 },
    icon: Palette,
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "Quantum Chess",
    description: "Chess with quantum mechanics. Pieces can exist in superposition and entangle with each other.",
    fullDescription:
      "Quantum Chess reimagines the classic game through quantum mechanics. Pieces can exist in multiple states simultaneously, creating mind-bending gameplay. An experimental project exploring how quantum computing concepts can create new gaming paradigms.",
    image: "/quantum-chess-game-dark-interface-with-glowing-pie.jpg",
    tags: ["TypeScript", "Three.js", "Game Theory", "WebGL"],
    features: [
      "Quantum superposition mechanics",
      "Entanglement system",
      "3D rendered board",
      "Multiplayer support",
      "Quantum rule engine",
      "Move probability visualization",
    ],
    links: { live: "https://github.com", github: "https://github.com" },
    stats: { stars: 234, forks: 42 },
    icon: Gamepad2,
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
]

const miniProjects = [
  { name: "dotfiles", description: "My Arch + Hyprland rice configuration", stars: 45, icon: FileCode },
  { name: "cli-tools", description: "Collection of productivity CLI utilities", stars: 32, icon: Zap },
  { name: "neovim-config", description: "Blazingly fast Neovim setup", stars: 67, icon: FileCode },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof featuredProjects)[0] | null>(null)

  return (
    <section id="projects" className="px-6 py-20 md:py-40 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-24"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 mb-6">
          FEATURED WORK
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Projects & <span className="text-cyan-400">Builds</span>
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          From experimental tools to production systems. Here's what I've been working on.
        </p>
      </motion.div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        {featuredProjects.slice(0, 2).map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
          >
            {/* Background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="relative glass glass-border rounded-3xl overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400 text-black">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                      <project.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.a
                      href={project.links.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600 transition-colors"
                    >
                      <Github className="w-4 h-4 text-zinc-400" />
                    </motion.a>
                    <motion.a
                      href={project.links.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 hover:bg-cyan-400/20 transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                    </motion.a>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" /> {project.stats.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" /> {project.stats.forks}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Secondary Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {featuredProjects.slice(2).map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            onClick={() => setSelectedProject(project)}
            className="group relative p-6 rounded-2xl glass glass-border cursor-pointer"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl`}
            />

            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                  <project.icon className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="flex items-center gap-2">
                  <motion.a
                    href={project.links.github}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg hover:bg-zinc-800/50 transition-colors"
                  >
                    <Github className="w-4 h-4 text-zinc-500 hover:text-white" />
                  </motion.a>
                  <motion.a
                    href={project.links.live}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg hover:bg-zinc-800/50 transition-colors"
                  >
                    <Globe className="w-4 h-4 text-zinc-500 hover:text-white" />
                  </motion.a>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-zinc-400 text-xs mb-4 line-clamp-2">{project.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs text-zinc-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm text-zinc-500">
                  <Star className="w-3 h-3" /> {project.stats.stars}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mini Projects */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 rounded-2xl glass glass-border"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base font-semibold text-white">Open Source & Tools</h3>
          <a href="#" className="text-xs text-cyan-400 hover:underline flex items-center gap-1">
            View all <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {miniProjects.map((project, index) => (
            <motion.a
              key={project.name}
              href="#"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-zinc-800/30 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-zinc-800/50">
                <project.icon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-white truncate">{project.name}</h4>
                <p className="text-xs text-zinc-500 truncate">{project.description}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-zinc-500">
                <Star className="w-3 h-3" /> {project.stars}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
