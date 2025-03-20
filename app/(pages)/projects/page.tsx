"use client";

import AllProjects from "@/components/allProjects";
import Navbar from "@/components/navbar";
import ComingSoon from "@/components/upcoming";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="bg-gray-950">
      <div className="fixed top-0 left-0 flex-shrink-0 min-w-44 mr-20">
        <Navbar />
      </div>

      <div className="ml-44 pl-20 bg-gray-950">
        <motion.div 
          className="text-6xl pt-24 font-semibold text-white"
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

        <div className="mt-10">
          <AllProjects />
        </div>
      </div>
    </div>
  );
}
