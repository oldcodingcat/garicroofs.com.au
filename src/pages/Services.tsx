import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RoofPaintingServices } from "@/components/RoofPaintingServices";
import { CTA } from "@/components/CTA";

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
          {/* Page Intro (keep title + first paragraph as per screenshot) */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <span className="badge mb-6">Our Services</span>
                <h1 className="mb-4 text-3xl font-normal sm:text-4xl md:text-5xl">
                  Professional Roof Painting Services
                </h1>
                <p className="text-lg">
                  Expert roof painting solutions for every roof type across Brisbane. Quality workmanship backed by
                  comprehensive warranties.
                </p>
              </div>
            </div>
          </section>

          {/* Services grid (re-used component) */}
          <RoofPaintingServices showHeader={false} />

          {/* CTA */}
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;