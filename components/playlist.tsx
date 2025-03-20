"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Music, Play, Pause, ExternalLink, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Track {
  title: string
  artist: string
  albumArt: string
  duration: string
  url: string
}

export default function SpotifyPlaylist() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const progressInterval = useRef<NodeJS.Timeout | null>(null)

  // Sample playlist data - replace with your actual playlist
  const playlist = {
    name: "songs I was once hooked to",
    url: "https://open.spotify.com/playlist/2bAAVlAqfxzeNhN7p9FQ7s?si=O2nocav_QaSmv1PxIDtwfQ",
    tracks: [
      {
        title: "7 Years",
        artist: "The Weeknd",
        albumArt: "/placeholder.svg?height=60&width=60",
        duration: "3:19",
        url: "https://open.spotify.com/track/3ACMpjnR7ee9PObp6KRZSP?si=6fcd0db9c3f1425a",
      },
      {
        title: "As It Was",
        artist: "Harry Styles",
        albumArt: "/placeholder.svg?height=60&width=60",
        duration: "2:47",
        url: "https://open.spotify.com/track/4LRPiXqCikLlN15c3yImP7",
      },
      {
        title: "Heat Waves",
        artist: "Glass Animals",
        albumArt: "/placeholder.svg?height=60&width=60",
        duration: "3:59",
        url: "https://open.spotify.com/track/02MWAaffLxlfxAUY7c5dvx",
      },
      {
        title: "Stay",
        artist: "The Kid LAROI, Justin Bieber",
        albumArt: "/placeholder.svg?height=60&width=60",
        duration: "2:21",
        url: "https://open.spotify.com/track/5HCyWlXZPP0y6Gqq8TgA20",
      },
      {
        title: "Bad Habits",
        artist: "Ed Sheeran",
        albumArt: "/placeholder.svg?height=60&width=60",
        duration: "3:51",
        url: "https://open.spotify.com/track/3rmo8F54jFF8OgYsqTxm5d",
      },
    ],
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPlaying(!isPlaying)
  }

  const handleTrackClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentTrackIndex(index)
    setIsPlaying(true)
    setProgress(0)
  }

  // Simulate track progress
  useEffect(() => {
    if (isPlaying) {
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }

      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            // Move to next track when current one finishes
            setCurrentTrackIndex((prevIndex) => (prevIndex === playlist.tracks.length - 1 ? 0 : prevIndex + 1))
            return 0
          }
          return prev + 0.5
        })
      }, 100)
    } else if (progressInterval.current) {
      clearInterval(progressInterval.current)
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
    }
  }, [isPlaying, playlist.tracks.length])

  const currentTrack = playlist.tracks[currentTrackIndex]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0f1029] border border-gray-800 rounded-lg shadow-xl w-80"
          >
            <div className="p-4 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                    <Music size={16} className="text-black" />
                  </div>
                  <h3 className="font-bold text-white">Spotify Playlist</h3>
                </div>
                <button onClick={toggleExpand} className="text-gray-400 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 border-b border-gray-800">
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-3 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={currentTrack.albumArt || "/placeholder.svg"}
                    alt={currentTrack.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white truncate">{currentTrack.title}</h4>
                  <p className="text-sm text-gray-400 truncate">{currentTrack.artist}</p>
                </div>
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 hover:bg-green-600 transition-colors"
                >
                  {isPlaying ? (
                    <Pause size={18} className="text-black" />
                  ) : (
                    <Play size={18} className="text-black ml-0.5" />
                  )}
                </button>
              </div>

              <div className="mt-3">
                <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-400">
                  <span>
                    {Math.floor(
                      progress * Number.parseInt(currentTrack.duration.split(":")[0]) * 60 +
                        Number.parseInt(currentTrack.duration.split(":")[1]) / 100,
                    )}
                    :
                    {Math.floor(((progress * Number.parseInt(currentTrack.duration.split(":")[1])) / 100) % 60)
                      .toString()
                      .padStart(2, "0")}
                  </span>
                  <span>{currentTrack.duration}</span>
                </div>
              </div>
            </div>

            <div className="max-h-60 overflow-y-auto custom-scrollbar">
              <h4 className="px-4 pt-3 pb-2 text-sm font-medium text-gray-400">{playlist.name}</h4>
              {playlist.tracks.map((track, index) => (
                <motion.div
                  key={index}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  onClick={(e) => handleTrackClick(index, e)}
                  className={`flex items-center p-3 cursor-pointer ${currentTrackIndex === index ? "bg-gray-800" : ""}`}
                >
                  <div className="w-8 h-8 relative rounded overflow-hidden mr-3 flex-shrink-0">
                    <Image src={track.albumArt || "/placeholder.svg"} alt={track.title} fill className="object-cover" />
                    {currentTrackIndex === index && isPlaying && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="flex space-x-0.5">
                          <motion.div
                            animate={{ height: [4, 12, 4] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "easeInOut" }}
                            className="w-1 bg-green-500 rounded-full"
                          />
                          <motion.div
                            animate={{ height: [4, 16, 4] }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 1,
                              ease: "easeInOut",
                              delay: 0.2,
                            }}
                            className="w-1 bg-green-500 rounded-full"
                          />
                          <motion.div
                            animate={{ height: [4, 8, 4] }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 1,
                              ease: "easeInOut",
                              delay: 0.4,
                            }}
                            className="w-1 bg-green-500 rounded-full"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{track.title}</p>
                    <p className="text-xs text-gray-400 truncate">{track.artist}</p>
                  </div>
                  <span className="text-xs text-gray-400 flex-shrink-0">{track.duration}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-3 border-t border-gray-800">
              <Link
                href={playlist.url}
                target="_blank"
                className="flex items-center justify-center text-sm text-green-500 hover:text-green-400 transition-colors"
              >
                Open in Spotify
                <ExternalLink size={14} className="ml-1" />
              </Link>
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
              <Music size={24} className="text-green-500 group-hover:opacity-0 transition-opacity" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-green-500">
                Playlist
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

