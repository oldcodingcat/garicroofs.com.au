import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import terracottaRoof from "@/assets/terracotta-roof.jpg";
import metalRoof from "@/assets/metal-roof.jpg";
import flatConcreteRoof from "@/assets/flat-concrete-roof.jpg";
import decramasticRoof from "@/assets/decramastic-roof.jpg";
import concreteTilesRoof from "@/assets/concrete-tiles-roof.jpg";
import industrialCoatingRoof from "@/assets/industrial-coating-roof.jpg";

const services = [
  {
    title: "Clay Terracotta Tiles Painting",
    description: "Premium restoration and protection for traditional clay terracotta roofing systems.",
    image: terracottaRoof,
    badges: ["Residential", "10 Year Warranty"],
    href: "/services/terracotta-tiles",
  },
  {
    title: "Metal Roof Restoration",
    description: "Complete refurbishment and rust treatment for corrugated and metal roofing.",
    image: metalRoof,
    badges: ["Commercial", "Rust Protection"],
    href: "/services/metal-roof",
  },
  {
    title: "Flat Concrete Roof Painting",
    description: "Waterproof membrane application and protective coating for flat roof surfaces.",
    image: flatConcreteRoof,
    badges: ["Commercial", "Waterproof"],
    href: "/services/flat-concrete",
  },
  {
    title: "Decramastic Tile Painting",
    description: "Specialized treatment for steel-based decramastic tiles with stone chip coating.",
    image: decramasticRoof,
    badges: ["Heritage", "Specialist"],
    href: "/services/decramastic",
  },
  {
    title: "Concrete Tiles Painting",
    description: "Long-lasting colour restoration and weather protection for concrete tile roofs.",
    image: concreteTilesRoof,
    badges: ["Residential", "Premium Finish"],
    href: "/services/concrete-tiles",
  },
  {
    title: "Industrial Coating",
    description: "Heavy-duty protective coatings for warehouses, factories, and commercial facilities.",
    image: industrialCoatingRoof,
    badges: ["Industrial", "Heavy Duty"],
    href: "/services/industrial-coating",
  },
];

export const ServicesShowcase = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="badge mb-6 border border-[#9a9c9e]">Specialist Services</span>
          <h2 className="mb-4 text-2xl font-normal sm:text-3xl md:text-4xl">
            Our Specialist Roof Painting Services
          </h2>
          <p className="text-lg">
            Expert roof painting solutions for every roof type, delivered with 
            precision and backed by comprehensive warranties.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="group relative block aspect-[16/10] overflow-hidden rounded-2xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badges */}
                <div className="absolute left-4 top-4 flex gap-2">
                  {service.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-title backdrop-blur-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-title/90 to-transparent p-6 pt-20">
                  <div className="flex items-end justify-between">
                    <div className="flex-1 pr-4">
                      <h3 className="text-xl font-medium text-card mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-card/90 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card/20 text-card backdrop-blur-sm transition-all group-hover:bg-card group-hover:text-title">
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