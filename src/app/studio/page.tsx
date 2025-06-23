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
          className="text-xl text-black mb-8 text-center"
        >
          We are a marketing and management agency for brands and creators. Our mission: build, grow, and connect.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-lg max-w-none text-black"
        >
          <p>
            Founded in 2020, Knighteven Studio now manages creators, connects brands with influencers, and delivers campaigns that go beyond ads. We fill the gap between brands, audiences, and creators—making real connections and real results.
          </p>
          <p>
            Our approach is collaborative and transparent. We work as an extension of your team—brand or creator—embedding ourselves in your world to understand your challenges and ambitions. From there, we craft bespoke solutions that are creative, effective, and growth-focused.
          </p>
          <p>
            We're not just a service provider; we're a partner in your success. Let's build something amazing together.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 