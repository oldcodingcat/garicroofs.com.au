import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does roof painting last in Brisbane's climate?",
    answer:
      "With proper preparation and quality products, a professionally painted roof in Brisbane typically lasts 10-15 years. Our premium coatings are specifically formulated to withstand Queensland's harsh UV rays, humidity, and storm conditions.",
  },
  {
    question: "Do you offer colour consultations?",
    answer:
      "Yes! We provide complimentary colour consultations to help you choose the perfect shade for your roof. We can show you samples and digital visualisations to ensure you're completely happy before we begin.",
  },
  {
    question: "What preparation is involved in roof painting?",
    answer:
      "Our preparation process includes high-pressure cleaning to remove dirt, moss, and lichen; repairs to any damaged tiles or flashings; treatment of any fungal growth; and application of a primer coat for optimal adhesion.",
  },
  {
    question: "How long does a typical roof painting project take?",
    answer:
      "Most residential roof painting projects take 3-5 days to complete, depending on the size and condition of the roof. This includes preparation, priming, and multiple topcoats with appropriate drying time between applications.",
  },
  {
    question: "Do you provide warranties on your work?",
    answer:
      "Absolutely. We provide comprehensive warranties on all our work, typically ranging from 7-15 years depending on the products used. Our warranties cover both materials and workmanship for your complete peace of mind.",
  },
];

export const FAQ = () => {
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
              Still got questions? Feel free to reach out to our incredible 
              support team, 7 days a week. We're here to help with any 
              queries about your roof painting project.
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
