import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl p-8 my-12 glassmorphism border-2 border-primary/30 glow">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
      <div className="relative max-w-2xl mx-auto text-center">
        <Mail className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
        <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 text-gradient">
          Get weekly smart tools and updates
        </h3>
        <p className="text-muted-foreground mb-6">
          Stay updated with the latest calculators, tips, and financial insights delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-card/50 border-primary/30 focus:border-primary transition-smooth"
          />
          <Button type="submit" variant="premium" size="lg">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
