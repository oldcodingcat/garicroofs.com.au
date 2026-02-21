import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingBanner } from "@/components/layout/FloatingBanner";
import { Hero } from "@/components/home/Hero";
import { Offerings } from "@/components/home/Offerings";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ColourVisualizer } from "@/components/home/ColourVisualizer";
import { MidCTA } from "@/components/home/MidCTA";
import { Process } from "@/components/home/Process";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Brisbane Roof Painting Solutions | Professional Roof Painting Services Brisbane QLD</title>
        <meta 
          name="description" 
          content="Transform your roof with Brisbane's trusted roof painting experts. Professional roof restoration, terracotta tile painting, metal roof coating & more. Free quotes available. Servicing Brisbane & surrounding areas." 
        />
        <link rel="canonical" href="https://brisbaneroofpaintingsolutions.com.au/" />

        {/* Open Graph */}
        <meta property="og:title" content="Brisbane Roof Painting Solutions | Professional Roof Painting Services" />
        <meta property="og:description" content="Transform your roof with Brisbane's trusted roof painting experts. Professional roof restoration and painting services across Brisbane QLD." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brisbaneroofpaintingsolutions.com.au/" />
        <meta property="og:image" content="https://brisbaneroofpaintingsolutions.com.au/images/before-after-roof.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brisbane Roof Painting Solutions | Professional Services" />
        <meta name="twitter:description" content="Transform your roof with Brisbane's trusted roof painting experts." />
        <meta name="twitter:image" content="https://brisbaneroofpaintingsolutions.com.au/images/before-after-roof.jpg" />

        {/* Schema Markup - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://brisbaneroofpaintingsolutions.com.au/#business",
            "name": "Brisbane Roof Painting Solutions",
            "image": "https://brisbaneroofpaintingsolutions.com.au/images/before-after-roof.jpg",
            "url": "https://brisbaneroofpaintingsolutions.com.au/",
            "telephone": "+61730674287",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Brisbane",
              "addressRegion": "Queensland",
              "addressCountry": "AU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -27.4705,
              "longitude": 153.0260
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "07:00",
              "closes": "17:00"
            },
            "sameAs": [
              "https://facebook.com/yourpage",
              "https://instagram.com/yourpage"
            ]
          })}
        </script>

        {/* Schema Markup - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Brisbane Roof Painting Solutions",
            "url": "https://brisbaneroofpaintingsolutions.com.au/",
            "logo": "https://brisbaneroofpaintingsolutions.com.au/images/logobrisbane.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+61730674287",
              "contactType": "customer service",
              "areaServed": "AU",
              "availableLanguage": "English"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <WhyChooseUs />
          <Offerings />
          <ServicesShowcase />
          <ColourVisualizer />
          <MidCTA />
          <Process />
          <ProjectsShowcase />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        <FloatingBanner />
      </div>
    </>
  );
};

export default Index;
