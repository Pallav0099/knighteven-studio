"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const articles = [
  {
    title: "The Art of Storytelling in a Digital Age",
    date: "October 26, 2023",
    excerpt:
      "Exploring how brands can cut through the noise and connect with audiences through compelling narratives.",
    slug: "/news/art-of-storytelling",
  },
  {
    title: "5 Trends Shaping the Future of Media",
    date: "October 15, 2023",
    excerpt:
      "From AI-driven content to the rise of micro-influencers, we break down what's next in the media landscape.",
    slug: "/news/future-of-media",
  },
  {
    title: "Why Your Brand Needs a Voice (And How to Find It)",
    date: "September 30, 2023",
    excerpt:
      "A step-by-step guide to developing a unique brand voice that resonates with your target audience.",
    slug: "/news/brand-voice",
  },
];

export default function News() {
  return (
    <div className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          News & Insights
        </motion.h1>
        <div className="space-y-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href={article.slug}
                className="block p-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-colors"
              >
                <p className="text-sm text-neutral-400 mb-2">{article.date}</p>
                <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
                <p className="text-neutral-300">{article.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 