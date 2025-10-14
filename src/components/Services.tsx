import { Book, Briefcase, Sparkles, ShoppingBag, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import casualImage from "@/assets/style-guide-casual.jpg";
import professionalImage from "@/assets/style-guide-professional.jpg";
import eveningImage from "@/assets/style-guide-evening.jpg";

const services = [
  {
    icon: Book,
    title: "Casual Style Guide",
    price: "100",
    description: "Your everyday fashion companion. Get 15-20 versatile casual outfit combinations perfect for weekend outings, errands, and relaxed gatherings.",
    features: ["Comfortable & stylish looks", "Mix & match options", "Budget-friendly pieces"],
    color: "from-purple-500 to-pink-500",
    link: "https://selar.com/8889217w19",
    popular: false,
    image: casualImage
  },
  {
    icon: Briefcase,
    title: "Professional Collection",
    price: "500",
    description: "Command respect in the workplace. 40+ polished office-ready outfits from Monday meetings to Friday presentations. Includes accessories guide.",
    features: ["Power dressing essentials", "Conservative to creative looks", "Seasonal variations"],
    color: "from-blue-500 to-purple-500",
    link: "https://selar.com/5w0975u30d",
    popular: true,
    image: professionalImage
  },
  {
    icon: Sparkles,
    title: "Evening Elegance",
    price: "500",
    description: "Shine at every event. 40+ stunning looks for weddings, galas, date nights, and special occasions. From cocktail dresses to traditional glam.",
    features: ["Wedding guest styles", "Date night perfection", "Formal event ready"],
    color: "from-pink-500 to-orange-500",
    link: "https://selar.com/5w0975u30d",
    popular: true,
    image: eveningImage
  },
  {
    icon: ShoppingBag,
    title: "Boutique Catalog",
    price: "1,500",
    description: "Premium curated collection. 60-80 exclusive outfit combinations across ALL categories with live styling consultation and local shopping guide.",
    features: ["All-in-one style solution", "30-min video consultation", "VIP support for 3 months"],
    color: "from-orange-500 to-red-500",
    link: "https://selar.com/152914f998",
    popular: false
  },
  {
    icon: Crown,
    title: "Premium Membership",
    price: "2,000",
    priceLabel: "/month",
    description: "Unlimited style access. Monthly lookbook updates, unlimited consultations, exclusive trend alerts, and priority styling support. Cancel anytime.",
    features: ["Monthly new lookbooks", "Unlimited consultations", "Exclusive trend alerts", "Priority support 24/7"],
    color: "from-yellow-500 to-pink-500",
    link: "https://wa.me/233507910837?text=I'm interested in Premium Membership",
    popular: false,
    badge: "SUBSCRIPTION"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-primary">Style Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From everyday casual to boardroom power dressing - find your perfect style guide
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                service.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-1 rounded-bl-2xl text-xs font-bold">
                  POPULAR
                </div>
              )}

              {/* Subscription Badge */}
              {service.badge && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-4 py-1 rounded-bl-2xl text-xs font-bold">
                  {service.badge}
                </div>
              )}

              {service.image && (
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              )}

              {/* Icon Header */}
              <div className={`p-8 bg-gradient-to-br ${service.color}`}>
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <div className="flex items-baseline text-white">
                  <span className="text-lg font-semibold">GHC</span>
                  <span className="text-4xl font-bold ml-2">{service.price}</span>
                  {service.priceLabel && (
                    <span className="text-lg ml-1">{service.priceLabel}</span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a href={service.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white rounded-full shadow-lg hover:shadow-xl transition-all`}
                  >
                    {service.badge === "SUBSCRIPTION" ? "Subscribe Now" : "Get This Guide"}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Compare All Section */}
        <div className="text-center bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Not sure which one to choose?</h3>
          <p className="text-gray-600 mb-6">Compare all packages side-by-side and find your perfect match</p>
          <Link to="/pricing">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Compare All Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
