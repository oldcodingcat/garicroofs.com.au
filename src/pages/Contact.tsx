import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const netlifyFormData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(netlifyFormData as any).toString(),
    })
      .then(() => {
        toast.success("Thank you for your message! We'll be in touch within 24 hours.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        toast.error("There was an error submitting the form. Please try again.");
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Brisbane Roof Painting Solutions - Get a Free Quote</title>
        <meta 
          name="description" 
          content="Contact Brisbane Roof Painting Solutions for a free quote. Call us for professional roof painting, restoration and maintenance services in Brisbane QLD." 
        />
        <link rel="canonical" href="https://brisbaneroofpaintingsolutions.com.au/contact" />
        
        <meta property="og:title" content="Contact Us | Brisbane Roof Painting Solutions" />
        <meta property="og:description" content="Get in touch for professional roof painting services in Brisbane. Free quotes available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brisbaneroofpaintingsolutions.com.au/contact" />
        <meta property="og:image" content="https://brisbaneroofpaintingsolutions.com.au/images/before-after-roof.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Brisbane Roof Painting Solutions" />
        <meta name="twitter:description" content="Get in touch for professional roof painting services in Brisbane." />
        <meta name="twitter:image" content="https://brisbaneroofpaintingsolutions.com.au/images/before-after-roof.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://brisbaneroofpaintingsolutions.com.au/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact Us",
                "item": "https://brisbaneroofpaintingsolutions.com.au/contact"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-28">
        <section className="section-padding">
          <div className="container-custom">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="badge mb-6">Contact Us</span>
              <h1 className="mb-4 text-3xl font-normal sm:text-4xl md:text-5xl">
                Get Your Free Quote
              </h1>
              <p className="text-lg">
                Ready to transform your roof? Contact us today for a free, 
                no-obligation quote. We service all Brisbane suburbs.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="rounded-2xl bg-card p-6 sm:p-8 shadow-sm"
              >
                <h2 className="mb-6 text-2xl font-normal">Send Us a Message</h2>
                <form 
                  name="contact-us"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact-us" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Smith"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="0412 345 678"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Required</Label>
                      <Select
                        name="service"
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="terracotta">Clay Terracotta Tiles</SelectItem>
                          <SelectItem value="metal">Metal Roof Restoration</SelectItem>
                          <SelectItem value="flat">Flat Concrete Roof</SelectItem>
                          <SelectItem value="decramastic">Decramastic Tiles</SelectItem>
                          <SelectItem value="concrete">Concrete Tiles</SelectItem>
                          <SelectItem value="other">Other / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="service" value={formData.service} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your roof painting project..."
                      rows={5}
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="rounded-2xl bg-card-secondary p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-title">Call Us</h3>
                      <a
                        href="tel:0730674287"
                        className="text-lg font-medium text-primary hover:underline"
                      >
                        07 3067 4287
                      </a>
                      <p className="text-sm">For urgent enquiries</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-card-secondary p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-title">Service Area</h3>
                      <p>All Brisbane suburbs</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-card-secondary p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-title">Business Hours</h3>
                      <p>Monday – Saturday: 7am – 6pm</p>
                      <p className="text-sm">Sunday: By appointment</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ProjectsShowcase />
      </main>
      <Footer />
      </div>
    </>
  );
};

export default Contact;