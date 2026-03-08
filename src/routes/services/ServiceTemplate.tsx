// src/routes/services/ServiceTemplate.tsx
import type { Route } from "react-router";
import { useMemo, useState, type FormEvent, type ReactNode } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingBanner from "@/components/layout/FloatingBanner";

import FaqSection from "@/components/FaqSection";
import ContentBlock3 from "@/components/ContentBlock3";

import { submitNetlifyForm } from "@/lib/netlifyForm";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Send } from "lucide-react";

/**
 * ✅ Adaptación para el proyecto actual:
 * - URLs por defecto: /services/<service-slug>/
 * - Mantiene el patrón: Template (layout + SEO) + Page mínima (config/content)
 * - Incluye variables de ubicación, meta tags y JSON-LD
 */

export type ServiceSEOConfig = {
  serviceName: string; // e.g. "Roof Painting"
  serviceSlug: string; // e.g. "roof-painting"

  // Ubicación / área (puede ser ciudad, suburb, región)
  areaName: string; // e.g. "Sydney"
  areaSlug: string; // e.g. "sydney"
  latitude: string; // "-33.8688"
  longitude: string; // "151.2093"

  state?: string; // default: "NSW"
  country?: string; // default: "Australia"

  // Ruta final (si quieres controlar el path exacto)
  // Ej: "/services/roof-painting/" ó "/roof-painting/" (si fueras a usar otro formato)
  path?: string;

  // Hero background (opcional)
  heroBg?: string; // e.g. "/images/hero-roof.webp"
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
    points: Array<{ title: string; text: string }>;
  };

  process: {
    heading: string;
    steps: Array<{ title: string; text: string }>;
  };

  testimonial: {
    name: string;
    areaName: string;
    quote: string;
    rating?: number; // default 5
  };

  cta: {
    heading: string;
    text: string;
    buttonText?: string; // default: "GET QUOTE"
    buttonHref?: string; // default: "/contact/"
  };
};

/**
 * IMPORTANT:
 * Ajusta estos defaults al proyecto actual.
 * Si tienes un archivo de config global (site.ts / constants), puedes reemplazar DEFAULTS
 * por imports desde ahí.
 */
const DEFAULTS = {
  baseUrl: "https://garicroofs.com.au", // <-- cambia si el dominio final es otro
  businessName: "Garic Roofs", // <-- cambia al nombre real del negocio
  phone: "0000000000", // <-- cambia al teléfono real
  defaultHeroBg: "/images/hero-roof.webp",
};

function buildPath(cfg: ServiceSEOConfig) {
  // ✅ Formato requerido: /services/service-name/
  return cfg.path ?? `/services/${cfg.serviceSlug}/`;
}

function buildSeo(cfg: ServiceSEOConfig) {
  const state = cfg.state ?? "NSW";
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
  const state = cfg.state ?? "NSW";
  const country = cfg.country ?? "Australia";

  // Schema recomendado: Service + Provider (Local business) + Place (geo)
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
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
        schemaType="RoofingContractor"
        location={config.areaSlug}
        customName={DEFAULTS.businessName}
        customDescription={seo.description}
      />
      <link rel="canonical" href={seo.canonical} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}

function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={className}>
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">{children}</div>
    </section>
  );
}

function TestimonialCard({ t }: { t: ServiceContent["testimonial"] }) {
  const stars = Math.max(1, Math.min(5, t.rating ?? 5));
  return (
    <div className="rounded-lg border shadow-sm p-6 bg-white">
      <div className="text-sm font-bold mb-2">{t.name}</div>
      <div className="text-xs text-[#666666] mb-3">
        {"★".repeat(stars)}{"☆".repeat(5 - stars)} <span className="ml-2">({t.areaName})</span>
      </div>
      <p className="text-sm leading-relaxed text-[#666666]">{t.quote}</p>
    </div>
  );
}

