import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import heroImage from "@/assets/hero-roof-painting.jpg";

export const MidCTA = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Professional roof painting"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
          </div>

          {/* Content */}
          <div className="relative px-4 py-12 text-center sm:px-6 md:px-12 md:py-20">
            <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white">
              Ready to Get Started?
            </span>
            
            <h2 className="mx-auto mb-4 max-w-2xl text-2xl font-normal text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Protect Your Brisbane Home Today
            </h2>
            
            <p className="mx-auto mb-8 max-w-xl text-white/80">
              Our expert team is ready to deliver exceptional roof painting services. 
              Get your free, no-obligation quote and discover the Brisbane Roof Painting Solutions difference.
            </p>

            <Button
              asChild
              size="lg"
              className="h-12 bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Request Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <p className="mt-8 text-sm text-white/60">
              Professional service • Brisbane-wide • Fully insured
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
