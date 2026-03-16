import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingBanner } from "@/components/layout/FloatingBanner";
import { CTA } from "@/components/CTA";

export default function AboutOurProcess() {
  return (
    <>
      <Helmet>
        <title>Our Roofing Process | Professional Roofing Services</title>
        <meta
          name="description"
          content="Learn about our professional roofing process from inspection to completion. We deliver reliable roof repairs, roof painting and roof restoration services with quality workmanship."
        />
        <link rel="canonical" href="https://garicroofs.com.au/about-our-process" />
      </Helmet>

      <Header />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-black text-white pt-40 pb-20 px-6 md:pt-48">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Roofing Process
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              At Garic Roofs, we follow a structured and professional process to
              ensure every roofing project is completed safely, efficiently and
              to the highest standards. From the initial inspection to the final
              quality check, our team is committed to delivering reliable
              roofing solutions for residential and commercial properties.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              A Proven Process for Quality Roofing Results
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Roofing work requires careful planning, experienced tradespeople,
              and the right materials. Our proven process ensures that every
              roofing project — whether it is a roof repair, roof restoration,
              roof painting or emergency repair — is completed with precision
              and long-lasting results.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We focus on transparency, clear communication and attention to
              detail throughout every stage of the project. This approach allows
              us to deliver consistent results while providing our clients with
              complete peace of mind.
            </p>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-3xl font-bold text-center mb-12">
              Our Step-by-Step Roofing Process
            </h2>

            <div className="space-y-10">

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  1. Initial Consultation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The process begins with an initial consultation where we
                  discuss your roofing concerns, project requirements and
                  objectives. Whether you are dealing with roof leaks, damaged
                  tiles, faded roof paint or general roof wear, we assess the
                  situation and determine the best approach for your property.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  2. Roof Inspection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our experienced roofing specialists perform a detailed roof
                  inspection to identify structural issues, leaks, damaged
                  materials and areas requiring repair or restoration. This
                  inspection allows us to understand the condition of your roof
                  and recommend the most effective solution.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  3. Detailed Quote
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  After the inspection, we provide a clear and transparent quote
                  outlining the scope of work, materials required and project
                  timeline. We ensure our clients fully understand the process
                  and costs involved before any work begins.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  4. Preparation & Safety Setup
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Before starting the roofing work, our team prepares the site
                  by setting up safety systems, protecting surrounding areas and
                  ensuring all equipment and materials are ready. Safety and
                  efficiency are top priorities throughout every stage of the
                  project.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  5. Roofing Work
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Depending on the project, this stage may include roof repairs,
                  roof restoration, roof painting, tile replacement, metal roof
                  work or gutter repairs. Our skilled tradespeople use quality
                  materials and industry-approved techniques to ensure durable
                  and reliable results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  6. Final Quality Inspection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Once the work is completed, we conduct a final quality
                  inspection to ensure everything meets our strict standards.
                  We verify that repairs are properly completed, finishes are
                  consistent and the roof is performing as expected.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  7. Clean-Up & Project Completion
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  After the project is finished, we thoroughly clean the work
                  area and remove any debris. Our goal is to leave your property
                  clean, safe and with a roof that looks and performs better
                  than before.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* WHY OUR PROCESS */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-bold mb-6">
              Why Our Process Delivers Better Roofing Results
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Roofing systems protect your property from weather damage,
              moisture and structural deterioration. A poorly executed roofing
              project can lead to recurring leaks, premature material failure
              and costly repairs.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our structured process ensures every project is carefully planned
              and professionally executed. By combining expert inspections,
              quality materials and skilled workmanship, we provide roofing
              solutions that are designed to last.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whether you require roof repairs, roof painting, restoration or
              emergency roofing services, our team follows the same proven
              process to deliver consistent results for homeowners and property
              managers.
            </p>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0f172a] text-white py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">

            <h2 className="text-3xl font-bold mb-6">
              Need Professional Roofing Services?
            </h2>

            <p className="text-gray-300 mb-8">
              Contact our team today to schedule a roof inspection or request a
              quote. We provide reliable roofing services designed to protect
              and enhance your property.
            </p>

            <a
              href="/contact"
              className="inline-block bg-white text-[#0f172a] font-semibold px-8 py-4 rounded-lg hover:bg-gray-200 transition"
            >
              Request a Quote
            </a>

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