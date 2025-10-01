import { ShoppingBag, Zap, Download } from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    title: "Select Your Style",
    description: "Browse our curated collection and choose the perfect style guide for your needs",
    step: "01",
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description: "AI-powered system creates your personalized lookbook in seconds",
    step: "02",
  },
  {
    icon: Download,
    title: "Download & Style",
    description: "Receive your high-quality PDF guide instantly via email and WhatsApp",
    step: "03",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Style Confidence in <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From selection to stunning looks in under 5 minutes
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

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Join hundreds of stylish women across Ghana
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">Live Support Available</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border">
              <span className="text-sm font-medium">🎉 Launch Week Special: 20% Off</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
