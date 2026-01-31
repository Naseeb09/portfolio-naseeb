"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TextScrambleProps {
  text: string
  className?: string
  delay?: number
}

const chars = "!<>-_\\/[]{}—=+*^?#________"

export function TextScramble({ text, className = "", delay = 0 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let iteration = 0
    const maxIterations = text.length * 3

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " "
              if (index < iteration / 3) return text[index]
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join(""),
        )

        iteration++

        if (iteration > maxIterations) {
          clearInterval(interval)
          setDisplayText(text)
          setIsComplete(true)
        }
      }, 30)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, delay])

  return (
    <motion.span className={`font-mono ${className}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {displayText}
      {!isComplete && <span className="animate-pulse">_</span>}
    </motion.span>
  )
}
