"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

type Project = {
  id: string
  name: string
  description: string
  techStack: string[]
  slug: string
  color?: string
}

const defaultProjects: Project[] = [
  {
    id: "1",
    name: "GenMedX",
    description: "GenMedX is a smart medical records app with AI-powered insights, document scanning, and seamless prescription tracking.",
    techStack: ["React Native", "TypeScript", "Prisma"],
    slug: "GenMedX",
    color: "#e0a6df",
  },
  {
    id: "2",
    name: "TechTales",
    description: "TechTales is a blog where technology meets storytelling, delivering insights, trends, and innovations in an engaging way.",
    techStack: ["React", "Node.js", "TypeScript", "Postgres"],
    slug: "Tech-Tales",
    color: "#afdcde",
  },
  // {
  //   id: "3",
  //   name: "Crypto Dashboard",
  //   description: "Real-time cryptocurrency tracking dashboard with customizable alerts",
  //   techStack: ["Vue.js", "Express", "WebSockets", "Chart.js"],
  //   slug: "crypto-dashboard",
  //   color: "#dfe3a1",
  // },
]

export default function LatestProjects({ projects = defaultProjects }: { projects?: Project[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <div className="w-full lg:py-20 py-10 bg-gray-950 text-white" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="flex md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-1 rounded-full bg-gray-800 text-gray-300 lg:text-lg lg:text-md font-medium mb-4 text-sm"
            >
              Latest Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl lg:text-3xl md:text-3xl font-bold tracking-tight"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Link
              href="/projects"
              className="group flex items-center text-gray-400 hover:text-white pt-12 pr-6 transition-colors duration-300"
            >
              View all projects
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>

    <div className="flex justify-center">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[700px] lg:ml-0"
          >
          {projects.map((project, index) => (
              <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={activeIndex === index}
              setActiveIndex={setActiveIndex}
              mousePosition={mousePosition}
              />
            ))}
        </div>
      </div>
            
      </motion.div>
    </div>
  )
}

function ProjectCard({
  project,
  index,
  isActive,
  setActiveIndex,
  mousePosition,
}: {
  project: Project
  index: number
  isActive: boolean
  setActiveIndex: (index: number | null) => void
  mousePosition: { x: number; y: number }
}) {
  const cardRef = useRef<HTMLDivElement>(null)


 

  const calculateRotation = () => {
    if (!isActive || !cardRef.current) return { x: 0, y: 0 }

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate rotation based on mouse position relative to card center
    const rotateY = ((mousePosition.x - centerX) / centerX) * 5
    const rotateX = ((centerY - mousePosition.y) / centerY) * 5

    return { x: rotateX, y: rotateY }
  }

  const rotation = calculateRotation()

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group relative max-w-md"
    >
      <Link href={`https://github.com/rishabh94033/${project.slug}`} target="_blank" 
  rel="noopener noreferrer" className="block lg:w-full mx-6 -z-50">
        <motion.div
          animate={{
            rotateX: isActive ? rotation.x : 0,
            rotateY: isActive ? rotation.y : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={cn(
            "relative h-full overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 transition-all duration-300",
            "hover:border-gray-700 hover:shadow-[0_0_40px_rgba(20,20,20,0.9)]",
            "flex flex-col justify-between",
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20 transition-opacity duration-500 group-hover:opacity-40 -z-0"
            style={{ backgroundColor: project.color || "#8B5CF6" }}
          />
          <div
            className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-[80px] opacity-10 transition-opacity duration-500 group-hover:opacity-30 -z-0"
            style={{ backgroundColor: project.color || "#FF5E5B" }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60 z-0" />

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-3 ">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10, delay: index * 0.2 + 0.7 }}
                className="lg:w-16 lg:h-16 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md"
                style={{
                  backgroundColor: `${project.color}20` || "#8B5CF620",
                  boxShadow: `0 0 20px ${project.color}30` || "0 0 20px #8B5CF630",
                  border: `1px solid ${project.color}40` || "1px solid #8B5CF640",
                }}
              >
                <span className="lg:text-2xl text-lg font-bold" style={{ color: project.color || "#8B5CF6" }}>
                  {project.name.charAt(0)}
                </span>
              </motion.div>

              <motion.div
                whileHover={{ rotate: 45, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 group-hover:bg-gray-700 transition-colors duration-300"
              >
                <ExternalLink className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </motion.div>
            </div>

            <motion.h3
              className="lg:text-2xl text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors duration-300"
              style={{
                textShadow: isActive ? `0 0 20px ${project.color}30` : "none",
              }}
            >
              {project.name}
            </motion.h3>

            <p className="text-gray-400 lg:mb-8  mb-4 text-md group-hover:text-gray-300 transition-colors duration-300 max-w-2xl">
              {project.description}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 lg:mb-6">
              {project.techStack.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.1 + 0.8 }}
                  className="px-4 py-2 text-sm rounded-full backdrop-blur-md transition-all duration-300"
                  style={{
                    backgroundColor: `${project.color}10` || "#8B5CF610",
                    color: project.color || "#8B5CF6",
                    border: `1px solid ${project.color}30` || "1px solid #8B5CF630",
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: `${project.color}20` || "#8B5CF620",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              className="h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <motion.div
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(50,50,50,0.2) 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}

