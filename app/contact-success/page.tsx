import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You - Assessment Request Received | 5 Axis Head Repair',
  description: 'Your assessment request has been received. Our team will contact you within 24 hours to provide expert guidance for your M21 or G30 head repair needs.',
  robots: 'noindex, nofollow', // Don't index thank you pages
};

export default function ContactSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 text-center">
          {/* Success Icon */}
          <div className="mb-8 animate-bounce">
            <div className="inline-block bg-green-100 rounded-full p-6">
              <svg 
                className="w-20 h-20 text-green-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="heading-xl mb-6 text-gray-900">
            Thank You for Reaching Out!
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Your assessment request has been <strong>successfully received</strong>. 
            Our expert team is already reviewing your information.
          </p>

          {/* Key Promise */}
          <div className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl font-bold">
                We&apos;ll Contact You Within 24 Hours
              </h2>
            </div>
            <p className="text-primary-100 text-lg">
              Our team will personally review your case and reach out via email with initial recommendations and next steps.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="card text-left mb-12">
            <h2 className="heading-md mb-6 text-center">
              📋 What Happens Next?
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Expert Review (Within 24 Hours)
                  </h3>
                  <p className="text-gray-600">
                    Our specialized technicians will analyze your request and prepare an initial assessment based on the information provided.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Personalized Email Response
                  </h3>
                  <p className="text-gray-600">
                    You&apos;ll receive a detailed email with our findings, repair options, estimated timeline, and any additional information we need (photos, videos, alarm codes).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Tailored Solution & Quote
                  </h3>
                  <p className="text-gray-600">
                    Once we have all necessary details, we&apos;ll provide a comprehensive repair plan with transparent pricing and downtime estimates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Get Your Machine Running Again
                  </h3>
                  <p className="text-gray-600">
                    After approval, we&apos;ll coordinate shipping, repair schedule, and keep you updated throughout the entire process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Check Email */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 text-left">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  📧 Please Check Your Email (Including Spam Folder)
                </h3>
                <p className="text-sm text-gray-700">
                  Our expert team at <strong>ElixirFab</strong> will personally reach out to you via email. 
                  If you don&apos;t see it in your inbox within 24-48 hours, please check your spam/junk folder.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Why Choose Our Independent Aftermarket Service?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <p className="text-sm text-gray-700">
                  <strong>Years of Experience</strong><br />
                  Specialized in M21 & G30 heads
                </p>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">Global</div>
                <p className="text-sm text-gray-700">
                  <strong>Worldwide Service</strong><br />
                  Clients across multiple continents
                </p>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">Fast</div>
                <p className="text-sm text-gray-700">
                  <strong>Quick Turnaround</strong><br />
                  Minimize your downtime
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="btn-primary text-center"
            >
              ← Return to Homepage
            </Link>
            
            <Link 
              href="/repair-gallery"
              className="btn-secondary text-center"
            >
              View Our Work →
            </Link>
          </div>

          {/* Urgent Contact */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              <strong>Need urgent assistance?</strong>
            </p>
            <p className="text-gray-700">
              If your machine is currently down and you need immediate support, 
              please mention &ldquo;URGENT&rdquo; in your email subject line when replying to our message.
            </p>
          </div>
        </div>
      </section>

      {/* Additional SEO Content */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>5 Axis Head Repair</strong> is an independent aftermarket service provider 
            specializing in repair and maintenance of machines equipped with two-axis milling heads. 
            We are not affiliated with, authorized by, or endorsed by any OEM manufacturer.
          </p>
        </div>
      </section>
    </div>
  );
}
