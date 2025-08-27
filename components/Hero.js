"use client";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

// Import hook dan komponen animasi baru
import useIsMobile from "../hooks/useIsMobile"; // Sesuaikan path jika perlu
import DesktopTypingAnimation from "./DesktopTypingAnimation"; // Sesuaikan path jika perlu
import MobileTypingAnimation from "./MobileTypingAnimation"; // Sesuaikan path jika perlu

export default function Hero() {
  const isMobile = useIsMobile(); // Panggil hook di sini

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center 
      bg-white text-gray-900 
      dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 overflow-hidden px-4"
    >
      <div className="absolute inset-0 bg-grid-black/[0.03] dark:bg-grid-white/[0.05]"></div>

      <motion.h1
        className="text-4xl md:text-5xl font-bold z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m{" "}
        <span className="text-yellow-400 dark:text-yellow-300">Reno Widi</span>
      </motion.h1>

      {/* Render komponen secara kondisional */}
      {isMobile ? <MobileTypingAnimation /> : <DesktopTypingAnimation />}

      <motion.a
        href="#projects"
        className="mt-6 bg-black text-white px-6 py-3 rounded-xl font-semibold 
                   hover:bg-gray-800 shadow-lg transition 
                   dark:bg-white dark:text-black dark:hover:bg-gray-200 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🚀 View My Work
      </motion.a>

      <motion.div
        className="flex space-x-6 mt-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a
          href="https://github.com/renowidi"
          target="_blank"
          className="hover:text-yellow-400 transition-colors"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/renowidi"
          target="_blank"
          className="hover:text-yellow-400 transition-colors"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://instagram.com/renowidi"
          target="_blank"
          className="hover:text-yellow-400 transition-colors"
        >
          <Instagram size={28} />
        </a>
      </motion.div>
    </section>
  );
}
