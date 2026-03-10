import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingBanner from "@/components/layout/FloatingBanner";

import CTA from "@/components/CTA";
import LocationsGrid from "@/components/locations/LocationsGrid";

const locations = [
  { name: "Melbourne", href: "/locations/melbourne/" },
  { name: "Narre Warren", href: "/locations/narre-warren/" },
  { name: "Ringwood", href: "/locations/ringwood/" },
  { name: "Oakleigh", href: "/locations/oakleigh/" },
  { name: "Sandringham", href: "/locations/sandringham/" },
  { name: "Vermont", href: "/locations/vermont/" },
  { name: "Wantirna", href: "/locations/wantirna/" },
  { name: "Laverton", href: "/locations/laverton/" },
  { name: "Dandenong", href: "/locations/dandenong/" },
  { name: "Moonee Ponds", href: "/locations/moonee-ponds/" },
  { name: "Chadstone", href: "/locations/chadstone/" },
  { name: "Mentone", href: "/locations/mentone/" },
  { name: "Malvern East", href: "/locations/malvern-east/" },
  { name: "Toorak", href: "/locations/toorak/" },
  { name: "Prahran", href: "/locations/prahran/" },
  { name: "Docklands", href: "/locations/docklands/" },
  { name: "Mulgrave", href: "/locations/mulgrave/" },
  { name: "Noble Park", href: "/locations/noble-park/" },
  { name: "Coburg", href: "/locations/coburg/" },
];

export default function LocationsPage() {
  return (
    <>
      <Header />

      <FloatingBanner />

      <main>

        <section className="bg-[#f8f8f8] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b08d57]">
                Locations
              </p>

              <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
                Locations We Service
              </h1>

              <p className="mt-5 text-base md:text-lg leading-relaxed text-[#666666]">
                Explore the Melbourne suburbs where we provide professional roofing
                services. Select a location below to view the dedicated page for
                that area.
              </p>

            </div>

          </div>
        </section>

        <LocationsGrid locations={locations} />

        <CTA />

      </main>

      <Footer />
    </>
  );
}