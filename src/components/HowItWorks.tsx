import { Heart, Sparkles, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Heart,
    title: "Tell Us Your Preferences",
    description: "Share your style goals, body type, occasions, and favorite colors",
    step: "01",
  },
  {
    icon: Sparkles,
    title: "AI Creates Your Lookbook",
    description: "Our AI curates personalized outfits for work, weddings, dates, and casual days",
    step: "02",
  },
  {
    icon: BookOpen,
    title: "Get Your Style Guide",
    description: "Receive your beautifully designed digital lookbook instantly via email and WhatsApp",
    step: "03",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Your Personal Lookbook in <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From your preferences to personalized style guide in minutes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 text-7xl font-bold text-primary/10">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 shadow-elegant">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
        
        {/* What's Inside Section */}
        <div className="mt-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-6">What's Inside Your Lookbook?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "💼 Work Outfits",
              "💍 Wedding Styles",
              "💖 Date Night Looks",
              "👕 Casual Wear"
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Join hundreds of stylish women across Ghana who never run out of outfit ideas
          </p>
          
          <Link to="/how-it-works">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all mb-6"
            >
              See Full Details & Pricing
            </Button>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">Live Support Available</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border">
              <span className="text-sm font-medium">Starting at GHC 40</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border">
              <span className="text-sm font-medium">🎉 Launch Special: 20% Off</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
