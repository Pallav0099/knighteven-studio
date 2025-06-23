"use client";

import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import FeaturedWork from "@/components/FeaturedWork";
import UnhingedCTA from "@/components/UnhingedCTA";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl lg:text-9xl font-bold tracking-tighter"
        >
          Marketing. Management. Magic.
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-black"
          >
            For Brands & Creators.
          </motion.span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex gap-4"
        >
          <Link
            href="/creators"
            className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            🎤 For Creators
          </Link>
          <Link
            href="/sponsors"
            className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-neutral-800 transition-colors border border-black"
          >
            🤝 For Sponsors
          </Link>
        </motion.div>
      </div>

      <WhoWeAre />
      <WhatWeDo />
      <FeaturedWork />
      <Testimonials />
      <UnhingedCTA />
    </>
  );
}
