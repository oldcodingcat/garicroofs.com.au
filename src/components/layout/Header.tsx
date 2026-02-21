import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Clay Terracotta Tiles Painting", href: "/services/terracotta-tiles" },
  { name: "Metal Roof Restoration", href: "/services/metal-roof" },
  { name: "Flat Concrete Roof Painting", href: "/services/flat-concrete" },
  { name: "Decramastic Tile Painting", href: "/services/decramastic" },
  { name: "Concrete Tiles Painting", href: "/services/concrete-tiles" },
  { name: "Industrial Coatings", href: "/services/industrial-coating" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav
        className={`mx-auto max-w-7xl rounded-lg border bg-card px-6 py-4 transition-all duration-300 ${
          isScrolled
            ? "border-primary/10 shadow-lg backdrop-blur-sm"
            : "border-outline shadow-md"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logobrisbane.svg" 
              alt="Brisbane Roof Painting Solutions" 
              className="h-12 w-auto object-contain"
              style={{ clipPath: 'inset(10% 0 5% 0)' }}
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <div className="flex items-center">
                    <Link
                      to={link.href}
                      className={`rounded-l-lg px-4 py-2 text-sm transition-colors hover:bg-secondary ${
                        location.pathname === link.href || location.pathname.startsWith("/services")
                          ? "text-title font-medium"
                          : "text-content hover:text-title"
                      }`}
                    >
                      {link.name}
                    </Link>
                    <DropdownMenuTrigger asChild>
                      <button className="rounded-r-lg px-2 py-2 text-sm text-content transition-colors hover:bg-secondary hover:text-title">
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                  </div>
                  <DropdownMenuContent align="center" className="w-64">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.name} asChild>
                        <Link
                          to={service.href}
                          className="cursor-pointer"
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`rounded-lg px-4 py-2 text-sm transition-colors hover:bg-secondary ${
                    location.pathname === link.href
                      ? "text-title font-medium"
                      : "text-content hover:text-title"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex" size="sm" asChild>
              <a href="tel:0730674287">Get a Quote</a>
            </Button>

            <button
              className="rounded-lg p-2 text-title hover:bg-secondary lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col gap-2 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`rounded-lg px-4 py-3 text-sm transition-colors ${
                      location.pathname === link.href
                        ? "bg-secondary text-title font-medium"
                        : "text-content hover:bg-secondary hover:text-title"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="rounded-lg px-8 py-2 text-sm text-content transition-colors hover:bg-secondary hover:text-title"
                  >
                    {service.name}
                  </Link>
                ))}
                <Button className="mt-2 w-full sm:hidden" asChild>
                  <a href="tel:0730674287">Get a Quote</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};