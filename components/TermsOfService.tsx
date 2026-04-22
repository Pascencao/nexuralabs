"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export function TermsOfService({
  homeHref,
  labels,
  locale,
}: {
  homeHref: string;
  labels: Dictionary["legal"]["terms"];
  locale: Locale;
}) {
  const dateLocale = locale === "en" ? "en-US" : "es-AR";

  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg md:p-12">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
              {labels.title}
            </h1>
            <p className="text-gray-600">
              {labels.lastUpdated}:{" "}
              {new Date().toLocaleDateString(dateLocale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the services provided by NexuraLabs ("we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                NexuraLabs provides custom software development, process automation, system integration, and related technology consulting services. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Custom software development and programming</li>
                <li>Business process automation</li>
                <li>System integration and API development</li>
                <li>Technical consulting and advisory services</li>
                <li>Software maintenance and support</li>
                <li>Cloud infrastructure and deployment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate and complete information when requested</li>
                <li>Maintain the security of your account and credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">4. Intellectual Property</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Our Intellectual Property</h3>
                  <p className="text-gray-700">
                    All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by NexuraLabs and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Your Intellectual Property</h3>
                  <p className="text-gray-700">
                    You retain ownership of any intellectual property you provide to us. By using our services, you grant us a limited license to use your content solely for the purpose of providing our services to you.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Work Product</h3>
                  <p className="text-gray-700">
                    Custom work created specifically for you will be delivered according to the terms outlined in your service agreement. Ownership and licensing terms will be specified in your individual contract.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">5. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms will be specified in your individual service agreement. Generally:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Invoices are due within 30 days of issuance unless otherwise specified</li>
                <li>Late payments may result in suspension of services</li>
                <li>All fees are non-refundable unless otherwise agreed in writing</li>
                <li>Prices are subject to change with 30 days written notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">6. Service Level Agreement</h2>
              <p className="text-gray-700 mb-4">
                Our commitment to service quality includes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Response time within 24 hours for support requests</li>
                <li>99.9% uptime for hosted services (subject to maintenance windows)</li>
                <li>Regular security updates and patches</li>
                <li>Comprehensive documentation for all deliverables</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">7. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                We are committed to maintaining the confidentiality of your business information. We agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Keep all confidential information strictly confidential</li>
                <li>Use confidential information only for the purpose of providing our services</li>
                <li>Implement appropriate security measures to protect your data</li>
                <li>Return or destroy confidential information upon request</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, NexuraLabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
              </p>
              <p className="text-gray-700">
                Our total liability for any claims arising from the use of our services shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">9. Warranty Disclaimer</h2>
              <p className="text-gray-700">
                Our services are provided "as is" and "as available" without any warranties, express or implied. We disclaim all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">10. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify and hold harmless NexuraLabs from any claims, damages, or expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">11. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate this agreement with written notice as specified in your service agreement. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>You will pay for all services rendered up to the termination date</li>
                <li>We will return or destroy your confidential information</li>
                <li>Your access to our services will be discontinued</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">12. Governing Law</h2>
              <p className="text-gray-700">
                These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of San Francisco County, California.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. We will notify you of any material changes by posting the new terms on our website. Your continued use of our services after such changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">14. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@nexuralabs.agency<br />
                  <strong>Address:</strong> NexuraLabs, 123 Tech Street, Suite 100, San Francisco, CA 94105
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link href={homeHref} className="btn-primary inline-flex items-center gap-2">
              {labels.backHome}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 