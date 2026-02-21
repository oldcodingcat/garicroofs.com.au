import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { suburbs } from "@/data/serviceData";

export const ServiceArea = () => {
  // Show a selection of suburbs
  const displayedSuburbs = suburbs.slice(0, 24);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Service Area</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-title mb-4">
            Servicing All Brisbane Areas
          </h2>
          <p className="text-content max-w-2xl mx-auto">
            We provide professional roof painting services throughout Brisbane and surrounding suburbs. 
            From the CBD to the outer suburbs, our team is ready to transform your roof.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-4 sm:p-6 md:p-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {displayedSuburbs.map((suburb) => (
                <span
                  key={suburb}
                  className="px-3 py-1.5 bg-secondary rounded-full text-sm text-content"
                >
                  {suburb}
                </span>
              ))}
              <span className="px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                + 40 more areas
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
