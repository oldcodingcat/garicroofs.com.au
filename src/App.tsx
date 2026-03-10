import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { FloatingBanner } from "@/components/layout/FloatingBanner";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Locations from "./pages/Locations";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

import EmergencyRepairsMakeSafesPage from "@/routes/services/24-7-emergency-repairs-make-safes";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route
    path="/services/24-7-emergency-repairs-make-safes"
    element={<EmergencyRepairsMakeSafesPage />}
  />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/projects" element={<Projects />} />        
        <Route path="/locations" element={<Locations />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingBanner />
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;