import { useState } from "react";
import { Camera, Sparkles, BookOpen, Heart, ArrowRight, CheckCircle, Calendar, Briefcase, Users, Shirt, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      icon: Heart,
      number: "01",
      title: "Tell Us About You",
      description: "Share your style preferences, occasions you dress for, body type, and color preferences. The more we know, the better your lookbook!",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      number: "02",
      title: "AI Creates Your Lookbook",
      description: "Our AI analyzes your preferences and creates a personalized digital lookbook with curated outfit ideas for work, weddings, dates, and casual outings.",
      color: "from-pink-500 to-orange-500"
    },
    {
      icon: BookOpen,
      number: "03",
      title: "Receive Your Style Guide",
      description: "Get your custom lookbook delivered digitally. Beautiful, professional, and ready to use as your personal fashion reference.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Shirt,
      number: "04",
      title: "Style with Confidence",
      description: "Use your lookbook for shopping inspiration, outfit planning, or share with your tailor. Your style guide, your way!",
      color: "from-yellow-500 to-green-500"
    }
  ];

  const lookbookTypes = [
    {
      icon: Briefcase,
      title: "Work & Professional",
      description: "Office-ready outfits that command respect"
    },
    {
      icon: Heart,
      title: "Weddings & Events",
      description: "Stand out at traditional and modern ceremonies"
    },
    {
      icon: Calendar,
      title: "Date Night & Social",
      description: "Impress on romantic outings and gatherings"
    },
    {
      icon: Users,
      title: "Casual & Everyday",
      description: "Comfortable yet stylish daily looks"
    }
  ];

  const features = [
    "Personalized to YOUR preferences",
    "AI-designed, human-refined",
    "Culturally relevant for Ghana",
    "Climate-appropriate styling",
    "Digital format - access anywhere",
    "New styles added monthly"
  ];

  // Lookbook gallery images
  const lookbookPages = [
    {
      src: "/lookbook/workwear-cover.jpg",
      title: "WORKWEAR",
      subtitle: "Professional Styles for the Modern Office",
      category: "work"
    },
    {
      src: "/lookbook/workwear-1.jpg",
      title: "Elegant White Dress",
      subtitle: "Sleek, contemporary power",
      category: "work"
    },
    {
      src: "/lookbook/workwear-2.jpg",
      title: "Navy Professional Suit",
      subtitle: "Confident, refined professionalism",
      category: "work"
    },
    {
      src: "/lookbook/glamnight-cover.jpg",
      title: "GLAM NIGHTS",
      subtitle: "Venus Gown - Modern allure, captivating elegance",
      category: "evening"
    },
    {
      src: "/lookbook/glamnight-1.jpg",
      title: "Venus Gown - Navy",
      subtitle: "Flowing elegance for special occasions",
      category: "evening"
    },
    {
      src: "/lookbook/glamnight-2.jpg",
      title: "Evening Elegance",
      subtitle: "Nightfall Chic - Flowing silk & modern drape",
      category: "evening"
    },
    {
      src: "/lookbook/glamnight-3.jpg",
      title: "Starlight Dress",
      subtitle: "Irresistible party chic",
      category: "evening"
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(lookbookPages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % lookbookPages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(lookbookPages[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + lookbookPages.length) % lookbookPages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(lookbookPages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold mb-6">
            Your Personal Digital Fashion Guide
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            How StyleVision Lookbooks Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a personalized digital lookbook curated by AI, inspired by you. 
            Your style guide for work, weddings, dates, and everyday life.
          </p>
        </div>

        <div className="space-y-24 mb-20">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1 space-y-4">
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-sm`}>
                  STEP {step.number}
                </div>
                <h2 className="text-4xl font-bold text-gray-900">{step.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="flex-1 flex justify-center">
                <div className={`relative w-64 h-64 rounded-3xl bg-gradient-to-br ${step.color} p-1 shadow-2xl hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                    <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}>
                      <step.icon className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            What's Inside Your Lookbook?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Every StyleVision lookbook includes curated outfit ideas for these occasions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lookbookTypes.map((type, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                  <type.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl shadow-2xl p-12 mb-20 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why StyleVision Lookbooks?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* LOOKBOOK GALLERY SECTION - THIS IS WHERE IT GOES */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Preview: Sample Lookbook Pages
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              See the quality and style of our AI-curated fashion guides
            </p>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {lookbookPages.map((page, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                {/* Placeholder gradient for missing images */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200"></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="font-semibold text-sm">{page.title}</p>
                    <p className="text-xs opacity-90">{page.subtitle}</p>
                  </div>
                </div>

                {/* Page number indicator */}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
                  {index + 1}/{lookbookPages.length}
                </div>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 text-center">
            <p className="text-gray-700 font-medium mb-2">
              ✨ This is just a sample! Your personalized lookbook will include:
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
              <span>• Styles matching YOUR preferences</span>
              <span>• Colors that complement YOUR skin tone</span>
              <span>• Outfits for YOUR occasions</span>
              <span>• Professional PDF format</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12 max-w-4xl mx-auto mb-20">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
              AK
            </div>
            <blockquote className="text-2xl text-gray-700 italic mb-6">
              "My StyleVision lookbook is like having a personal stylist in my pocket! 
              I reference it every time I go shopping or need outfit inspiration."
            </blockquote>
            <p className="font-semibold text-gray-900">Ama Kwarteng</p>
            <p className="text-gray-600">Marketing Executive, Accra</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-12 mb-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Your Personal Lookbook?
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Affordable pricing, unlimited style inspiration
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              One-time payment
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Instant digital delivery
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Lifetime access
            </span>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Get Your StyleVision Lookbook Today
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of stylish Ghanaians who never run out of outfit ideas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Order Your Lookbook
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a href="https://wa.me/233507910837" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-full"
              >
                Chat on WhatsApp
              </Button>
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Follow us on Instagram{" "}
            <a href="https://instagram.com/StyleVisionGH" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-semibold hover:underline">
              @StyleVisionGH
            </a>
            {" "}for style inspiration
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[90vh] flex flex-col items-center">
            <div className="relative aspect-[3/4] w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300"></div>
            </div>
            
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.subtitle}</p>
              <p className="text-sm text-gray-400 mt-2">
                Page {currentIndex + 1} of {lookbookPages.length}
              </p>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      <div className="h-20"></div>
    </div>
  );
};

export default HowItWorks;
