
import { Check } from "lucide-react";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: 0,
    description: "Perfect for individuals starting with webinars",
    features: [
      "Up to 100 attendees",
      "1 host per webinar", 
      "60-minute sessions",
      "Basic analytics",
      "Email support",
      "Screen sharing"
    ],
    highlighted: false,
    ctaText: "Start Free",
    ctaLink: "/signup"
  },
  {
    name: "Professional",
    price: 49,
    description: "For growing businesses needing more features",
    features: [
      "Up to 500 attendees",
      "5 hosts per webinar",
      "Unlimited session duration",
      "Advanced analytics",
      "Priority support",
      "Interactive polls & Q&A",
      "Custom branding",
      "Recording storage (20GB)"
    ],
    highlighted: true,
    ctaText: "Try Free for 14 Days",
    ctaLink: "/signup?plan=pro"
  },
  {
    name: "Enterprise",
    price: 99,
    description: "For organizations requiring premium features",
    features: [
      "Up to 10,000 attendees",
      "Unlimited hosts",
      "Unlimited session duration",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Advanced security features",
      "Full white-labeling",
      "API access",
      "SSO integration",
      "Unlimited storage"
    ],
    highlighted: false,
    ctaText: "Contact Sales",
    ctaLink: "/contact"
  }
];

const Pricing = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/10 to-transparent opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 font-heading">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground">
            Choose the perfect plan that fits your needs. All plans include our core webinar features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`neo-glass rounded-lg overflow-hidden ${
                plan.highlighted 
                  ? "border-primary/30 shadow-lg shadow-primary/10 transform md:-translate-y-4" 
                  : "border-white/5"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-primary/20 py-2 text-center">
                  <span className="text-sm font-medium">Most Popular</span>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-heading">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to={plan.ctaLink}>
                  <Button 
                    variant={plan.highlighted ? "glow" : "outline"} 
                    className="w-full" 
                    ripple={plan.highlighted}
                  >
                    {plan.ctaText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
