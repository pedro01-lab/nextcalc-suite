import { Link } from "react-router-dom";
import { Calculator, TrendingUp, Activity, DollarSign, Bitcoin } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Basic Calculator", icon: Calculator },
    { to: "/loan", label: "Loan Calculator", icon: TrendingUp },
    { to: "/bmi", label: "BMI Calculator", icon: Activity },
    { to: "/currency", label: "Currency Converter", icon: DollarSign },
    { to: "/crypto", label: "Crypto Profit", icon: Bitcoin },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50 card-shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-lg md:text-2xl font-display font-bold text-gradient hover:scale-105 transition-smooth whitespace-nowrap">
            <Calculator className="h-6 w-6 md:h-7 md:w-7 animate-float" />
            One Calculator Space
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-smooth relative group"
              >
                <link.icon className="h-4 w-4 group-hover:scale-110 transition-smooth" />
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-smooth"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth hover:scale-110"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in backdrop-blur-xl bg-card/90">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-smooth rounded-lg mx-2"
              >
                <link.icon className="h-5 w-5" />
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
