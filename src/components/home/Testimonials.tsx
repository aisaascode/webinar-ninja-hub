
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Marketing Director, Globex Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    stars: 5,
    text: "Tensai Webinar transformed how we connect with our audience. The platform is incredibly intuitive and the analytics provide valuable insights that help us improve each session.",
  },
  {
    id: 2,
    name: "Mark Roberts",
    role: "CEO, TechStart Inc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    stars: 5,
    text: "After trying several webinar platforms, we settled on Tensai Webinar for its reliability and feature set. The interactive polls and Q&A features have significantly boosted audience engagement.",
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "Education Director, Learning Path",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3",
    stars: 4,
    text: "The automated reminder system has drastically improved our attendance rates. Our students love the recording feature that allows them to revisit sessions later.",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Head of Events, Conference Plus",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    stars: 5,
    text: "Seamless integration with our existing systems and professional-grade streaming quality. Tensai Webinar has been a game-changer for our virtual conferences.",
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Training Specialist, Global Learn",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    stars: 5,
    text: "The analytics dashboard provides detailed insights that help us refine our training programs. Customer support is also exceptional, always ready to assist.",
  },
  {
    id: 6,
    name: "David Kim",
    role: "Product Manager, InnovateTech",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3",
    stars: 4,
    text: "Tensai Webinar made our product launches more engaging and professional. The platform is robust and has all the features we need for successful demonstrations.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 relative bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-[500px] h-[500px] top-1/3 left-[10%] opacity-15" />
        <div className="orb w-[400px] h-[400px] bottom-0 right-[10%] opacity-10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 font-heading">
            What Our <span className="text-gradient">Users Say</span>
          </h2>
          <p className="text-muted-foreground">
            Join thousands of satisfied customers who have transformed their webinar experience with our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="neo-glass rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.stars 
                        ? "text-primary fill-primary" 
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
