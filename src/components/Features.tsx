import React, { useEffect, useRef, useState, RefObject } from "react";
import Container from "@/components/Container";
import {
  Target,
  TrendingUp,
  PenTool,
  BarChart3,
  Brain,
  MessageSquare,
} from "lucide-react";

// 1. TypeScript interfaces for features data
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Target,
    title: "AI-Powered Ad Targeting",
    description:
      "Smart audience segmentation using machine learning algorithms to identify and reach your most valuable customers with precision.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Campaign Optimization",
    description:
      "Automatic performance tuning that adjusts bids, budgets, and targeting in real-time to maximize your campaign ROI.",
  },
  {
    icon: PenTool,
    title: "Automated Content Generation",
    description:
      "AI-created ad copy, headlines, and creative variations that match your brand voice and convert better than manual content.",
  },
  {
    icon: BarChart3,
    title: "Cross-Platform Analytics",
    description:
      "Unified dashboard that consolidates insights from all your marketing channels into actionable intelligence.",
  },
  {
    icon: Brain,
    title: "ROI Prediction Engine",
    description:
      "Forecast campaign performance before you spend a dollar, with predictive models trained on millions of data points.",
  },
  {
    icon: MessageSquare,
    title: "Brand Voice Consistency",
    description:
      "Maintain consistent messaging across all channels with AI that learns and adapts to your unique brand personality.",
  },
];

// 2. FeatureCard component
interface FeatureCardProps {
  feature: Feature;
  index: number;
  cardRef: RefObject<HTMLDivElement>;
  isVisible: boolean;
}

const FeatureCard = ({
  feature,
  index,
  cardRef,
  isVisible,
}: FeatureCardProps) => {
  const IconComponent = feature.icon;
  return (
    <div
      ref={cardRef}
      className={`group glass rounded-2xl p-8 hover-lift transition-all duration-500 hover:shadow-glow ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
    >
      <div className="flex flex-col items-start space-y-4">
        <div className="p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
          {feature.description}
        </p>
      </div>
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-glass rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

// 3. Features component with single observer
const Features = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  // State to track which cards are visible
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    () => Array(features.length).fill(false)
  );
  // Refs for all feature cards
  const cardRefs = useRef<Array<RefObject<HTMLDivElement>>>(
    features.map(() => React.createRef<HTMLDivElement>())
  );

  useEffect(() => {
    // Title observer
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    return () => {
      titleObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    // 1. Create a single observer for all cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.findIndex(
            (ref) => ref.current === entry.target
          );
          if (
            entry.isIntersecting &&
            index !== -1 &&
            !visibleCards[index]
          ) {
            // Animate in with stagger
            setTimeout(() => {
              setVisibleCards((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    // 2. Observe all card refs
    cardRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // 3. Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCards.length]);

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="block gradient-text mt-2">Modern Marketing</span>
          </h2>
          {/* Gradient underline effect */}
          <div
            className={`mx-auto h-1 bg-gradient-primary rounded-full transition-all duration-1000 ${
              titleVisible ? "w-24" : "w-0"
            }`}
          ></div>
          <p className="text-xl text-muted-foreground mt-8 max-w-3xl mx-auto">
            Revolutionize your marketing strategy with AI-powered tools designed to maximize performance, 
            minimize effort, and deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              cardRef={cardRefs.current[index]}
              isVisible={visibleCards[index]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;