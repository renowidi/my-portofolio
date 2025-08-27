"use client";

import { Mail, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          I’m always excited to connect! Whether it’s about projects,
          collaborations, or just to say hi, feel free to reach out.
        </motion.p>

        {/* Quick Contact Info */}
        <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-3">
          {[
            {
              icon: (
                <Mail className="mx-auto mb-4 text-blue-600 dark:text-blue-400" size={36} />
              ),
              title: "Email",
              desc: "renowidi@email.com",
              link: "mailto:renowidi@email.com",
            },
            {
              icon: (
                <Linkedin className="mx-auto mb-4 text-blue-700 dark:text-blue-400" size={36} />
              ),
              title: "LinkedIn",
              desc: "linkedin.com/in/renowidi",
              link: "https://linkedin.com/in/renowidi",
            },
            {
              icon: (
                <MapPin className="mx-auto mb-4 text-red-600 dark:text-red-400" size={36} />
              ),
              title: "Location",
              desc: "Pekanbaru, Indonesia",
              link: "https://www.google.com/maps/place/Pekanbaru",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-md bg-gray-50 dark:bg-gray-800 hover:shadow-xl hover:scale-105 transform transition duration-300"
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {item.icon}
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base break-words">
                    {item.desc}
                  </p>
                </a>
              ) : (
                <>
                  {item.icon}
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base break-words">
                    {item.desc}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
