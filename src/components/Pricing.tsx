import { useState, useRef, useEffect } from "react";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

interface PricingTier {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
  enterprise?: boolean;
  buttonText: string;
  buttonVariant: "hero" | "hero-outline" | "outline";
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    monthlyPrice: 29,
    annualPrice: 23,
    description: "Perfect for small businesses getting started with AI marketing",
    features: [
      "Up to 5 active campaigns",
      "Basic analytics dashboard",
      "Email support",
      "Core AI targeting",
      "Standard templates",
      "Monthly performance reports"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline"
  },
  {
    name: "Professional",
    monthlyPrice: 99,
    annualPrice: 79,
    description: "For growing agencies and marketing teams",
    features: [
      "Unlimited campaigns",
      "Advanced AI optimization",
      "Priority support (24/7)",
      "Custom audience insights",
      "A/B testing suite",
      "Real-time ROI tracking",
      "API access",
      "White-label reports"
    ],
    popular: true,
    buttonText: "Get Started",
    buttonVariant: "hero"
  },
  {
    name: "Enterprise",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "For large organizations with custom needs",
    features: [
      "Everything in Professional",
      "White-label platform",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security (SOC 2)",
      "Custom AI model training",
      "Onboarding & training",
      "SLA guarantees"
    ],
    enterprise: true,
    buttonText: "Contact Sales",
    buttonVariant: "hero-outline"
  }
];

const PricingCard = ({ tier, isAnnual, index }: { tier: PricingTier; isAnnual: boolean; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
  const savings = tier.monthlyPrice > 0 ? Math.round(((tier.monthlyPrice - tier.annualPrice) / tier.monthlyPrice) * 100) : 0;

  return (
    <div
      ref={cardRef}
      className={`relative group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
    >
      {/* Popular badge */}
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1 shadow-glow">
            <Star className="w-4 h-4" />
            <span>MOST POPULAR</span>
          </div>
        </div>
      )}

      <div className={`glass rounded-3xl p-8 h-full hover-lift transition-all duration-500 hover:shadow-glow ${
        tier.popular ? 'ring-2 ring-primary/30 hover:ring-primary/50' : ''
      }`}>
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
          <p className="text-muted-foreground mb-6">{tier.description}</p>
          
          {/* Price */}
          <div className="mb-6">
            {tier.enterprise ? (
              <div className="text-4xl font-bold text-white">Custom</div>
            ) : (
              <>
                <div className="text-5xl font-bold text-white mb-2">
                  ${price}
                  <span className="text-xl text-muted-foreground font-normal">/month</span>
                </div>
                {isAnnual && savings > 0 && (
                  <div className="inline-flex items-center bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    Save {savings}%
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {tier.features.map((feature, featureIndex) => (
            <div 
              key={feature} 
              className={`flex items-start space-x-3 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              style={{ transitionDelay: isVisible ? `${(index * 150) + (featureIndex * 50)}ms` : '0ms' }}
            >
              <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          variant={tier.buttonVariant} 
          size="lg" 
          className="w-full group/btn"
        >
          {tier.buttonText}
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Button>

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-glass rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your
            <span className="block gradient-text mt-2">Growth Plan</span>
          </h2>

          {/* Gradient underline */}
          <div className={`mx-auto h-1 bg-gradient-primary rounded-full transition-all duration-1000 ${
            titleVisible ? 'w-24' : 'w-0'
          }`}></div>

          <p className="text-xl text-muted-foreground mt-8 mb-12 max-w-3xl mx-auto">
            Scale your marketing with AI-powered intelligence. Start free, upgrade as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 glass rounded-full p-1 max-w-sm mx-auto">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-muted-foreground hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 relative ${
                isAnnual 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-muted-foreground hover:text-white'
              }`}
            >
              Annual
              {isAnnual && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  Save 20%
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} isAnnual={isAnnual} index={index} />
          ))}
        </div>


      </Container>
    </section>
  );
};

export default Pricing;