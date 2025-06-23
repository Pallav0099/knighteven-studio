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
        Not Just an Ad Agency—Your Growth Partner
      </motion.h2>
      <div className="max-w-2xl mx-auto text-lg sm:text-xl text-black">
        <TypeAnimation
          sequence={[
            "We manage creators, connect brands, and make marketing magic happen 🚀",
            2000,
            "From influencer deals to viral campaigns, we do it all.",
            2000,
            "Think of us as your brand's and your creator's personal hype team. ✨",
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