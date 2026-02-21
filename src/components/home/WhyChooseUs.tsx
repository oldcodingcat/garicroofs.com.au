import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import beforeAfter from "@/assets/before-after-roof.jpg";
import heroImage from "@/assets/hero-roof-painting.jpg";
import terracottaRoof from "@/assets/terracotta-roof.jpg";

const images = [beforeAfter, heroImage, terracottaRoof];

const accordionItems = [
  {
    title: "Australian-Made for Australian Conditions",
    content:
      "Our premium roof coatings are specifically formulated to withstand Brisbane's harsh UV rays, tropical storms, and humidity. Every product we use is Australian-made and rigorously tested for our unique climate conditions.",
  },
  {
    title: "Complete Roof System Solutions",
    content:
      "We don't just paint roofs—we restore them. Our comprehensive approach includes thorough cleaning, repairs, priming, and multi-coat application to ensure long-lasting protection and stunning results.",
  },
  {
    title: "Genuine Fade Resistance Guarantee",
    content:
      "Our advanced colour technology ensures your roof maintains its vibrant appearance for years. Backed by our fade resistance guarantee, you can trust your investment is protected against the Queensland sun.",
  },
];

export const WhyChooseUs = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openItem, setOpenItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="section-padding bg-wrapper">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="badge mb-6 border border-[#9a9c9e]">Why Choose Us</span>
          <h2 className="mb-4 text-2xl font-normal sm:text-3xl md:text-4xl">
            Why Brisbane Homeowners Choose Us
          </h2>
          <p className="text-lg">
            As one of Brisbane's most trusted roof painting specialists, we've built our reputation on 
            quality workmanship and exceptional customer service.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100"
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="Our professional roof painting work"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/80 p-2 shadow-md backdrop-blur-sm transition-all hover:bg-card"
            >
              <ChevronLeft className="h-5 w-5 text-title" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/80 p-2 shadow-md backdrop-blur-sm transition-all hover:bg-card"
            >
              <ChevronRight className="h-5 w-5 text-title" />
            </button>

            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentImage ? "w-8 bg-card" : "w-2 bg-card/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card p-6 md:p-8"
          >
            <h3 className="mb-2 text-2xl font-normal">
              Quality You Can Trust
            </h3>
            <p className="mb-6">
              We combine industry-leading products with expert application 
              techniques to deliver results that stand the test of time.
            </p>

            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-xl border border-outline bg-card-secondary"
                >
                  <button
                    onClick={() => setOpenItem(openItem === index ? -1 : index)}
                    className="flex w-full items-center justify-between p-4 text-left"
                  >
                    <span className="font-medium text-title">{item.title}</span>
                    {openItem === index ? (
                      <Minus className="h-5 w-5 shrink-0 text-icon" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-icon" />
                    )}
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
                        <p className="px-4 pb-4 text-sm leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};