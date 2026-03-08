import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Roof Repairs",
    description:
      "Don't underestimate the seriousness of a damaged roof, as it can result in even costlier repairs if left unattended. At Garic Roofs, we understand the urgency and provide swift and dependable roof repair services to safeguard your home from additional damage and ensure a proper seal against the elements.",
    image: "/images/services/roof-repairs.webp",
    link: "/services/roof-repairs/",
  },
  {
    title: "Roof Leak",
    description:
      "Numerous factors can lead to a leaking roof, such as improper installation, aging materials, and storm damage. We offer fast and trustworthy leak repair services—efficiently fixing the issue so your home remains dry and protected against the elements.",
    image: "/images/services/roof-leak.webp",
    link: "/services/roof-leak/",
  },
  {
    title: "Roof Restoration",
    description:
      "Opt for our comprehensive roof restoration services to prolong the life of your existing roof. Our team conducts a thorough inspection, repairs any issues, and expertly re-coats your roofing system—helping it perform at its best and stand the test of time.",
    image: "/images/services/roof-restoration.webp",
    link: "/services/roof-restoration/",
  },
  {
    title: "Roof Maintenance",
    description:
      "Regular maintenance is key to keeping your roof in optimal condition. We offer tailored maintenance plans designed to maximise roof lifespan and help protect your property from potential future damage.",
    image: "/images/services/roof-maintenance.webp",
    link: "/services/roof-maintenance/",
  },
  {
    title: "24/7 Emergency Repairs & Make Safes",
    description:
      "At Garic Roofs, we’re available 24/7 for emergency repairs and make-safe services. Our team can quickly identify issues, provide practical solutions, and repair damage to keep your roof secure and weatherproof—when you need help most.",
    image: "/images/services/24-7-emergency-repairs-make-safes.webp",
    link: "/services/24-7-emergency-repairs-make-safes/",
  },
  {
    title: "Roof Replacement",
    description:
      "We specialise in replacing a wide range of roof types, including shingle, metal, and flat roofs. Our experienced team will guide you in selecting the most suitable material and design for your needs—while keeping your budget in mind.",
    image: "/images/services/roof-replacement.webp",
    link: "/services/roof-replacement/",
  },
  {
    title: "Metal Pergolas & Patios",
    description:
      "Elevate your outdoor space with custom metal pergolas and patios that blend seamlessly with your property. Designed for minimal disruption, they add elegance while providing practical protection from sun and rain—perfect for entertaining.",
    image: "/images/services/metal-pergolas-patios.webp",
    link: "/services/metal-pergolas-patios/",
  },
  {
    title: "Metal Roofing & Flashings",
    description:
      "Experience professional metal roofing and flashings installation from a team that stays up to date with the latest industry techniques. We ensure your roof looks great and delivers long-lasting protection for your home.",
    image: "/images/services/metal-roofing-flashings.webp",
    link: "/services/metal-roofing-flashings/",
  },
  {
    title: "Ridge Capping Restoration",
    description:
      "If your roof has suffered wind or hail damage, our ridge capping restoration service can help. We use quality materials and proven methods to restore your roof properly—delivering a weatherproof seal built to last.",
    image: "/images/services/ridge-capping-restoration.webp",
    link: "/services/ridge-capping-restoration/",
  },
  {
    title: "Safety Roof Anchors",
    description:
      "Safety roof anchors add an extra layer of protection against wind and weather-related damage. Lightweight yet robust, they provide a secure installation when correctly implemented—helping keep your roof stable in tough conditions.",
    image: "/images/services/safety-roof-anchors.webp",
    link: "/services/safety-roof-anchors/",
  },
  {
    title: "Restoration & Remediation Services",
    description:
      "We provide comprehensive restoration and remediation for storm, hail, wind, and water damage. Our services also include mould and mildew removal plus gutter cleaning and repairs—helping bring your roof back to top shape.",
    image: "/images/services/restoration-remediation.webp",
    link: "/services/restoration-remediation/",
  },
];

export const RoofPaintingServices = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="badge mb-6 border border-[#9a9c9e]">
            Roofing Services
          </span>
          <h2 className="mb-4 text-2xl font-normal sm:text-3xl md:text-4xl">
            Complete Roofing Solutions Across Melbourne
          </h2>
          <p className="text-lg">
            Professional roofing services delivered with precision,
            reliability, and industry-leading workmanship.
          </p>
        </div>

        {/* 🔥 3 COLUMN GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={service.link}
                className="group relative block aspect-[16/10] overflow-hidden rounded-2xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20">
                  <div className="flex items-end justify-between">
                    <div className="flex-1 pr-4">
                      <h3 className="text-xl font-medium text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/90 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all group-hover:bg-white group-hover:text-black">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};