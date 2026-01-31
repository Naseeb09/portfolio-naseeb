"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Main progress bar
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0 origin-left z-[100]"
        style={{ scaleX }}
      />
    </>
  )
}
