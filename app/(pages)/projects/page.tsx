"use client";

import AllProjects from "@/components/allProjects";
import GuestBookSideComponent from "@/components/guestbookSideComponent";
import Navbar from "@/components/navbar";
import SpotifyPlaylistBanner from "@/components/spotify-playlist-banner";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="bg-gray-950 lg:pl-0  pr-3 lg:pr-0 flex flex-col lg:flex-row"> {/*//main div*/}
    <div className="fixed -bottom-4 w-full h-20 lg:top-0 lg:left-0 lg:w-44 lg:h-screen z-50  ">
    <Navbar />
      </div>

      <div className="lg:ml-44 lg:h-full  pl-6 lg:pl-20 bg-gray-950">  {/*// middle main div*/} 
        <motion.div 
          className="lg:text-6xl text-4xl lg:pt-24  pt-10 font-semibold text-white"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          My Digital{" "}
          <motion.span 
            className="text-green-400 inline-block"
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "backOut", delay: 0.5 }}
          >
            Canvas
          </motion.span>{" "}
          of{" "}
          <motion.span
            className="inline-block"
            initial={{ x: -10 }}
            animate={{ x: [10, -10, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            Code
          </motion.span>
        </motion.div>

        <div className="mt-10 pb-20">
          <AllProjects />
        </div>
      </div>
      <div className="lg:mt-64 lg:ml-[450px]  pl-5 pr-3 pb-24">  {/*// right main div*/}
        <div>
          <SpotifyPlaylistBanner />
        </div> 
        <div>
        <GuestBookSideComponent />
          </div>
      </div>
    </div>
  );
}
