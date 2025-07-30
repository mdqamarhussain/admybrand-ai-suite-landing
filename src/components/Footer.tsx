import Container from "@/components/Container";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-white">ADmyBRAND</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The future of AI-powered marketing is here. Transform your campaigns with intelligent automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">Integrations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">Pricing</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">Press</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">Status</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors duration-300">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 ADmyBRAND AI Suite. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;