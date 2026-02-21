import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceHeroProps {
  title: string;
  description: string;
  heroImage: string;
  warranty: string;
}

export const ServiceHero = ({ title, description, heroImage, warranty }: ServiceHeroProps) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <Link
          to="/services"
          className="mb-6 inline-flex items-center gap-2 text-sm text-content hover:text-title"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-6 text-3xl font-normal sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mb-8 text-lg leading-relaxed">{description}</p>
            <p className="mb-8 rounded-xl bg-primary/5 p-4 text-sm font-medium text-primary">
              {warranty}
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={heroImage}
              alt={title}
              className="h-full w-full rounded-2xl object-cover shadow-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
