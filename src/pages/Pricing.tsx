import { Check, Star, Crown, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import CompareTable from "@/components/CompareTable";

const Pricing = () => {
  const packages = [
    {
      name: "BASIC",
      subtitle: "Essential Style Guide",
      price: "100",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      popular: false,
      link: "https://selar.com/8889217w19",
      features: [
        "15-20 outfit combinations",
        "2 occasion categories",
        "Color palette recommendations",
        "Basic styling tips",
        "Professional PDF format",
        "48-hour delivery",
        "Email support"
      ],
      ideal: "Perfect for getting started with wardrobe essentials"
    },
    {
      name: "PREMIUM",
      subtitle: "Complete Style Transformation",
      price: "500",
      icon: Star,
      color: "from-pink-500 to-orange-500",
      bgColor: "from-pink-50 to-orange-50",
      popular: true,
      link: "https://selar.com/5w0975u30d",
      features: [
        "40-50 outfit combinations",
        "ALL 4 occasion categories",
        "Personalized color palette",
        "Body type recommendations",
        "Accessory & shoe pairing guide",
        "Shopping list included",
        "50+ page lookbook",
        "24-hour priority delivery",
        "1-month WhatsApp support",
        "20% off next lookbook"
      ],
      ideal: "Best value for complete style overhaul"
    },
    {
      name: "VIP",
      subtitle: "Ultimate Style Concierge",
      price: "1,500",
      icon: Crown,
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-50 to-yellow-50",
      popular: false,
      link: "https://selar.com/152914f998",
      features: [
        "60-80 premium outfit combinations",
        "7+ occasion categories",
        "30-min LIVE video consultation",
        "Personal color analysis",
        "Custom fashion mood board",
        "Hair & makeup pairing",
        "Wardrobe audit checklist",
        "Local boutique shopping guide",
        "Tailor coordination guide",
        "80-100 page premium lookbook",
        "12-hour express delivery",
        "3-month unlimited support",
        "Free 6-month refresh",
        "VIP WhatsApp group access"
      ],
      ideal: "White-glove service for image-conscious professionals"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-900">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Perfect Plan</span>
          </h1>
          <p className="text-lg text-gray-600">
            Transparent pricing for every style journey. No hidden fees. Ever.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-start">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                pkg.popular ? 'ring-4 ring-pink-500 scale-105' : 'hover:scale-105'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className={`p-8 bg-gradient-to-br ${pkg.bgColor}`}>
                <div className={`inline-block p-3 rounded-2xl bg-gradient-to-r ${pkg.color} mb-4`}>
                  <pkg.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest">{pkg.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{pkg.subtitle}</p>
                <div className="flex items-baseline text-gray-900">
                  <span className="text-lg font-semibold">GHC</span>
                  <span className="text-5xl font-extrabold ml-2">{pkg.price}</span>
                </div>
              </div>

              <div className="p-8">
                <p className="text-sm text-gray-600 mb-6 h-12">{pkg.ideal}</p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={pkg.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white rounded-full shadow-lg hover:shadow-xl transition-all py-6 text-lg font-bold`}
                  >
                    Get Started <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <CompareTable />

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-md">
            <div className="text-4xl mb-3">💯</div>
            <h4 className="font-bold text-gray-900 mb-2">Money-Back Guarantee</h4>
            <p className="text-sm text-gray-600">Not satisfied? Full refund within 7 days</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md">
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="font-bold text-gray-900 mb-2">Instant Delivery</h4>
            <p className="text-sm text-gray-600">Get your lookbook within 12-48 hours</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md">
            <div className="text-4xl mb-3">🌟</div>
            <h4 className="font-bold text-gray-900 mb-2">200+ Happy Customers</h4>
            <p className="text-sm text-gray-600">Join stylish women across Ghana</p>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Still Have Questions?
          </h2>
          <div className="space-y-4">
            <details className="group p-4 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer">
              <summary className="font-semibold text-gray-900 flex justify-between items-center">
                How quickly will I receive my lookbook?
                <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-gray-600">Basic: 48 hours | Premium: 24 hours | VIP: 12 hours. All delivered via email and WhatsApp.</p>
            </details>
            <details className="group p-4 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer">
              <summary className="font-semibold text-gray-900 flex justify-between items-center">
                Can I upgrade my package later?
                <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-gray-600">Yes! Contact us and pay only the difference to upgrade from Basic → Premium or Premium → VIP.</p>
            </details>
            <details className="group p-4 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer">
              <summary className="font-semibold text-gray-900 flex justify-between items-center">
                What payment methods do you accept?
                <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-gray-600">Mobile Money, Bank Transfer, Debit/Credit Cards - all secured by Selar payment platform.</p>
            </details>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Style?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose your package above or chat with us for personalized recommendations
          </p>
          <a href="https://wa.me/233507910837" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-full"
            >
              Chat on WhatsApp - Get Help Choosing
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
