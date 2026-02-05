import ServiceCard from '@/components/ServiceCard';
import AssessmentForm from '@/components/AssessmentForm';
import FAQ from '@/components/FAQ';
import ImageCarousel from '@/components/ImageCarousel';
import Link from 'next/link';

export default function HomePage() {
  const faqItems = [
    {
      question: 'Are you an authorized OEM service center?',
      answer: 'No. We are an independent, non-OEM, aftermarket service provider. We are not authorized, certified, or affiliated with any original equipment manufacturer. We specialize in repair and rebuild services for machines equipped with Cytec two-axis milling heads.',
    },
    {
      question: 'Do I need to ship my machine to you?',
      answer: 'No. In most cases, we perform on-site assessment and repair, or you can ship specific components (spindle, rotary union, hydraulic aggregate) to us. We will guide you through the process after online assessment.',
    },
    {
      question: 'How long does the assessment take?',
      answer: 'Online pre-assessment typically takes 24-48 hours after we receive your photos, videos, and issue description. This helps us provide accurate diagnosis and reduce unnecessary downtime.',
    },
    {
      question: 'What happens if my machine is still under OEM warranty?',
      answer: 'If your machine is under active OEM warranty, we recommend contacting your OEM service provider first. Using independent aftermarket services may affect your warranty coverage. We primarily serve machines outside warranty periods or where OEM support is unavailable.',
    },
    {
      question: 'Do you stock replacement parts?',
      answer: 'We maintain a selective inventory of high-wear components and can source aftermarket replacement parts as needed. We always perform assessment before recommending parts to ensure accurate diagnosis and cost-effective solutions.',
    },
    {
      question: 'Can you service machines outside my country?',
      answer: 'Yes. We serve global customers (non-China focus). We can coordinate remote assessment, parts shipping, and technical guidance for local installation. On-site service may be available depending on location.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Independent Aftermarket Repair for Cytec M21 & G30 Two-Axis Heads
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              When your Cytec M21 or G30 equipped machine fails, downtime costs money. 
              Over 10 years of experience serving M21 and G30 users worldwide with on-site and return-to-base repair services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                Request Free Online Assessment
              </Link>
              <Link href="#services" className="btn-secondary border-white text-white hover:bg-white/10">
                View Services
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">24-48h</div>
                <div className="text-primary-100">Assessment Response</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">Global</div>
                <div className="text-primary-100">Service Coverage</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">Independent</div>
                <div className="text-primary-100">Aftermarket Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">What We Fix on M21 & G30 Systems</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Specialized independent aftermarket repair services for common failure modes 
              in Cytec M21 and G30 two-axis milling heads. Extensive experience with both models worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Spindle Rotary Union Leakage"
              description="Oil or coolant leaking from M21/G30 spindle area threatens bearing contamination and rapid failure."
              href="/spindle-rotary-union-leakage"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              symptoms={[
                'Oil/coolant dripping from spindle',
                'Visible fluid accumulation',
                'Common on M21 and G30 models',
              ]}
            />

            <ServiceCard
              title="Spindle Repair & Rebuild"
              description="M21 and G30 spindle issues: noise, vibration, overheating, or encoder problems. We stock replacement components."
              href="/spindle-repair-rebuild"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              symptoms={[
                'M21/G30 spindle noise or vibration',
                'Overheating during operation',
                'Poor surface finish',
                'Encoder signal errors',
              ]}
            />

            <ServiceCard
              title="Hydraulic Aggregate Issues"
              description="M21/G30 hydraulic pressure problems: cannot hold pressure, unstable clamping, frequent alarms affecting head reliability."
              href="/hydraulic-aggregate-pressure-issue"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              symptoms={[
                'Cannot build or hold pressure',
                'Repeated pressure cycles on M21/G30',
                'Unstable tool clamping',
                'Hydraulic system alarms',
              ]}
            />
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">How We Work</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Assessment-first approach ensures accurate diagnosis and cost-effective solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Intake</h3>
              <p className="text-secondary-600">
                Submit your issue description, photos, videos, and alarm codes through our assessment form.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Online Assessment</h3>
              <p className="text-secondary-600">
                Our technicians review your submission within 24-48 hours and provide initial diagnosis.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Repair / Rebuild</h3>
              <p className="text-secondary-600">
                Component-level repair, seal replacement, or full rebuild based on assessment findings.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="font-semibold text-lg mb-2">Validation & Delivery</h3>
              <p className="text-secondary-600">
                Testing, validation, and return shipping with installation guidance if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Independent Aftermarket Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-8">Over 10 Years Serving M21 & G30 Users Worldwide</h2>
            
            <div className="card p-8 space-y-6">
              <p className="text-lg text-secondary-700">
                We are an <strong>independent, non-OEM, aftermarket</strong> service provider specializing in 
                Cytec M21 and G30 two-axis milling heads. We are not authorized, certified, or affiliated with any original equipment manufacturer.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary-600">Our Experience with M21 & G30</h3>
                  <ul className="space-y-2 text-secondary-700">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>10+ years specialized experience with M21 and G30 models</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>On-site repair and return-to-base service worldwide</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Preventive maintenance components to reduce downtime</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Fast assessment and response for urgent failures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>Planned maintenance parts supply for scheduled shutdowns</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-secondary-600">Service Approach</h3>
                  <ul className="space-y-2 text-secondary-700">
                    <li className="flex items-start">
                      <span className="text-secondary-400 mr-2">•</span>
                      <span>Assessment-first to identify exact issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-400 mr-2">•</span>
                      <span>Not suitable for machines under active OEM warranty</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-400 mr-2">•</span>
                      <span>No OEM certification or endorsement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-400 mr-2">•</span>
                      <span>Customer assumes responsibility for service choice</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-blue-900">Global M21 & G30 Support</h4>
                <p className="text-blue-800">
                  With thousands of Cytec M21 and G30 systems operating worldwide, we understand the challenges of maintaining 
                  these critical machines. Our experience spans emergency repairs, scheduled maintenance, and preventive component 
                  replacement to minimize production downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Section - Repair Gallery Showcase */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Work</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Real repair examples from our M21 & G30 service experience
            </p>
            <p className="text-sm text-secondary-500 mt-2 italic">
              (Customer names and serial numbers anonymized for confidentiality)
            </p>
          </div>

          {/* Featured Carousel - Auto-rotates every 3 seconds */}
          <div className="max-w-5xl mx-auto mb-12">
            <ImageCarousel 
              images={[
                // 圖片將從這些資料夾載入：
                // '/case-studies/rotary-union/image1.jpg',
                // '/case-studies/spindle-repair/image2.jpg',
                // '/case-studies/hydraulic-aggregate/image3.jpg',
              ]} 
              interval={3000}
              category="M21 & G30 Repair Cases"
            />
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Link href="/repair-gallery#rotary-union" className="card hover:shadow-xl transition-shadow group">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                <svg className="w-16 h-16 text-blue-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                  Rotary Union Leakage
                </h3>
                <p className="text-sm text-secondary-600 mb-3">
                  Oil & coolant leak repairs, seal replacements
                </p>
                <div className="text-primary-600 text-sm font-medium flex items-center">
                  View Cases
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/repair-gallery#spindle-repair" className="card hover:shadow-xl transition-shadow group">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center relative overflow-hidden">
                <svg className="w-16 h-16 text-green-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                  Spindle Repair & Rebuild
                </h3>
                <p className="text-sm text-secondary-600 mb-3">
                  Complete overhauls, bearing & encoder repairs
                </p>
                <div className="text-primary-600 text-sm font-medium flex items-center">
                  View Cases
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/repair-gallery#hydraulic-aggregate" className="card hover:shadow-xl transition-shadow group">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center relative overflow-hidden">
                <svg className="w-16 h-16 text-orange-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                  Hydraulic Aggregate
                </h3>
                <p className="text-sm text-secondary-600 mb-3">
                  Pressure issues, component replacements
                </p>
                <div className="text-primary-600 text-sm font-medium flex items-center">
                  View Cases
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link 
              href="/repair-gallery"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              View All Repair Cases
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-12">Frequently Asked Questions</h2>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Get Started</h2>
              <p className="text-xl text-secondary-600">
                Submit your issue for online assessment. Include photos, videos, and alarm descriptions 
                to help us provide faster, more accurate diagnosis.
              </p>
            </div>
            <AssessmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
