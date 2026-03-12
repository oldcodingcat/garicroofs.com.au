// src/pages/ContactUs.tsx

import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingBanner } from "@/components/layout/FloatingBanner";
import { CTA } from "@/components/CTA";

import { Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

const contactHighlights = [
  "Fast response times for residential and commercial roofing enquiries",
  "Experienced team for roof repairs, restoration and roof replacement",
  "Servicing Melbourne and surrounding suburbs",
  "Clear quotes and honest roofing advice from experienced contractors",
];

const serviceAreas = [
  "Melbourne",
  "Toorak",
  "Prahran",
  "Docklands",
  "Malvern East",
  "Mentone",
  "Mulgrave",
  "Narre Warren",
  "Noble Park",
  "Dandenong",
  "Coburg",
  "Moonee Ponds",
];

export default function ContactUs() {
  const canonicalUrl = "https://garicroofs.com.au/contact-us/";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Garic Roofs",
    url: "https://garicroofs.com.au",
    telephone: "03 9961 0678",
    areaServed: serviceAreas,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "03 9961 0678",
      contactType: "customer service",
      areaServed: "Melbourne",
      availableLanguage: "English",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://garicroofs.com.au/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Garic Roofs Melbourne | Roof Repairs, Restoration & Quotes
        </title>

        <meta
          name="description"
          content="Contact Garic Roofs for roof repairs, roof restoration, gutter work and roof replacement services in Melbourne. Request a roofing quote or inspection today."
        />

        <link rel="canonical" href={canonicalUrl} />

        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">

        <Header />
        <FloatingBanner />

        <main>

          {/* HERO */}
          <section className="border-b border-border bg-[#0f172a]">
            <div className="container mx-auto px-4 py-16 md:py-24">

              <div className="mx-auto max-w-5xl">

                <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary text-white">
                  Contact Garic Roofs
                </span>

                <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-white">
                  Contact Our Melbourne Roofing Specialists
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-white">
                  Looking for a reliable roofing contractor in Melbourne?
                  Garic Roofs provides professional roof repairs, roof
                  restoration, maintenance and full roof replacement services
                  for residential and commercial properties.
                </p>

                <p className="mt-4 text-base leading-relaxed text-white">
                  Use the contact form below to request a quote, organise a roof
                  inspection or ask about emergency roof repairs. Our team is
                  ready to help with practical advice and quality roofing
                  solutions across Melbourne.
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  {contactHighlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-sm text-content">{item}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>


          {/* CONTACT INFO BLOCKS */}
          <section className="py-16 md:py-20">

            <div className="container mx-auto px-4">

              <div className="mx-auto max-w-6xl">

                <div className="grid gap-6 md:grid-cols-3">

                  {/* CALL US */}
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">

                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                        <Phone className="h-5 w-5" />
                      </div>

                      <div>

                        <h3 className="text-lg font-semibold text-title">
                          Call Us
                        </h3>

                        <a
                          href="tel:0399610678"
                          className="mt-1 block font-medium text-primary hover:underline"
                        >
                          03 9961 0678
                        </a>

                        <p className="mt-2 text-sm text-content">
                          Speak directly with our roofing team for inspections,
                          quotes and emergency roof repairs.
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* SERVICE AREAS */}
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">

                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                        <MapPin className="h-5 w-5" />
                      </div>

                      <div>

                        <h3 className="text-lg font-semibold text-title">
                          Service Areas
                        </h3>

                        <p className="mt-2 text-sm text-content">
                          We service Melbourne and surrounding suburbs including
                          Toorak, Prahran, Docklands, Malvern East, Mulgrave,
                          Noble Park and Dandenong.
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* ROOFING ENQUIRIES */}
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">

                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                        <Clock className="h-5 w-5" />
                      </div>

                      <div>

                        <h3 className="text-lg font-semibold text-title">
                          Roofing Enquiries
                        </h3>

                        <p className="mt-2 text-sm text-content">
                          Send us the details of your roof issue, property
                          location and timeframe. Our team will respond quickly
                          with the next steps.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* CONTACT FORM */}
          <section className="pb-20">

            <div className="container mx-auto px-4">

              <div className="mx-auto max-w-6xl">

                <div className="rounded-3xl overflow-hidden">

                  <CTA />

                </div>

              </div>

            </div>

          </section>


        </main>

        <Footer />

      </div>
    </>
  );
}