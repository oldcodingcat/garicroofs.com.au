import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";

import heroImage from "@/assets/hero-roof-painting.jpg";

export const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear FormData para Netlify
    const form = e.target as HTMLFormElement;
    const netlifyFormData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(netlifyFormData as any).toString(),
    })
      .then(() => {
        toast.success("Thank you! We'll be in touch soon.");
        setFormData({ name: "", email: "", phone: "", address: "", message: "" });
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        toast.error("There was an error submitting the form. Please try again.");
      });
  };

  const inputStyles =
    "h-12 border-white bg-white/10 text-white placeholder:text-white/70 focus:border-white focus:ring-white/30";

  return (
    <section id="quote-form" className="section-padding">
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
          <div className="relative px-4 py-12 text-center sm:px-6 md:px-12 md:py-24">
            <span className="mb-6 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
              Get Started Today
            </span>

            <h2 className="mx-auto mb-4 max-w-2xl text-2xl font-normal text-primary-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              Ready to Transform Your Roof?
            </h2>

            <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
              Brisbane Roof Painting Solutions delivers exceptional roof painting solutions
              tailored to Brisbane's unique climate, crafted with expertise and
              designed to last.
            </p>

            <form
              name="main-quote"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-2xl flex-col gap-4"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="main-quote" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              {/* Name and Email Row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputStyles}
                  required
                  aria-label="Full Name"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputStyles}
                  required
                  aria-label="Email Address"
                />
              </div>

              {/* Phone and Address Row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={inputStyles}
                  aria-label="Phone Number"
                />
                <Input
                  type="text"
                  name="address"
                  placeholder="Property Address (Suburb, Brisbane)"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className={inputStyles}
                  aria-label="Property Address"
                />
              </div>

              {/* Message Field */}
              <Textarea
                name="message"
                placeholder="Tell us about your roof painting needs..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="min-h-[100px] border-white bg-white/10 text-white placeholder:text-white/70 focus:border-white focus:ring-white/30"
                rows={4}
                aria-label="Message"
              />

              <Button
                type="submit"
                size="lg"
                className="mx-auto h-12 w-full shrink-0 bg-primary-foreground text-primary hover:bg-primary-foreground/90 sm:w-auto sm:px-12"
              >
                Get a Quote
              </Button>
            </form>

            <p className="mt-8 text-sm text-primary-foreground/60">
              Your Roof, Reimagined with Quality and Care
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};