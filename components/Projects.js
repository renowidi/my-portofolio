"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Absensi App",
      desc: "A modern web-based attendance system with barcode integration.",
      tech: ["PHP", "Laravel", "MySQL"],
      img: "/images/image.png",
      link: "https://penjadwalan.ftunri.com/dashboard",
    },
    {
      title: "Network Reporting System",
      desc: "A Laravel-based platform to report and manage internet issues.",
      tech: ["Laravel", "Bootstrap", "MySQL"],
      img: "https://via.placeholder.com/400x250.png?text=Network+System",
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Responsive personal portfolio built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      img: "https://via.placeholder.com/400x250.png?text=Portfolio",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6 overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 
                     dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 bg-[length:200%_200%]"
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative">
        {/* Title with animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          My Projects
        </motion.h2>

        {/* Description with delay */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 text-lg text-gray-600 dark:text-gray-400"
        >
          Beberapa proyek yang pernah saya kerjakan.
        </motion.p>

        {/* Grid Projects */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", duration: 0.6, delay: 0.2 * i, stiffness: 200 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: 0.2 * i }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 
                         overflow-hidden bg-white/80 dark:bg-gray-900/80 
                         backdrop-blur-sm hover:border-gray-300 dark:hover:border-gray-700 transition"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                                 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block bg-gray-900 text-white px-4 py-2 rounded-xl font-medium 
                             hover:bg-gray-700 transition dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
