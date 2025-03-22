
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-lg shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="relative z-10">
          <h1 className="text-xl md:text-2xl font-bold text-gradient">
            Tensai
            <span className="text-foreground">Webinar</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/signin">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="glow" size="sm" ripple>
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-6 bg-background/95 backdrop-blur-lg animate-fade-in">
          <nav className="flex flex-col gap-4 py-8">
            <NavLinks mobile onClick={() => setIsMobileMenuOpen(false)} />
          </nav>
          <div className="flex flex-col gap-3 mt-auto">
            <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full" size="lg">
                Sign In
              </Button>
            </Link>
            <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="glow" className="w-full" size="lg" ripple>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({
  mobile = false,
  onClick,
}: {
  mobile?: boolean;
  onClick?: () => void;
}) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Webinars", path: "/webinars" },
    { name: "Speakers", path: "/speakers" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`relative font-medium hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
            mobile ? "text-lg py-3" : "text-sm"
          }`}
          onClick={onClick}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default Header;
