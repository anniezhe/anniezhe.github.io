import * as React from "react";
import DefaultLayout from "@/layouts/default";

export const metadata = {
  title: "Privacy Policy",
  description: "Learn how I handle and protect your data on my website.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <DefaultLayout>
      <main className="max-w-4xl mx-auto px-4 py-12 md:py-20 text-foreground">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last Updated: {lastUpdated}
        </p>

        <div className="space-y-8 prose dark:prose-invert max-w-none">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-card-foreground">
              1. Introduction
            </h2>
            <p className="leading-relaxed">
              Welcome to my website. I respect your privacy and am committed to
              protecting your personal data. This privacy policy will inform you
              about how I look after your personal data when you visit my
              website and tell you about your privacy rights.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-card-foreground">
              2. Information I Collect
            </h2>
            <p className="leading-relaxed mb-3">
              I do not collect personal identifiers like your name or email
              address unless you explicitly provide them to me (such as when scheduling
              an appointment). However, I do
              automatically collect certain <strong>non-personal information</strong> when you
              browse my site through cookies.
            </p>
            <p className="leading-relaxed">
              Specifically, I use <strong>Google Analytics</strong> to track
              anonymous user behavior. This includes data such as:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The pages you visit on our site</li>
              <li>The time and date of your visit</li>
              <li>The type of device, browser, and operating system you use</li>
              <li>The website that referred you to me</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-card-foreground">
              3. How I Use Your Information
            </h2>
            <p className="leading-relaxed">
              I use the information collected from Google Analytics solely to
              monitor traffic patterns, understand my audience size, and improve
              my overall website content and performance. This data is entirely
              aggregated and anonymized; it cannot be used to identify you
              personally.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-card-foreground">
              4. Cookies and Consent
            </h2>
            <p className="leading-relaxed">
              Cookies are small text files placed on your device. I use them to
              make Google Analytics work. You have the choice to accept or decline
              these tracking cookies using our cookie consent banner. If you choose
              to decline, no Google Analytics cookies will be placed on your machine.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-card-foreground">
              5. Third-Party Sharing
            </h2>
            <p className="leading-relaxed">
              I do not sell, trade, or transfer your data to outside parties. Data
              collected via Google Analytics is managed securely by Google in
              accordance with their own privacy guidelines.
            </p>
          </section>
          {/* Section 6 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-card-foreground">
              6. Scheduling Services (Calendly)
            </h2>
            <p className="leading-relaxed mb-3">
              I use <strong>Calendly</strong> to provide online booking and appointment
              scheduling directly on my website. When you use the embedded scheduling tool,
              Calendly collects the specific information you enter, such as your name,
              email address, and booking details, to confirm your appointment.
            </p>
            <p className="leading-relaxed">
              Please note that Calendly operates independently and deploys its own cookies and
              cookie management configurations inside the booking window. I do not control
              these cookies or Calendly's banner. For complete transparency, you can read more
              about their practices in the{" "}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Calendly Privacy Policy
              </a>.
            </p>
          </section>
          {/* Section 7 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-card-foreground">
              7. Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              I may update this Privacy Policy from time to time. Any changes will
              be posted on this page with an updated modification date.
            </p>
          </section>
          {/* Section 8 */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-card-foreground">
              8. Contact Me
            </h2>
            <p className="leading-relaxed">
              If you have any questions or concerns regarding this Privacy Policy or
              my tracking choices, you can reach out to me at{" "}
              <a
                href="mailto:anniezhe0@gmail.com"
                className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                anniezhe0@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </DefaultLayout>
  );
}
