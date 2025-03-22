
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/20 to-transparent opacity-70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="neo-glass rounded-lg p-10 md:p-16 text-center max-w-4xl mx-auto border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading leading-tight">
            Ready to Host Your First <span className="text-gradient">Professional Webinar</span>?
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of organizations who trust Tensai Webinar for their virtual events, training sessions, and knowledge sharing.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button variant="glow" size="lg" ripple>
                Get Started for Free
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="lg">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
