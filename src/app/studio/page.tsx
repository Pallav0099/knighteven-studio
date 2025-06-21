"use client";

import { motion } from "framer-motion";

export default function Studio() {
  return (
    <div className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 text-center"
        >
          About Our Studio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-neutral-300 mb-8 text-center"
        >
          We are a collective of strategists, designers, and storytellers who
          believe in the power of a great narrative. Our mission is to build
          brands that not only stand out but also stand for something.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-invert prose-lg max-w-none text-neutral-400"
        >
          <p>
            Founded in 2020, Knighteven Studio was born from a desire to do
            things differently. We saw a gap between brands and their audiences,
            a space filled with noise but lacking in connection. We wanted to
            fill that space with stories that resonate, strategies that deliver,
            and designs that delight.
          </p>
          <p>
            Our approach is collaborative and transparent. We work as an
            extension of your team, embedding ourselves in your world to
            understand your challenges and your ambitions. From there, we craft
            bespoke solutions that are not only creative but also effective,
            driving real-world results and fostering long-term growth.
          </p>
          <p>
            We're not just a service provider; we're a partner in your success.
            Let's build something amazing together.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 