import { Metadata } from 'next';
import AssessmentForm from '@/components/AssessmentForm';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'M21 & G30 Hydraulic Aggregate Pressure Issues | Cytec Specialist',
  description: 'Independent aftermarket repair for hydraulic aggregate pressure problems in Cytec M21 and G30 two-axis heads. 10+ years experience with cannot hold pressure, unstable clamping, pressure build-up issues.',
  keywords: [
    'Cytec M21 hydraulic pressure',
    'G30 hydraulic aggregate',
    'M21 cannot hold pressure',
    'G30 hydraulic clamping issues',
    'M21 G30 pressure instability',
  ],
  openGraph: {
    title: 'Hydraulic Aggregate Pressure Issues | Cytec Two-Axis Head',
    description: 'Expert diagnosis and repair for hydraulic aggregate pressure issues on Cytec-equipped machines.',
  },
};

export default function HydraulicAggregatePage() {
  const faqItems = [
    {
      question: 'Why does hydraulic pressure instability affect the entire head?',
      answer: 'The hydraulic aggregate provides clamping force for tool holding and positioning stability for both axes. When pressure is unstable, it affects tool retention, positioning accuracy, and overall head reliability. Even minor pressure fluctuations can cascade into positioning errors.',
    },
    {
      question: 'Does pressure instability always require full aggregate replacement?',
      answer: 'No. Many pressure issues stem from wear in specific components like seals, valves, or accumulators. Component-level diagnosis allows targeted replacement rather than complete aggregate replacement, significantly reducing cost and downtime.',
    },
    {
      question: 'What causes repeated pressure build-up cycles?',
      answer: 'Common causes include check valve leakage, accumulator bladder failure, internal seal degradation, or contamination in the pressure control circuit. Assessment must identify the specific failure point to prevent recurrence.',
    },
    {
      question: 'Can I continue operating with unstable hydraulic pressure?',
      answer: 'Not recommended. Unstable pressure risks tool ejection, positioning errors, and potential collision damage. Operating with compromised hydraulic function can escalate from component-level issue to system-wide failure requiring extensive repair.',
    },
    {
      question: 'How do you diagnose hydraulic aggregate issues remotely?',
      answer: 'We analyze alarm patterns, pressure gauge readings, cycle behavior descriptions, and any available pressure charts. Photos of the aggregate and videos showing pressure behavior help identify likely failure modes. This remote assessment guides our repair strategy.',
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
              Hydraulic Aggregate Issues – M21 & G30 Cannot Hold Pressure Problems
            </h1>
            
            <p className="text-xl text-primary-100 mb-8">
              Pressure instability in M21 and G30 hydraulic aggregates affects tool clamping, positioning accuracy, and entire head reliability. 
              With 10+ years of experience on both M21 and G30 models, we provide component-level diagnosis and targeted repair 
              without complete aggregate replacement. Replacement components available for scheduled maintenance.
            </p>

            <Link href="#assessment" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Describe Your Pressure Issue
            </Link>
          </div>
        </div>
      </section>

      {/* Understanding the System */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Understanding Hydraulic Aggregate Function</h2>
            
            <div className="space-y-6 text-lg text-secondary-700">
              <p>
                The hydraulic aggregate in Cytec M21 and G30 two-axis milling heads serves multiple critical functions. 
                Both models share similar hydraulic system architecture, making diagnostic and repair approaches comparable:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary-600">Primary Functions</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Tool clamping force generation and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Axis positioning stability under cutting loads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Brake engagement for axis locking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Pressure supply for rotary union systems</span>
                    </li>
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary-600">System Dependencies</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Spindle tool retention relies on stable pressure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Both rotation axes require consistent clamping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Coolant delivery may depend on aggregate pressure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Safety interlocks monitor aggregate status</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card p-6 bg-amber-50 border-amber-200">
                <h3 className="font-semibold text-lg mb-3 text-amber-900">Why Pressure Instability Escalates</h3>
                <p className="text-amber-800 mb-3">
                  When hydraulic aggregate cannot maintain stable pressure:
                </p>
                <ol className="space-y-2 text-amber-800">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">1.</span>
                    <span>Tool clamping becomes unreliable, risking tool ejection during cutting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">2.</span>
                    <span>Positioning accuracy degrades, causing dimensional errors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">3.</span>
                    <span>Frequent alarms disrupt production and increase downtime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">4.</span>
                    <span>Continued operation risks collision damage or axis runaway</span>
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
            <h2 className="heading-lg mb-8">Pressure Problem Symptoms</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary-600">Pressure Build-Up Issues</h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Cannot reach target pressure within normal time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Pressure builds slowly then drops repeatedly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Pump runs continuously trying to maintain pressure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Pressure fluctuates during axis movement</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary-600">Pressure Retention Issues</h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Pressure drops when pump stops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Cannot hold pressure overnight or during idle periods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Gradual pressure decay over minutes or hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Sudden pressure loss with audible hissing</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary-600">Clamping & Positioning</h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Unstable tool clamping or unexpected release</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Axis drift during cutting operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Inconsistent brake engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Position errors after tool changes</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary-600">System Alarms</h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Hydraulic pressure low/high alarms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Tool unclamping warnings during operation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Axis brake failure notifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Repeated pressure monitoring errors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component-Level Understanding */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Component-Level Diagnosis</h2>
            
            <p className="text-lg text-secondary-700 mb-6">
              Full hydraulic aggregate replacement is expensive and often unnecessary. 
              Understanding which specific components fail allows targeted repair:
            </p>

            <div className="space-y-4">
              <div className="card p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Check Valves & Pressure Regulation</h3>
                    <p className="text-secondary-700 mb-2">
                      <strong>Function:</strong> Prevent backflow and maintain stable pressure in circuit branches
                    </p>
                    <p className="text-secondary-600 text-sm">
                      <strong>Failure mode:</strong> Valve seat wear or contamination causes gradual pressure decay. 
                      Symptoms include cannot hold pressure when pump stops, or pressure drops during axis movement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Accumulator System</h3>
                    <p className="text-secondary-700 mb-2">
                      <strong>Function:</strong> Buffer pressure fluctuations and provide rapid pressure response
                    </p>
                    <p className="text-secondary-600 text-sm">
                      <strong>Failure mode:</strong> Bladder rupture or gas charge loss eliminates buffering capacity. 
                      Symptoms include pump cycling frequently, pressure spikes during axis motion, or unstable clamping force.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Seal Assemblies</h3>
                    <p className="text-secondary-700 mb-2">
                      <strong>Function:</strong> Maintain pressure isolation between circuit sections and external environment
                    </p>
                    <p className="text-secondary-600 text-sm">
                      <strong>Failure mode:</strong> O-ring degradation or dynamic seal wear causes internal or external leakage. 
                      Symptoms include visible fluid leakage, cannot build pressure to target, or oil contamination in unexpected areas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Pressure Sensors & Switches</h3>
                    <p className="text-secondary-700 mb-2">
                      <strong>Function:</strong> Monitor system pressure and trigger alarms or protective actions
                    </p>
                    <p className="text-secondary-600 text-sm">
                      <strong>Failure mode:</strong> Sensor drift or switch calibration error causes false alarms. 
                      While not a mechanical failure, this can mask real pressure issues or trigger unnecessary shutdowns.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 card p-6 bg-green-50 border-green-200">
              <h3 className="font-semibold text-lg mb-3 text-green-900">Cost-Effective Repair Strategy</h3>
              <p className="text-green-800">
                By identifying which specific component has failed, we can replace only the wear-prone element rather than 
                the entire aggregate. This approach:
              </p>
              <ul className="mt-3 space-y-2 text-green-800">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Reduces repair cost by 60-80% compared to full replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Shortens downtime from weeks to days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Addresses root cause rather than replacing functional components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Maintains system-level compatibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-8">Our Assessment & Repair Process</h2>

            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Remote Symptom Analysis',
                  description: 'Submit alarm codes, pressure behavior description, photos of aggregate and gauge readings. We analyze patterns to identify likely failure components.',
                },
                {
                  step: '2',
                  title: 'Pressure Circuit Testing',
                  description: 'Systematic testing of circuit sections to isolate pressure loss location. Check valve function test, accumulator pre-charge verification, seal integrity assessment.',
                },
                {
                  step: '3',
                  title: 'Component-Level Diagnosis',
                  description: 'Disassemble only the suspect circuit section. Inspect wear patterns, contamination, and failure mechanisms. Identify specific failed component.',
                },
                {
                  step: '4',
                  title: 'Targeted Component Replacement',
                  description: 'Replace only identified worn or failed components. Use aftermarket parts matched to original specifications. Clean and flush affected circuit sections.',
                },
                {
                  step: '5',
                  title: 'System Validation',
                  description: 'Pressure build-up test, hold test under load, cycling test to verify stability. Calibrate sensors and validate alarm thresholds.',
                },
                {
                  step: '6',
                  title: 'Functional Testing',
                  description: 'Tool clamping force verification, axis brake engagement test, pressure stability during simulated cutting loads.',
                },
              ].map((item) => (
                <div key={item.step} className="card p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold mr-4">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-secondary-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
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
              <h2 className="heading-lg mb-4">Describe Your Pressure Issue</h2>
              <p className="text-xl text-secondary-600">
                Include alarm codes, pressure behavior patterns, photos of pressure gauges, and any available pressure charts. 
                We&apos;ll analyze your submission and provide diagnosis within 24-48 hours.
              </p>
            </div>
            <AssessmentForm 
              issueType="Hydraulic Aggregate"
              formTitle="Hydraulic Pressure Issue Assessment"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-4">System-Level Understanding, Component-Level Repair</h2>
            <p className="text-xl text-primary-100 mb-8">
              We are an independent, non-OEM aftermarket service provider specializing in hydraulic systems for machines equipped with Cytec two-axis heads. 
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
