import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
      "Swift and dependable roof repair services to protect your home from further damage and ensure a proper seal against the elements.",
    image: "/images/services/roof-repairs.webp",
    link: "/services/roof-repairs/",
  },
  {
    title: "Roof Leak",
    description:
      "Fast and reliable leak repair services to keep your home dry and secure from water ingress and storm damage.",
    image: "/images/services/roof-leak.webp",
    link: "/services/roof-leak/",
  },
  {
    title: "Roof Restoration",
    description:
      "Comprehensive roof restoration including inspection, repairs and recoating to extend the life of your roof.",
    image: "/images/services/roof-restoration.webp",
    link: "/services/roof-restoration/",
  },
  {
    title: "Roof Maintenance",
    description:
      "Personalized maintenance plans designed to maximize roof lifespan and prevent costly future damage.",
    image: "/images/services/roof-maintenance.webp",
    link: "/services/roof-maintenance/",
  },
  {
    title: "24/7 Emergency Repairs & Make Safes",
    description:
      "Round-the-clock emergency roofing services to secure and protect your property during urgent situations.",
    image: "/images/services/24-7-emergency-repairs-make-safes.webp",
    link: "/services/24-7-emergency-repairs-make-safes/",
  },
  {
    title: "Roof Replacement",
    description:
      "Expert replacement of shingle, metal and flat roofs with guidance tailored to your needs and budget.",
    image: "/images/services/roof-replacement.webp",
    link: "/services/roof-replacement/",
  },
  {
    title: "Metal Pergolas & Patios",
    description:
      "Custom-designed metal pergolas that enhance your outdoor space while providing practical weather protection.",
    image: "/images/services/metal-pergolas-patios.webp",
    link: "/services/metal-pergolas-patios/",
  },
  {
    title: "Metal Roofing & Flashings",
    description:
      "Professional installation of durable metal roofing systems and flashings built for long-term protection.",
    image: "/images/services/metal-roofing-flashings.webp",
    link: "/services/metal-roofing-flashings/",
  },
  {
    title: "Ridge Capping Restoration",
    description:
      "High-quality ridge capping repairs and restoration for lasting weatherproof protection.",
    image: "/images/services/ridge-capping-restoration.webp",
    link: "/services/ridge-capping-restoration/",
  },
  {
    title: "Safety Roof Anchors",
    description:
      "Lightweight and robust roof anchor systems designed to enhance structural safety and stability.",
    image: "/images/services/safety-roof-anchors.webp",
    link: "/services/safety-roof-anchors/",
  },
  {
    title: "Restoration & Remediation Services",
    description:
      "Storm damage, mold removal, water damage repair and full remediation services to restore your roof.",
    image: "/images/services/restoration-remediation.webp",
    link: "/services/restoration-remediation/",
  },
];

export const RoofPaintingServices = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="badge mb-6">Roofing Services</span>
          <h2 className="text-3xl sm:text-4xl">
            Professional Roofing Services Across Melbourne
          </h2>
        </div>

        {/* 3 COLUMN LAYOUT */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

              <div className="absolute bottom-0 p-6">
                <h3 className="text-lg font-medium mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-sm mb-4 line-clamp-3 text-white">
                  {service.description}
                </p>

                <Button
                  className="bg-primary text-white hover:bg-primary hover:text-white"
                  asChild
                >
                  <a href={service.link}>Learn More</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};