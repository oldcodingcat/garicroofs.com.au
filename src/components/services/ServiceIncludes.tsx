import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ServiceIncludesProps {
  title: string;
  includes: string[];
}

export const ServiceIncludes = ({ title, includes }: ServiceIncludesProps) => {
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
            What's Included in Our {title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {includes.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-content text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
