"use client"

import { motion } from "framer-motion"

export function GlitchedLogo() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="inline-flex items-center gap-3">
      {/* Logo mark */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-20 blur-xl" />
        <div className="relative w-full h-full rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-8 h-8 text-cyan-400"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
        </div>
      </div>

      {/* Logo text */}
      <div className="flex flex-col items-start">
        <span className="text-xl font-bold text-white tracking-tight">GLITCHED</span>
        <span className="text-xs font-medium text-cyan-400 tracking-[0.2em] uppercase">Technologies</span>
      </div>
    </motion.div>
  )
}
