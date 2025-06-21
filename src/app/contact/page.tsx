"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="py-20 px-8">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-neutral-400 mb-12"
        >
          Have a project in mind? We'd love to hear from you.
        </motion.p>
      </div>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-white text-black font-semibold py-3 px-8 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </div>
  );
} 