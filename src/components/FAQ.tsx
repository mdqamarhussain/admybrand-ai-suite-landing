import { useState, useRef, useEffect } from "react";
import Container from "@/components/Container";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does AI targeting work?",
    answer: "Our AI analyzes millions of data points including user behavior, demographics, interests, and engagement patterns to identify your ideal customers. It continuously learns and optimizes targeting parameters to improve campaign performance automatically."
  },
  {
    question: "What's included in each pricing tier?",
    answer: "Each tier includes core AI features with varying limits. Starter offers 5 campaigns and basic analytics. Professional includes unlimited campaigns, advanced AI, and priority support. Enterprise adds white-label options, dedicated management, and custom integrations."
  },
  {
    question: "How long does onboarding take?",
    answer: "Most clients are up and running within 24-48 hours. Our onboarding includes account setup, integration assistance, initial campaign configuration, and training sessions. Enterprise clients receive dedicated onboarding support with custom timelines."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We're SOC 2 compliant with enterprise-grade security. All data is encrypted in transit and at rest, with regular security audits. We never share your data with third parties and maintain strict access controls."
  },
  {
    question: "Do you integrate with existing marketing tools?",
    answer: "Yes, we integrate with 50+ popular marketing platforms including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, and more. Our API allows custom integrations, and we're constantly adding new connectors."
  },
  {
    question: "What support do you provide?",
    answer: "We offer email support for Starter plans, priority 24/7 support for Professional plans, and dedicated account management for Enterprise clients. All plans include our comprehensive knowledge base, video tutorials, and community forum."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} id="faq" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="block gradient-text mt-2">Questions</span>
          </h2>
          
          <div className={`mx-auto h-1 bg-gradient-primary rounded-full transition-all duration-1000 ${
            isVisible ? 'w-24' : 'w-0'
          }`}></div>
          
          <p className="text-xl text-muted-foreground mt-8 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite. Can't find what you're looking for? 
            Contact our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`glass rounded-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300 rounded-2xl"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-6 h-6 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-primary" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary" />
                  )}
                </div>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <div className="px-6">
                  <div className="border-t border-border/30 pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;