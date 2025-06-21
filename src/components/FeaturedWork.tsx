"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const featuredWork = [
  {
    image: "/project1.png",
    caption: "Blew up on Reels",
  },
  {
    image: "/project2.png",
    caption: "Yes, that’s our work 👀",
  },
  {
    image: "/project3.png",
    caption: "Aesthetic goals achieved.",
  },
  {
    image: "/project4.png",
    caption: "Viral status: unlocked 🔓",
  },
];

export default function FeaturedWork() {
  return (
    <div className="py-20 px-8 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold mb-12"
      >
        Proof We’re Not Just Vibes
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {featuredWork.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
              <Image
                src={work.image}
                alt="Featured work"
                layout="fill"
                objectFit="cover"
                className="bg-neutral-800"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold text-lg">{work.caption}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 