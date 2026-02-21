import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { serviceData } from "@/data/serviceData";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceIncludes } from "@/components/services/ServiceIncludes";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceArea } from "@/components/services/ServiceArea";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="flex min-h-[60vh] items-center justify-center pt-28">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-normal">Service Not Found</h1>
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const baseUrl = "https://brisbaneroofpaintingsolutions.com.au";
  const serviceUrl = `${baseUrl}/services/${serviceId}`;
  const pageTitle = `${service.title} Brisbane | Brisbane Roof Painting Solutions`;
  const pageDescription = service.description || `Professional ${service.shortTitle} services in Brisbane. Expert roof painting and restoration.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={serviceUrl} />
        
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={serviceUrl} />
        <meta property="og:image" content={`${baseUrl}/images/before-after-roof.jpg`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${baseUrl}/images/before-after-roof.jpg`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Brisbane Roof Painting Solutions",
              "telephone": "+61730674287",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Brisbane",
                "addressRegion": "Queensland",
                "addressCountry": "AU"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Brisbane"
            },
            "serviceType": service.category
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${baseUrl}/`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": `${baseUrl}/services`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": service.shortTitle,
                "item": serviceUrl
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-28">
        {/* Hero Section */}
        <ServiceHero
          title={service.title}
          description={service.description}
          heroImage={service.heroImage}
          warranty={service.warranty}
        />

        {/* Key Benefits Section - moved to appear right after hero */}
        <ServiceBenefits
          title={service.shortTitle}
          benefits={service.benefits}
        />

        {/* Overview Section */}
        <ServiceOverview
          heading={service.overviewHeading}
          paragraphs={service.overviewParagraphs}
          image={service.overviewImage}
          title={service.title}
        />

        {/* What's Included Section */}
        <ServiceIncludes
          title={service.shortTitle}
          includes={service.includes}
        />

        {/* Projects Showcase */}
        <ProjectsShowcase />

        {/* FAQ Section */}
        <ServiceFAQ
          title={service.shortTitle}
          faqs={service.faqs}
        />

        {/* Related Services Section */}
        <RelatedServices
          currentServiceId={serviceId!}
          relatedServiceIds={service.relatedServices}
        />

        {/* Service Area Section */}
        <ServiceArea />

        {/* CTA Section */}
        <ServiceCTA title={service.shortTitle} />
      </main>
      <Footer />
      </div>
    </>
  );
};

export default ServiceDetail;
