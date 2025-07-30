import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, BarChart3, Zap } from "lucide-react";
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

          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                                 {/* Badge */}
                 <div
                   className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-2 mt-20 lg:mt-0 hover-lift"
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
                <h2 className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-medium">
                  Automate campaigns, optimize performance in real-time, and predict ROI with our
                  cutting-edge AI marketing platform. Scale your business effortlessly.
                </h2>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12">
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
                <div className="text-center lg:text-left">
                  <p className="text-sm text-white mb-4">
                    Trusted by 10,000+ marketing teams worldwide
                  </p>
                  <div className="flex items-center justify-center lg:justify-start space-x-8 opacity-80">
                    <div className="text-lg font-semibold text-white">Microsoft</div>
                    <div className="text-lg font-semibold text-white">Shopify</div>
                    <div className="text-lg font-semibold text-white">Stripe</div>
                    <div className="text-lg font-semibold text-white">Notion</div>
                  </div>
                </div>
              </div>

              {/* Right Visual - AI Dashboard */}
              <div className="relative lg:block hidden">
                <div className="relative">
                  {/* Main Dashboard Container */}
                  <div className="glass rounded-3xl p-6 w-full max-w-md mx-auto relative overflow-hidden">
                                       {/* Glow Effect */}
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent rounded-3xl blur-xl animate-pulse-glow"></div>
                    
                    {/* Dashboard Header */}
                    <div className="relative z-10 flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <h3 className="text-white font-semibold text-lg">AI Marketing Dashboard</h3>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="relative z-10 grid grid-cols-2 gap-4 mb-6">
                      <div className="glass rounded-xl p-4 border border-primary/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-xs text-white/70">Revenue</span>
                        </div>
                        <div className="text-2xl font-bold text-white">$127.4K</div>
                        <div className="text-xs text-green-400">+12.5%</div>
                      </div>
                      
                      <div className="glass rounded-xl p-4 border border-primary/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-xs text-white/70">Leads</span>
                        </div>
                        <div className="text-2xl font-bold text-white">2,847</div>
                        <div className="text-xs text-green-400">+8.2%</div>
                      </div>
                      
                      <div className="glass rounded-xl p-4 border border-primary/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <BarChart3 className="w-4 h-4 text-purple-400" />
                          <span className="text-xs text-white/70">ROI</span>
                        </div>
                        <div className="text-2xl font-bold text-white">312%</div>
                        <div className="text-xs text-green-400">+5.1%</div>
                      </div>
                      
                      <div className="glass rounded-xl p-4 border border-primary/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          <span className="text-xs text-white/70">Efficiency</span>
                        </div>
                        <div className="text-2xl font-bold text-white">94%</div>
                        <div className="text-xs text-green-400">+2.3%</div>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="relative z-10">
                      <div className="glass rounded-xl p-4 border border-primary/20">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-medium text-white">Campaign Performance</span>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        
                                                 {/* Animated Chart Bars */}
                         <div className="flex items-end justify-between h-20 space-x-2">
                           {[60, 80, 45, 90, 75, 85, 70].map((height, index) => (
                             <div
                               key={index}
                               className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t-sm animate-pulse relative overflow-hidden"
                               style={{
                                 height: `${height}%`,
                                 animationDelay: `${index * 0.1}s`
                               }}
                             >
                               {/* Data flow effect */}
                               <div 
                                 className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent animate-data-flow"
                                 style={{
                                   animationDelay: `${index * 0.2}s`
                                 }}
                               ></div>
                             </div>
                           ))}
                         </div>
                        
                        {/* Chart Labels */}
                        <div className="flex justify-between mt-2 text-xs text-white/60">
                          <span>Mon</span>
                          <span>Tue</span>
                          <span>Wed</span>
                          <span>Thu</span>
                          <span>Fri</span>
                          <span>Sat</span>
                          <span>Sun</span>
                        </div>
                      </div>
                    </div>

                    {/* AI Status Indicator */}
                    <div className="relative z-10 mt-4 flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-white/70">AI Active</span>
                      </div>
                      <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full animate-pulse" style={{width: '75%'}}></div>
                      </div>
                      <span className="text-xs text-white/70">75%</span>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 glass rounded-full border border-primary/30 animate-float" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 glass rounded-full border border-purple-500/30 animate-float" style={{animationDelay: '1s'}}></div>
                  
                  {/* Data Points */}
                  <div className="absolute top-1/4 right-0 glass rounded-lg p-3 border border-primary/20 animate-pulse">
                    <div className="text-xs text-white/70">Real-time</div>
                    <div className="text-sm font-semibold text-white">Data Sync</div>
                  </div>
                  
                  <div className="absolute bottom-1/4 left-0 glass rounded-lg p-3 border border-purple-500/20 animate-pulse" style={{animationDelay: '0.7s'}}>
                    <div className="text-xs text-white/70">AI Predictions</div>
                    <div className="text-sm font-semibold text-white">98% Accuracy</div>
                  </div>
                </div>
              </div>

              {/* Mobile Visual - Simplified for mobile */}
              <div className="lg:hidden block mt-8">
                <div className="glass rounded-2xl p-4 w-full max-w-sm mx-auto relative overflow-hidden">
                                     {/* Glow Effect */}
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent rounded-2xl blur-xl animate-pulse-glow"></div>
                  
                  {/* Mobile Dashboard Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-semibold">AI Dashboard</h3>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Mobile Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="glass rounded-lg p-3 border border-primary/20">
                        <div className="text-sm font-bold text-white">$127.4K</div>
                        <div className="text-xs text-green-400">Revenue</div>
                      </div>
                      <div className="glass rounded-lg p-3 border border-primary/20">
                        <div className="text-sm font-bold text-white">2,847</div>
                        <div className="text-xs text-blue-400">Leads</div>
                      </div>
                    </div>
                    
                                         {/* Mobile Chart */}
                     <div className="glass rounded-lg p-3 border border-primary/20">
                       <div className="flex items-end justify-between h-12 space-x-1">
                         {[60, 80, 45, 90, 75].map((height, index) => (
                           <div
                             key={index}
                             className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t-sm animate-pulse relative overflow-hidden"
                             style={{
                               height: `${height}%`,
                               animationDelay: `${index * 0.1}s`
                             }}
                           >
                             {/* Data flow effect */}
                             <div 
                               className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent animate-data-flow"
                               style={{
                                 animationDelay: `${index * 0.2}s`
                               }}
                             ></div>
                           </div>
                         ))}
                       </div>
                     </div>
                  </div>
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