"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

interface ThankYouNoteProps {
  className?: string
}

export default function ThankYouNote({ className = "" }: ThankYouNoteProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`bg-[#0f1029] border border-gray-800 rounded-lg p-3 inline-flex items-center ${className}`}
      initial={{ opacity: 0.9 }}
      whileHover={{
        opacity: 1,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          rotate: isHovered ? [0, -5, 5, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
        className="mr-2 text-red-400"
      >
        <Heart size={16} className={isHovered ? "fill-red-400" : ""} />
      </motion.div>
      <span className="text-lg text-gray-300">Thanks for visiting!</span>
    </motion.div>
  )
}

