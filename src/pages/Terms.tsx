import CalculatorLayout from "@/components/CalculatorLayout";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <CalculatorLayout
      title="Terms of Service"
      description="Please read these terms carefully before using our calculators"
    >
      <Card className="p-8">
        <div className="prose prose-gray max-w-none text-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using NextCalc, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. Use of Service</h2>
            <p>
              NextCalc provides free online calculators for informational purposes only. While we strive for accuracy, we do not guarantee that all calculations are error-free or suitable for your specific needs. Users should verify important calculations independently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. No Professional Advice</h2>
            <p>
              The calculators and information provided on NextCalc do not constitute financial, investment, legal, or professional advice. Always consult with qualified professionals for specific guidance related to your situation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">4. Limitation of Liability</h2>
            <p>
              NextCalc and its operators shall not be liable for any damages arising from the use of our calculators, including but not limited to direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>
        </div>
      </Card>
    </CalculatorLayout>
  );
};

export default Terms;
