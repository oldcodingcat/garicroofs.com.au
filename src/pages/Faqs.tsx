// src/pages/faqs.tsx

import { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingBanner } from "@/components/layout/FloatingBanner";
import { CTA } from "@/components/CTA";

import { ChevronDown } from "lucide-react";

/*
|--------------------------------------------------------------------------
| FAQ DATA
|--------------------------------------------------------------------------
*/

const faqs = [
  {
    question: "How do I know if my roof needs repair or replacement?",
    answer:
      "Signs that your roof may need repair or replacement include water leaks, cracked or broken tiles, rusted metal sheets, sagging areas, or visible structural damage. Our roofing specialists can perform a professional inspection and recommend the most cost-effective solution."
  },
  {
    question: "Do you offer 24/7 emergency roof repairs?",
    answer:
      "Yes. Our team provides 24/7 emergency roofing services across Melbourne and surrounding areas. Whether it's storm damage, severe leaks, or structural hazards, we can quickly make your roof safe and prevent further damage."
  },
  {
    question: "How much does roof repair cost in Melbourne?",
    answer:
      "The cost of roof repairs depends on factors such as roof type, accessibility, damage severity, and materials required. Minor repairs may cost a few hundred dollars, while extensive repairs or partial replacements may cost more. We provide transparent quotes after inspection."
  },
  {
    question: "How long does a roof replacement take?",
    answer:
      "Most residential roof replacements take between 2 and 5 days depending on the size of the property, weather conditions, and the roofing materials used. Larger commercial projects may take longer."
  },
  {
    question: "What roofing materials do you work with?",
    answer:
      "Our roofing specialists work with tile roofs, metal roofs, Colorbond roofs, terracotta tiles, concrete tiles, and other modern roofing systems used across Melbourne homes and commercial buildings."
  },
  {
    question: "Do you provide roof inspections?",
    answer:
      "Yes. We offer detailed roof inspections to identify leaks, structural problems, damaged flashing, gutter issues, and other roofing defects before they become expensive problems."
  },
  {
    question: "What causes roof leaks?",
    answer:
      "Roof leaks can occur due to cracked tiles, deteriorated flashing, blocked gutters, storm damage, poor installation, or aging roofing materials. Identifying the source early helps prevent structural damage and mould issues."
  },
  {
    question: "Can you repair storm-damaged roofs?",
    answer:
      "Yes. We specialise in repairing roofs damaged by storms, strong winds, hail, and fallen debris. Our team can secure loose materials, replace broken tiles, and restore your roof’s integrity quickly."
  },
  {
    question: "Do you work with residential and commercial roofs?",
    answer:
      "Yes. Our roofing contractors handle residential homes, strata buildings, commercial properties, warehouses, and industrial roofing projects."
  },
  {
    question: "How often should a roof be inspected?",
    answer:
      "A roof inspection is recommended at least once every 12–24 months, and especially after severe storms. Regular inspections help detect minor issues before they develop into major repairs."
  },
  {
    question: "Do you provide free roofing quotes?",
    answer:
      "Yes. We provide free roofing assessments and quotes for repairs, replacements, and maintenance services."
  },
  {
    question: "What areas do you service?",
    answer:
      "We provide roofing services across Melbourne and surrounding suburbs, including St Kilda, Richmond, Footscray, Essendon, Dandenong, and nearby regions."
  },
  {
    question: "What is roof restoration?",
    answer:
      "Roof restoration involves cleaning, repairing, resealing, and repainting an existing roof to extend its lifespan and improve its appearance without a full replacement."
  },
  {
    question: "Is roof painting worth it?",
    answer:
      "Roof painting protects roofing materials from weather exposure, improves energy efficiency by reflecting heat, and enhances the appearance of your property."
  },
  {
    question: "Can you replace broken roof tiles?",
    answer:
      "Yes. Replacing cracked or broken roof tiles is a common repair that helps prevent water penetration and structural damage."
  },
  {
    question: "Do you install new gutters?",
    answer:
      "Yes. We install and repair gutter systems, downpipes, and drainage solutions to ensure rainwater is safely diverted away from your property."
  },
  {
    question: "What is the lifespan of a roof?",
    answer:
      "Roof lifespan varies by material. Tile roofs can last 50+ years, while metal roofs typically last 30–45 years when properly maintained."
  },
  {
    question: "Can you fix roof ventilation issues?",
    answer:
      "Yes. Proper roof ventilation prevents heat buildup, condensation, and mould growth. We can install or repair ventilation systems to improve airflow."
  },
  {
    question: "Do you offer roof maintenance services?",
    answer:
      "Yes. Regular roof maintenance helps extend the lifespan of your roof and prevent expensive repairs."
  },
  {
    question: "How quickly can you respond to emergency roofing issues?",
    answer:
      "Our emergency roofing team aims to respond as quickly as possible, often within hours depending on location and weather conditions."
  }
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

function FAQItem({
  question,
  answer
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <p className="mt-4 text-[#666666] leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| PAGE
|--------------------------------------------------------------------------
*/

export default function FAQs() {
  return (
    <>
      <Helmet>
        <title>Roofing FAQs Melbourne | Common Roofing Questions</title>
        <meta
          name="description"
          content="Find answers to the most common roofing questions including roof repairs, roof replacements, inspections, storm damage repairs and maintenance in Melbourne."
        />
        <link rel="canonical" href="/faqs/" />
      </Helmet>

      <Header />

      {/* HERO */}
      <section className="bg-black text-white pt-40 pb-20 md:pt-48">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Roofing FAQs
          </h1>

          <p className="text-lg text-gray-300">
            Answers to the most common questions about roof repairs, roof
            replacement, maintenance, and emergency roofing services in Melbourne.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Roofing Questions
            </h2>

            <p className="text-[#666666] leading-relaxed">
              If you're looking for reliable roofing services in Melbourne,
              understanding how roof repairs, roof restoration, and roof
              replacements work can help you make the right decision.
              Below are answers to the most frequently asked questions from
              homeowners and property managers about roofing problems,
              inspections, and maintenance.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      <Footer />
      <FloatingBanner />
    </>
  );
}