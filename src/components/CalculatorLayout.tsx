import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import AdSpace from "./AdSpace";
import Newsletter from "./Newsletter";

interface CalculatorLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

const CalculatorLayout = ({ children, title, description }: CalculatorLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 animate-fade-in">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <AdSpace position="top" />
          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-gradient animate-fade-in-up">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {description}
            </p>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            {children}
          </div>

          <Newsletter />
          
          <AdSpace position="bottom" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CalculatorLayout;
