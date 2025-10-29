import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BMICalculator = () => {
  const [height, setHeight] = useState("170");
  const [weight, setWeight] = useState("70");
  const [unit, setUnit] = useState("metric");
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    color: string;
  } | null>(null);

  const calculateBMI = () => {
    let bmi: number;
    
    if (unit === "metric") {
      const heightInMeters = parseFloat(height) / 100;
      bmi = parseFloat(weight) / (heightInMeters * heightInMeters);
    } else {
      // Imperial: BMI = (weight in pounds / (height in inches)²) × 703
      bmi = (parseFloat(weight) / (parseFloat(height) * parseFloat(height))) * 703;
    }

    let category: string;
    let color: string;

    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-blue-500";
    } else if (bmi < 25) {
      category = "Normal weight";
      color = "text-green-500";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-yellow-500";
    } else {
      category = "Obese";
      color = "text-red-500";
    }

    setResult({ bmi, category, color });
  };

  return (
    <CalculatorLayout
      title="BMI Calculator"
      description="Calculate your Body Mass Index and understand your health status"
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Your Measurements</h3>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="unit">Unit System</Label>
              <Select value={unit} onValueChange={setUnit}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">Metric (cm, kg)</SelectItem>
                  <SelectItem value="imperial">Imperial (in, lbs)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="height">
                Height ({unit === "metric" ? "cm" : "inches"})
              </Label>
              <Input
                id="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="weight">
                Weight ({unit === "metric" ? "kg" : "lbs"})
              </Label>
              <Input
                id="weight"
                type="number"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-2"
              />
            </div>

            <Button onClick={calculateBMI} className="w-full bg-primary hover:bg-primary/90">
              Calculate BMI
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Your Results</h3>
          
          {result ? (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 text-center">
                <p className="text-sm text-muted-foreground mb-2">Your BMI</p>
                <p className="text-5xl font-bold text-primary mb-4">{result.bmi.toFixed(1)}</p>
                <p className={`text-2xl font-semibold ${result.color}`}>{result.category}</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">BMI Categories:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 rounded">
                    <span>Underweight</span>
                    <span className="text-blue-500">{"< 18.5"}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded">
                    <span>Normal weight</span>
                    <span className="text-green-500">18.5 - 24.9</span>
                  </div>
                  <div className="flex justify-between p-2 rounded">
                    <span>Overweight</span>
                    <span className="text-yellow-500">25 - 29.9</span>
                  </div>
                  <div className="flex justify-between p-2 rounded">
                    <span>Obese</span>
                    <span className="text-red-500">≥ 30</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              <p>Enter your measurements and click Calculate</p>
            </div>
          )}
        </Card>
      </div>

      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">About the BMI Calculator</h2>
        <div className="prose prose-gray max-w-none text-foreground">
          <p className="mb-4">
            The Body Mass Index (BMI) calculator is a widely used tool for assessing whether your weight is within a healthy range for your height. BMI is a simple calculation that provides a quick snapshot of your weight status and can help identify potential health risks associated with being underweight, overweight, or obese.
          </p>
          <p className="mb-4">
            To use this calculator, simply select your preferred unit system (metric or imperial), enter your height and weight, and click calculate. The calculator will instantly compute your BMI score and categorize it into one of four classifications: underweight, normal weight, overweight, or obese. Each category is color-coded to help you quickly understand your results.
          </p>
          <p className="mb-4">
            While BMI is a useful screening tool, it's important to understand that it has limitations. BMI doesn't distinguish between muscle mass and fat mass, so athletes or people with high muscle mass may have a high BMI despite being very healthy. Similarly, BMI doesn't account for age, gender, or body composition. It's best used as one indicator among many when assessing overall health.
          </p>
          <p>
            This free BMI calculator works on both metric and imperial units, making it accessible to users worldwide. Whether you're monitoring your weight loss progress, maintaining a healthy lifestyle, or just curious about your health status, this tool provides valuable insights. Remember that BMI is just one piece of the health puzzle—consult with healthcare professionals for comprehensive health assessments and personalized advice.
          </p>
        </div>
      </Card>
    </CalculatorLayout>
  );
};

export default BMICalculator;
