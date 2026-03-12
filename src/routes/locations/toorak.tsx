// src/routes/locations/toorak.tsx

import {
  createLocationRoute,
  type LocationContent,
  type LocationSEOConfig,
} from "@/routes/locations/LocationTemplate";

const config: LocationSEOConfig = {
  locationName: "Toorak",
  locationSlug: "toorak",
  state: "VIC",
  country: "Australia",
  latitude: "-37.8417",
  longitude: "145.0141",
  path: "/locations/toorak/",
  heroBg: "/images/services/safety-roof-anchors.webp",
};

const content: LocationContent = {
  hero: {
    eyebrow: "Trusted Roofing Company in Toorak",
    titleTop: "ROOFING IN",
    titleBottom: "TOORAK",
    subtitle:
      "Garic Roofs provides professional roofing services in Toorak, including roof repairs, roof restoration, roof replacement and roof maintenance for residential and commercial properties.",
    bullets: [
      "Roof repairs in Toorak",
      "Roof restoration and repainting",
      "Tile and metal roofing services",
      "Residential and commercial roofing solutions",
    ],
  },

  intro: {
    heading: "Professional Roofing Services in Toorak",
    paragraphs: [
      "If you are looking for reliable roofing in Toorak, Garic Roofs provides high-quality roofing solutions tailored to local homes, commercial buildings and investment properties. Our team works with property owners who need practical roofing outcomes, clear communication and dependable workmanship.",
      "We provide a complete range of roofing services in Toorak, including roof leak repairs, broken tile replacement, flashing repairs, roof restoration, roof replacement and ongoing roof maintenance. Each project is approached with a focus on durability, presentation and long-term roof performance.",
      "Whether your roof has visible wear, storm damage, water ingress or simply needs an upgrade, we deliver roofing services in Toorak designed to protect your property, improve street appeal and reduce the risk of more costly problems later.",
    ],
  },

  services: {
    heading: "Our Roofing Services in Toorak",
    items: [
      {
        title: "Roof Repairs Toorak",
        text: "We carry out roof repairs in Toorak for leaks, cracked tiles, damaged flashing, rusted sections, storm damage and general roofing issues. Fast action on minor problems can help prevent larger structural damage and more expensive repairs.",
      },
      {
        title: "Roof Restoration Toorak",
        text: "Our roof restoration services in Toorak help extend the life of ageing roofs through cleaning, repairs, repointing, resealing and protective coatings. Roof restoration can improve both weather protection and the overall appearance of the property.",
      },
      {
        title: "Roof Replacement Toorak",
        text: "When repairs or restoration are no longer the best long-term option, we provide complete roof replacement services in Toorak. We focus on quality materials, professional installation and roofing solutions suited to the property.",
      },
      {
        title: "Roof Maintenance Toorak",
        text: "Routine roof maintenance in Toorak helps detect minor defects early, reduce the risk of leaks and preserve the condition of your roof across changing weather conditions. Preventative maintenance can save significant repair costs over time.",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why Choose Garic Roofs in Toorak",
    points: [
      {
        title: "Experienced Roofing Specialists",
        text: "We bring practical roofing experience to every project, from minor roof repairs in Toorak to larger roof restoration and replacement works.",
      },
      {
        title: "Quality Workmanship",
        text: "Our team focuses on roofing solutions that are durable, professionally executed and suited to the style, age and condition of each property in Toorak.",
      },
      {
        title: "Reliable Local Service",
        text: "We provide clear advice, transparent recommendations and dependable customer service for homeowners and businesses looking for trusted roofers in Toorak.",
      },
    ],
  },

  areas: {
    heading: "Nearby Areas We Service",
    items: [
      "Toorak",
      "South Yarra",
      "Prahran",
      "Armadale",
      "Malvern",
      "Hawksburn",
    ],
  },

  faq: {
    heading: "Frequently Asked Questions About Roofing in Toorak",
    items: [
      {
        question: "Do you provide roof repairs in Toorak?",
        answer:
          "Yes. We provide roof repairs in Toorak for leaks, damaged tiles, flashing issues, storm damage and other common roofing problems affecting residential and commercial properties.",
      },
      {
        question: "Can you restore an older roof in Toorak?",
        answer:
          "Yes. In many cases, older roofs in Toorak can be restored if the underlying structure is still sound. We assess the roof condition and recommend the most practical and cost-effective option.",
      },
      {
        question: "Do you offer roof replacement in Toorak?",
        answer:
          "Yes. We provide roof replacement services in Toorak when a roof has reached the point where repairs or restoration are no longer the best long-term solution.",
      },
      {
        question: "What roofing services do you offer in Toorak?",
        answer:
          "We offer roof repairs, roof restoration, roof replacement and roof maintenance in Toorak for a wide range of residential and commercial roofing needs.",
      },
    ],
  },

  cta: {
    heading: "Need Roofing Services in Toorak?",
    text:
      "Contact Garic Roofs for professional roofing in Toorak, including roof repairs, roof restoration, roof replacement and ongoing maintenance.",
    buttonText: "GET A FREE QUOTE",
    buttonHref: "/contact/",
  },
};

const { Page } = createLocationRoute(config, content);

export default Page;