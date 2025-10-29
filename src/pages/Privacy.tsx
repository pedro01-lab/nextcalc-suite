import CalculatorLayout from "@/components/CalculatorLayout";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <CalculatorLayout
      title="Privacy Policy"
      description="How we handle your data and protect your privacy"
    >
      <Card className="p-8">
        <div className="prose prose-gray max-w-none text-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-3">1. Information Collection</h2>
            <p>
              NextCalc does not require user registration or account creation. We do not collect personal information unless you voluntarily provide it through our newsletter signup or contact forms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. Calculator Data</h2>
            <p>
              All calculations are performed locally in your browser. We do not store or transmit your calculator inputs or results to our servers. Your calculation data remains private on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. Cookies and Analytics</h2>
            <p>
              We may use cookies and analytics tools to understand how visitors use our site and improve our services. These tools may collect anonymous data such as page views, time spent on site, and general location information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">4. Third-Party Services</h2>
            <p>
              Our currency converter uses external APIs to fetch exchange rates. When you use this feature, your request may be logged by the third-party service provider according to their privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">5. Newsletter</h2>
            <p>
              If you subscribe to our newsletter, we collect your email address solely for sending you updates. You can unsubscribe at any time, and we will never share your email with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">6. Data Security</h2>
            <p>
              We implement reasonable security measures to protect any data we collect. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
        </div>
      </Card>
    </CalculatorLayout>
  );
};

export default Privacy;
