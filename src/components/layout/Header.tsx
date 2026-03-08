import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = {
  name: string;
  href: string;
};

type NavGroup = {
  name: string;
  href: string;
  items: NavItem[];
};

const SERVICES: NavItem[] = [
  { name: "24/7 Emergency Repairs & Make Safes", href: "/services/24-7-emergency-repairs-make-safes/" },
  { name: "Metal Pergolas & Patios", href: "/services/metal-pergolas-patios/" },
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

const LOCATIONS: NavItem[] = [
  { name: "Toorak", href: "/locations/toorak/" },
  { name: "Prahran", href: "/locations/prahran/" },
  { name: "Docklands", href: "/locations/docklands/" },
  { name: "Malvern East", href: "/locations/malvern-east/" },
  { name: "Mentone", href: "/locations/mentone/" },
  { name: "Mulgrave", href: "/locations/mulgrave/" },
  { name: "Noble Park", href: "/locations/noble-park/" },
  { name: "Narre Warren", href: "/locations/narre-warren/" },
  { name: "Melbourne", href: "/locations/melbourne/" },
  { name: "Ringwood", href: "/locations/ringwood/" },
  { name: "Oakleigh", href: "/locations/oakleigh/" },
  { name: "Sandringham", href: "/locations/sandringham/" },
  { name: "Vermont", href: "/locations/vermont/" },
  { name: "Wantirna", href: "/locations/wantirna/" },
  { name: "Laverton", href: "/locations/laverton/" },
  { name: "Dandenong", href: "/locations/dandenong/" },
  { name: "Chadstone", href: "/locations/chadstone/" },
  { name: "Moonee Ponds", href: "/locations/moonee-ponds/" },
  { name: "Coburg", href: "/locations/coburg/" },
];

const FAQ_GROUP: NavItem[] = [
  { name: "FAQ’s", href: "/faqs/" },
  { name: "News", href: "/news/" },
];

const ABOUT_GROUP: NavItem[] = [
  { name: "About Us", href: "/about-us/" },
  { name: "About our Process", href: "/about-our-process/" },
  { name: "Completed Jobs", href: "/completed-jobs/" },
];

const CALL_NOW_HREF = "tel:0399610678";

function isActivePath(pathname: string, href: string) {
  // Treat parent sections as active when the path starts with their base.
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

function MobileAccordion({
  title,
  href,
  items,
  isOpen,
  onToggle,
  onNavigate,
  pathname,
}: {
  title: string;
  href: string;
  items: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  pathname: string;
}) {
  const active = useMemo(() => {
    if (isActivePath(pathname, href)) return true;
    return items.some((i) => isActivePath(pathname, i.href));
  }, [pathname, href, items]);

  return (
    <div className="rounded-2xl border border-outline bg-card">
      <div className="flex items-stretch justify-between">
        <Link
          to={href}
          onClick={onNavigate}
          className={[
            "flex-1 rounded-l-2xl px-4 py-3 text-sm transition-colors",
            active ? "bg-secondary text-title font-medium" : "text-content hover:bg-primary hover:text-white",
          ].join(" ")}
        >
          {title}
        </Link>
        <button
          type="button"
          onClick={onToggle}
          className={[
            "flex w-12 items-center justify-center rounded-r-2xl transition-colors",
            active ? "bg-secondary text-title" : "text-content hover:bg-primary hover:text-white",
          ].join(" ")}
          aria-label={`Toggle ${title} submenu`}
          aria-expanded={isOpen}
        >
          <ChevronDown className={["h-4 w-4 transition-transform", isOpen ? "rotate-180" : ""].join(" ")} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-2 pb-2">
              {items.map((item) => {
                const itemActive = isActivePath(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={onNavigate}
                    className={[
                      "rounded-xl px-3 py-2 text-sm transition-colors",
                      itemActive
                        ? "bg-secondary text-title font-medium"
                        : "text-content hover:bg-primary hover:text-white",
                    ].join(" ")}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const Header = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [faqsOpen, setFaqsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const navGroups: NavGroup[] = useMemo(
    () => [
      { name: "Services", href: "/services/", items: SERVICES },
      { name: "Locations", href: "/locations/", items: LOCATIONS },
      { name: "FAQ’s", href: "/faqs/", items: FAQ_GROUP },
      { name: "About Us", href: "/about-us/", items: ABOUT_GROUP },
    ],
    []
  );

  const navLinks: NavItem[] = useMemo(
    () => [
      { name: "Home", href: "/" },
      // groups: Services, Locations, FAQ’s, About Us
      { name: "Contact Us", href: "/contact-us/" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
    setFaqsOpen(false);
    setAboutOpen(false);
  }, [location.pathname]);

  const pathname = location.pathname;

  return (
    <header className="fixed left-0 top-0 right-0 z-50 px-4 py-4">
      <nav
        className={[
          "mx-auto max-w-7xl rounded-2xl border bg-card px-4 py-3 transition-all duration-300 sm:px-6",
          isScrolled ? "border-primary/15 shadow-lg backdrop-blur-sm" : "border-outline shadow-md",
        ].join(" ")}
        aria-label="Primary"
      >
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Go to home">
            <img
              src="/images/garic-roofs-logo.png"
              alt="Garic Roofs"
              className="h-10 w-auto object-contain sm:h-12"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {/* Home */}
            <Link
              to="/"
              className={[
                "rounded-xl px-4 py-2 text-sm transition-colors hover:bg-primary",
                pathname === "/" ? "text-title font-medium" : "text-content hover:text-white",
              ].join(" ")}
            >
              Home
            </Link>

            {/* Groups with dropdowns */}
            {navGroups.map((group) => {
              const groupActive =
                isActivePath(pathname, group.href) ||
                group.items.some((i) => isActivePath(pathname, i.href));

              return (
                <DropdownMenu key={group.name}>
                  <div className="flex items-center">
                    <Link
                      to={group.href}
                      className={[
                        "rounded-l-xl px-4 py-2 text-sm transition-colors hover:bg-primary",
                        groupActive ? "text-title font-medium" : "text-content hover:text-white",
                      ].join(" ")}
                    >
                      {group.name}
                    </Link>

                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className={[
                          "rounded-r-xl px-2 py-2 text-sm transition-colors hover:bg-primary",
                          groupActive ? "text-title" : "text-content hover:text-white",
                        ].join(" ")}
                        aria-label={`Open ${group.name} menu`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                  </div>

                  <DropdownMenuContent align="center" className="w-80">
                    {group.items.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link to={item.href} className="cursor-pointer">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })}

            {/* Contact */}
            <Link
              to="/contact-us/"
              className={[
                "rounded-xl px-4 py-2 text-sm transition-colors hover:bg-primary",
                isActivePath(pathname, "/contact-us/") ? "text-title font-medium" : "text-content hover:text-white",
              ].join(" ")}
            >
              Contact Us
            </Link>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button className="hidden sm:inline-flex" size="sm" asChild>
              <a href={CALL_NOW_HREF} className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                GET A FREE QUOTE TODAY
              </a>
            </Button>

            <button
              type="button"
              className="rounded-xl p-2 text-title hover:bg-primary lg:hidden"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col gap-3 pt-4">
                {/* Simple links */}
                {navLinks.map((link) => {
                  const active = isActivePath(pathname, link.href);
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={[
                        "rounded-2xl border border-outline bg-card px-4 py-3 text-sm transition-colors",
                        active ? "bg-secondary text-title font-medium" : "text-content hover:bg-primary hover:text-white",
                      ].join(" ")}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                {/* Accordions */}
                <MobileAccordion
                  title="Services"
                  href="/services/"
                  items={SERVICES}
                  isOpen={servicesOpen}
                  onToggle={() => setServicesOpen((v) => !v)}
                  onNavigate={() => setMobileMenuOpen(false)}
                  pathname={pathname}
                />

                <MobileAccordion
                  title="Locations"
                  href="/locations/"
                  items={LOCATIONS}
                  isOpen={locationsOpen}
                  onToggle={() => setLocationsOpen((v) => !v)}
                  onNavigate={() => setMobileMenuOpen(false)}
                  pathname={pathname}
                />

                <MobileAccordion
                  title="FAQ’s"
                  href="/faqs/"
                  items={FAQ_GROUP}
                  isOpen={faqsOpen}
                  onToggle={() => setFaqsOpen((v) => !v)}
                  onNavigate={() => setMobileMenuOpen(false)}
                  pathname={pathname}
                />

                <MobileAccordion
                  title="About Us"
                  href="/about-us/"
                  items={ABOUT_GROUP}
                  isOpen={aboutOpen}
                  onToggle={() => setAboutOpen((v) => !v)}
                  onNavigate={() => setMobileMenuOpen(false)}
                  pathname={pathname}
                />

                {/* Mobile CTA */}
                <Button className="w-full" asChild>
                  <a href={CALL_NOW_HREF} className="inline-flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};