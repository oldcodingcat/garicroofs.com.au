// src/routes/locations/LocationTemplate.tsx

import type { Route } from "react-router";
import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingBanner } from "@/components/layout/FloatingBanner";
import { CTA } from "@/components/CTA";

import { submitNetlifyForm } from "@/lib/netlifyForm";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle2, Send } from "lucide-react";

/*
|--------------------------------------------------------------------------
| TYPES
|--------------------------------------------------------------------------
*/

export type LocationSEOConfig = {
  locationName: string;
  locationSlug: string;
  state: string;
  country?: string;
  latitude: string;
  longitude: string;
  path?: string;
  heroBg?: string;
};

export type LocationContent = {
  hero: {
    eyebrow?: string;
    titleTop: string;
    titleBottom?: string;
    subtitle: string;
    bullets: string[];
  };

  intro: {
    heading: string;
    paragraphs: string[];
  };

  services: {
    heading: string;
    items: {
      title: string;
      text: string;
    }[];
  };

  whyChooseUs: {
    heading: string;
    points: {
      title: string;
      text: string;
    }[];
  };

  areas: {
    heading: string;
    items: string[];
  };

  faq?: {
    heading: string;
    items: {
      question: string;
      answer: string;
    }[];
  };

  cta: {
    heading: string;
    text: string;
    buttonText?: string;
    buttonHref?: string;
  };
};

/*
|--------------------------------------------------------------------------
| DEFAULTS
|--------------------------------------------------------------------------
*/

const DEFAULTS = {
  baseUrl: "https://garicroofs.com.au",
  businessName: "Garic Roofs",
  phone: "0399610678",
  defaultHeroBg: "/images/services/safety-roof-anchors.webp",
};

/*
|--------------------------------------------------------------------------
| HELPERS
|--------------------------------------------------------------------------
*/

function buildPath(cfg: LocationSEOConfig) {
  return cfg.path ?? `/locations/${cfg.locationSlug}/`;
}

function buildSeo(cfg: LocationSEOConfig) {
  const country = cfg.country ?? "Australia";
  const path = buildPath(cfg);
  const canonical = `${DEFAULTS.baseUrl}${path}`;

  const title = `Roofing in ${cfg.locationName} | ${DEFAULTS.businessName}`;

  const description = `Looking for reliable roofing in ${cfg.locationName}, ${cfg.state}? ${DEFAULTS.businessName} provides roof repairs, restoration, replacement and maintenance services across ${cfg.locationName}.`;

  const keywords = [
    `roofing ${cfg.locationName}`,
    `roof repairs ${cfg.locationName}`,
    `roof restoration ${cfg.locationName}`,
    `roof replacement ${cfg.locationName}`,
    `roofers ${cfg.locationName}`,
    `${cfg.locationName} roofing company`,
    `roof maintenance ${cfg.locationName}`,
  ].join(", ");

  return {
    path,
    canonical,
    title,
    description,
    keywords,
    ogTitle: title,
    ogDescription: description,
    country,
  };
}

