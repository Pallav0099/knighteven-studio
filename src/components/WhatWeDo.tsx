"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Make TikToks go viral",
    subtitle: "(fr we got you)",
  },
  {
    title: "Aesthetic Insta feeds?",
    subtitle: "Easy.",
  },
  {
    title: "Cinematic ads with",
    subtitle: "✨ vibes ✨",
  },
];

export default function WhatWeDo() {
  return (
    <div className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-neutral-900 p-8 rounded-lg text-center cursor-pointer"
            >
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-neutral-400">{service.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 