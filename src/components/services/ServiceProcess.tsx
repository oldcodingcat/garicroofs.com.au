import { motion } from "framer-motion";
import type { ProcessStep } from "@/data/serviceData";

interface ServiceProcessProps {
  title: string;
  steps: ProcessStep[];
}

export const ServiceProcess = ({ title, steps }: ServiceProcessProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-title">
            Our {title} Process
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative lg:flex lg:items-center lg:gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Step number - center on desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium z-10">
                  {step.step}
                </div>

                {/* Content card */}
                <div className={`lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      {/* Mobile step number */}
                      <div className="lg:hidden flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-medium">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-title mb-2">
                          {step.title}
                        </h3>
                        <p className="text-content text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
