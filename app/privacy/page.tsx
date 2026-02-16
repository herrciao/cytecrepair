import { Metadata } from 'next';
import Link from 'next/link';
import CookieSettingsButton from '@/components/CookieSettingsButton';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and data protection information for M21 and G30 two-axis head repair services.',
  alternates: {
    canonical: 'https://5axisheadrepair.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-xl mb-6">Privacy Policy</h1>
          <p className="text-secondary-600 mb-8">Last updated: February 4, 2026</p>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="heading-md mb-4">Introduction</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              We are committed to protecting your privacy and ensuring your personal data is handled responsibly. 
              This Privacy Policy explains how we collect, use, and protect your information when you use our website.
            </p>
          </section>

          {/* Who We Are */}
          <section className="mb-8">
            <h2 className="heading-md mb-4">Who We Are</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              We are an independent, non-OEM aftermarket service provider specializing in repair and rebuild services 
              for machines equipped with Cytec M21 and G30 two-axis milling heads.
            </p>
            <p className="text-secondary-700 leading-relaxed">
              <strong>Contact:</strong> For privacy-related inquiries, please use our{' '}
              <Link href="/#contact" className="text-primary-600 hover:underline">
                contact form
              </Link>
              .
            </p>
          </section>

          {/* Data We Collect */}
          <section className="mb-8">
            <h2 className="heading-md mb-4">What Data We Collect</h2>
            <div className="space-y-6">
              {/* Contact Form */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Information You Provide</h3>
                <p className="text-secondary-700 leading-relaxed mb-2">
                  When you submit an assessment request or contact us, we collect:
                </p>
                <ul className="list-disc pl-6 text-secondary-700 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number (optional)</li>
                  <li>Company name (optional)</li>
                  <li>Machine model and issue description</li>
                </ul>
                <p className="text-sm text-secondary-600 mt-2">
                  <strong>Purpose:</strong> To respond to your inquiry and provide repair services. 
                  <strong> Legal basis:</strong> Your consent when submitting the form.
                </p>
              </div>

              {/* Server Logs */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Technical Data</h3>
                <p className="text-secondary-700 leading-relaxed mb-2">
                  Our hosting provider (Vercel) automatically collects:
                </p>
                <ul className="list-disc pl-6 text-secondary-700 space-y-1">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referring website</li>
                  <li>Pages visited and timestamps</li>
                </ul>
                <p className="text-sm text-secondary-600 mt-2">
                  <strong>Purpose:</strong> Security, performance optimization, and troubleshooting. 
                  <strong> Legal basis:</strong> Legitimate interest in operating a secure and functional website.
                </p>
              </div>

              {/* Analytics */}
              <div className="card p-4 bg-blue-50 border-blue-200">
                <h3 className="font-semibold text-lg mb-2">Analytics Cookies (Optional)</h3>
                <p className="text-secondary-700 leading-relaxed mb-2">
                  <strong>Only if you consent</strong>, we may use analytics tools to understand how visitors use our site:
                </p>
                <ul className="list-disc pl-6 text-secondary-700 space-y-1">
                  <li>Pages viewed</li>
                  <li>Time spent on pages</li>
                  <li>Click interactions</li>
                  <li>Device and browser information</li>
                </ul>
                <p className="text-sm text-secondary-600 mt-2">
                  <strong>Purpose:</strong> Improve website usability and content. 
                  <strong> Legal basis:</strong> Your explicit consent (can be revoked anytime).
                </p>
                <CookieSettingsButton className="btn-secondary mt-3 text-sm">
                  Manage Cookie Preferences
                </CookieSettingsButton>
              </div>
            </div>
          </section>

          {/* Third Parties */}
          <section className="mb-8">
            <h2 className="heading-md mb-4">Data Processors & Third Parties</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              We use trusted third-party services to operate our website:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <div>
                  <strong>Vercel (Hosting):</strong> Hosts our website and processes server logs. 
                  Based in the United States with GDPR compliance measures.{' '}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Vercel Privacy Policy
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <div>
                  <strong>Google Analytics (if enabled):</strong> Only if you consent to analytics cookies. 
                  We use anonymized IP addresses.{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Google Privacy Policy
                  </a>
                </div>
              </li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="heading-md mb-4">Data Retention</h2>
            <ul className="space-y-2 text-secondary-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>
                  <strong>Contact form submissions:</strong> Retained for 12 months or until inquiry is resolved, 
                  whichever is longer. Extended retention if service relationship continues.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>
                  <strong>Server logs:</strong> Automatically deleted after 30 days by our hosting provider.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>
                  <strong>Analytics data:</strong> Retained according to analytics provider&apos;s policy 
                  (typically 14-26 months for Google Analytics).
                </span>
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="heading-md mb-4">Your Rights</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              Under GDPR and applicable data protection laws, you have the following rights:
            </p>
            <ul className="space-y-2 text-secondary-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Access:</strong> Request a copy of your personal data</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Rectification:</strong> Correct inaccurate data</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Erasure:</strong> Request deletion of your data (&ldquo;right to be forgotten&rdquo;)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Portability:</strong> Receive your data in a structured, machine-readable format</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Withdraw Consent:</strong> Revoke analytics consent at any time</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Object:</strong> Object to processing based on legitimate interests</span>
              </li>
            </ul>
            <p className="text-secondary-700 leading-relaxed mt-4">
              To exercise these rights, please contact us via our{' '}
              <Link href="/#contact" className="text-primary-600 hover:underline">
                contact form
              </Link>
              . We will respond within 30 days.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="heading-md mb-4">Cookies</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              We use cookies to enhance your browsing experience:
            </p>
            <div className="space-y-3">
              <div className="card p-4">
                <h3 className="font-semibold mb-2">Necessary Cookies</h3>
                <p className="text-sm text-secondary-700">
                  Essential for website functionality. These include your cookie consent preferences 
                  and basic session management. Cannot be disabled.
                </p>
              </div>
              <div className="card p-4">
                <h3 className="font-semibold mb-2">Analytics Cookies (Optional)</h3>
                <p className="text-sm text-secondary-700 mb-3">
                  Help us understand how visitors use our website. Only set with your explicit consent.
                </p>
                <CookieSettingsButton className="btn-secondary text-sm">
                  Manage Cookie Settings
                </CookieSettingsButton>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="mb-8">
            <h2 className="heading-md mb-4">Data Security</h2>
            <p className="text-secondary-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against 
              unauthorized access, alteration, disclosure, or destruction. This includes encrypted connections (HTTPS), 
              secure hosting infrastructure, and regular security updates.
            </p>
          </section>

          {/* International Transfers */}
          <section className="mb-8">
            <h2 className="heading-md mb-4">International Data Transfers</h2>
            <p className="text-secondary-700 leading-relaxed">
              Our website is hosted on servers that may be located outside the European Economic Area (EEA). 
              When we transfer data internationally, we ensure appropriate safeguards are in place, including 
              Standard Contractual Clauses or adequacy decisions.
            </p>
          </section>

          {/* Children */}
          <section className="mb-8">
            <h2 className="heading-md mb-4">Children&apos;s Privacy</h2>
            <p className="text-secondary-700 leading-relaxed">
              Our services are intended for businesses and professionals. We do not knowingly collect data from 
              individuals under 16 years of age.
            </p>
          </section>

          {/* Changes */}
          <section className="mb-8">
            <h2 className="heading-md mb-4">Changes to This Policy</h2>
            <p className="text-secondary-700 leading-relaxed">
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top 
              indicates when the policy was last revised. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="heading-md mb-4">Contact Us</h2>
            <p className="text-secondary-700 leading-relaxed">
              If you have questions about this Privacy Policy or how we handle your data, please{' '}
              <Link href="/#contact" className="text-primary-600 hover:underline">
                contact us
              </Link>
              .
            </p>
          </section>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-secondary-200">
            <Link href="/" className="btn-secondary">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
