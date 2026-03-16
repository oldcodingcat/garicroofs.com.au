// src/pages/CompletedJobs.tsx

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Hammer,
  Paintbrush2,
  Wrench,
  Phone,
  MapPin,
  Star,
} from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingBanner } from "@/components/layout/FloatingBanner";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";

type CompletedJob = {
  id: string;
  title: string;
  location: string;
  service: string;
  intro: string;
  scope: string[];
  outcome: string;
  images: string[];
};

const completedJobs: CompletedJob[] = [
  {
    id: "4513",
    title: "Metal Re-Roof Project",
    location: "Doncaster",
    service: "Roof Replacement / Metal Re-Roof",
    intro:
      "This completed roofing project involved replacing an ageing tiled roof with a modern corrugated metal roofing system designed for long-term durability, improved weather protection, and a cleaner architectural finish.",
    images: [
      "/images/completed-jobs/hornsby-1.jpg",
      "/images/completed-jobs/hornsby-2.jpg",
      "/images/completed-jobs/hornsby-3.jpg",
      "/images/completed-jobs/hornsby-4.jpg",
    ],
    scope: [
      "Removed the existing roof tiles and disposed of all materials appropriately.",
      "Installed new 40mm metal top hat battens at compliant centres.",
      "Installed 50mm roofing wool sarking blanket to help improve waterproofing, thermal comfort, and noise reduction.",
      "Installed new corrugated metal roof sheets in the client’s selected colour.",
      "Installed roll-top ridge capping, trims, and flashings to suit the new roof system.",
      "Supplied site safety measures where required for safe roof access.",
      "Removed site waste and supplied final rubbish disposal.",
      "Supplied and installed two whirlybirds for improved roof ventilation.",
    ],
    outcome:
      "The result was a stronger, lower-maintenance roof replacement that improved the home’s street appeal while delivering better performance in wet and hot Australian conditions.",
  },
  {
    id: "6308",
    title: "Roof Restoration & Roof Painting",
    location: "Brighton",
    service: "Roof Restoration / Roof Painting",
    intro:
      "This completed roof restoration project focused on extending the life of an existing tiled roof through a full clean, repair assessment, ridge capping restoration, and protective coating system.",
    images: [
      "/images/completed-jobs/terrey-1.jpg",
      "/images/completed-jobs/terrey-2.jpg",
      "/images/completed-jobs/terrey-3.jpg",
    ],
    scope: [
      "High-pressure cleaned the entire roof surface back to a sound base, ready for preparation and coating.",
      "Restored ridge capping with a high-grade flexible compound.",
      "Assessed the roof for damaged, broken, and aged tiles and replaced where required.",
      "Checked valleys, penetrations, and flashings for early signs of water ingress and sealed vulnerable areas.",
      "Cleaned valleys, gutters, and downpipes and removed debris from site.",
      "Applied roof primer and sealer in line with Australian roofing standards.",
    ],
    outcome:
      "The finished roof presented cleaner, fresher, and more weather-resistant, helping protect the property and restore the appearance of the home without the cost of a full replacement.",
  },
];

const faqs = [
  {
    q: "What types of roofing jobs does Garic Roofs complete?",
    a: "We complete a wide range of residential and commercial roofing works, including roof repairs, roof restorations, roof replacements, metal re-roofing, tile roof repairs, leak repairs, flashing works, ridge capping repairs, and gutter-related roofing upgrades.",
  },
  {
    q: "Do completed jobs include both tile and metal roofing?",
    a: "Yes. Our completed roofing projects include both tile roofing and metal roofing systems. We work on everything from small repair jobs through to full roof replacement projects.",
  },
  {
    q: "Why is a completed jobs page important when choosing a roofer?",
    a: "A completed jobs page gives homeowners and property managers a clearer picture of the type of roofing work a company performs, the standard of workmanship they deliver, and the kinds of roofing issues they solve on real projects.",
  },
  {
    q: "Can Garic Roofs help with roof replacement as well as restoration?",
    a: "Yes. Depending on the age, condition, and material of your existing roof, we can recommend whether a roof restoration, roof repair, or complete roof replacement is the most suitable option.",
  },
  {
    q: "Do you provide quotes for similar roofing jobs?",
    a: "Yes. If you have a roof that needs repairs, restoration, painting, or replacement, you can contact Garic Roofs for a quote and we can assess the scope of work required.",
  },
  {
    q: "Do completed jobs improve trust for local SEO and customer conversions?",
    a: "Yes. Detailed completed project pages help demonstrate experience, add topical relevance around roofing services and locations, and give potential customers more confidence before making an enquiry.",
  },
];

