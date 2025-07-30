import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  // Ref for skip link target
  const mainContentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-primary text-white px-4 py-2 rounded z-50"
        tabIndex={0}
      >
        Skip to main content
      </a>
      <main id="main-content" ref={mainContentRef} role="main">
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Background gradient overlay (decorative) */}
          <div
            className="absolute inset-0 bg-gradient-hero"
            aria-hidden="true"
          ></div>

          {/* Animated background elements (decorative) */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>

          <Container className="relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <div
                className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 hover-lift"
                role="status"
                aria-label="Powered by Advanced AI Technology"
              >
                <Sparkles
                  className="w-4 h-4 text-primary"
                  aria-hidden="true"
                  focusable="false"
                />
                <span className="text-sm font-medium text-white">
                  Powered by Advanced AI Technology
                </span>
              </div>

              {/* Main headline */}
              <h1
                id="hero-heading"
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
              >
                Transform Your Marketing with{" "}
                <span
                  className="gradient-text text-white drop-shadow"
                  style={{
                    WebkitTextStroke: "1px #222",
                  }}
                >
                  AI-Powered Intelligence
                </span>
              </h1>

              {/* Subheadline as h2 for hierarchy */}
              <h2 className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                Automate campaigns, optimize performance in real-time, and predict ROI with our
                cutting-edge AI marketing platform. Scale your business effortlessly.
              </h2>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button
                  variant="hero"
                  size="xl"
                  className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  aria-label="Start Free Trial"
                >
                  Start Free Trial
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                    focusable="false"
                  />
                </Button>
                <Button
                  variant="hero-outline"
                  size="xl"
                  className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  aria-label="Watch Demo"
                >
                  <Play
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                    focusable="false"
                  />
                  Watch Demo
                </Button>
              </div>

              {/* Social proof */}
              <div className="text-center">
                <p className="text-sm text-white mb-4">
                  Trusted by 10,000+ marketing teams worldwide
                </p>
                <div className="flex items-center justify-center space-x-8 opacity-80">
                  <div className="text-lg font-semibold text-white">Microsoft</div>
                  <div className="text-lg font-semibold text-white">Shopify</div>
                  <div className="text-lg font-semibold text-white">Stripe</div>
                  <div className="text-lg font-semibold text-white">Notion</div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Hero;