function buildJsonLd(cfg: LocationSEOConfig, content: LocationContent) {
  const seo = buildSeo(cfg);

  const faqEntities =
    content.faq?.items?.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })) ?? [];

  const graph: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "@id": `${seo.canonical}#business`,
      name: DEFAULTS.businessName,
      url: DEFAULTS.baseUrl,
      telephone: DEFAULTS.phone,
      areaServed: {
        "@type": "City",
        name: cfg.locationName,
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: cfg.country ?? "Australia",
        addressRegion: cfg.state,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${seo.canonical}#webpage`,
      url: seo.canonical,
      name: seo.title,
      description: seo.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "@id": `${seo.canonical}#place`,
      name: `${cfg.locationName}, ${cfg.state}`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: cfg.latitude,
        longitude: cfg.longitude,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${seo.canonical}#service`,
      name: `Roofing Services in ${cfg.locationName}`,
      serviceType: "Roofing",
      provider: {
        "@id": `${seo.canonical}#business`,
      },
      areaServed: {
        "@type": "City",
        name: cfg.locationName,
      },
      url: seo.canonical,
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: DEFAULTS.phone,
      },
    },
  ];

  if (faqEntities.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntities,
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

/*
|--------------------------------------------------------------------------
| SEO COMPONENT
|--------------------------------------------------------------------------
*/

function LocationSEO({
  config,
  content,
}: {
  config: LocationSEOConfig;
  content: LocationContent;
}) {
  const seo = buildSeo(config);
  const jsonLd = useMemo(() => buildJsonLd(config, content), [config, content]);

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={seo.canonical} />

      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:type" content="website" />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}

/*
|--------------------------------------------------------------------------
| UI HELPERS
|--------------------------------------------------------------------------
*/

function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| HERO WITH FORM
|--------------------------------------------------------------------------
*/

function HeroWithForm({
  cfg,
  content,
}: {
  cfg: LocationSEOConfig;
  content: LocationContent;
}) {
  const bg = cfg.heroBg ?? DEFAULTS.defaultHeroBg;
  const FORM_NAME = "Location form";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    setIsSubmitting(true);
    setShowSuccess(false);

    try {
      const response = await submitNetlifyForm({
        form,
        endpoint: "/",
        fullName: {
          firstField: "firstName",
          lastField: "lastName",
          targetField: "fullName",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setShowSuccess(true);
      form.reset();
      window.setTimeout(() => setShowSuccess(false), 6000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="text-white">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            {content.hero.eyebrow ?? `Roofing Services in ${cfg.locationName}`}
          </div>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl text-white">
            {content.hero.titleTop}
            {content.hero.titleBottom ? (
              <>
                <br />
                {content.hero.titleBottom}
              </>
            ) : null}
          </h1>

          {content.hero.subtitle ? (
            <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
              {content.hero.subtitle}
            </p>
          ) : null}

          <div className="mt-6 space-y-3">
            {content.hero.bullets.map((t, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#169fc3]" />
                <span>{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={`tel:${DEFAULTS.phone}`}
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-black transition hover:bg-[#169fc3] hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {DEFAULTS.phone}
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8">
          <h2 className="text-2xl font-bold leading-tight">
            Request a FREE Quote{" "}
            <span className="text-[#169fc3]">TODAY</span>
          </h2>

          {showSuccess && (
            <div className="mt-4 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              Thanks! We'll contact you shortly.
            </div>
          )}

          <form
            name={FORM_NAME}
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="mt-5"
          >
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <input type="hidden" name="location" value={cfg.locationName} />
            <input type="hidden" name="state" value={cfg.state} />
            <input type="hidden" name="fullName" />

            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="firstName"
                type="text"
                placeholder="First name"
                required
                className="h-11 rounded-md border px-3 text-sm outline-none focus:border-[#169fc3]"
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last name"
                required
                className="h-11 rounded-md border px-3 text-sm outline-none focus:border-[#169fc3]"
              />
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="h-11 rounded-md border px-3 text-sm outline-none focus:border-[#169fc3]"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                required
                className="h-11 rounded-md border px-3 text-sm outline-none focus:border-[#169fc3]"
              />
            </div>

            <textarea
              name="message"
              placeholder={`Tell us about your roofing project in ${cfg.locationName}`}
              rows={5}
              className="mt-4 w-full rounded-md border px-3 py-3 text-sm outline-none focus:border-[#169fc3]"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-5 h-11 rounded-md bg-[#169fc3] text-center font-semibold tracking-wide text-white shadow-sm transition-colors hover:bg-[#ff1616] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="inline-flex items-center justify-center gap-2">
                <Send className="h-4 w-4" />
                {isSubmitting ? "SENDING..." : "GET QUOTE"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| MAIN PAGE TEMPLATE
|--------------------------------------------------------------------------
*/

export function LocationPageTemplate({
  config,
  content,
}: {
  config: LocationSEOConfig;
  content: LocationContent;
}) {
  const ctaHref = content.cta.buttonHref ?? "/contact/";
  const ctaText = content.cta.buttonText ?? "GET QUOTE";

  return (
    <div className="min-h-screen flex flex-col">
      <LocationSEO config={config} content={content} />
      <Header />
      <HeroWithForm cfg={config} content={content} />

      <Section className="py-14 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {content.intro.heading}
        </h2>

        <div
          className="space-y-4 text-sm md:text-base leading-relaxed"
          style={{ color: "#666666" }}
        >
          {content.intro.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-6">
          <Button asChild className="rounded-md">
            <a href={ctaHref}>{ctaText}</a>
          </Button>

          <Button asChild variant="outline" className="rounded-md">
            <a href={`tel:${DEFAULTS.phone}`} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              CALL US {DEFAULTS.phone}
            </a>
          </Button>
        </div>
      </Section>

      <Section className="py-14 bg-[#F6F6F6]">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {content.services.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.services.items.map((s) => (
            <div key={s.title} className="bg-white rounded-lg border shadow-sm p-6">
              <div className="font-bold mb-2">{s.title}</div>
              <div
                className="text-sm leading-relaxed"
                style={{ color: "#666666" }}
              >
                {s.text}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {content.whyChooseUs?.points?.length ? (
        <Section className="py-14 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {content.whyChooseUs.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.whyChooseUs.points.map((p) => (
              <div key={p.title} className="bg-white rounded-lg border shadow-sm p-6">
                <div className="font-bold mb-2">{p.title}</div>
                <div
                  className="text-sm leading-relaxed"
                  style={{ color: "#666666" }}
                >
                  {p.text}
                </div>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {content.areas?.items?.length ? (
        <Section className="py-14 bg-[#F6F6F6]">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {content.areas.heading}
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {content.areas.items.map((area) => (
              <div
                key={area}
                className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm"
              >
                <MapPin className="h-4 w-4" />
                {area}
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {content.faq?.items?.length ? (
        <Section className="py-14 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {content.faq.heading}
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {content.faq.items.map((item) => (
              <div
                key={item.question}
                className="rounded-lg border shadow-sm p-6 bg-white"
              >
                <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                <p className="text-sm leading-relaxed text-[#666666]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="py-14 bg-white">
        <div className="rounded-2xl border-2 border-black/70 bg-white shadow-md p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {content.cta.heading}
          </h2>

          <p className="text-sm md:text-base mb-6" style={{ color: "#666666" }}>
            {content.cta.text}
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild className="rounded-md">
              <a href={ctaHref}>{ctaText}</a>
            </Button>

            <Button asChild variant="outline" className="rounded-md">
              <a href={`tel:${DEFAULTS.phone}`} className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                CALL US {DEFAULTS.phone}
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTA />  

      <Footer />
      <FloatingBanner />
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| ROUTE FACTORY
|--------------------------------------------------------------------------
*/

export function createLocationRoute(
  config: LocationSEOConfig,
  content: LocationContent
) {
  const seo = buildSeo(config);

  const Page = () => <LocationPageTemplate config={config} content={content} />;

  const route = {
    path: seo.path,
    element: <Page />,
    handle: {
      title: seo.title,
      meta: [
        { name: "description", content: seo.description },
        { name: "keywords", content: seo.keywords },
      ],
    },
  } satisfies Route;

  return { Page, route };
}