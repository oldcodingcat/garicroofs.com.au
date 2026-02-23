import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Detection and repair of any leaks.",
  "De-mossing and/or pressure cleaning.",
  "Replacement of broken, cracked, shifted, or chipped tiles.",
  "Installation and replacement of gutters, downpipes, and or box gutters.",
  "Complete or partial Re-Pointing and Re-Bedding.",
  "Roof cleaning and application of Sealer and Roofing Paint.",
];

export const WhatDoWeDo = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="badge mb-6">What Do We Do</span>
          <h2 className="mb-4 text-3xl sm:text-4xl leading-tight">
            Professional Roof Repairs, Cleaning & Restoration Services
          </h2>
          <p className="text-base sm:text-lg text-content">
            We handle everything from leak detection and pressure cleaning to tile replacement, re-bedding, and full roof sealing — ensuring your roof stays secure, weatherproof, and built to last.
          </p>
        </div>

        {/* Grid: 3 columns (instead of 4) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((text, idx) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
              className="floating-card p-6"
            >
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>

                <p className="m-0 text-sm font-medium text-title">
                  {/* Small label to keep the same “offerings” feel */}
                  {text}
                </p>
              </div>

              {/* <p className="m-0 text-base text-content leading-relaxed">{text}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};