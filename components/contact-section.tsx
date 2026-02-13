"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Youtube, Instagram, MessageCircle } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/Naseeb09" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@reno_verse" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/khan-jariff/" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/khan_jariff/" },
  { name: "Discord", icon: MessageCircle, href: "https://www.discord.com/users/1142144135298568203" },
]

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 md:py-40 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
        <div className="absolute inset-0 glass" />

        <div className="relative z-10 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - CTA */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 mb-6">
                GET IN TOUCH
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                Let's build
                <br />
                something <span className="text-cyan-400">epic</span>.
              </h2>
              <p className="text-lg text-zinc-400 mb-10 max-w-md leading-relaxed">
                Got a project idea, want to collaborate, or just want to say hi? I'm always open to discussing new
                opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.a
                  href="mailto:khanjariff09@gmail.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold text-base hover:bg-cyan-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Send an Email
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-zinc-800 text-white font-medium text-base border border-zinc-700 hover:border-zinc-600 transition-colors"
                >
                  Book a Call
                </motion.a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <MapPin className="w-4 h-4" />
                <span>Bangladesh</span>
                <span className="mx-2">•</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for projects
                </span>
              </div>
            </div>

            {/* Right - Socials & Info */}
            <div className="flex flex-col justify-between">
              {/* Social Links */}
              <div>
                <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-8">Connect</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -2, scale: 1.02 }}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/30 hover:border-zinc-600 transition-all group"
                    >
                      <social.icon className="w-4 h-4 text-zinc-400 group-hover:text-current transition-colors" />
                      <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                      <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-16 pt-8 border-t border-zinc-800">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "50+", label: "Projects" },
                    { value: "15K", label: "Subscribers" },
                    { value: "8M+", label: "Views" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-zinc-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
