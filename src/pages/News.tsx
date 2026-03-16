// src/pages/News.tsx

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingBanner } from "@/components/layout/FloatingBanner";
import { CTA } from "@/components/CTA";

type Article = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
};

const articles: Article[] = [
  {
    title: "How Often Should You Inspect Your Roof in Sydney?",
    slug: "/news/roof-inspection-frequency-sydney",
    category: "Roof Maintenance",
    date: "March 2026",
    excerpt:
      "Regular roof inspections are essential to prevent leaks, storm damage and expensive repairs. Learn how often Sydney homeowners should inspect their roofs and what warning signs to look for.",
  },
  {
    title: "The Most Common Roof Leaks in Australian Homes",
    slug: "/news/common-roof-leaks-australia",
    category: "Roof Repairs",
    date: "March 2026",
    excerpt:
      "Roof leaks are one of the most frequent problems homeowners face. Discover the most common causes of roof leaks in Australia and how professional roofers fix them.",
  },
  {
    title: "Tile Roof vs Metal Roof: Which Is Better for Australian Homes?",
    slug: "/news/tile-roof-vs-metal-roof-australia",
    category: "Roof Replacement",
    date: "February 2026",
    excerpt:
      "Choosing between tile roofing and metal roofing can be challenging. This guide compares durability, cost, maintenance and energy efficiency for Australian properties.",
  },
  {
    title: "How Storms Damage Roofs in NSW",
    slug: "/news/storm-roof-damage-nsw",
    category: "Storm Damage",
    date: "February 2026",
    excerpt:
      "Severe storms across New South Wales can cause significant roof damage. Learn the signs of storm damage and when to call a roofing contractor.",
  },
  {
    title: "Signs Your Roof Needs Immediate Repair",
    slug: "/news/signs-roof-needs-repair",
    category: "Roof Repairs",
    date: "January 2026",
    excerpt:
      "Small roofing issues can quickly become major structural problems. Discover the warning signs that indicate your roof needs urgent repairs.",
  },
  {
    title: "How Roof Painting Extends Roof Lifespan",
    slug: "/news/roof-painting-benefits",
    category: "Roof Painting",
    date: "January 2026",
    excerpt:
      "Professional roof painting protects roofing materials from harsh weather and UV exposure. Learn how roof coating and painting extend roof life.",
  },
];

export default function News() {
  return (
    <>
      <Helmet>
        <title>Roofing News & Advice | Roof Repairs, Maintenance & Roofing Guides</title>
        <meta
          name="description"
          content="Latest roofing news, maintenance advice and roof repair guides. Learn about roof leaks, roof painting, roof restoration and roofing tips for Australian homes."
        />
        <link rel="canonical" href="https://garicroofs.com.au/news/" />
      </Helmet>

      <Header />
      <FloatingBanner />

      <main className="bg-white">

        {/* HERO */}
        <section className="pt-40 pb-20 bg-neutral-100 md:pt-48">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roofing News, Advice & Industry Insights
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest roofing news, maintenance tips,
              repair advice and roofing industry insights. Our articles help
              homeowners and property managers understand roof problems,
              prevent costly damage and make informed roofing decisions.
            </p>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="border rounded-lg p-6 hover:shadow-lg transition"
                >
                  <div className="text-sm text-gray-500 mb-2">
                    {article.category} • {article.date}
                  </div>

                  <h2 className="text-xl font-bold mb-3">
                    <Link
                      to={article.slug}
                      className="hover:text-primary transition"
                    >
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <Link
                    to={article.slug}
                    className="text-sm font-semibold hover:underline"
                  >
                    Read Article →
                  </Link>
                </article>
              ))}

            </div>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="py-20 bg-neutral-100">
          <div className="max-w-4xl mx-auto px-10">

            <h2 className="text-3xl font-bold mb-6">
              Roofing Knowledge & Expert Advice
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Our roofing news section provides valuable information about roof
              repairs, roof restoration, roof painting and preventative roof
              maintenance. Whether you own a residential property, commercial
              building or strata property, understanding how roofs deteriorate
              and how they should be maintained is essential for protecting your
              investment.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Australian roofs are exposed to extreme weather conditions
              including intense UV radiation, storms, heavy rain and wind.
              These conditions can gradually weaken roofing materials and lead
              to problems such as leaks, cracked tiles, rusted metal roofing and
              damaged flashing.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Through our articles we explain common roofing issues, provide
              expert roofing advice and help property owners understand when
              professional roof repairs or roof restoration services are
              required.
            </p>

          </div>
        </section>

        {/* CTA */}
        <CTA />  

      </main>

      <Footer />
    </>
  );
}