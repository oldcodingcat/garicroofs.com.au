import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import beforeAfter from "@/assets/before-after-roof.jpg";
import terracottaRoof from "@/assets/terracotta-roof.jpg";
import metalRoof from "@/assets/metal-roof.jpg";
import concreteTilesRoof from "@/assets/concrete-tiles-roof.jpg";

const projects = [
  {
    title: "Terracotta Roof Restoration",
    location: "Paddington, Brisbane",
    type: "Residential",
    image: terracottaRoof,
  },
  {
    title: "Metal Roof Recoating",
    location: "Chermside, Brisbane",
    type: "Commercial",
    image: metalRoof,
  },
  {
    title: "Concrete Tile Transformation",
    location: "Bulimba, Brisbane",
    type: "Residential",
    image: concreteTilesRoof,
  },
  {
    title: "Complete Roof Makeover",
    location: "New Farm, Brisbane",
    type: "Residential",
    image: beforeAfter,
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects | Brisbane Roof Painting Solutions - Portfolio & Gallery</title>
        <meta 
          name="description" 
          content="View our portfolio of completed roof painting projects in Brisbane. See examples of terracotta tile painting, metal roof restoration, and concrete roof transformations." 
        />
        <link rel="canonical" href="https://brisbaneroofpaintingsolutions.com.au/projects" />
        
        <meta property="og:title" content="Our Projects | Brisbane Roof Painting Solutions" />
        <meta property="og:description" content="Browse our portfolio of professional roof painting projects across Brisbane." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brisbaneroofpaintingsolutions.com.au/projects" />
        <meta property="og:image" content="https://brisbaneroofpaintingsolutions.com.au/images/before-after-roof.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Projects | Brisbane Roof Painting Solutions" />
        <meta name="twitter:description" content="Browse our portfolio of professional roof painting projects." />
        <meta name="twitter:image" content="https://brisbaneroofpaintingsolutions.com.au/images/before-after-roof.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://brisbaneroofpaintingsolutions.com.au/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Projects",
                "item": "https://brisbaneroofpaintingsolutions.com.au/projects"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-28">
        <section className="section-padding">
          <div className="container-custom">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="badge mb-6">Our Projects</span>
              <h1 className="mb-4 text-4xl font-normal md:text-5xl">
                Recent Roof Transformations
              </h1>
              <p className="text-lg">
                See the quality of our work across Brisbane homes and businesses. 
                Every project showcases our commitment to excellence.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-title/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="mb-2 inline-block rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-title">
                      {project.type}
                    </span>
                    <h3 className="mb-1 text-xl font-medium text-card">
                      {project.title}
                    </h3>
                    <p className="text-sm text-card/80">{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </>
  );
};

export default Projects;
