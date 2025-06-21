"use client";

import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight">
            We craft stories that
            <br />
            <span className="text-neutral-400">captivate and inspire.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-neutral-300 max-w-2xl mx-auto">
            We are a media and advertisement agency that specializes in creating
            powerful narratives for brands to connect with their audience.
          </p>
        </motion.div>
      </div>
      <Testimonials />
    </>
  );
}
