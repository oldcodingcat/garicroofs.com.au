import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone } from "lucide-react";
import heroRoofPainting from "@/assets/hero-roof-painting.jpg";

interface ServiceCTAProps {
  title: string;
}

export const ServiceCTA = ({ title }: ServiceCTAProps) => {
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

  const inputStyles = "h-12 border-white bg-white/10 text-white placeholder:text-white/70 focus:border-white focus:ring-white/30";

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroRoofPainting}
              alt="Roof painting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/65" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-10 px-4 sm:px-8 md:px-16 lg:py-20">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-4">
                  Ready to Transform Your Roof?
                </h2>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Get in touch today for a free, no-obligation quote on your {title.toLowerCase()} project. 
                  Our team of experts is ready to help you protect and beautify your roof.
                </p>
                <Button asChild size="lg" className="bg-white/20 text-white border border-white hover:bg-white hover:text-title w-full sm:w-auto">
                  <a href="tel:0730674287" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Us Today
                  </a>
                </Button>
              </div>

              <form
                name="service-quote"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-4"
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="service-quote" />
                <input type="hidden" name="service" value={title} />
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
                  className="h-12 w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 sm:w-auto sm:px-12"
                >
                  Get a Quote
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};