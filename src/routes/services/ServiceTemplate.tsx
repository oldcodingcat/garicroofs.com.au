// src/routes/services/ServiceTemplate.tsx

import type { Route } from "react-router";
import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingBanner } from "@/components/layout/FloatingBanner";

// import { submitNetlifyForm } from "@/lib/netlifyForm";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Send } from "lucide-react";

export type ServiceSEOConfig = {
  serviceName: string;
  serviceSlug: string;
  areaName: string;
  areaSlug: string;
  latitude: string;
  longitude: string;
  state?: string;
  country?: string;
  path?: string;
  heroBg?: string;
};

export type ServiceContent = {
  hero: {
    eyebrow?: string;
    titleTop: string;
    titleBottom: string;
    bullets: string[];
  };
  intro: {
    heading: string;
    paragraphs: string[];
  };
  why: {
    heading: string;
    points: Array<{
      title: string;
      text: string;
    }>;
  };
  process: {
    heading: string;
    steps: Array<{
      title: string;
      text: string;
    }>;
  };
  testimonials: Array<{
    name: string;
    areaName?: string;
    quote: string;
    rating?: number;
  }>;
  cta: {
    heading: string;
    text: string;
    buttonText?: string;
    buttonHref?: string;
  };
};

const DEFAULTS = {
  baseUrl: "https://garicroofs.com.au",
  businessName: "Garic Roofs",
  phone: "0399610678",
  defaultHeroBg: "/images/services/safety-roof-anchors.webp",
};

function buildPath(cfg: ServiceSEOConfig) {
  return cfg.path ?? `/services/${cfg.serviceSlug}/`;
}

function buildSeo(cfg: ServiceSEOConfig) {
  const state = cfg.state ?? "VIC";
  const country = cfg.country ?? "Australia";
  const path = buildPath(cfg);
  const canonical = `${DEFAULTS.baseUrl}${path}`;
  const title = `${cfg.serviceName} ${cfg.areaName} | ${DEFAULTS.businessName}`;
  const description = `Professional ${cfg.serviceName.toLowerCase()} in ${cfg.areaName}, ${state}, ${country}. Trusted team, quality workmanship, and transparent quotes. Request a free quote today.`;

  const keywords = [
    `${cfg.serviceName} ${cfg.areaName}`,
    `${cfg.serviceName} ${state}`,
    `${cfg.serviceName} near me ${cfg.areaName}`,
    `${cfg.areaName} roofers`,
    `${cfg.areaName} roofing company`,
    `roof services ${cfg.areaName}`,
  ]
    .map((k) => k.toLowerCase())
    .join(", ");

  return {
    path,
    canonical,
    title,
    description,
    keywords,
    ogTitle: title,
    ogDescription: description,
  };
}

function buildJsonLd(cfg: ServiceSEOConfig) {
  const seo = buildSeo(cfg);
  const state = cfg.state ?? "VIC";
  const country = cfg.country ?? "Australia";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${seo.canonical}#business`,
        name: DEFAULTS.businessName,
        url: DEFAULTS.baseUrl,
        telephone: DEFAULTS.phone,
        address: {
          "@type": "PostalAddress",
          addressCountry: country,
          addressRegion: state,
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: `${cfg.areaName}, ${state}, ${country}`,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${seo.canonical}#service`,
        name: `${cfg.serviceName} in ${cfg.areaName}`,
        serviceType: cfg.serviceName,
        areaServed: {
          "@type": "AdministrativeArea",
          name: `${cfg.areaName}, ${state}, ${country}`,
        },
        provider: {
          "@id": `${seo.canonical}#business`,
        },
        url: seo.canonical,
        availableChannel: {
          "@type": "ServiceChannel",
          servicePhone: DEFAULTS.phone,
        },
      },
      {
        "@type": "Place",
        "@id": `${seo.canonical}#place`,
        name: cfg.areaName,
        geo: {
          "@type": "GeoCoordinates",
          latitude: cfg.latitude,
          longitude: cfg.longitude,
        },
      },
    ],
  };
}

export function ServiceSEO({ config }: { config: ServiceSEOConfig }) {
  const seo = buildSeo(config);
  const jsonLd = useMemo(() => buildJsonLd(config), [config]);

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

function TestimonialCard({ t }: { t: ServiceContent["testimonials"][number] }) {
  const stars = Math.max(1, Math.min(5, t.rating ?? 5));

  return (
    <div className="rounded-lg border shadow-sm p-6 bg-white h-full">
      <div className="text-sm font-bold mb-2">{t.name}</div>

      <div className="text-xs text-[#666666] mb-3">
        {"★".repeat(stars)}
        {"☆".repeat(5 - stars)}
        {t.areaName && <span className="ml-2">({t.areaName})</span>}
      </div>

      <p className="text-sm leading-relaxed text-[#666666]">{t.quote}</p>
    </div>
  );
}

function HeroWithForm({
  cfg,
  content,
}: {
  cfg: ServiceSEOConfig;
  content: ServiceContent;
}) {
  const bg = cfg.heroBg ?? DEFAULTS.defaultHeroBg;
  const FORM_NAME = "Service form";

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
            {content.hero.eyebrow ?? `${content.hero.titleTop} in ${cfg.areaName}`}
          </div>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {content.hero.titleTop}
            <br />
            {content.hero.titleBottom}
          </h1>

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
            <input type="hidden" name="service" value={cfg.serviceName} />
            <input type="hidden" name="area" value={cfg.areaName} />
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
              placeholder="Tell us about your roofing project"
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

export function ServicePageTemplate({
  config,
  content,
}: {
  config: ServiceSEOConfig;
  content: ServiceContent;
}) {
  const ctaHref = content.cta.buttonHref ?? "/contact/";
  const ctaText = content.cta.buttonText ?? "GET QUOTE";

  return (
    <div className="min-h-screen flex flex-col">
      <ServiceSEO config={config} />
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
          {content.why.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.why.points.map((p) => (
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

      <Section className="py-14 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {content.process.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.process.steps.map((s, idx) => (
            <div key={s.title} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#179DC2] text-white font-bold flex items-center justify-center flex-shrink-0">
                {idx + 1}
              </div>

              <div>
                <div className="font-bold mb-1">{s.title}</div>
                <div
                  className="text-sm leading-relaxed"
                  style={{ color: "#666666" }}
                >
                  {s.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-12 bg-[#F6F6F6]">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
          Customer Reviews
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.areaName ?? index}`}
              t={testimonial}
            />
          ))}
        </div>
      </Section>

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

      <Footer />
      <FloatingBanner />
    </div>
  );
}

export function createServiceRoute(
  config: ServiceSEOConfig,
  content: ServiceContent
) {
  const seo = buildSeo(config);

  const Page = () => <ServicePageTemplate config={config} content={content} />;

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