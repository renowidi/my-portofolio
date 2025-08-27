"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Kiri - Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Reno Widi. All rights reserved.
        </p>

        {/* Kanan - Social Links */}
        <div className="flex space-x-5">
          <a
            href="https://www.linkedin.com/in/username" // ganti username dengan akun Anda
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/username" // ganti username dengan akun Anda
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
