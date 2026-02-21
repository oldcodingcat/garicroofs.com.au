import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQ } from "@/data/serviceData";

interface ServiceFAQProps {
  title: string;
  faqs: FAQ[];
}

export const ServiceFAQ = ({ title, faqs }: ServiceFAQProps) => {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section id="faqs" className="section-padding">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side - Intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="badge mb-6 border border-[#9a9c9e]">FAQ</span>
            <h2 className="mb-4 text-2xl font-normal sm:text-3xl md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mb-8 text-lg leading-relaxed">
              Have questions about {title}? We're here to help. Still got questions? 
              Feel free to reach out to our incredible support team, 7 days a week.
            </p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>

          {/* Right Side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-outline bg-card"
              >
                <button
                  onClick={() => setOpenItem(openItem === index ? -1 : index)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left"
                >
                  <span className="font-medium text-title">{faq.question}</span>
                  <span className="shrink-0 rounded-full bg-secondary p-1">
                    {openItem === index ? (
                      <Minus className="h-4 w-4 text-icon" />
                    ) : (
                      <Plus className="h-4 w-4 text-icon" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openItem === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
