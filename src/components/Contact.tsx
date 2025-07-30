import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { Send, CheckCircle, Mail, User, Building, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success animation
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section ref={sectionRef} id="contact" className="py-24 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass rounded-3xl p-12 animate-scale-in">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Transform Your
            <span className="block gradient-text mt-2">Marketing Together</span>
          </h2>
          
          <div className={`mx-auto h-1 bg-gradient-primary rounded-full transition-all duration-1000 ${
            isVisible ? 'w-24' : 'w-0'
          }`}></div>
          
          <p className="text-xl text-muted-foreground mt-8 max-w-3xl mx-auto">
            Ready to revolutionize your marketing with AI? Get in touch with our team and 
            discover how ADmyBRAND can accelerate your growth.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form 
            onSubmit={handleSubmit}
            className={`glass rounded-3xl p-8 md:p-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 bg-background/50 border rounded-xl text-white placeholder-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    errors.name ? 'border-red-500' : 'border-border hover:border-primary/30'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 bg-background/50 border rounded-xl text-white placeholder-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    errors.email ? 'border-red-500' : 'border-border hover:border-primary/30'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Company Field */}
            <div className="mb-6">
              <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                <Building className="w-4 h-4 inline mr-2" />
                Company Name
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className={`w-full px-4 py-3 bg-background/50 border rounded-xl text-white placeholder-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  errors.company ? 'border-red-500' : 'border-border hover:border-primary/30'
                }`}
                placeholder="Enter your company name"
              />
              {errors.company && (
                <p className="text-red-400 text-sm mt-1">{errors.company}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`w-full px-4 py-3 bg-background/50 border rounded-xl text-white placeholder-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none ${
                  errors.message ? 'border-red-500' : 'border-border hover:border-primary/30'
                }`}
                placeholder="Tell us about your marketing goals and how we can help..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Sending Message...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;