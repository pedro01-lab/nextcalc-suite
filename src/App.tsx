import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicCalculator from "./pages/BasicCalculator";
import LoanCalculator from "./pages/LoanCalculator";
import BMICalculator from "./pages/BMICalculator";
import CurrencyConverter from "./pages/CurrencyConverter";
import CryptoCalculator from "./pages/CryptoCalculator";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicCalculator />} />
          <Route path="/loan" element={<LoanCalculator />} />
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/currency" element={<CurrencyConverter />} />
          <Route path="/crypto" element={<CryptoCalculator />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
