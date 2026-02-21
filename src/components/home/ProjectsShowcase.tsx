import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import beforeAfterRoof from "@/assets/before-after-roof.jpg";
import concreteTilesRoof from "@/assets/concrete-tiles-roof.jpg";
import decramasticRoof from "@/assets/decramastic-roof.jpg";
import flatConcreteRoof from "@/assets/flat-concrete-roof.jpg";
import heroDetailWork from "@/assets/hero-detail-work.jpg";
import metalRoof from "@/assets/metal-roof.jpg";
import industrialCoatingRoof from "@/assets/industrial-coating-roof.jpg";
import terracottaRoof from "@/assets/terracotta-roof.jpg";

const projects = [
  {
    image: terracottaRoof,
    title: "Terracotta Restoration",
    location: "Paddington, Brisbane",
  },
  {
    image: metalRoof,
    title: "Metal Roof Painting",
    location: "New Farm, Brisbane",
  },
  {
    image: concreteTilesRoof,
    title: "Concrete Tiles",
    location: "Ascot, Brisbane",
  },
  {
    image: beforeAfterRoof,
    title: "Full Restoration",
    location: "Hamilton, Brisbane",
  },
  {
    image: decramasticRoof,
    title: "Decramastic Tiles",
    location: "Bulimba, Brisbane",
  },
  {
    image: flatConcreteRoof,
    title: "Flat Concrete Roof",
    location: "Fortitude Valley",
  },
  {
    image: heroDetailWork,
    title: "Detail Work",
    location: "Teneriffe, Brisbane",
  },
  {
    image: industrialCoatingRoof,
    title: "Industrial Coating",
    location: "Eagle Farm, Brisbane",
  },
];

const duplicatedProjects = [...projects, ...projects];

export const ProjectsShowcase = () => {
  return (
    <section className="py-12 md:py-24 bg-[#f9f9f9] overflow-hidden">
      <div className="container mx-auto px-4 mb-8 md:mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="badge mb-6 border border-[#9a9c9e]">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-4">
            Transforming Brisbane Roofs
          </h2>
          <p className="text-muted-foreground">
            Explore our portfolio of completed roof painting projects across Brisbane, 
            showcasing quality workmanship and stunning transformations.
          </p>
        </div>
      </div>

      <div className="relative flex items-stretch gap-6 px-4">
        <div className="flex-1 overflow-hidden">
          <div className="flex gap-5 animate-scroll hover:pause-animation">
            {duplicatedProjects.map((project, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[220px] sm:w-[280px] md:w-[320px] aspect-[3/4] rounded-[16px] md:rounded-[20px] overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-white/90 text-foreground text-xs rounded-full">
                    {project.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex flex-shrink-0 w-[280px]">
          <div className="flex flex-col justify-between w-full h-full min-h-[400px] border-2 border-foreground/10 rounded-[20px] bg-white p-8">
            <div>
              <span className="text-sm text-muted-foreground mb-4 block">
                Book today!
              </span>
              <h3 className="text-2xl md:text-3xl font-normal text-foreground leading-tight">
                What are you<br />Waiting for?
              </h3>
            </div>
            <div className="space-y-4">
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-foreground/20 hover:bg-foreground hover:text-white transition-colors"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Link
                to="/projects"
                className="flex items-center justify-end gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                View All Projects
                <span className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden container mx-auto px-4 mt-10">
        <div className="bg-white rounded-[20px] border-2 border-foreground/10 p-6 shadow-md">
          <div className="text-center mb-6">
            <span className="text-sm text-muted-foreground mb-2 block">
              Book today!
            </span>
            <h3 className="text-2xl font-normal text-foreground leading-tight mb-4">
              What are you<br />Waiting for?
            </h3>
          </div>
          <div className="space-y-3">
            <Button asChild className="w-full rounded-full">
              <a href="tel:0730674287">Call Us: 07 3067 4287</a>
            </Button>
            <Link
              to="/projects"
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};