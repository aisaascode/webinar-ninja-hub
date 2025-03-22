
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8 border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-gradient mb-4">
              Tensai<span className="text-foreground">Webinar</span>
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs mb-4">
              Empower your knowledge sharing with our sophisticated webinar platform. Reach your audience with style and clarity.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              {["Features", "Webinars", "Pricing", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {["Help Center", "Community", "Privacy", "Terms"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Tensai Webinar. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Facebook", "Instagram"].map((social) => (
              <Link
                key={social}
                to="#"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