function HeroWithForm({ cfg, content }: { cfg: ServiceSEOConfig; content: ServiceContent }) {
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
        fullName: { firstField: "firstName", lastField: "lastName", targetField: "fullName" },
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

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
    <section className="relative">
      <div className="relative bg-cover bg-center" style={{ backgroundImage: `url('${bg}')` }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative pt-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-[#179DC2]/90 px-3 py-1 rounded-md text-xs font-bold mb-4">
                <span>A1</span>
                <span className="opacity-70">/</span>
                <span>{content.hero.eyebrow ?? `${content.hero.titleTop} in ${cfg.areaName}`}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                {content.hero.titleTop}
                <br />
                {content.hero.titleBottom}
              </h1>

              <div className="mt-6 space-y-3 text-white/90 text-sm md:text-base">
                {content.hero.bullets.map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <span className="font-semibold">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex justify-end">
                <a
                  href={`tel:${DEFAULTS.phone}`}
                  className="inline-flex items-center gap-2 bg-white/90 text-black px-4 py-2 rounded-md font-bold shadow"
                >
                  <Phone className="h-4 w-4 text-red-600" />
                  {DEFAULTS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote card overlap */}
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative -mt-16 pb-10">
        <div className="mx-auto max-w-3xl rounded-xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="px-6 pt-6 pb-4 text-center">
            <div className="text-xl md:text-2xl font-extrabold">
              Request a <span className="text-[#179DC2]">FREE</span> Quote{" "}
              <span className="text-[#179DC2]">TODAY</span>
            </div>

            {showSuccess && <div className="mt-2 text-sm text-emerald-700">Thanks! We&apos;ll contact you shortly.</div>}
          </div>

          <form
            name={FORM_NAME}
            method="POST"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="px-6 pb-6"
          >
            {/* Netlify required hidden inputs */}
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value={FORM_NAME} />

            {/* Optional: helps Netlify show full name in UI */}
            <input type="hidden" name="fullName" value="" />

            {/* Context for submissions */}
            <input type="hidden" name="serviceName" value={cfg.serviceName} />
            <input type="hidden" name="serviceSlug" value={cfg.serviceSlug} />
            <input type="hidden" name="areaName" value={cfg.areaName} />
            <input type="hidden" name="areaSlug" value={cfg.areaSlug} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="h-11 rounded-md border border-gray-300 bg-white px-4 text-base text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-400"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="h-11 rounded-md border border-gray-300 bg-white px-4 text-base text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="h-11 rounded-md border border-gray-300 bg-white px-4 text-base text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="h-11 rounded-md border border-gray-300 bg-white px-4 text-base text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-400"
              />
              <input
                type="text"
                name="suburb"
                placeholder="Suburb"
                defaultValue={cfg.areaName}
                className="h-11 rounded-md border border-gray-300 bg-white px-4 text-base text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-400 md:col-span-2"
              />
              <textarea
                name="issue"
                placeholder="What seems to be the issue?"
                className="min-h-[110px] rounded-md border border-gray-300 bg-white px-4 py-3 text-base text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-400 md:col-span-2"
              />
            </div>

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

export function ServicePageTemplate({ config, content }: { config: ServiceSEOConfig; content: ServiceContent }) {
  const ctaHref = content.cta.buttonHref ?? "/contact/";
  const ctaText = content.cta.buttonText ?? "GET QUOTE";

  return (
    <div className="min-h-screen flex flex-col">
      <ServiceSEO config={config} />
      <Header />

      <HeroWithForm cfg={config} content={content} />

      {/* Intro */}
      <Section className="py-14 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{content.intro.heading}</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "#666666" }}>
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

      {/* Why */}
      <Section className="py-14 bg-[#F6F6F6]">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{content.why.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.why.points.map((p) => (
            <div key={p.title} className="bg-white rounded-lg border shadow-sm p-6">
              <div className="font-bold mb-2">{p.title}</div>
              <div className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                {p.text}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="py-14 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{content.process.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.process.steps.map((s, idx) => (
            <div key={s.title} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#179DC2] text-white font-bold flex items-center justify-center flex-shrink-0">
                {idx + 1}
              </div>
              <div>
                <div className="font-bold mb-1">{s.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  {s.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section className="py-12 bg-[#F6F6F6]">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Customer Review</h2>
        <div className="max-w-2xl mx-auto">
          <TestimonialCard t={content.testimonial} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-14 bg-white">
        <div className="rounded-2xl border-2 border-black/70 bg-white shadow-md p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{content.cta.heading}</h2>
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

      {/* Reusa bloques globales del sitio */}
      <ContentBlock3 />
      <MapWithForm />
      <FaqSection />

      <Footer />
      <FloatingBanner />
    </div>
  );
}

/**
 * Factory para crear páginas mínimas:
 * const { Page, route } = createServiceRoute(config, content);
 * export const route = route;
 * export default Page;
 */
export function createServiceRoute(config: ServiceSEOConfig, content: ServiceContent) {
  const seo = buildSeo(config);

  const Page = () => <ServicePageTemplate config={config} content={content} />;

  const route = {
    path: seo.path, // ✅ por defecto: /services/<serviceSlug>/
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