import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Akosua Mensah",
    role: "Marketing Executive, Accra",
    content: "StyleVision transformed my wardrobe! I used to struggle every morning, now I have a clear guide for every occasion. Worth every pesewa!",
    rating: 5,
  },
  {
    name: "Ama Owusu",
    role: "Boutique Owner, Kumasi",
    content: "The catalog solution helped me showcase my inventory professionally. My sales increased by 40% in the first month alone!",
    rating: 5,
  },
  {
    name: "Efua Boateng",
    role: "Content Creator, Accra",
    content: "As an influencer, I need fresh looks constantly. The subscription service is a game-changer - new styles every month!",
    rating: 5,
  },
  {
    name: "Abena Addo",
    role: "Corporate Lawyer",
    content: "Professional collection gave me the confidence boost I needed. Now I walk into meetings knowing I look my absolute best.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Loved By <span className="text-primary">Stylish Women</span> Across Ghana
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from women who transformed their style confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-green-500 text-xl">✓</span>
            </div>
            <span className="text-sm font-medium">Instant Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              <span className="text-blue-500 text-xl">✓</span>
            </div>
            <span className="text-sm font-medium">Secure Payments</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <span className="text-purple-500 text-xl">✓</span>
            </div>
            <span className="text-sm font-medium">Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
