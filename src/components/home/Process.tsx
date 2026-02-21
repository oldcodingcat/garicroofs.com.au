import { ClipboardCheck, PaintBucket, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Inspection & Preparation",
    description:
      "Thorough roof assessment and surface preparation to ensure optimal adhesion and identify any repairs needed before painting.",
    step: "01",
  },
  {
    icon: PaintBucket,
    title: "Expert Application",
    description:
      "Professional painting using premium Australian-made products and proven techniques for a flawless, long-lasting finish.",
    step: "02",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Comprehensive inspection and warranty coverage for your peace of mind. We stand behind every project we complete.",
    step: "03",
  },
];

export const Process = () => {
  return (
    <section id="process" className="section-padding bg-wrapper">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="badge mb-6 border border-[#9a9c9e]">Our Process</span>
          <h2 className="mb-4 text-2xl font-normal sm:text-3xl md:text-4xl">
            Our Proven Roof Painting Process
          </h2>
          <p className="text-lg">
            A systematic approach that ensures consistent, exceptional results on every project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-md"
            >
              <span className="absolute right-6 top-6 text-4xl font-light text-outline">
                {step.step}
              </span>
              
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-secondary group-hover:text-content">
                <step.icon className="h-7 w-7" />
              </div>
              
              <h3 className="mb-3 text-xl font-medium">{step.title}</h3>
              <p className="leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};