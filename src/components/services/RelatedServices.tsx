import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getRelatedServicesData } from "@/data/serviceData";

interface RelatedServicesProps {
  currentServiceId: string;
  relatedServiceIds: string[];
}

export const RelatedServices = ({ currentServiceId, relatedServiceIds }: RelatedServicesProps) => {
  const relatedServices = getRelatedServicesData(relatedServiceIds);

  if (relatedServices.length === 0) return null;

  return (
    <section className="section-padding bg-wrapper">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-title">
            Other Services You Might Need
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {relatedServices.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="group block bg-card rounded-2xl overflow-hidden hover:shadow-float transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-title mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-content line-clamp-2 mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
