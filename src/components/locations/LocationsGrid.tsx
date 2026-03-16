import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

type LocationItem = {
  name: string;
  href: string;
};

type LocationsGridProps = {
  title?: string;
  subtitle?: string;
  locations: LocationItem[];
};

export default function LocationsGrid({
  title = "Our Locations",
  subtitle = "Browse the areas we service across Melbourne and surrounding suburbs.",
  locations,
}: LocationsGridProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-14">
          <span className="badge mb-6">Our Services</span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a]">
            {title}
          </h2>

          <p className="mt-4 text-base md:text-lg leading-relaxed text-[#666666]">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {locations.map((location) => (
            <Link
              key={location.href}
              to={location.href}
              className="group rounded-xl border border-[#e8e8e8] bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#b08d57] hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">

                <div className="flex items-start gap-3">

                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7f3ed] text-[#b08d57]">
                    <MapPin size={18} />
                  </span>

                  <div>
                    <h3 className="text-base font-semibold text-[#1a1a1a]">
                      {location.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#666666]">
                      View location page
                    </p>
                  </div>

                </div>

                <ArrowRight
                  size={18}
                  className="mt-1 shrink-0 text-[#999999] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#b08d57]"
                />

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}