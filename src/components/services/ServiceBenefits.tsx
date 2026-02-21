import { motion } from "framer-motion";
import { 
  Shield, Home, Droplets, Sparkles, Thermometer, Palette, Clock,
  History, Layers, Building2, Wrench, Sun, Leaf, TrendingUp,
  ShieldCheck, Zap
} from "lucide-react";
import type { ServiceBenefit } from "@/data/serviceData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Home,
  Droplets,
  Sparkles,
  Thermometer,
  Palette,
  Clock,
  History,
  Layers,
  Building2,
  Wrench,
  Sun,
  Leaf,
  TrendingUp,
  ShieldCheck,
  Zap,
};

interface ServiceBenefitsProps {
  title: string;
  benefits: ServiceBenefit[];
}

export const ServiceBenefits = ({ title, benefits }: ServiceBenefitsProps) => {
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
            Why Choose Our {title}?
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon] || Shield;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-title mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-content leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
