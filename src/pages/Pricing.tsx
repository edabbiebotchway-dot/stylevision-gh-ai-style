import { Check, Star, Crown, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const comparisonFeatures = [
    { name: "Outfit Combinations", basic: "15-20", premium: "40-50", vip: "60-80" },
    { name: "Occasion Categories", basic: "2", premium: "4", vip: "7+" },
    { name: "Lookbook Pages", basic: "20-30", premium: "50+", vip: "80-100" },
    { name: "Delivery Time", basic: "48 hours", premium: "24 hours", vip: "12 hours" },
    { name: "Color Analysis", basic: "Basic", premium: "Personalized", vip: "Professional" },
    { name: "Shopping Guide", basic: "❌", premium: "✅", vip: "✅ Premium" },
    { name: "Video Consultation", basic: "❌", premium: "❌", vip: "✅ 30 min" },
    { name: "WhatsApp Support", basic: "Email only", premium: "1 month", vip: "3 months" },
    { name: "Lookbook Updates", basic: "❌", premium: "20% off", vip: "Free (6 mo)" },
    { name: "VIP Group Access", basic: "❌", premium: "❌", vip: "✅" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold mb-6">
            Choose Your Style Journey
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Investment in Your Style
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One-time payment. Lifetime access. Transform how you dress, forever.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl ${pkg.popular ? 'md:scale-105 shadow-2xl' : 'shadow-xl'} bg-white overflow-hidden transition-transform hover:scale-105 duration-300`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className={`p-8 bg-gradient-to-br ${pkg.bgColor}`}>
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-4`}>
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>

                {/* Package Name */}
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.subtitle}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-semibold text-gray-600">GHC</span>
                    <span className="text-5xl font-bold text-gray-900 ml-2">{pkg.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">One-time payment • Lifetime access</p>
                </div>

                {/* CTA Button */}
                <a href={pkg.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all`}
                  >
                    Get This Guide
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>

              {/* Features */}
              <div className="p-8">
                <p className="text-sm font-semibold text-gray-500 mb-4 uppercase">What's Included:</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal For */}
                <div className={`p-4 rounded-xl bg-gradient-to-br ${pkg.bgColor}`}>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Ideal for:</span> {pkg.ideal}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Compare All Packages
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="font-bold text-purple-600 text-lg">BASIC</div>
                    <div className="text-sm text-gray-500 mt-1">GHC 100</div>
                  </th>
                  <th className="text-center py-4 px-4 bg-gradient-to-br from-pink-50 to-orange-50 rounded-t-xl">
                    <div className="font-bold text-pink-600 text-lg">PREMIUM ⭐</div>
                    <div className="text-sm text-gray-500 mt-1">GHC 500</div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="font-bold text-orange-600 text-lg">VIP 👑</div>
                    <div className="text-sm text-gray-500 mt-1">GHC 1,500</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-700">{feature.name}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{feature.basic}</td>
                    <td className="py-4 px-4 text-center text-gray-900 font-semibold bg-gradient-to-br from-pink-50 to-orange-50">
                      {feature.premium}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-900 font-semibold">{feature.vip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison */}
          <div className="md:hidden space-y-6 mt-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-br ${pkg.bgColor} border-2 ${pkg.popular ? 'border-pink-500' : 'border-gray-200'}`}>
                <h3 className="text-xl font-bold mb-4">{pkg.name} - GHC {pkg.price}</h3>
                {comparisonFeatures.map((feature, fidx) => (
                  <div key={fidx} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                    <span className="text-sm text-gray-600">{feature.name}</span>
                    <span className="text-sm font-semibold">
                      {idx === 0 ? feature.basic : idx === 1 ? feature.premium : feature.vip}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

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
                <span className="text-gray-400">+</span>
              </summary>
              <p className="mt-3 text-gray-600">Basic: 48 hours | Premium: 24 hours | VIP: 12 hours. All delivered via email and WhatsApp.</p>
            </details>
            <details className="group p-4 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer">
              <summary className="font-semibold text-gray-900 flex justify-between items-center">
                Can I upgrade my package later?
                <span className="text-gray-400">+</span>
              </summary>
              <p className="mt-3 text-gray-600">Yes! Contact us and pay only the difference to upgrade from Basic → Premium or Premium → VIP.</p>
            </details>
            <details className="group p-4 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer">
              <summary className="font-semibold text-gray-900 flex justify-between items-center">
                What payment methods do you accept?
                <span className="text-gray-400">+</span>
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
