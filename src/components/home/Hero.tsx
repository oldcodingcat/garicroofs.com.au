import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import heroMainImage from "@/assets/hero-roof-painting.jpg";
import heroDetailImage from "@/assets/before-after-roof.jpg";
import heroTeamImage from "@/assets/terracotta-roof.jpg";

const benefits = [
  "Trusted roofing contractors across Melbourne",
  "Metal & tile roofing specialists",
  "Workmanship warranty on every job",
];

export const Hero = () => {
  return (
    <section className="min-h-screen pt-40 md:pt-48 pb-16 px-4 sm:px-0">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <span className="badge mb-6">Garic Roofs</span>

            <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
              Melbourne Roofing Contractors You Can Rely On
            </h1>

            <p className="mb-6 max-w-lg text-lg leading-relaxed">
              Looking for a reliable roofer in Melbourne? This site puts you in
              touch with trusted roofing contractors who specialise in metal and
              tile roofing across residential and commercial projects throughout
              Melbourne and surrounding suburbs. The contractors we work with
              take pride in their workmanship and stand behind every job with a
              workmanship warranty. We’re here to help you find someone who gets
              the job done right.
            </p>

            <p className="mb-8 max-w-lg text-sm text-content/80">
              This website is owned and operated by Client Connect Australia Pty Ltd.
            </p>

            {/* BENEFITS */}
            <ul className="mb-8 space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-title">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Button size="lg" className="px-8" asChild>
              <a href="#quote-form">Request a Quote</a>
            </Button>
          </motion.div>

          {/* RIGHT IMAGE GRID */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2"
          >
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 md:gap-3">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="col-span-2 sm:col-span-3 row-span-2"
              >
                <img
                  src={heroMainImage}
                  alt="Professional roofing contractor working on a residential roof in Melbourne"
                  className="h-full w-full rounded-2xl object-cover shadow-float"
                  style={{ aspectRatio: "3/4" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="col-span-1 sm:col-span-2"
              >
                <img
                  src={heroDetailImage}
                  alt="Before and after roof restoration project in Melbourne"
                  className="h-full w-full rounded-2xl object-cover shadow-float"
                  style={{ aspectRatio: "4/3" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="col-span-1 sm:col-span-2"
              >
                <img
                  src={heroTeamImage}
                  alt="Metal and tile roofing specialists servicing Melbourne and nearby suburbs"
                  className="h-full w-full rounded-2xl object-cover shadow-float"
                  style={{ aspectRatio: "4/3" }}
                />
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};