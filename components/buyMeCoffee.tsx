"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Coffee, X, Heart, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BuyMeCoffee() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(5)
  const [isHovering, setIsHovering] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  // Your actual Buy Me a Coffee username
  const buyMeCoffeeUsername = "rishabhx"
  const buyMeCoffeeUrl = `https://www.buymeacoffee.com/${buyMeCoffeeUsername}`

  // Predefined donation amounts
  const amounts = [3, 5, 10]

  return (
    <div className="fixed bottom-6 left-16 z-50">
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0f1029] border border-gray-800 rounded-lg shadow-xl w-72"
          >
            <div className="p-4 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                    <Coffee size={16} className="text-black" />
                  </div>
                  <h3 className="font-bold text-white">Support My Work</h3>
                </div>
                <button onClick={toggleExpand} className="text-gray-400 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-center mb-6">
                <motion.div
                  className="relative w-20 h-20"
                  animate={{ rotate: isHovering ? [0, -5, 5, -5, 5, 0] : 0 }}
                  transition={{ duration: 0.5 }}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                >
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Coffee cup"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <motion.div
                    animate={{
                      y: isHovering ? [0, -2, 0, -2, 0] : 0,
                      opacity: isHovering ? [0, 1, 0.5, 1, 0] : 0,
                    }}
                    transition={{
                      duration: 1,
                      repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                      repeatDelay: 0.5,
                    }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2"
                  >
                    <Heart size={16} className="text-red-500 fill-red-500" />
                  </motion.div>
                </motion.div>
              </div>

              <p className="text-center text-gray-300 text-sm mb-6">
                If you enjoy my work and want to support me, consider buying me a coffee!
              </p>

              <div className="flex justify-center space-x-3 mb-6">
                {amounts.map((amount) => (
                  <motion.button
                    key={amount}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedAmount(amount)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedAmount === amount
                        ? "bg-yellow-500 text-black font-medium"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    ${amount}
                  </motion.button>
                ))}
              </div>

              <Link href={`${buyMeCoffeeUrl}?amount=${selectedAmount}`} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Coffee size={18} className="mr-2" />
                  Buy me a coffee
                </motion.button>
              </Link>

              <div className="mt-4 text-center">
                <Link
                  href={buyMeCoffeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-gray-300 inline-flex items-center"
                >
                  Visit my Buy Me a Coffee page
                  <ExternalLink size={12} className="ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={toggleExpand}
            className="bg-[#0f1029] border border-gray-800 rounded-full p-3 shadow-lg hover:bg-[#1a1b36] transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <Coffee size={24} className="text-yellow-500 group-hover:opacity-0 transition-opacity" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-yellow-500">
                Support
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

