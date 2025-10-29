import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/80 backdrop-blur-xl border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-foreground">
            <Calculator className="h-5 w-5 text-primary animate-float" />
            <span className="font-display font-bold text-gradient">One Calculator Space</span>
            <span className="text-muted-foreground">© 2025</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-smooth relative group">
              Terms of Service
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth"></span>
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth"></span>
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth"></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
