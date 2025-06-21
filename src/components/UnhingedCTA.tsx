"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function UnhingedCTA() {
  return (
    <div className="py-20 px-8 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold mb-8"
      >
        Let’s Build Something Unhinged.
      </motion.h2>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/contact"
          className="bg-white text-black font-semibold py-4 px-10 rounded-lg text-xl inline-block"
        >
          Slide into Our Inbox
        </Link>
      </motion.div>
    </div>
  );
} 