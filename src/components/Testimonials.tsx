"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "They cooked. We ate. Period.",
    name: "@CoolBrandCEO",
    handle: "via Twitter",
  },
  {
    quote: "our socials have never looked better tbh",
    name: "Startup Founder",
    handle: "via iMessage",
  },
  {
    quote: "Knighteven just gets it. The vibes are immaculate.",
    name: "Marketing Manager",
    handle: "via Slack",
  },
];

export default function Testimonials() {
  return (
    <div className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Client Love (The Receipts)
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-lg border border-neutral-800"
            >
              <p className="text-lg text-white mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-neutral-700 mr-4"></div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-neutral-400">
                    {testimonial.handle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 