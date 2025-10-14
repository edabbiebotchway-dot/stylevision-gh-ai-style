import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-primary">Style</span>
              <span className="text-foreground">Vision</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Style Guides
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">
              Reviews
            </a>
            <Link to="/pricing">
              <Button variant="hero" size="default">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <a 
              href="#home" 
              className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="#services" 
              className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-medium"
            >
              Style Guides
            </a>
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-medium"
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors font-medium"
            >
              Reviews
            </a>
            <Link to="/pricing">
              <Button variant="hero" className="w-full" size="lg">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
