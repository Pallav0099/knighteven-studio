"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function WhoWeAre() {
  return (
    <div className="py-20 px-8 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold mb-8"
      >
        Not Your Grandpa’s Ad Agency
      </motion.h2>
      <div className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-300">
        <TypeAnimation
          sequence={[
            "We're the creatives your brand needs to go from 'meh' to 'OMG' 🚀",
            2000,
            "We make scroll-stopping content that actually converts.",
            2000,
            "Think of us as your brand's personal hype team. ✨",
            2000,
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="h-16"
        />
      </div>
    </div>
  );
} 