import SimpleContactForm from '@/components/SimpleContactForm';
import DiscountPopup from '@/components/DiscountPopup';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Discount Popup */}
      <DiscountPopup />

      {/* ============================================ */}
      {/* SECTION 1: HERO — Problem-Driven Headline   */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Unstable Tool Clamping on M21 or G30?<br className="hidden md:block" />
              Hydraulic Pressure Cycling?<br className="hidden md:block" />
              5-Axis Head Alarm Won&apos;t Reset?
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              We specialize in Cytec M21 &amp; G30 two-axis head repair and hydraulic system rebuild.
              Independent aftermarket service &mdash; fast technical review, no sales pitch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-bold text-lg rounded-md hover:bg-primary-50 transition-colors shadow-lg"
              >
                Submit Your Issue Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-md hover:bg-white/10 transition-colors"
              >
                Get Technical Review in 24 Hours
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: SYMPTOM RECOGNITION               */}
      {/* ============================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-tight">
              Common M21 / G30 Failure Symptoms
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 mb-10">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ),
                  text: 'Repeated pressure build-up cycles',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  text: 'Spindle rotary union leakage',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                  ),
                  text: 'Tool clamping unstable',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  text: 'Hydraulic alarm',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  text: 'Excessive vibration',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                    </svg>
                  ),
                  text: 'Abnormal temperature increase',
                },
              ].map((symptom, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary-50 border border-secondary-100">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600">
                    {symptom.icon}
                  </div>
                  <span className="text-secondary-800 font-medium">{symptom.text}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-secondary-700 text-lg font-medium bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              If you are seeing any of these, your head likely needs internal inspection.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: AUTHORITY (Trust Without Overclaiming) */}
      {/* ============================================ */}
      <section className="py-14 md:py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
              Focused on Cytec 5-Axis Heads
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-secondary-200">
                <span className="text-primary-600 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-secondary-800">Independent aftermarket specialist &mdash; not affiliated with Cytec or any OEM</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-secondary-200">
                <span className="text-primary-600 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-secondary-800">10+ years hands-on experience with M21 &amp; G30 units</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-secondary-200">
                <span className="text-primary-600 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-secondary-800">On-site and return-to-base service worldwide</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-secondary-200">
                <span className="text-primary-600 font-bold text-lg mt-0.5">&#10003;</span>
                <span className="text-secondary-800">Assessment-first &mdash; no upselling before diagnosis</span>
              </div>
            </div>

            <p className="text-secondary-600 text-sm">
              All brand names and trademarks mentioned are the property of their respective owners.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: PROCESS (Reduce Risk)             */}
      {/* ============================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-tight">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Submit',
                  desc: 'Tell us your machine model and describe the issue.',
                },
                {
                  step: '2',
                  title: 'Review',
                  desc: 'Engineer reviews your photos, videos, and alarm codes.',
                },
                {
                  step: '3',
                  title: 'Feedback',
                  desc: 'Technical assessment delivered within 24 hours.',
                },
                {
                  step: '4',
                  title: 'Plan',
                  desc: 'Repair or rebuild proposal with clear scope and timeline.',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-600 text-white rounded-full text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: URGENCY LINE                      */}
      {/* ============================================ */}
      <section className="py-10 md:py-14 bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <p className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
            Downtime costs more than repair.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary-900 font-bold text-lg rounded-md hover:bg-secondary-100 transition-colors shadow-lg"
          >
            Get Technical Review in 24 Hours
          </a>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: SIMPLE CONTACT FORM               */}
      {/* ============================================ */}
      <section id="contact" className="py-14 md:py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 tracking-tight">
              Describe Your Issue
            </h2>
            <p className="text-center text-secondary-600 mb-8">
              No sales call. Just a technical review from an engineer who knows M21 &amp; G30.
            </p>
            <div className="bg-white rounded-lg shadow-lg border border-secondary-200 p-6 md:p-8">
              <SimpleContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: LEGAL — handled by Footer.tsx     */}
      {/* Footer already contains full legal disclaimer */}
      {/* ============================================ */}

      {/* Deeper Resources (low-key links for SEO) */}
      <section className="py-8 bg-white border-t border-secondary-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary-500">
            <Link href="/spindle-rotary-union-leakage" className="hover:text-primary-600 transition-colors">
              Rotary Union Leakage
            </Link>
            <span className="text-secondary-300">|</span>
            <Link href="/spindle-repair-rebuild" className="hover:text-primary-600 transition-colors">
              Spindle Repair &amp; Rebuild
            </Link>
            <span className="text-secondary-300">|</span>
            <Link href="/hydraulic-aggregate-pressure-issue" className="hover:text-primary-600 transition-colors">
              Hydraulic Aggregate
            </Link>
            <span className="text-secondary-300">|</span>
            <Link href="/repair-gallery" className="hover:text-primary-600 transition-colors">
              Repair Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
