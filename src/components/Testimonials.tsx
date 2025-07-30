import { useState, useEffect, useRef } from "react";
import Container from "@/components/Container";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "CMO",
    company: "TechFlow",
    content: "ADmyBRAND increased our ROI by 340% in just 3 months. The AI-powered targeting is simply revolutionary for our B2B campaigns.",
    rating: 5,
    avatar: "SC"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Digital Agency Owner",
    company: "Growth Labs",
    content: "The AI targeting is incredibly accurate. We've seen conversion rates double across all client campaigns. It's like having a data scientist on every account.",
    rating: 5,
    avatar: "MR"
  },
  {
    id: 3,
    name: "Lisa Park",
    title: "E-commerce Director",
    company: "StyleHub",
    content: "Finally, an AI that truly understands our brand voice. The automated content generation saves us 20+ hours per week while maintaining quality.",
    rating: 5,
    avatar: "LP"
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Marketing Manager",
    company: "InnovateCorp",
    content: "We doubled our conversions while halving our ad spend. The real-time optimization feature is a game-changer for performance marketing.",
    rating: 5,
    avatar: "JW"
  },
  {
    id: 5,
    name: "Emma Thompson",
    title: "Startup Founder",
    company: "NextGen Solutions",
    content: "Game-changing for small teams like ours. ADmyBRAND gives us enterprise-level marketing capabilities without the enterprise budget.",
    rating: 5,
    avatar: "ET"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
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
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
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

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-glass opacity-50 pointer-events-none"></div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass rounded-full p-3 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass rounded-full p-3 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;