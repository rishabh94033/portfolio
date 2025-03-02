"use client"

import { useEffect, useState } from "react"

export default function GridBackground() {
  const [gridSize, setGridSize] = useState({ rows: 20, cols: 20 })
  const [activeBoxes, setActiveBoxes] = useState<number[]>([])
  const boxSize = 50 // Each square will be 60px x 60px
  const maxWhiteBoxes = 20 // Limit to 20 white boxes before reset

  useEffect(() => {
    const updateGridSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      const cols = Math.floor(width / boxSize)
      const rows = Math.floor(height / boxSize)

      setGridSize({ rows, cols })
    }

    updateGridSize()
    window.addEventListener("resize", updateGridSize)
    return () => window.removeEventListener("resize", updateGridSize)
  }, [])

  useEffect(() => {
    setActiveBoxes([])

    const addRandomBox = () => {
      setActiveBoxes((prev) => {
        if (prev.length >= maxWhiteBoxes) {
          return [] // Reset when reaching the limit
        }

        let newBox
        do {
          newBox = Math.floor(Math.random() * (gridSize.rows * gridSize.cols))
        } while (prev.includes(newBox))

        return [...prev, newBox]
      })
    }

    const interval = setInterval(addRandomBox, 500) // Keep box selection fast
    return () => clearInterval(interval)
  }, [gridSize])

  return (
    <div className="relative w-full h-full min-h-screen bg-[#01010100] flex items-center justify-center">
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize.cols}, ${boxSize}px)`,
          gridTemplateRows: `repeat(${gridSize.rows}, ${boxSize}px)`,
          width: `${gridSize.cols * boxSize}px`,
          height: `${gridSize.rows * boxSize}px`,
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: `${boxSize}px ${boxSize}px`,
        }}
      >
        {Array.from({ length: gridSize.rows * gridSize.cols }).map((_, index) => (
          <div
            key={index}
            className={`w-full h-full border border-white/5 transition-opacity duration-[6000ms] ease-in-out ${
              activeBoxes.includes(index) ? "bg-white/20 opacity-100" : "opacity-0"
            } backdrop-blur-md`}
          />
        ))}
      </div>
    </div>
  )
}
