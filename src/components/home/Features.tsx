
import { Calendar, Video, MessageCircle, User, Lock, Mail, Clock, Globe } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <Video size={28} />,
      title: "Live Streaming",
      description: "High-quality live streaming with YouTube, Zoom, or Vimeo integration."
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Interactive Chat & Q&A",
      description: "Engage your audience with real-time chat, Q&A, and polls during sessions."
    },
    {
      icon: <Calendar size={28} />,
      title: "Smart Scheduling",
      description: "Plan and organize webinars with automated calendar invites and time zone support."
    },
    {
      icon: <User size={28} />,
      title: "Speaker Profiles",
      description: "Showcase speakers with detailed profiles, expertise, and social media links."
    },
    {
      icon: <Mail size={28} />,
      title: "Automated Reminders",
      description: "Send automatic email notifications and reminders to registered attendees."
    },
    {
      icon: <Clock size={28} />,
      title: "On-Demand Access",
      description: "Record webinars for on-demand viewing with detailed analytics."
    },
    {
      icon: <Globe size={28} />,
      title: "Global Accessibility",
      description: "Reach global audiences with multi-language support and closed captions."
    },
    {
      icon: <Lock size={28} />,
      title: "Secure Registration",
      description: "Protect your content with secure registration and access controls."
    },
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Powerful Features for <span className="text-gradient">Professional Webinars</span>
          </h2>
          <p className="text-muted-foreground">
            Everything you need to create, host, and manage successful webinars that engage your audience and deliver value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex flex-col h-full">
                <div className="p-3 mb-5 rounded-lg bg-secondary inline-flex w-fit">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
