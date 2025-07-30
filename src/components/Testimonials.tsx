import { useState, useEffect, useRef } from "react";
import Container from "@/components/Container";
import { ChevronLeft, ChevronRight, Star, Quote, TrendingUp, Users, Zap } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  highlight?: string;
  metric?: {
    value: string;
    label: string;
    icon: React.ReactNode;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "CMO",
    company: "TechFlow",
    content: "ADmyBRAND increased our ROI by 340% in just 3 months. The AI-powered targeting is simply revolutionary for our B2B campaigns.",
    rating: 5,
    avatar: "SC",
    highlight: "340% ROI Increase",
    metric: {
      value: "340%",
      label: "ROI Boost",
      icon: <TrendingUp className="w-4 h-4" />
    }
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Digital Agency Owner",
    company: "Growth Labs",
    content: "The AI targeting is incredibly accurate. We've seen conversion rates double across all client campaigns. It's like having a data scientist on every account.",
    rating: 5,
    avatar: "MR",
    highlight: "2x Conversions",
    metric: {
      value: "2x",
      label: "Conversion Rate",
      icon: <Users className="w-4 h-4" />
    }
  },
  {
    id: 3,
    name: "Lisa Park",
    title: "E-commerce Director",
    company: "StyleHub",
    content: "Finally, an AI that truly understands our brand voice. The automated content generation saves us 20+ hours per week while maintaining quality.",
    rating: 5,
    avatar: "LP",
    highlight: "20+ Hours Saved",
    metric: {
      value: "20+",
      label: "Hours Saved",
      icon: <Zap className="w-4 h-4" />
    }
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Marketing Manager",
    company: "InnovateCorp",
    content: "We doubled our conversions while halving our ad spend. The real-time optimization feature is a game-changer for performance marketing.",
    rating: 5,
    avatar: "JW",
    highlight: "50% Cost Reduction",
    metric: {
      value: "50%",
      label: "Cost Reduction",
      icon: <TrendingUp className="w-4 h-4" />
    }
  },
  {
    id: 5,
    name: "Emma Thompson",
    title: "Startup Founder",
    company: "NextGen Solutions",
    content: "Game-changing for small teams like ours. ADmyBRAND gives us enterprise-level marketing capabilities without the enterprise budget.",
    rating: 5,
    avatar: "ET",
    highlight: "Enterprise Features",
    metric: {
      value: "100%",
      label: "Feature Access",
      icon: <Zap className="w-4 h-4" />
    }
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    if (index === currentIndex || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsTransitioning(false);
      setIsAutoPlaying(true);
    }, 300);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsTransitioning(false);
      setIsAutoPlaying(true);
    }, 300);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsTransitioning(false);
      setIsAutoPlaying(true);
    }, 300);
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>



      <Container className="relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by
            <span className="block gradient-text mt-2">Marketing Teams Worldwide</span>
          </h2>
          
          <div className={`mx-auto h-1 bg-gradient-primary rounded-full transition-all duration-1000 ${
            isVisible ? 'w-24' : 'w-0'
          }`}></div>
          
          <p className="text-xl text-muted-foreground mt-8 max-w-3xl mx-auto">
            Join thousands of marketing professionals who've transformed their campaigns with AI-powered intelligence.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Enhanced Main testimonial display */}
          <div className={`glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden transition-all duration-500 ${
            isTransitioning ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
          }`}>
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            <div className="relative z-10">
              {/* Stars with enhanced styling */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 fill-yellow-400 text-yellow-400 mx-1 animate-pulse" 
                    style={{animationDelay: `${i * 100}ms`}}
                  />
                ))}
              </div>

              {/* Highlight Badge */}
              {testimonials[currentIndex].highlight && (
                <div className="inline-flex items-center bg-gradient-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/30">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {testimonials[currentIndex].highlight}
                </div>
              )}

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Enhanced Author Section */}
              <div className="flex items-center justify-center space-x-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center relative group">
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentIndex].avatar}
                  </span>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl"></div>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white text-xl">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>

              {/* Metric Display */}
              {testimonials[currentIndex].metric && (
                <div className="mt-6 glass rounded-xl p-4 border border-primary/20 inline-block">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary">
                      {testimonials[currentIndex].metric!.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold text-white">
                        {testimonials[currentIndex].metric!.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonials[currentIndex].metric!.label}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-glass opacity-50 pointer-events-none"></div>
          </div>

          {/* Enhanced Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass rounded-full p-4 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
            disabled={isTransitioning}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass rounded-full p-4 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
            disabled={isTransitioning}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Enhanced Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125 shadow-glow' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
              <div 
                className="h-full bg-gradient-primary rounded-full transition-all duration-500 ease-out"
                style={{width: `${((currentIndex + 1) / testimonials.length) * 100}%`}}
              ></div>
            </div>
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="glass rounded-2xl p-6 text-center hover-lift">
            <div className="text-3xl font-bold text-white mb-2">10,000+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center hover-lift">
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center hover-lift">
            <div className="text-3xl font-bold text-white mb-2">340%</div>
            <div className="text-muted-foreground">Average ROI Boost</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;