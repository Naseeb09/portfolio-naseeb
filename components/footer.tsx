"use client"

import { motion } from "framer-motion"
import { ArrowUp, Heart, Zap, Github, Linkedin, Mail, Instagram, Youtube, MessageCircle, ExternalLink } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/Naseeb09" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@reno_verse" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/khan-jariff/" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/khan_jariff/" },
  { name: "Discord", icon: MessageCircle, href: "https://www.discord.com/users/1142144135298568203" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" },
  ]


  return (
    <footer className="px-6 py-20 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <div>
              <p className="font-bold text-white">Glitched</p>
              <p className="text-xs text-cyan-400 font-mono">// Systems for Evolution</p>
            </div>
          </div>
          <p className="text-sm text-zinc-500">
            Crafting intentional design and high-performance systems.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="font-semibold text-white mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="font-semibold text-white mb-6">Resources</h4>
          <ul className="space-y-3">
            {[
              { label: "GitHub", href: "https://github.com/KhanJariff" },
              { label: "LinkedIn", href: "https://linkedin.com/in/khanjariff" },
              { label: "Twitter", href: "https://twitter.com" },
              { label: "Blog", href: "#" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="font-semibold text-white mb-6">Get in Touch</h4>
          <p className="text-sm text-zinc-400 mb-4">
            Let's build something amazing together.
          </p>
          <motion.a
            href="mailto:khanjariff09@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-semibold hover:bg-cyan-400/20 transition-colors"
          >
            Send Email
            <Mail className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center gap-4 py-8 border-y border-zinc-800"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.15, y: -2 }}
            className="w-12 h-12 rounded-lg glass glass-border flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
            title={social.name}
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-zinc-500 flex items-center gap-1"
        >
          Built with <Heart className="w-4 h-4 text-red-500" /> by{" "}
          <span className="text-cyan-400 font-semibold">Khan Jariff Al Naseeb</span>
        </motion.p>

        <div className="flex items-center gap-4">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} All rights reserved.</p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700 hover:border-cyan-400/50 transition-colors"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-zinc-400 hover:text-cyan-400" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
