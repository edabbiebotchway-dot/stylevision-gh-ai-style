import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Store, Heart, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Young Professionals",
    description: "Career women aged 18-35 looking to elevate their personal style",
    benefit: "Stand out in the office and beyond",
    cta: "Explore Guides",
  },
  {
    icon: Store,
    title: "Boutique Owners",
    description: "Fashion retailers needing professional styling solutions",
    benefit: "Boost sales with stunning catalogs",
    cta: "View Catalog Options",
  },
  {
    icon: Heart,
    title: "Style Enthusiasts",
    description: "Fashion lovers wanting to stay ahead of trends",
    benefit: "Access exclusive style combinations",
    cta: "Join Community",
  },
  {
    icon: TrendingUp,
    title: "Influencers & Creators",
    description: "Content creators seeking consistent, camera-ready looks",
    benefit: "Never run out of outfit ideas",
    cta: "Get Started",
  },
];

const TargetAudience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Perfect For <span className="text-primary">Every Style Story</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're building your career wardrobe or running a fashion business, 
            we have the perfect solution for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <audience.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {audience.description}
                </p>
                
                <div className="flex items-center gap-2 mb-4 text-sm font-medium text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {audience.benefit}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  {audience.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">83%</div>
            <div className="text-sm text-muted-foreground">Smartphone Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">WhatsApp Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
            <div className="text-sm text-muted-foreground">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
