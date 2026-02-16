import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Cytec M21 Repair Guide & Technical Knowledge Center',
  description: 'Independent aftermarket technical reference for Cytec M21 two-axis head repair. Built from real repair cases: symptoms, diagnosis guides, maintenance checklists, and case studies.',
  keywords: [
    'Cytec M21 repair guide',
    'M21 technical knowledge',
    'Cytec M21 troubleshooting',
    'M21 maintenance guide',
    'Cytec M21 diagnosis',
    'M21 repair manual',
  ],
  alternates: {
    canonical: 'https://5axisheadrepair.com/knowledge/cytec-m21',
  },
  openGraph: {
    title: 'Cytec M21 Technical Knowledge Center | Independent Repair Guide',
    description: 'Comprehensive technical guide for Cytec M21 two-axis head repair and maintenance.',
    url: 'https://5axisheadrepair.com/knowledge/cytec-m21',
  },
};

export default function M21KnowledgeHubPage() {
  // Symptom cards linking to both existing service pages and new spoke pages
  const symptomCards = [
    {
      title: 'Rotary Union Leakage',
      description: 'Oil or coolant leakage from spindle rotary union. Progressive seal failure diagnosis.',
      href: '/spindle-rotary-union-leakage',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Pressure Cycling',
      description: 'Hydraulic aggregate cannot hold pressure. Repeated build-up cycles and clamping instability.',
      href: '/hydraulic-aggregate-pressure-issue',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Tool Clamping Unstable',
      description: 'Intermittent or weak tool clamping force. Drawbar spring and hydraulic circuit diagnosis.',
      href: '/knowledge/cytec-m21/tool-clamping-unstable',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
      ),
    },
    {
      title: 'Spindle Repair & Rebuild',
      description: 'Bearing noise, encoder faults, thermal issues. Targeted repair vs full rebuild assessment.',
      href: '/spindle-repair-rebuild',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Hydraulic Alarm Won\'t Reset',
      description: 'Persistent hydraulic alarms. Systematic troubleshooting for pressure sensor and valve faults.',
      href: '/knowledge/cytec-m21/hydraulic-alarm-reset',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'M21 Knowledge Center' },
              ]}
            />
            
            <h1 className="heading-xl mb-6">
              Cytec M21 Repair Guide & Technical Knowledge Center
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl">
              Independent aftermarket technical reference — built from real repair cases. 
              Symptoms, diagnosis guides, maintenance checklists, and case studies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#symptoms"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-bold text-lg rounded-md hover:bg-primary-50 transition-colors shadow-lg"
              >
                Browse Symptoms
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-md hover:bg-white/10 transition-colors"
              >
                Request Technical Review (24h)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Navigator */}
      <section id="symptoms" className="py-14 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-lg text-center mb-12">
              Which Symptom Are You Seeing?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {symptomCards.map((card, index) => (
                <Link
                  key={index}
                  href={card.href}
                  className="card hover:shadow-xl hover:border-primary-300 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors">
                      {card.icon}
                    </div>
                    <h3 className="font-bold text-lg text-secondary-900 group-hover:text-primary-700 transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-secondary-600 text-sm leading-relaxed mb-3">
                    {card.description}
                  </p>
                  <span className="text-primary-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Guide
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Diagnose */}
      <section className="py-14 md:py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-12">How We Diagnose</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="font-bold text-lg mb-3">You Provide Data</h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  Photos, videos, alarm codes, pressure readings, behavior description. 
                  Each symptom guide tells you exactly what we need.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="font-bold text-lg mb-3">We Analyze</h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  Engineer reviews your data against known failure patterns, cross-references 
                  symptoms, and identifies likely root causes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="font-bold text-lg mb-3">You Get Assessment</h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  Within 24 hours: initial diagnosis, risk assessment, recommended next steps 
                  (on-site checks, return-to-base service, or component replacement).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Resources */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-12">Technical Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/repair-gallery" className="card hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2 text-secondary-900">Repair Case Gallery</h3>
                <p className="text-secondary-600 text-sm mb-3">
                  Real-world examples: before/after photos, repair procedures, outcomes.
                </p>
                <span className="text-primary-600 text-sm font-medium">View Cases →</span>
              </Link>
              
              <div className="card bg-secondary-50 border-secondary-200">
                <h3 className="font-bold text-lg mb-2 text-secondary-700">Coming Soon</h3>
                <ul className="text-secondary-600 text-sm space-y-2">
                  <li>• How to Submit Data (photo/video guide)</li>
                  <li>• Quick Inspection Checklist</li>
                  <li>• Monthly Maintenance Schedule</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-14 md:py-20 bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Not Sure Where to Start?</h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Describe your issue. An engineer will review and provide initial assessment within 24 hours.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary-900 font-bold text-lg rounded-md hover:bg-secondary-100 transition-colors shadow-lg"
          >
            Submit Your Issue
          </Link>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 bg-secondary-100 border-t border-secondary-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-xs text-secondary-600">
            <p className="font-semibold mb-2">INDEPENDENT AFTERMARKET KNOWLEDGE CENTER</p>
            <p>
              We are an independent, non-OEM aftermarket service provider specializing in 
              Cytec M21 and G30 two-axis milling heads. We are NOT authorized, certified, 
              or affiliated with any original equipment manufacturer (OEM). This knowledge center 
              is built from our own repair experience and is provided for informational purposes. 
              All brand names and trademarks mentioned are the property of their respective owners 
              and are used for identification purposes only.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
