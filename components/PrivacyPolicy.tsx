'use client'


export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                NexuraLabs collects information that you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Register on our website</li>
                <li>Request a free assessment</li>
                <li>Contact us</li>
                <li>Subscribe to our newsletter</li>
                <li>Use our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">2. Types of Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Personal Information</h3>
                  <p className="text-gray-700">
                    Name, email address, phone number, company information, and any other information you provide to us.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Technical Information</h3>
                  <p className="text-gray-700">
                    IP address, browser type, operating system, pages visited, and time spent on our site.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Send relevant technical and marketing information</li>
                <li>Respond to your inquiries and requests</li>
                <li>Personalize your experience on our website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">4. Sharing Information</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, rent, or share your personal information with third parties, except:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>With service providers who help us operate our business</li>
                <li>In the event of a merger or business acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">6. Cookies and Similar Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your experience on our website, analyze traffic, and personalize content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request the deletion of your data</li>
                <li>Object to the processing of your data</li>
                <li>Withdraw your consent at any time</li>
                <li>Request the portability of your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">8. Data Retention</h2>
              <p className="text-gray-700">
                We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, unless the law requires a longer retention period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">9. International Transfers</h2>
              <p className="text-gray-700">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">10. Minors</h2>
              <p className="text-gray-700">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">11. Changes to this Policy</h2>
              <p className="text-gray-700">
                We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">12. Contact</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this privacy policy or our data practices, contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@nexuralabs.agency<br />
                </p>
              </div>
            </section>
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <a 
              href="/" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 