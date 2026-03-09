import {
  createServiceRoute,
  type ServiceContent,
  type ServiceSEOConfig,
} from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "24/7 Emergency Repairs & Make Safes",
  serviceSlug: "24-7-emergency-repairs-make-safes",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/services/24-7-emergency-repairs-make-safes/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "24/7 Emergency Roofing Services Across Sydney",
    titleTop: "24/7 EMERGENCY REPAIRS",
    titleBottom: "& MAKE SAFES",
    bullets: [
      "Immediate response day or night",
      "Storm, leak & fire damage specialists",
      "Make safe solutions to prevent further damage",
      "Fully compliant & insured professionals",
    ],
  },

  intro: {
    heading: "24/7 Emergency Repairs & Make Safes in Sydney",
    paragraphs: [
      "When confronted with an urgent roofing issue requiring immediate attention, you can rely on Garic Roofs’ 24/7 Emergency Repairs & Make Safes service. Our experienced team works swiftly to secure and protect your roof, preventing further structural damage.",
      "From minor repairs and urgent maintenance to extensive roof replacements, our skilled professionals are ready to provide fast, high-quality solutions with complete professionalism.",
      "No matter the time of day or night, our roofing experts stand prepared to resolve your emergency roofing situation efficiently and safely.",
    ],
  },

  why: {
    heading: "Situations Requiring Emergency Repairs",
    points: [
      {
        title: "Storm Damage",
        text: "Severe storms can rip off shingles, damage flashing, and create leaks. Immediate repairs are essential to prevent escalating water damage and structural deterioration.",
      },
      {
        title: "Leaking Roof",
        text: "A leaking roof requires urgent attention. Left untreated, leaks can result in significant internal water damage and costly future repairs.",
      },
      {
        title: "Tree Damage",
        text: "Fallen trees can severely compromise roof integrity. Our specialists respond quickly to secure and stabilise your roof safely and efficiently.",
      },
      {
        title: "Structural Issues",
        text: "Poor maintenance or external factors can lead to structural problems. Prompt repairs reduce the risk of long-term damage and safety hazards.",
      },
      {
        title: "Fire or Major Emergency Damage",
        text: "If your roof has sustained fire damage or other emergency impact, our team provides rapid make-safe services and efficient restoration solutions.",
      },
    ],
  },

  process: {
    heading: "Why Choose Garic Roofs for Emergency Roofing?",
    steps: [
      {
        title: "Available 24/7",
        text: "Day or night, our team is dedicated to addressing your emergency roofing needs with rapid and dependable service.",
      },
      {
        title: "Professional Repairs",
        text: "All repairs are completed to the highest industry standards, fully compliant with building regulations and safety requirements.",
      },
      {
        title: "Guaranteed Satisfaction",
        text: "We are committed to delivering exceptional workmanship and ensuring your complete satisfaction with every repair.",
      },
      {
        title: "Fast & Efficient Response",
        text: "We understand the urgency of emergency situations and act quickly to secure and fortify your roof, minimising further risk.",
      },
    ],
  },

  testimonial: {
    name: "Michael R.",
    areaName: "Sydney",
    quote:
      "After severe storm damage, Garic Roofs responded immediately and secured our roof overnight. Professional, efficient, and highly recommended.",
    rating: 5,
  },

  cta: {
    heading: "Need Emergency Roof Repairs in Sydney?",
    text: "Garic Roofs is ready to respond 24/7 to secure and restore your roof. Contact our team now for immediate assistance.",
    buttonText: "GET A FREE QUOTE TODAY",
    buttonHref: "/contact/",
  },
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);

export const route = serviceRoute;
export default Page;