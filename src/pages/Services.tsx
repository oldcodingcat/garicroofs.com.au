import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import terracottaRoof from "@/assets/terracotta-roof.jpg";
import metalRoof from "@/assets/metal-roof.jpg";
import flatConcreteRoof from "@/assets/flat-concrete-roof.jpg";
import decramasticRoof from "@/assets/decramastic-roof.jpg";
import concreteTilesRoof from "@/assets/concrete-tiles-roof.jpg";
import industrialCoatingRoof from "@/assets/industrial-coating-roof.jpg";

const services = [
  {
    title: "Clay Terracotta Tiles Painting",
    description: "Restore the vibrant colour and protective seal of your terracotta tiles with our specialist painting service. We understand Brisbane's unique climate and the challenges it presents for terracotta roofs, from intense UV exposure to seasonal storms.",
    image: terracottaRoof,
    href: "/services/terracotta-tiles",
    features: [
      "Restores original colour and vibrancy",
      "Extends roof lifespan significantly",
      "UV and weather protection",
      "Professional surface preparation",
    ],
  },
  {
    title: "Metal Roof Restoration",
    description: "Extend the life of your metal roof with professional rust treatment and recoating using premium products. Our Colorbond-approved coatings provide superior protection against Brisbane's harsh weather conditions.",
    image: metalRoof,
    href: "/services/metal-roof",
    features: [
      "Rust treatment and prevention",
      "Energy-efficient heat reflection",
      "Durable protective coatings",
      "Extends roof life by decades",
    ],
  },
  {
    title: "Flat Concrete Roof Painting",
    description: "Protect your flat concrete roof with waterproof membranes and heat-reflective coatings. Our specialist treatments prevent water ingress and reduce cooling costs during Brisbane's hot summers.",
    image: flatConcreteRoof,
    href: "/services/flat-concrete",
    features: [
      "Superior waterproofing protection",
      "Heat reflective coatings",
      "Crack repair and sealing",
      "Long-lasting finish",
    ],
  },
  {
    title: "Decramastic Tile Painting",
    description: "Specialist restoration for stone-coated metal tiles, preserving their unique texture and appearance. Our expert team uses advanced techniques to ensure perfect adhesion and colour matching.",
    image: decramasticRoof,
    href: "/services/decramastic",
    features: [
      "Specialist surface preparation",
      "Perfect colour matching",
      "Anti-fade technology",
      "Weather-resistant finish",
    ],
  },
  {
    title: "Concrete Tiles Painting",
    description: "Transform weathered concrete tiles with thorough cleaning, sealing, and professional painting. We use breathable coating systems that allow moisture to escape while protecting against the elements.",
    image: concreteTilesRoof,
    href: "/services/concrete-tiles",
    features: [
      "Thorough pressure cleaning",
      "Premium primer application",
      "Multiple finish options",
      "Breathable coating system",
    ],
  },
  {
    title: "Industrial Coating",
    description: "Large-scale protective coatings for warehouses, factories, and commercial buildings using industrial-grade products. We work efficiently to minimise disruption to your business operations.",
    image: industrialCoatingRoof,
    href: "/services/industrial-coating",
    features: [
      "Large-scale project expertise",
      "Industrial-grade products",
      "Minimal business disruption",
      "Heavy-duty protection",
    ],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Professional Roof Painting Services Brisbane | All Roof Types</title>
        <meta 
          name="description" 
          content="Comprehensive roof painting services in Brisbane. Terracotta tiles, metal roofs, concrete tiles, flat roofs & more. Expert restoration & maintenance. Free quotes." 
        />
        <link rel="canonical" href="https://brisbaneroofpaintingsolutions.com.au/services" />
        
        <meta property="og:title" content="Roof Painting Services Brisbane | All Roof Types" />
        <meta property="og:description" content="Professional roof painting for all roof types in Brisbane. Terracotta, metal, concrete and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brisbaneroofpaintingsolutions.com.au/services" />
        <meta property="og:image" content="https://brisbaneroofpaintingsolutions.com.au/images/before-after-roof.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Roof Painting Services Brisbane | All Roof Types" />
        <meta name="twitter:description" content="Professional roof painting for all roof types in Brisbane." />
        <meta name="twitter:image" content="https://brisbaneroofpaintingsolutions.com.au/images/before-after-roof.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Terracotta Tile Roof Painting",
                "description": "Professional painting and restoration of terracotta tile roofs",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Brisbane Roof Painting Solutions",
                  "telephone": "+61730674287",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Brisbane",
                    "addressRegion": "Queensland",
                    "addressCountry": "AU"
                  }
                }
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "Metal Roof Restoration",
                "description": "Complete restoration and painting of metal roofs",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Brisbane Roof Painting Solutions",
                  "telephone": "+61730674287",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Brisbane",
                    "addressRegion": "Queensland",
                    "addressCountry": "AU"
                  }
                }
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "Concrete Tile Roof Painting",
                "description": "Professional painting services for concrete tile roofs",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Brisbane Roof Painting Solutions",
                  "telephone": "+61730674287",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Brisbane",
                    "addressRegion": "Queensland",
                    "addressCountry": "AU"
                  }
                }
              },
              {
                "@type": "Service",
                "position": 4,
                "name": "Flat Concrete Roof Painting",
                "description": "Waterproofing and painting services for flat concrete roofs",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Brisbane Roof Painting Solutions",
                  "telephone": "+61730674287",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Brisbane",
                    "addressRegion": "Queensland",
                    "addressCountry": "AU"
                  }
                }
              },
              {
                "@type": "Service",
                "position": 5,
                "name": "Decramastic Tile Painting",
                "description": "Specialist restoration for stone-coated metal tiles",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Brisbane Roof Painting Solutions",
                  "telephone": "+61730674287",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Brisbane",
                    "addressRegion": "Queensland",
                    "addressCountry": "AU"
                  }
                }
              },
              {
                "@type": "Service",
                "position": 6,
                "name": "Industrial Coating",
                "description": "Large-scale protective coatings for commercial buildings",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Brisbane Roof Painting Solutions",
                  "telephone": "+61730674287",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Brisbane",
                    "addressRegion": "Queensland",
                    "addressCountry": "AU"
                  }
                }
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
              <span className="badge mb-6">Our Services</span>
              <h1 className="mb-4 text-3xl font-normal sm:text-4xl md:text-5xl">
                Professional Roof Painting Services
              </h1>
              <p className="text-lg">
                Expert roof painting solutions for every roof type across Brisbane. 
                Quality workmanship backed by comprehensive warranties.
              </p>
            </div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid gap-8 overflow-hidden rounded-2xl bg-card shadow-sm lg:grid-cols-2"
                >
                  <div className={`relative aspect-[16/10] lg:aspect-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                      <h2 className="mb-4 text-xl font-normal sm:text-2xl md:text-3xl">
                        {service.title}
                    </h2>
                    <p className="mb-6 leading-relaxed">{service.description}</p>
                    <ul className="mb-8 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <span className="h-2 w-2 shrink-0 rounded-full bg-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-fit">
                      <Link to="/contact" className="flex items-center gap-2">
                        Get a Quote
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </>
  );
};

export default Services;
