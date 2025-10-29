import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CryptoCalculator = () => {
  const [buyPrice, setBuyPrice] = useState("30000");
  const [sellPrice, setSellPrice] = useState("35000");
  const [amount, setAmount] = useState("1");
  const [fees, setFees] = useState("2");
  const [result, setResult] = useState<{
    profit: number;
    roi: number;
    totalInvestment: number;
    totalReturn: number;
  } | null>(null);

  const calculateProfit = () => {
    const buy = parseFloat(buyPrice);
    const sell = parseFloat(sellPrice);
    const qty = parseFloat(amount);
    const feePercent = parseFloat(fees);

    const totalInvestment = buy * qty;
    const grossReturn = sell * qty;
    const feeAmount = (grossReturn * feePercent) / 100;
    const totalReturn = grossReturn - feeAmount;
    const profit = totalReturn - totalInvestment;
    const roi = (profit / totalInvestment) * 100;

    setResult({
      profit,
      roi,
      totalInvestment,
      totalReturn,
    });
  };

  return (
    <CalculatorLayout
      title="Crypto Profit Calculator"
      description="Calculate your cryptocurrency trading profit, loss, and ROI"
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Trade Details</h3>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="buyPrice">Buy Price ($)</Label>
              <Input
                id="buyPrice"
                type="number"
                value={buyPrice}
                onChange={(e) => setBuyPrice(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="sellPrice">Sell Price ($)</Label>
              <Input
                id="sellPrice"
                type="number"
                value={sellPrice}
                onChange={(e) => setSellPrice(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="amount">Amount (Coins/Tokens)</Label>
              <Input
                id="amount"
                type="number"
                step="0.001"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="fees">Trading Fees (%)</Label>
              <Input
                id="fees"
                type="number"
                step="0.1"
                value={fees}
                onChange={(e) => setFees(e.target.value)}
                className="mt-2"
              />
            </div>

            <Button onClick={calculateProfit} className="w-full bg-primary hover:bg-primary/90">
              Calculate Profit
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Results</h3>
          
          {result ? (
            <div className="space-y-6">
              <div className={`bg-gradient-to-br ${result.profit >= 0 ? 'from-green-500/10 to-green-500/5' : 'from-red-500/10 to-red-500/5'} rounded-lg p-6 text-center`}>
                <p className="text-sm text-muted-foreground mb-2">
                  {result.profit >= 0 ? "Total Profit" : "Total Loss"}
                </p>
                <p className={`text-4xl font-bold ${result.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  ${Math.abs(result.profit).toFixed(2)}
                </p>
                <p className={`text-xl font-semibold mt-2 ${result.roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  ROI: {result.roi.toFixed(2)}%
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                  <span className="font-medium">Investment</span>
                  <span className="text-xl font-bold">${result.totalInvestment.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                  <span className="font-medium">Return (After Fees)</span>
                  <span className="text-xl font-bold">${result.totalReturn.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                  <span className="font-medium">Price Change</span>
                  <span className={`text-xl font-bold ${parseFloat(sellPrice) >= parseFloat(buyPrice) ? 'text-green-500' : 'text-red-500'}`}>
                    {(((parseFloat(sellPrice) - parseFloat(buyPrice)) / parseFloat(buyPrice)) * 100).toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              <p>Enter trade details and click Calculate</p>
            </div>
          )}
        </Card>
      </div>

      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">About the Crypto Profit Calculator</h2>
        <div className="prose prose-gray max-w-none text-foreground">
          <p className="mb-4">
            The cryptocurrency profit calculator is an essential tool for crypto traders and investors who want to understand their potential gains or losses before making a trade or to analyze past trading performance. This calculator accounts for all the critical factors including buy price, sell price, quantity, and trading fees to give you an accurate picture of your investment returns.
          </p>
          <p className="mb-4">
            To use this calculator, enter the price at which you bought the cryptocurrency, the price at which you plan to sell (or have sold), the amount of coins or tokens you're trading, and the percentage trading fees charged by your exchange. The calculator will instantly compute your total profit or loss, return on investment (ROI) percentage, total investment amount, and net return after fees.
          </p>
          <p className="mb-4">
            Understanding your ROI is crucial in cryptocurrency trading because crypto markets are highly volatile. This tool helps you make data-driven decisions rather than emotional ones. You can use it to set realistic profit targets, determine stop-loss levels, or compare different trading scenarios before committing your capital. The fee calculation is particularly important because trading fees can significantly impact your profits, especially on smaller trades or high-frequency trading.
          </p>
          <p>
            Whether you're trading Bitcoin, Ethereum, or any other cryptocurrency, this calculator works for all digital assets. It's perfect for both beginners learning about crypto trading and experienced traders who want to quickly calculate potential returns. Remember that cryptocurrency prices are extremely volatile, and past performance doesn't guarantee future results. Always do thorough research and never invest more than you can afford to lose.
          </p>
        </div>
      </Card>
    </CalculatorLayout>
  );
};

export default CryptoCalculator;
