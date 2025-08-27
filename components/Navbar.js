"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1
          className={`text-2xl font-bold tracking-wide transition-colors ${
            scrolled
              ? "text-gray-900 dark:text-gray-100"
              : "text-black dark:text-white"
          }`}
        >
          RenoWidi
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative transition-colors ${
                scrolled
                  ? "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  : "text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
              }
              after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]
              after:scale-x-0 after:bg-blue-500 after:origin-left after:transition-transform after:duration-300
              hover:after:scale-x-100`}
            >
              {item}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition ${
            scrolled
              ? "text-gray-800 dark:text-gray-200"
              : "text-black dark:text-white"
          }`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden transition ${
            scrolled
              ? "bg-white/95 dark:bg-gray-900/95"
              : "bg-white/95 dark:bg-gray-900/95"
          }`}
        >
          <div className="flex flex-col items-center space-y-4 py-6 font-medium">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`relative transition-colors ${
                  scrolled
                    ? "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                    : "text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                }
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]
                after:scale-x-0 after:bg-blue-500 after:origin-left after:transition-transform after:duration-300
                hover:after:scale-x-100`}
              >
                {item}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
