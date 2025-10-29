import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Delete, RotateCcw } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const BasicCalculator = () => {
  const [display, setDisplay] = useState("0");
  const [history, setHistory] = useState<string[]>([]);

  const handleNumber = (num: string) => {
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setDisplay(display + " " + op + " ");
  };

  const handleEquals = () => {
    try {
      const result = eval(display.replace(/×/g, "*").replace(/÷/g, "/"));
      const calculation = `${display} = ${result}`;
      setHistory([calculation, ...history.slice(0, 9)]);
      setDisplay(result.toString());
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid calculation",
        variant: "destructive",
      });
    }
  };

  const handleClear = () => setDisplay("0");
  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(display);
    toast({
      title: "Copied!",
      description: "Result copied to clipboard",
    });
  };

  const buttons = [
    ["C", "(", ")", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "%", "="],
  ];

  return (
    <CalculatorLayout
      title="Basic Calculator"
      description="Fast, free, and simple online calculator for all your math needs"
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6">
          <div className="mb-4">
            <div className="bg-[hsl(var(--calc-display))] rounded-lg p-4 mb-4 min-h-[80px] flex items-center justify-end">
              <div className="text-3xl font-mono font-semibold text-foreground break-all text-right">
                {display}
              </div>
            </div>
            
            <div className="flex gap-2 mb-4">
              <Button onClick={handleBackspace} variant="outline" className="flex-1" size="sm">
                <Delete className="h-4 w-4" />
              </Button>
              <Button onClick={handleCopy} variant="outline" className="flex-1" size="sm">
                <Copy className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {buttons.map((row, i) =>
                row.map((btn) => (
                  <Button
                    key={btn}
                    onClick={() => {
                      if (btn === "=") handleEquals();
                      else if (btn === "C") handleClear();
                      else if (["+", "-", "×", "÷"].includes(btn)) handleOperator(btn);
                      else handleNumber(btn);
                    }}
                    variant={btn === "C" ? "destructive" : ["÷", "×", "-", "+", "="].includes(btn) ? "default" : "outline"}
                    className={`h-14 text-lg font-semibold ${btn === "=" ? "bg-primary hover:bg-primary/90" : ""}`}
                  >
                    {btn}
                  </Button>
                ))
              )}
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">History</h3>
            <Button variant="ghost" size="sm" onClick={() => setHistory([])}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Clear
            </Button>
          </div>
          <div className="space-y-2 max-h-[400px] overflow-y-auto">
            {history.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">No calculations yet</p>
            ) : (
              history.map((calc, i) => (
                <div key={i} className="bg-secondary p-3 rounded-lg text-sm font-mono">
                  {calc}
                </div>
              ))
            )}
          </div>
        </Card>
      </div>

      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">About the Basic Calculator</h2>
        <div className="prose prose-gray max-w-none text-foreground">
          <p className="mb-4">
            Our free online basic calculator is designed to handle all your everyday math calculations with speed and precision. Whether you're balancing your budget, calculating tips, doing homework, or working on a project, this calculator provides instant results without any hassle.
          </p>
          <p className="mb-4">
            This calculator supports all basic arithmetic operations including addition, subtraction, multiplication, and division. It also handles percentages and parentheses for more complex calculations. The intuitive interface works seamlessly on both desktop and mobile devices, making it accessible wherever you are.
          </p>
          <p className="mb-4">
            One of the standout features is the calculation history that saves your last 10 calculations. This allows you to review your work, catch errors, and keep track of your calculations. You can also copy results directly to your clipboard with a single click, making it easy to use the results in other applications or documents.
          </p>
          <p>
            The calculator is completely free to use, requires no download or registration, and works instantly in your web browser. Whether you're a student, professional, or just need quick calculations, this basic calculator is the perfect tool for your daily math needs. Start calculating now and experience the convenience of having a reliable calculator always at your fingertips.
          </p>
        </div>
      </Card>
    </CalculatorLayout>
  );
};

export default BasicCalculator;
