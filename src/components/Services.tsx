import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import styleGuideCasual from "@/assets/style-guide-casual.jpg";
import styleGuideProfessional from "@/assets/style-guide-professional.jpg";
import styleGuideEvening from "@/assets/style-guide-evening.jpg";

const services = [
  {
    title: "Casual Style Guide",
    price: "GHC 40",
    image: styleGuideCasual,
    description: "Perfect everyday looks for work, errands, and casual outings",
    features: ["15+ outfit combinations", "Mix & match guide", "Shopping tips", "Instant PDF delivery"],
    popular: false,
  },
  {
    title: "Professional Collection",
    price: "GHC 70",
    image: styleGuideProfessional,
    description: "Elevate your corporate wardrobe with confidence",
    features: ["25+ professional outfits", "Corporate event styling", "Interview ready looks", "Accessories guide"],
    popular: true,
  },
  {
    title: "Evening Elegance",
    price: "GHC 70",
    image: styleGuideEvening,
    description: "Turn heads at every special occasion",
    features: ["20+ evening outfits", "Event styling tips", "Ankara fusion styles", "Hair & makeup pairings"],
    popular: false,
  },
  {
    title: "Boutique Catalog Solution",
    price: "GHC 200",
    image: styleGuideCasual,
    description: "Complete styling system for boutique owners",
    features: ["Custom brand styling", "50+ looks catalog", "Marketing materials", "Client presentation deck"],
    popular: false,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Choose Your <span className="text-primary">Style Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Professionally curated style guides delivered instantly to your inbox. 
            No subscriptions. No commitments. Just pure style confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden hover:shadow-elegant transition-shadow duration-300 border-2"
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-bold text-primary">{service.price}</span>
                  <span className="text-sm text-muted-foreground">one-time</span>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  variant={service.popular ? "premium" : "default"} 
                  className="w-full"
                  size="lg"
                >
                  Get This Guide
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Subscription Option */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-secondary to-secondary/90 text-white border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
            
            <div className="relative z-10 p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <Badge className="mb-4 bg-primary text-primary-foreground">Premium Membership</Badge>
                  <h3 className="text-3xl font-bold mb-3">StyleVision Unlimited</h3>
                  <p className="text-white/90 mb-4">
                    Get access to ALL style guides, monthly updates, exclusive looks, and priority WhatsApp support.
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">GHC 120</span>
                    <span className="text-white/80">/month</span>
                  </div>
                </div>
                
                <div className="lg:text-right">
                  <Button variant="hero" size="xl" className="bg-primary hover:bg-primary-glow">
                    Start Membership
                  </Button>
                  <p className="text-sm text-white/70 mt-2">Cancel anytime</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
