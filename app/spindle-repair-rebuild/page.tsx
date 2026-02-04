import { Metadata } from 'next';
import AssessmentForm from '@/components/AssessmentForm';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'M21 & G30 Spindle Repair & Rebuild | Cytec Specialist',
  description: 'Independent aftermarket spindle repair and rebuild for Cytec M21 and G30 two-axis heads. 10+ years experience with bearing replacement, encoder diagnostics, noise and vibration diagnosis. Replacement components in stock.',
  keywords: [
    'Cytec M21 spindle repair',
    'G30 spindle rebuild',
    'M21 bearing replacement',
    'G30 encoder signal issues',
    'M21 G30 spindle vibration',
  ],
  openGraph: {
    title: 'Spindle Repair & Rebuild | Cytec Two-Axis Head Specialist',
    description: 'Expert spindle repair for Cytec-equipped machines. Bearing, encoder, and thermal issue diagnosis.',
  },
};

export default function SpindleRepairRebuildPage() {
  const faqItems = [
    {
      question: 'How do I know if my spindle needs repair or full rebuild?',
      answer: 'Online assessment helps determine the scope. Minor issues like encoder signal problems or isolated bearing noise may only require component replacement. Severe symptoms like persistent vibration, overheating, or multiple bearing failures typically require full rebuild.',
    },
    {
      question: 'Can encoder issues cause spindle performance problems?',
      answer: 'Yes. Gear-based encoder systems are susceptible to connector wear, cable fatigue, and contact issues. Signal instability can cause position errors, reduced accuracy, and even protective shutdowns. Many encoder issues can be resolved without full spindle disassembly.',
    },
    {
      question: 'Do you stock replacement encoder cables?',
      answer: 'We maintain selective inventory of pre-assembled, tested replacement encoder cables compatible with gear-based encoder systems from industry suppliers such as Leine & Linde. These plug-and-replace cables significantly reduce downtime compared to custom cable fabrication.',
    },
    {
      question: 'What causes spindle overheating?',
      answer: 'Common causes include bearing preload imbalance, insufficient lubrication, contaminated bearings, or cooling system blockage. Overheating accelerates bearing wear and can cause thermal expansion issues. Assessment should identify root cause before attempting repair.',
    },
    {
      question: 'How long does spindle rebuild take?',
      answer: 'Typical rebuild timeline is 2-3 weeks including disassembly, bearing replacement, encoder validation, cleaning, reassembly, balancing, and run-in testing. Rush service may be available for critical production situations.',
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
              Spindle Repair & Rebuild for Cytec M21 & G30 Two-Axis Heads
            </h1>
            
            <p className="text-xl text-primary-100 mb-8">
              Abnormal noise, vibration, overheating, or poor surface finish on your M21 or G30 indicate spindle degradation. 
              With 10+ years of M21 and G30 repair experience worldwide, we identify whether you need targeted component 
              replacement or full rebuild. Replacement components in stock for reduced downtime.
            </p>

            <Link href="#assessment" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Request Spindle Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-8">Spindle Failure Symptoms</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary-600">Acoustic & Vibration</h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Grinding, clicking, or whining noise from spindle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Abnormal vibration during rotation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Noise level increases with RPM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Intermittent resonance at specific speeds</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary-600">Thermal & Performance</h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Spindle overheating during normal operation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Poor surface finish on machined parts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Dimensional inaccuracy or taper issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Thermal expansion causing tolerance drift</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary-600">Electronic & Control</h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Encoder signal errors or position alarms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Intermittent communication loss</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Spindle orientation failures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Unexpected protective shutdowns</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-4 text-primary-600">Operational Issues</h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Tool holder retention problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Unusual cutting force requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Premature tool wear patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Coolant delivery inconsistency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Encoder Systems Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-6">Encoder System Diagnostics</h2>
            
            <div className="space-y-6">
              <p className="text-lg text-secondary-700">
                Cytec M21 and G30 two-axis heads use gear-based encoder systems for spindle position feedback. 
                Both models share similar encoder configurations, making them susceptible to comparable failure modes. 
                These systems are critical for accurate positioning and tool orientation.
              </p>

              <div className="card p-6 bg-blue-50 border-blue-200">
                <h3 className="font-semibold text-lg mb-4 text-blue-900">Common Encoder Issues</h3>
                <p className="text-blue-800 mb-4">
                  Signal instability is often caused by:
                </p>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Connector Wear:</strong> Repeated connection/disconnection cycles degrade contact quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Cable Fatigue:</strong> Continuous flexing in cable tracks causes internal wire breakage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Contact Oxidation:</strong> Environmental exposure degrades electrical conductivity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Shield Damage:</strong> Electromagnetic interference from damaged cable shielding</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-lg mb-4">M21 & G30 Encoder Components in Stock</h3>
                <p className="text-secondary-700 mb-4">
                  Gear-based encoder systems in M21 and G30 models commonly use components from industry suppliers such as 
                  <strong> Lenord + Bauer</strong> and similar manufacturers. We maintain selective inventory of M21 and G30 compatible components:
                </p>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Pre-assembled replacement encoder cables for M21/G30</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Tested connector assemblies compatible with both models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Plug-and-replace configurations to minimize downtime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Available for planned maintenance or emergency replacement</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-secondary-50 rounded-md">
                  <p className="text-sm text-secondary-700">
                    <strong>Preventive Maintenance Strategy:</strong> Stock critical encoder components for scheduled shutdowns. 
                    Encoder cable replacement on M21/G30 systems does not require full spindle disassembly in many cases, 
                    making it ideal for planned maintenance windows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair vs Rebuild */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-8">Targeted Repair vs. Full Rebuild</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6 border-green-200 bg-green-50">
                <h3 className="font-semibold text-lg mb-4 text-green-900">Targeted Component Repair</h3>
                <p className="text-green-800 mb-4">Appropriate when:</p>
                <ul className="space-y-2 text-green-800 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Encoder signal issues only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Single bearing showing early wear signs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Coolant delivery system malfunction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Tool retention mechanism issues</span>
                  </li>
                </ul>
                <p className="text-sm text-green-700 font-medium">
                  Typical timeline: 5-10 days | Lower cost | Minimal disassembly
                </p>
              </div>

              <div className="card p-6 border-orange-200 bg-orange-50">
                <h3 className="font-semibold text-lg mb-4 text-orange-900">Full Spindle Rebuild</h3>
                <p className="text-orange-800 mb-4">Required when:</p>
                <ul className="space-y-2 text-orange-800 mb-4">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Multiple bearings showing wear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Persistent overheating despite lubrication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Severe vibration or noise throughout RPM range</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Contamination from rotary union failure</span>
                  </li>
                </ul>
                <p className="text-sm text-orange-700 font-medium">
                  Typical timeline: 2-3 weeks | Comprehensive | Full disassembly & balancing
                </p>
              </div>
            </div>

            <div className="mt-6 card p-6 bg-primary-50 border-primary-200">
              <p className="text-primary-800">
                <strong>Assessment-First Approach:</strong> We always recommend online assessment before committing to repair scope. 
                Photos, videos, and alarm descriptions help us determine whether targeted repair is viable or full rebuild is necessary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-8">Our Repair Process</h2>

            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Online Assessment',
                  description: 'Submit photos, videos, alarm codes, and symptom description. We analyze remotely and provide initial diagnosis within 24-48 hours.',
                },
                {
                  step: '2',
                  title: 'Intake & Inspection',
                  description: 'Component arrives at our facility. We perform detailed inspection including runout measurement, bearing condition assessment, and encoder signal validation.',
                },
                {
                  step: '3',
                  title: 'Disassembly & Root Cause Analysis',
                  description: 'Controlled disassembly with documentation. We identify all wear patterns, contamination sources, and failure mechanisms.',
                },
                {
                  step: '4',
                  title: 'Component Replacement',
                  description: 'Replace worn bearings, seals, encoder cables, or other identified components. All replacement parts are aftermarket components matched to original specifications.',
                },
                {
                  step: '5',
                  title: 'Reassembly & Balancing',
                  description: 'Precision reassembly with proper preload setting. Dynamic balancing to manufacturer tolerance ranges.',
                },
                {
                  step: '6',
                  title: 'Testing & Validation',
                  description: 'Run-in testing at multiple RPM ranges. Vibration analysis, thermal monitoring, and encoder signal verification.',
                },
                {
                  step: '7',
                  title: 'Return & Installation Guidance',
                  description: 'Secure packaging and return shipping. Installation guidance and startup procedure documentation provided.',
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
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-8">Frequently Asked Questions</h2>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <section id="assessment" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Request Spindle Assessment</h2>
              <p className="text-xl text-secondary-600">
                Describe your symptoms, upload photos/videos if available, and include any alarm codes. 
                We&apos;ll provide initial diagnosis within 24-48 hours.
              </p>
            </div>
            <AssessmentForm 
              issueType="Spindle Repair & Rebuild"
              formTitle="Spindle Repair Assessment Request"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-4">Independent Aftermarket Spindle Specialists</h2>
            <p className="text-xl text-primary-100 mb-8">
              We are an independent, non-OEM service provider specializing in spindle repair and rebuild for machines equipped with Cytec two-axis heads. 
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
