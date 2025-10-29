import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LoanCalculator = () => {
  const [amount, setAmount] = useState("10000");
  const [rate, setRate] = useState("5");
  const [term, setTerm] = useState("12");
  const [termType, setTermType] = useState("months");
  const [result, setResult] = useState<{
    monthly: number;
    totalInterest: number;
    totalCost: number;
  } | null>(null);

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(rate) / 100;
    const months = termType === "years" ? parseFloat(term) * 12 : parseFloat(term);

    const monthlyRate = annualRate / 12;
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalCost = monthlyPayment * months;
    const totalInterest = totalCost - principal;

    setResult({
      monthly: monthlyPayment,
      totalInterest: totalInterest,
      totalCost: totalCost,
    });
  };

  return (
    <CalculatorLayout
      title="Loan Calculator"
      description="Calculate monthly payments, total interest, and loan costs instantly"
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Loan Details</h3>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="amount">Loan Amount ($)</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="rate">Interest Rate (%)</Label>
              <Input
                id="rate"
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="term">Loan Term</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  id="term"
                  type="number"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  className="flex-1"
                />
                <Select value={termType} onValueChange={setTermType}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="months">Months</SelectItem>
                    <SelectItem value="years">Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={calculateLoan} className="w-full bg-primary hover:bg-primary/90">
              Calculate Loan
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Results</h3>
          
          {result ? (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Monthly Payment</p>
                <p className="text-4xl font-bold text-primary">${result.monthly.toFixed(2)}</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                  <span className="font-medium">Total Interest</span>
                  <span className="text-xl font-bold">${result.totalInterest.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                  <span className="font-medium">Total Cost</span>
                  <span className="text-xl font-bold">${result.totalCost.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                  <span className="font-medium">Principal Amount</span>
                  <span className="text-xl font-bold">${parseFloat(amount).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              <p>Enter loan details and click Calculate</p>
            </div>
          )}
        </Card>
      </div>

      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">About the Loan Calculator</h2>
        <div className="prose prose-gray max-w-none text-foreground">
          <p className="mb-4">
            Our loan calculator is an essential tool for anyone considering taking out a loan, whether it's for a car, home, personal expenses, or business purposes. This calculator helps you understand exactly how much you'll pay each month and over the life of the loan, enabling you to make informed financial decisions.
          </p>
          <p className="mb-4">
            To use the calculator, simply enter the loan amount you're borrowing, the annual interest rate offered by your lender, and the loan term in months or years. The calculator instantly computes your monthly payment amount, the total interest you'll pay over the loan period, and the total cost of the loan including principal and interest.
          </p>
          <p className="mb-4">
            Understanding these numbers is crucial for budget planning. The monthly payment figure tells you exactly what you need to set aside each month, while the total interest shows you how much extra you're paying for the privilege of borrowing money. This information can help you compare different loan offers, negotiate better terms, or decide whether a particular loan fits your budget.
          </p>
          <p>
            Whether you're planning to buy a car, finance home improvements, consolidate debt, or take out a mortgage, this free loan calculator gives you the clarity you need. Use it to experiment with different loan amounts, interest rates, and terms to find the best option for your financial situation. Make smarter borrowing decisions with accurate calculations at your fingertips.
          </p>
        </div>
      </Card>
    </CalculatorLayout>
  );
};

export default LoanCalculator;
