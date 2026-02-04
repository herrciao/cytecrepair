import { Metadata } from 'next';
import AssessmentForm from '@/components/AssessmentForm';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'M21 & G30 Spindle Rotary Union Leakage Repair | Cytec Specialist',
  description: 'Independent aftermarket repair for spindle rotary union leakage on Cytec M21 and G30 two-axis heads. 10+ years experience with oil and coolant leakage diagnosis, seal replacement, pressure validation.',
  keywords: [
    'Cytec M21 rotary union leakage',
    'G30 spindle oil leak',
    'M21 spindle seal replacement',
    'G30 rotary union repair',
    'Cytec M21 G30 coolant leakage',
  ],
  openGraph: {
    title: 'Spindle Rotary Union Leakage Repair | Cytec Two-Axis Head',
    description: 'Expert diagnosis and repair for spindle rotary union leakage issues on Cytec-equipped machines.',
  },
};

export default function SpindleRotaryUnionLeakagePage() {
  const faqItems = [
    {
      question: 'Why does rotary union leakage escalate quickly?',
      answer: 'Even minor leakage can allow contaminants to enter the spindle bearing housing. Once contamination begins, it accelerates seal degradation and can cause catastrophic bearing failure if not addressed promptly.',
    },
    {
      question: 'Can I temporarily seal the leak while waiting for repair?',
      answer: 'Temporary sealing is not recommended. External sealants can introduce additional contamination and may interfere with proper diagnosis. The best approach is online assessment followed by proper repair to prevent further damage.',
    },
    {
      question: 'How long does rotary union seal replacement take?',
      answer: 'After assessment, typical seal replacement takes 3-5 business days including disassembly, cleaning, seal installation, reassembly, and pressure validation testing. Rush service may be available for critical downtime situations.',
    },
    {
      question: 'Do you only replace seals or can you address other rotary union issues?',
      answer: 'We perform comprehensive rotary union inspection including seal condition, routing channel integrity, pressure balance, and coupling alignment. We address all identified issues, not just visible leakage points.',
    },
    {
      question: 'What information do you need for online assessment?',
      answer: 'Photos showing the exact leakage location, videos demonstrating active leakage if possible, fluid type (oil or coolant), approximate leakage volume, and any pressure-related alarms. This helps us identify the root cause remotely.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <Link href="/" className="inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            
            <h1 className="heading-xl mb-6">
              Spindle Rotary Union Leakage on Cytec M21 & G30 Two-Axis Heads
            </h1>
            
            <p className="text-xl text-primary-100 mb-8">
              Oil or coolant leaking from your M21 or G30 spindle area is more than a mess—it&apos;s a warning sign. 
              With over 10 years of experience repairing M21 and G30 systems worldwide, we understand how rotary union 
              leakage escalates to bearing failure and costly downtime.
            </p>

            <Link href="#assessment" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Submit Photos for Online Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Understanding the Issue */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Understanding Rotary Union Leakage</h2>
            
            <div className="space-y-6 text-lg text-secondary-700">
              <p>
                The spindle rotary union in Cytec M21 and G30 two-axis heads serves a critical function: 
                delivering pressurized oil or coolant to the rotating spindle while maintaining a seal against the stationary housing. 
                Both M21 and G30 models use similar rotary union designs, making them susceptible to comparable failure modes.
              </p>

              <p>
                When this seal fails on M21 or G30 systems, the consequences escalate rapidly:
              </p>

              <div className="card p-6 bg-amber-50 border-amber-200">
                <h3 className="font-semibold text-lg mb-4 text-amber-900">Progressive Failure Pattern</h3>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-bold text-amber-700 mr-3">1.</span>
                    <span><strong>Initial Leakage:</strong> Minor seepage or occasional dripping detected</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-amber-700 mr-3">2.</span>
                    <span><strong>Seal Degradation:</strong> Wear accelerates due to pressure imbalance or routing fatigue</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-amber-700 mr-3">3.</span>
                    <span><strong>Contamination Risk:</strong> External contaminants can enter spindle bearing housing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-amber-700 mr-3">4.</span>
                    <span><strong>Bearing Damage:</strong> Contaminated bearings fail rapidly, requiring full spindle rebuild</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-8">Common Symptoms</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary-600">Visible Signs</h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Oil or coolant dripping from spindle housing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Fluid accumulation around rotary union area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Visible seal degradation or displacement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Fluid misting during spindle rotation</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary-600">System Indicators</h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Pressure imbalance warnings or alarms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Inconsistent coolant/oil delivery to tool</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Increased fluid consumption rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Spindle temperature fluctuations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-8">Our Repair Approach</h2>

            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-bold text-xl mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Online Pre-Assessment</h3>
                    <p className="text-secondary-700">
                      Submit photos showing leakage location, videos of active leakage, and any pressure-related alarms. 
                      This allows us to identify likely root causes and plan the repair approach before disassembly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-bold text-xl mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Leakage Source Isolation</h3>
                    <p className="text-secondary-700">
                      Systematic inspection to determine if leakage originates from seal wear, routing channel fatigue, 
                      pressure imbalance, or coupling misalignment. Accurate diagnosis prevents repeat failures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-bold text-xl mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Rotary Union Inspection & Seal Replacement</h3>
                    <p className="text-secondary-700">
                      Full rotary union disassembly, cleaning, inspection of routing channels and sealing surfaces, 
                      and replacement of worn seals with aftermarket components matched to original specifications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-bold text-xl mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Pressure Validation</h3>
                    <p className="text-secondary-700">
                      After reassembly, we perform pressure testing to verify seal integrity, confirm proper fluid routing, 
                      and validate system pressure stability before return to service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Act Now */}
      <section className="section-padding bg-red-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card border-red-200 p-8">
              <h2 className="heading-md mb-4 text-red-900">Why Delaying Repair Increases Risk</h2>
              <p className="text-lg text-red-800 mb-6">
                What begins as a &ldquo;small leak&rdquo; can quickly escalate to catastrophic failure:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-red-900">Early Intervention (Seal Replacement Only)</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• Typical repair time: 3-5 days</li>
                    <li>• Component-level repair</li>
                    <li>• No bearing contamination</li>
                    <li>• Lower total cost</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-red-900">Delayed Response (After Contamination)</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• Repair time: 2-4 weeks</li>
                    <li>• Full spindle rebuild required</li>
                    <li>• Bearing replacement needed</li>
                    <li>• Significantly higher cost</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-8">Frequently Asked Questions</h2>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <section id="assessment" className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Submit Your Issue for Assessment</h2>
              <p className="text-xl text-secondary-600">
                Include photos of the leakage area and any alarm descriptions. We typically respond within 24-48 hours.
              </p>
            </div>
            <AssessmentForm 
              issueType="Spindle Rotary Union Leakage"
              formTitle="Rotary Union Leakage Assessment Request"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-4">Independent Aftermarket Service</h2>
            <p className="text-xl text-primary-100 mb-8">
              We are an independent, non-OEM service provider specializing in machines equipped with Cytec two-axis milling heads. 
              We are not authorized, certified, or affiliated with any original equipment manufacturer.
            </p>
            <Link href="/" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
