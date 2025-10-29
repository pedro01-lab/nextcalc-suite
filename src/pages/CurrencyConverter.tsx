import { useState, useEffect } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeftRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("100");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const currencies = [
    "USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "INR", "MXN",
    "BRL", "ZAR", "NZD", "SGD", "HKD", "NOK", "SEK", "DKK", "PLN", "THB"
  ];

  const convertCurrency = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();
      const exchangeRate = data.rates[toCurrency];
      const convertedAmount = parseFloat(amount) * exchangeRate;
      
      setRate(exchangeRate);
      setResult(convertedAmount);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch exchange rates. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    convertCurrency();
  }, []);

  return (
    <CalculatorLayout
      title="Currency Converter"
      description="Convert between currencies with live exchange rates"
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Convert Currency</h3>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="from">From</Label>
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((curr) => (
                    <SelectItem key={curr} value={curr}>
                      {curr}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                size="icon"
                onClick={swapCurrencies}
                className="rounded-full"
              >
                <ArrowLeftRight className="h-4 w-4" />
              </Button>
            </div>

            <div>
              <Label htmlFor="to">To</Label>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((curr) => (
                    <SelectItem key={curr} value={curr}>
                      {curr}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={convertCurrency}
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {loading ? "Converting..." : "Convert"}
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Result</h3>
          
          {result !== null ? (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  {amount} {fromCurrency} =
                </p>
                <p className="text-4xl font-bold text-primary mb-2">
                  {result.toFixed(2)} {toCurrency}
                </p>
              </div>

              {rate && (
                <div className="space-y-3 bg-secondary p-6 rounded-lg">
                  <h4 className="font-semibold">Exchange Rate</h4>
                  <p className="text-2xl">
                    1 {fromCurrency} = {rate.toFixed(4)} {toCurrency}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Rates updated in real-time
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              <p>Click Convert to see results</p>
            </div>
          )}
        </Card>
      </div>

      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">About the Currency Converter</h2>
        <div className="prose prose-gray max-w-none text-foreground">
          <p className="mb-4">
            Our currency converter provides real-time exchange rates for over 20 major world currencies, making it an essential tool for travelers, international businesses, online shoppers, and anyone dealing with foreign exchange. The converter uses live data from reliable financial sources to ensure you get accurate, up-to-date exchange rates.
          </p>
          <p className="mb-4">
            Using the converter is simple: enter the amount you want to convert, select your source currency and target currency, and click Convert. The tool instantly displays the converted amount and the current exchange rate between the two currencies. You can also quickly swap currencies using the arrow button to convert in the opposite direction.
          </p>
          <p className="mb-4">
            This tool supports all major currencies including US Dollar (USD), Euro (EUR), British Pound (GBP), Japanese Yen (JPY), and many more. Whether you're planning a trip abroad, shopping from international websites, sending money to family overseas, or managing international business transactions, this converter helps you understand exactly how much your money is worth in another currency.
          </p>
          <p>
            Exchange rates fluctuate constantly based on global market conditions, economic news, and geopolitical events. Our converter fetches the latest rates to give you the most current information available. Remember that the actual rate you receive from banks or exchange services may include fees or markups, so this calculator gives you the mid-market rate as a reference point for comparison.
          </p>
        </div>
      </Card>
    </CalculatorLayout>
  );
};

export default CurrencyConverter;
