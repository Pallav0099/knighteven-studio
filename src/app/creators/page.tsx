"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CreatorsPage() {
  return (
    <div className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-6"
        >
          For Creators & Influencers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-black mb-10"
        >
          Ready to grow your brand, land sponsorships, and focus on what you do best? We handle the business, you create the magic.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-black rounded-lg p-8 shadow text-left">
            <h2 className="text-2xl font-bold mb-2">Personal Brand Management</h2>
            <p>We help you define, grow, and monetize your unique brand across platforms.</p>
          </div>
          <div className="bg-white border border-black rounded-lg p-8 shadow text-left">
            <h2 className="text-2xl font-bold mb-2">Sponsorships & Brand Deals</h2>
            <p>Get matched with brands that fit your vibe. We negotiate, you get paid.</p>
          </div>
          <div className="bg-white border border-black rounded-lg p-8 shadow text-left">
            <h2 className="text-2xl font-bold mb-2">Content & Growth Support</h2>
            <p>From strategy to analytics, we help you go viral and stay relevant.</p>
          </div>
        </div>
        <Link href="/contact" className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-neutral-800 transition-colors">
          Apply for Management
        </Link>
      </div>
    </div>
  );
} 