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
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <AdSpace position="top" />
          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {children}

          <Newsletter />
          
          <AdSpace position="bottom" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CalculatorLayout;
