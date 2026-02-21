import { Home, Building2, Factory, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const offerings = [
  {
    icon: Home,
    title: "Residential Painting",
    description: "Protect and beautify your home's roof with expert residential roof painting services.",
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    description: "Professional solutions for business properties ensuring minimal disruption to operations.",
  },
  {
    icon: Factory,
    title: "Industrial Painting",
    description: "Large-scale roof restoration projects completed efficiently with industrial-grade coatings.",
  },
  {
    icon: Landmark,
    title: "Heritage Restoration",
    description: "Specialist care for older roof types, preserving character while enhancing protection.",
  },
];

export const Offerings = () => {
  return (
    <section className="section-padding bg-wrapper">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge mb-6 border border-[#9a9c9e]">Our Services</span>
          <h2 className="mb-4 text-2xl font-normal sm:text-3xl md:text-4xl">
            Comprehensive Roof Painting Solutions
          </h2>
          <p className="text-lg">
            From residential homes to large industrial facilities, we deliver 
            exceptional roof painting services tailored to your specific needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-secondary group-hover:text-content">
                <offering.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-medium">{offering.title}</h3>
              <p className="text-sm leading-relaxed">{offering.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
