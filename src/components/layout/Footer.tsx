import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const services = [
  { name: "24/7 Emergency Repairs & Make Safes", href: "/services/24-7-emergency-repairs-make-safes/" },
  { name: "Metal Pergolas & Patios", href: "services/metal-pergolas-patios/" },
  { name: "Metal Roofing & Flashings", href: "/services/metal-roofing-flashings/" },
  { name: "Restoration & Remediation", href: "/services/restoration-remediation/" },
  { name: "Ridge Capping Restoration", href: "/services/ridge-capping-restoration/" },
  { name: "Roof Leak", href: "/services/roof-leak/" },
  { name: "Roof Maintenance", href: "/services/roof-maintenance/" },
  { name: "Roof Repairs", href: "/services/roof-repairs/" },
  { name: "Roof Replacement", href: "/services/roof-replacement/" },
  { name: "Roof Restoration", href: "/services/roof-restoration/" },
  { name: "Gutter Cleaning", href: "/services/gutter-cleaning/" },
  { name: "Safety Roof Anchors", href: "/services/safety-roof-anchors/" },  
];

const company = [
  { name: "About Us", href: "/about-us/" },
  { name: "Services", href: "/services/" },
  { name: "Locations", href: "/locations/" },
  { name: "Contact", href: "/contact/" },
];

// const resources = [
//   { name: "FAQs", href: "/#faqs" },
//   { name: "Colour Range", href: "/#colour-options" },
//   { name: "Our Process", href: "/#process" },
// ];

export const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link to="/" className="flex items-center gap-3" aria-label="Go to home">
                <img
                  src="/images/garic-roofs-logo-footer.webp"
                  alt="Garic Roofs"
                  className="h-10 w-auto object-contain sm:h-12"
                />
              </Link>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-6 leading-relaxed">
              Professional roofing services across Melbourne and surrounding suburbs - from leak detection and repairs to full restoration and replacement, delivered with precision and care.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    onClick={handleLinkClick}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={handleLinkClick}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-white">Resources</h4>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={(e) => handleHashLinkClick(e, item.href)}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-primary-foreground/70" />
                <div>
                  <a
                    href="tel:0730674287"
                    className="text-sm font-medium hover:underline"
                  >
                    (03) 9961 0678
                  </a>
                  <p className="text-xs text-primary-foreground/60">Monday to Sunday - 24 hours</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-primary-foreground/70" />
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="text-sm hover:underline"
                >
                  Email us
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary-foreground/70" />
                <p className="text-sm text-primary-foreground/70">
                  Servicing all Melbourne suburbs<br />
                  Victoria, Australia
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} Brisbane Roof Painting Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                onClick={handleLinkClick}
                className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                onClick={handleLinkClick}
                className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};