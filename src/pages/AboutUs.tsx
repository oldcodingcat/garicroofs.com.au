// src/pages/AboutUs.tsx

import { Helmet } from "react-helmet-async";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingBanner } from "@/components/layout/FloatingBanner";
import { CTA } from "@/components/CTA";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us | Sydney Elite Roofing Painting</title>
        <meta
          name="description"
          content="Learn more about Sydney Elite Roofing Painting, trusted roofing specialists providing roof painting, roof restoration and roof repairs across Sydney."
        />
        <link rel="canonical" href="https://sydneyeliteroofingpainting.com.au/about-us" />
      </Helmet>

      <Header />

      {/* HERO */}
      <section className="bg-black text-white pt-40 pb-24 md:pt-48">
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
            About Our Company
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Trusted Roofing Specialists in Sydney
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl">
            Sydney Elite Roofing Painting is a team of experienced roofing
            professionals dedicated to delivering high-quality roof painting,
            roof restoration, and roof repair services across Sydney. Our goal
            is simple: extend the life of your roof while improving the overall
            appearance and protection of your property.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Professional Roof Painting & Restoration Experts
            </h2>

            <p className="text-gray-600 mb-6">
              With years of experience in the roofing industry, Sydney Elite
              Roofing Painting has built a reputation for reliability,
              craftsmanship, and attention to detail. We specialise in roof
              painting, roof cleaning, roof restoration and roof repairs for
              residential and commercial properties throughout Sydney.
            </p>

            <p className="text-gray-600 mb-6">
              Our team understands the harsh Australian climate and how it
              affects roofing materials. That’s why we use premium roof coatings
              and proven restoration techniques to ensure long-lasting results
              and maximum protection against sun, rain and weather damage.
            </p>

            <p className="text-gray-600">
              Whether your roof needs a complete restoration or a professional
              roof paint job to refresh its appearance, we provide tailored
              solutions designed to improve durability, energy efficiency and
              property value.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-10">
            <h3 className="text-2xl font-semibold mb-4">
              Why Homeowners Choose Us
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>✔ Experienced roofing professionals</li>
              <li>✔ High-quality roof coatings and materials</li>
              <li>✔ Competitive and transparent pricing</li>
              <li>✔ Reliable service across Sydney</li>
              <li>✔ Long-lasting roof restoration solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Roofing Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">
                Roof Painting
              </h3>
              <p className="text-gray-600">
                Professional roof painting services that restore the colour,
                protection and appearance of your roof using premium coatings
                designed for Australian conditions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">
                Roof Restoration
              </h3>
              <p className="text-gray-600">
                Comprehensive roof restoration including cleaning, repairs,
                resealing and protective coatings to extend the lifespan of
                your roof and improve structural integrity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">
                Roof Repairs
              </h3>
              <p className="text-gray-600">
                Fast and reliable roof repair services to fix leaks, damaged
                tiles, cracked surfaces and other roofing issues before they
                become major problems.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-gray-600 mb-6">
            Our mission is to provide dependable roofing solutions that protect
            homes and businesses across Sydney. We believe that a properly
            maintained roof is essential for the safety, energy efficiency and
            long-term value of any property.
          </p>

          <p className="text-gray-600">
            By combining expert workmanship, high-quality materials and honest
            customer service, Sydney Elite Roofing Painting continues to be a
            trusted choice for roof painting and roof restoration services in
            Sydney.
          </p>

        </div>
      </section>

      {/* CTA */}
      <CTA /> 

      <Footer />
      <FloatingBanner />
    </>
  );
}