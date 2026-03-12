// src/pages/ContactUs.tsx

import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingBanner } from "@/components/layout/FloatingBanner";
import { CTA } from "@/components/CTA";
import { Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

const contactHighlights = [
  "Fast response times for residential and commercial roofing enquiries",
  "Experienced team for roof repairs, restoration, maintenance and replacement",
  "Servicing Melbourne and surrounding areas with dependable workmanship",
  "Clear quotes, practical advice and honest recommendations",
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

const Contact = () => {
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
          content="Contact Garic Roofs for roof repairs, roof restoration, roof maintenance and replacement services in Melbourne. Request a quote using our contact form today."
        />
        <link rel="canonical" href={canonicalUrl} />

        <meta
          property="og:title"
          content="Contact Garic Roofs Melbourne | Roof Repairs, Restoration & Quotes"
        />
        <meta
          property="og:description"
          content="Speak with Garic Roofs about roofing services across Melbourne. Get in touch for roof repairs, restoration, maintenance and replacement quotes."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

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
          <section className="border-b border-border bg-[#0f172a]">
            <div className="container mx-auto px-4 py-16 md:py-24">
              <div className="mx-auto max-w-5xl">
                <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-white">
                  Contact Garic Roofs
                </span>

                <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Contact Our Melbourne Roofing Team
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white">
                  Looking for a trusted roofing contractor in Melbourne? Garic
                  Roofs helps homeowners, strata managers and commercial clients
                  with roof repairs, roof restoration, roof maintenance, gutter
                  work and roof replacement solutions tailored to local property
                  conditions.
                </p>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white">
                  Use the contact form below to request a quote, discuss a roof
                  leak, organise an inspection or ask about ongoing roofing
                  maintenance. Our team focuses on practical advice, quality
                  workmanship and responsive service from first enquiry through
                  to project completion.
                </p>

              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_1.4fr]">
                <div className="space-y-6">

                  <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-title">
                          Call Us
                        </h3>
                        <a
                          href="tel:0399610678"
                          className="mt-1 inline-block text-base font-medium text-primary hover:underline"
                        >
                          03 9961 0678
                        </a>
                        <p className="mt-2 text-sm leading-6 text-content">
                          Call our team for roofing enquiries, inspections and
                          quote requests across Melbourne.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-title">
                          Service Areas
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-content">
                          We service Melbourne and surrounding suburbs including
                          Toorak, Prahran, Docklands, Malvern East, Mentone,
                          Mulgrave, Noble Park, Narre Warren, Dandenong, Coburg
                          and Moonee Ponds.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-title">
                          Roofing Enquiries
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-content">
                          Send us the details of your roof issue, property
                          address and preferred timeframe. The more context you
                          provide, the faster we can point you in the right
                          direction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl">
                  <CTA />
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-border bg-muted/30 py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-5xl">
                <div className="max-w-3xl">
                  <span className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                    Roofing Services Melbourne
                  </span>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-title md:text-4xl">
                    Get in Touch About Roof Repairs, Restoration or Replacement
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-content">
                    Our contact page is designed to make it easy for Melbourne
                    property owners to reach a reliable roofing team for both
                    planned works and urgent issues. From persistent roof leaks
                    and storm damage through to ageing roof surfaces that need
                    restoration, Garic Roofs provides practical support backed
                    by experience and quality-focused workmanship.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-content">
                    If you are comparing roofing companies in Melbourne, reach
                    out to discuss your property, the condition of your roof and
                    the outcome you want to achieve. We can help with repairs,
                    maintenance strategies, restoration works and replacement
                    options for residential and commercial roofs.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {serviceAreas.map((area) => (
                    <div
                      key={area}
                      className="rounded-2xl border border-border bg-card px-5 py-4 text-sm font-medium text-title shadow-sm"
                    >
                      Roofing services in {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;