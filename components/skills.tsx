"use client"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function Skills() {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false)
  
  const skillsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = skillsRef.current;
  if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSkillsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  const skillCategories = [
    {
      name: "Frontend",
      skills: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript", "ShadCn"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL", "REST API", "Prisma"],
    },
    {
      name: "Tools & Others",
      skills: ["Git", "Docker", "Figma", "AWS", "Vercel", "CloudFlare Workers", "Linux", "Shell Scripting"],
    },
  ]

  // Icons mapping (using emoji as placeholders - you can replace with actual icons)
  const skillIcons: Record<string, string> = {
    React: "⚛️",
    "Next.js": "▲",
    TypeScript: "TS",
    JavaScript: "JS",
    HTML5: "🌐",
    CSS3: "🎨",
    "Node.js": "📦",
    Express: "🚂",
    Python: "🐍",
    MongoDB: "🍃",
    PostgreSQL: "◼️",
    Git: "📝",
    Docker: "🐳",
    AWS: "☁️",
    Vercel: "▲",
    Figma: "🎭",
    "REST API": "🔌",
    GraphQL: "◼️",
    Jest: "🃏",
    "CI/CD": "🔄",
    "Tailwind CSS": "💨",
  }

  return (
    <div>

        {/* Skills Section */}
        <section ref={skillsRef} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>

          <div className="space-y-10">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.name} className="space-y-4">
                <h3 className="text-xl font-bold text-blue-400">{category.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={cn(
                        "group px-4 py-3 bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800",
                        "hover:border-blue-500 hover:bg-gray-800/80 transition-all duration-300",
                        "transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10",
                        "flex items-center gap-2",
                        "opacity-0 translate-y-4",
                      )}
                      style={{
                        animationName: isSkillsVisible ? "fadeInUp" : "none",
                        animationDuration: "0.5s",
                        animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`,
                        animationFillMode: "forwards",
                        animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <span className="text-lg font-medium">{skillIcons[skill] || "🔹"}</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
        )}

        