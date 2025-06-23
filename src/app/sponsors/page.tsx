"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SponsorsPage() {
  return (
    <div className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-6"
        >
          For Brands & Sponsors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-black mb-10"
        >
          Looking to partner with top creators and run impactful campaigns? We connect you with the right talent and manage everything from start to finish.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-black rounded-lg p-8 shadow text-left">
            <h2 className="text-2xl font-bold mb-2">Influencer Matchmaking</h2>
            <p>We pair your brand with creators who align with your goals and audience.</p>
          </div>
          <div className="bg-white border border-black rounded-lg p-8 shadow text-left">
            <h2 className="text-2xl font-bold mb-2">Campaign Management</h2>
            <p>From ideation to reporting, we handle every step of your influencer campaign.</p>
          </div>
          <div className="bg-white border border-black rounded-lg p-8 shadow text-left">
            <h2 className="text-2xl font-bold mb-2">Analytics & Reporting</h2>
            <p>Get clear, actionable insights on your campaign's performance and ROI.</p>
          </div>
        </div>
        <Link href="/contact" className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-neutral-800 transition-colors">
          Start a Campaign
        </Link>
      </div>
    </div>
  );
} 