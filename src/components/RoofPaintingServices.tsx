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

export type RoofPaintingServicesProps = {
  /**
   * When true (default), renders the section heading + intro.
   * Set to false when the parent page already provides the heading.
   */
  showHeader?: boolean;
};

export const RoofPaintingServices = ({ showHeader = true }: RoofPaintingServicesProps) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {showHeader && (
          <div className="text-center mb-12">
            <span className="badge mb-6">Roofing Services</span>
            <h2 className="text-3xl sm:text-4xl">Complete Roofing Solutions Across Melbourne</h2>
          </div>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-card shadow-md overflow-hidden"
            >
              <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-title">{service.title}</h3>

                <p className="text-sm leading-relaxed text-content mb-5">{service.description}</p>

                <Button
                  variant="outline"
                  className="border-primary text-title hover:bg-primary hover:text-white"
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