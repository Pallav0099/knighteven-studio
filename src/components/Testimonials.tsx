"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with this agency has been a game-changer. Their creativity and strategic approach helped us reach new heights.",
    name: "John Doe",
    title: "CEO, Example Inc.",
  },
  {
    quote:
      "The team's dedication and passion for storytelling are evident in every campaign. We couldn't be happier with the results.",
    name: "Jane Smith",
    title: "Marketing Director, Creative Co.",
  },
  {
    quote:
      "A truly collaborative partner. They listened to our needs and delivered a campaign that exceeded all expectations.",
    name: "Sam Wilson",
    title: "Founder, Innovate LLC",
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
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-8 rounded-lg"
            >
              <p className="text-lg text-neutral-300 mb-6">"{testimonial.quote}"</p>
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-neutral-400">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 