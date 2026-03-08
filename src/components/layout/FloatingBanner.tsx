import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 z-50 sm:bottom-6 sm:left-1/2 sm:right-auto sm:w-[calc(100%-2rem)] sm:max-w-2xl sm:-translate-x-1/2"
        >
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-primary-foreground/10 bg-black/95 px-3 py-3 sm:px-6 sm:py-4 shadow-float backdrop-blur-md">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 sm:justify-between">
              <p className="text-center text-xs sm:text-sm font-light text-primary-foreground sm:text-left">
                <span className="font-medium">Need Expert Roof Painting Advice?</span>
                <span className="hidden sm:inline"> — Get your free consultation today</span>
              </p>

              <div className="flex w-full gap-2 sm:w-auto sm:gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:flex-none"
                  asChild
                >
                  <a href="tel:0730674287" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="sm:inline">Call Us Today</span>
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-primary-foreground text-primary hover:bg-primary-foreground/90 sm:flex-none"
                  asChild
                >
                  <a href="/contact">
                    Get a Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};