export default function CompletedJobs() {
  const canonicalUrl = "https://garicroofs.com.au/completed-jobs/";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Completed Jobs | Garic Roofs",
    url: canonicalUrl,
    description:
      "Explore completed roofing jobs by Garic Roofs, including roof restorations, roof replacements, metal roofing projects, and repair works completed across local service areas.",
    mainEntity: completedJobs.map((job) => ({
      "@type": "CreativeWork",
      name: `${job.title} – ${job.location}`,
      description: `${job.service}. ${job.intro} ${job.outcome}`,
      image: job.images,
      provider: {
        "@type": "RoofingContractor",
        name: "Garic Roofs",
        url: "https://garicroofs.com.au/",
      },
      areaServed: {
        "@type": "Place",
        name: job.location,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>
          Completed Jobs | Roof Restorations, Re-Roofs & Roofing Projects
        </title>
        <meta
          name="description"
          content="View completed roofing jobs by Garic Roofs, including roof restorations, metal re-roof projects, roof painting, repairs, and replacement works across local service areas."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="bg-white text-[#1f2937]">
        <section className="relative overflow-hidden bg-black pt-20 pb-16 md:pt-26">
          <div className="absolute inset-0" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-4xl">
              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Completed Roofing Jobs That Show the Quality of Our Work
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Explore recent roofing projects completed by Garic Roofs,
                including roof restoration, roof replacement, roof painting,
                metal re-roofing, and related repair works. This page gives
                homeowners and property managers a better look at the type of
                roofing solutions we deliver and the workmanship we bring to
                every project.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="min-w-[190px]">
                  <Link to="/contact-us">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-w-[190px] border-white bg-transparent text-white hover:bg-white hover:text-[#0f172a]"
                >
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="flex items-center gap-3 text-white">
                    <Hammer className="h-5 w-5" />
                    <span className="font-semibold">Roof Replacements</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Tile-to-metal conversions, structural roof upgrades, and
                    long-lasting replacement systems.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="flex items-center gap-3 text-white">
                    <Paintbrush2 className="h-5 w-5" />
                    <span className="font-semibold">Roof Restorations</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Cleaning, rebedding, repointing, sealing, and roof painting
                    to restore appearance and protection.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="flex items-center gap-3 text-white">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="font-semibold">Reliable Workmanship</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Roofing work completed with attention to safety, compliance,
                    weather resistance, and finish quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#111827]">
                Real Roofing Projects Completed by a Local Roofing Team
              </h2>
              <p className="mt-5 text-base leading-8 text-[#4b5563]">
                When searching for a roofing contractor, many property owners
                want more than just a list of services. They want proof of
                experience, examples of completed work, and confidence that the
                company they choose can handle real roofing challenges. This
                completed jobs page helps do exactly that by showcasing genuine
                project types and the scope of works commonly carried out by
                Garic Roofs.
              </p>
              <p className="mt-5 text-base leading-8 text-[#4b5563]">
                From full metal re-roofs through to roof restoration and roof
                painting projects, these completed jobs demonstrate how we
                approach roofing works with practical problem-solving, quality
                materials, and a strong focus on long-term roof performance.
                Whether your roof is leaking, ageing, storm-damaged, faded, or
                simply due for an upgrade, reviewing completed roofing jobs can
                help you understand what solution may be right for your
                property.
              </p>
              <p className="mt-5 text-base leading-8 text-[#4b5563]">
                We work across a wide range of roofing needs, including tile
                roof repairs, metal roofing installations, flashing works,
                guttering upgrades, roof leak detection, roof restoration, and
                complete roof replacement. Each completed job reflects the goal
                of improving roof durability, presentation, weather resistance,
                and overall property value.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-[#111827]">
                Why browse completed jobs?
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  "See the type of roofing work we regularly complete.",
                  "Understand the difference between restoration and replacement.",
                  "Review examples of project scopes before requesting a quote.",
                  "Build trust through visible proof of experience and workmanship.",
                  "Get ideas for the right roofing solution for your own property.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0f766e]" />
                    <p className="text-sm leading-6 text-[#4b5563]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-white p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#111827]">
                  <Phone className="h-4 w-4" />
                  Need help with your roof?
                </div>
                <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                  Speak with Garic Roofs about roof repairs, roof restoration,
                  roof replacement, or urgent roofing issues.
                </p>
                <Button asChild className="mt-4 w-full">
                  <Link to="/contact-us">Get a Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-[#111827]">
                Featured Completed Jobs
              </h2>
              <p className="mt-4 text-base leading-8 text-[#4b5563]">
                Below are examples of roofing jobs completed by Garic Roofs.
                Each project highlights the type of roofing works undertaken,
                the practical scope involved, and the results achieved for the
                property.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {completedJobs.map((job) => (
                <article
                  key={job.id}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="border-b border-slate-200 bg-slate-900 px-6 py-6 sm:px-8">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                          Job #{job.id}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-white">
                          {job.title}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                          <MapPin className="mr-2 h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                          <Wrench className="mr-2 h-4 w-4" />
                          {job.service}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pt-8 sm:px-8">
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                      {job.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${job.title} ${job.location} photo ${i + 1}`}
                          className="h-48 w-full rounded-xl object-cover"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <h4 className="text-lg font-bold text-[#111827]">
                        Project Overview
                      </h4>
                      <p className="mt-4 text-base leading-8 text-[#4b5563]">
                        {job.intro}
                      </p>

                      <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#111827]">
                          <Star className="h-4 w-4" />
                          End Result
                        </div>
                        <p className="mt-2 text-sm leading-7 text-[#4b5563]">
                          {job.outcome}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#111827]">
                        Scope of Works Completed
                      </h4>
                      <div className="mt-4 grid gap-4">
                        {job.scope.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#16a34a]" />
                            <p className="text-sm leading-7 text-[#4b5563]">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#111827]">
                Roofing workmanship that lasts
              </h3>
              <p className="mt-4 text-base leading-8 text-[#4b5563]">
                Completed jobs are not just about appearance. They reflect the
                practical choices made to improve roof performance, reduce the
                likelihood of leaks, manage drainage properly, and help roofs
                stand up better to harsh weather conditions.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#111827]">
                Better decision-making for property owners
              </h3>
              <p className="mt-4 text-base leading-8 text-[#4b5563]">
                Looking at completed roofing projects can help you compare the
                likely scope, process, and outcome of restoration versus roof
                replacement. That makes it easier to choose the right service
                for your home or commercial building.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#111827]">
                Stronger SEO with useful service content
              </h3>
              <p className="mt-4 text-base leading-8 text-[#4b5563]">
                A well-built completed jobs page also strengthens the website by
                adding highly relevant roofing content around project types,
                roofing materials, locations, and common scopes of work that
                potential customers actively search for.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#111827] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Completed Jobs FAQs
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                These common questions help explain how completed roofing
                projects can guide your decision before booking a quote.
              </p>
            </div>

            <div className="mt-10 grid gap-5">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-50 px-6 py-10 shadow-sm sm:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#111827]">
                  Need a quote for roof repairs, restoration, or replacement?
                </h2>
                <p className="mt-4 text-base leading-8 text-[#4b5563]">
                  Whether you need a small repair, a complete roof restoration,
                  or a full metal re-roof, Garic Roofs can assess your roof and
                  recommend the most suitable solution for your property.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Button asChild size="lg">
                  <Link to="/contact-us">
                    Request Your Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline">
                  <Link to="/services">Browse Roofing Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA */}
      <CTA />

      <Footer />
      <FloatingBanner />
    </>
  );
}