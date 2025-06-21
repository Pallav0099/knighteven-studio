"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Project Alpha",
    description: "A digital campaign that boosted engagement by 150%.",
    image: "/project1.png",
  },
  {
    title: "Project Beta",
    description: "A complete brand overhaul for a leading tech startup.",
    image: "/project2.png",
  },
  {
    title: "Project Gamma",
    description: "An immersive web experience for a global fashion brand.",
    image: "/project3.png",
  },
  {
    title: "Project Delta",
    description: "A viral social media campaign for a new consumer product.",
    image: "/project4.png",
  },
];

export default function Work() {
  return (
    <div className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          Our Work
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-lg overflow-hidden"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="bg-neutral-800"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-neutral-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 