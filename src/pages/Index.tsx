import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Skip link styles (can be moved to your CSS file)
const skipLinkStyle: React.CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  background: "#3B82F6",
  color: "#fff",
  padding: "0.75rem 1.5rem",
  zIndex: 1000,
  borderRadius: "0 0 0.5rem 0.5rem",
  transform: "translateY(-120%)",
  transition: "transform 0.2s",
  outline: "none",
};
const skipLinkFocusStyle: React.CSSProperties = {
  ...skipLinkStyle,
  transform: "translateY(0)",
};

import { useRef, useState } from "react";

const Index = () => {
  // For focus management on skip
  const mainRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // For focus-visible styling
  const [focusedLink, setFocusedLink] = useState<string | null>(null);

  // Helper to focus the section after skip
  const handleSkip = (ref: React.RefObject<HTMLElement | HTMLDivElement>) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    ref.current?.focus();
  };

  return (
    <div className="min-h-screen bg-background md:pt-20">
      {/* Skip Links */}
      <nav aria-label="Skip links">
        <a
          href="#main-content"
          style={focusedLink === "main" ? skipLinkFocusStyle : skipLinkStyle}
          onFocus={() => setFocusedLink("main")}
          onBlur={() => setFocusedLink(null)}
          onClick={handleSkip(mainRef)}
        >
          Skip to main content
        </a>
        <a
          href="#features"
          style={focusedLink === "features" ? skipLinkFocusStyle : skipLinkStyle}
          onFocus={() => setFocusedLink("features")}
          onBlur={() => setFocusedLink(null)}
          onClick={handleSkip(featuresRef)}
        >
          Skip to Features
        </a>
        <a
          href="#pricing"
          style={focusedLink === "pricing" ? skipLinkFocusStyle : skipLinkStyle}
          onFocus={() => setFocusedLink("pricing")}
          onBlur={() => setFocusedLink(null)}
          onClick={handleSkip(pricingRef)}
        >
          Skip to Pricing
        </a>
        <a
          href="#faq"
          style={focusedLink === "faq" ? skipLinkFocusStyle : skipLinkStyle}
          onFocus={() => setFocusedLink("faq")}
          onBlur={() => setFocusedLink(null)}
          onClick={handleSkip(faqRef)}
        >
          Skip to FAQ
        </a>
        <a
          href="#contact"
          style={focusedLink === "contact" ? skipLinkFocusStyle : skipLinkStyle}
          onFocus={() => setFocusedLink("contact")}
          onBlur={() => setFocusedLink(null)}
          onClick={handleSkip(contactRef)}
        >
          Skip to Contact
        </a>
      </nav>

      <Navbar />
      <div id="main-content" tabIndex={-1} ref={mainRef}>
        <Hero />
      </div>
      <section id="features" tabIndex={-1} ref={featuresRef}>
        <Features />
      </section>
      <section id="pricing" tabIndex={-1} ref={pricingRef}>
        <Pricing />
      </section>
      <Testimonials />
      <section id="faq" tabIndex={-1} ref={faqRef}>
        <FAQ />
      </section>
      <section id="contact" tabIndex={-1} ref={contactRef}>
        <Contact />
      </section>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;