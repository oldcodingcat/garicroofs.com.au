import { motion } from "framer-motion";

interface ServiceOverviewProps {
  heading: string;
  paragraphs: string[];
  image: string;
  title: string;
}

export const ServiceOverview = ({ heading, paragraphs, image, title }: ServiceOverviewProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-title mb-6">
              {heading}
            </h2>
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-content leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-2xl shadow-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
