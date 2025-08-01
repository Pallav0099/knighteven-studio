"use client";

import { motion } from "framer-motion";
import { IconCheck } from "@tabler/icons-react";

const pricingPlans = [
  {
    name: "Creator Essentials",
    price: "$199",
    features: [
      "Personal Brand Strategy",
      "Sponsorship Pitch Decks",
      "Monthly Growth Report",
      "Email Support",
    ],
  },
  {
    name: "Influencer Pro",
    price: "$499",
    features: [
      "Full Social Media Management (3 platforms)",
      "Brand Deal Negotiation",
      "Content Creation Support",
      "Bi-Weekly Performance Reports",
      "Priority Support",
    ],
    isPopular: true,
  },
  {
    name: "Brand Partnership",
    price: "Custom",
    features: [
      "Access to Top Creators",
      "Sponsorship Campaign Management",
      "Custom Influencer Matchmaking",
      "Campaign Analytics & Reporting",
      "Dedicated Account Manager",
    ],
  },
];

export default function Prices() {
  return (
    <div className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Our Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-neutral-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Simple, transparent pricing for teams and businesses of all sizes.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`border rounded-lg p-8 flex flex-col ${
                plan.isPopular ? "border-white" : "border-neutral-700"
              }`}
            >
              {plan.isPopular && (
                <div className="text-sm font-bold bg-white text-black py-1 px-3 rounded-full self-start mb-4">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">
                {plan.price}
                <span className="text-lg font-normal text-neutral-400">/mo</span>
              </p>
              <p className="text-neutral-400 mb-6 h-12">
                Best for small businesses and startups.
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <IconCheck size={20} className="text-white" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors ${
                  plan.isPopular
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-neutral-800 text-white hover:bg-neutral-700"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 