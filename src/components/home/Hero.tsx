
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Calendar, Users, Video } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-[500px] h-[500px] -top-[10%] -left-[5%] opacity-30" />
        <div className="orb w-[400px] h-[400px] -bottom-[10%] -right-[5%] opacity-20" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-slide-up">
          <div className="px-4 py-1.5 mb-6 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <p className="text-sm font-medium">
              <span className="text-primary">New</span> — Introducing AI-powered webinar summaries
            </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 font-heading">
            Host Engaging Webinars With <span className="text-gradient">Style & Precision</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Create, manage, and host professional webinars that captivate your audience with our intuitive platform designed for seamless knowledge sharing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/signup">
              <Button variant="glow" size="lg" ripple className="min-w-[160px]">
                Get Started
              </Button>
            </Link>
            <Link to="/webinars">
              <Button variant="glass" size="lg" className="min-w-[160px]">
                Explore Webinars
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mx-auto">
            {[
              {
                icon: <Video className="h-8 w-8 text-primary" />,
                title: "Live Streaming",
                description: "Connect with your audience in real-time with high-quality video."
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Q&A and Polls",
                description: "Engage participants with interactive Q&A sessions and live polls."
              },
              {
                icon: <Calendar className="h-8 w-8 text-primary" />,
                title: "Smart Scheduling",
                description: "Plan and organize webinars with automated reminders and time zone support."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="neo-glass p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-heading">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
