"use client";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center 
      bg-white text-gray-900 
      dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Minimalis */}
      <div className="absolute inset-0 bg-grid-black/[0.03] dark:bg-grid-white/[0.05]"></div>

      {/* Heading */}
      <motion.h1
        className="text-5xl font-bold z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m{" "}
        <span className="text-yellow-400 dark:text-yellow-300">Reno Widi</span>
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        className="mt-4 text-lg max-w-xl text-gray-600 dark:text-gray-300 z-10 font-mono"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <span className="typing-animation">
          Informatics Engineer | Backend Developer | Cloud Enthusiast
        </span>
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#projects"
        className="mt-6 bg-black text-white px-6 py-3 rounded-xl font-semibold 
                   hover:bg-gray-800 shadow-lg transition 
                   dark:bg-white dark:text-black dark:hover:bg-gray-200 z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🚀 View My Work
      </motion.a>

      {/* Social Links */}
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

      {/* CSS Typing Effect */}
      <style jsx>{`
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #facc15;
          width: 0;
          animation: typing 4s steps(40, end) forwards,
            blink 1s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #facc15;
          }
        }
      `}</style>
    </section>
  );
}
