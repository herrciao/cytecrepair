import { Metadata } from 'next';
import Link from 'next/link';
import SpokePageTemplate from '@/components/SpokePageTemplate';
import { getRelatedM21Articles } from '@/lib/knowledge-articles';

export const metadata: Metadata = {
  title: 'Cytec M21 Spindle Overheating: Verify Temperature Alarms Safely',
  description: 'Cytec M21 bearing or motor temperature alarm? Learn how professionals verify the sensor signal, recognize confirmed overheating, and decide when to stop the spindle.',
  keywords: [
    'Cytec M21 spindle overheating',
    'M21 spindle temperature alarm',
    'Cytec spindle running hot',
    'M21 bearing temperature high',
    'M21 motor temperature alarm',
    'PT100 KTY84 spindle sensor',
  ],
  alternates: {
    canonical: 'https://5axisheadrepair.com/knowledge/cytec-m21/spindle-overheating',
  },
  openGraph: {
    title: 'M21 Spindle Overheating | Temperature Alarm Diagnosis',
    description: 'A cautious diagnostic workflow for M21 bearing and motor temperature alarms, sensor verification, stop conditions, and repair assessment.',
    url: 'https://5axisheadrepair.com/knowledge/cytec-m21/spindle-overheating',
  },
};

export default function SpindleOverheatingPage() {
  const relatedArticles = getRelatedM21Articles('spindle-overheating', 3).map((article) => ({
    title: article.title,
    href: `/knowledge/cytec-m21/${article.slug}`,
  }));

  return (
    <SpokePageTemplate
      articleSlug="spindle-overheating"
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'M21 Knowledge Center', href: '/knowledge/cytec-m21' },
        { label: 'Spindle Overheating' },
      ]}
      title="Cytec M21 Spindle Overheating"
      subtitle="How to verify a bearing or motor temperature alarm, recognize confirmed overheating, and decide when the spindle must stop."
      sections={[
        {
          heading: 'Important Safety and Technical Disclaimer',
          content: (
            <div className="rounded-lg border-2 border-amber-400 bg-amber-50 p-6 text-amber-950">
              <p className="font-semibold">
                This article summarizes our independent field experience. It does not establish the correct procedure, wiring, limits, or diagnosis for your specific spindle.
              </p>
              <p className="mt-4">
                M21 configurations can differ by spindle version, sensor, machine builder, controller, PLC program, connector, and lubrication arrangement. Do not disconnect wiring, measure energized circuits, change parameters, disassemble the spindle, or continue operating an overheated unit solely from this article.
              </p>
              <p className="mt-4">
                Consult the correct spindle and machine documentation and use qualified electrical or spindle-service personnel. Follow isolation, lockout, and prevention-of-restart procedures. If the applicable configuration or limit is uncertain, contact a qualified independent specialist, us, or the original equipment service organization.
              </p>
              <p className="mt-4 font-medium">
                Temperatures, resistance values, and runout figures below are approximate diagnostic context—not universal M21 specifications.
              </p>
            </div>
          ),
        },
        {
          heading: 'What a Temperature Alarm Does—and Does Not—Confirm',
          content: (
            <>
              <p>
                An M21-equipped machine may monitor spindle-bearing temperature, motor temperature, or both. The alarm number and wording depend on the machine builder, controller, and PLC implementation, so there is no single alarm code that applies to every M21 installation.
              </p>
              <p>
                A temperature alarm does not by itself prove that the bearings or motor are damaged. The reading can reflect real heat, but a sensor, connector, cable, or signal-processing problem can also produce an incorrect alarm. The first diagnostic question is therefore: <strong>is the indicated temperature credible?</strong>
              </p>
              <p>
                Early in the event there may be no obvious noise, vibration, or accuracy change. A spindle that still sounds normal should not be assumed safe if a high-temperature condition has been confirmed.
              </p>
            </>
          ),
        },
        {
          heading: 'Step 1: Record Which Temperature Is in Alarm',
          type: 'checklist',
          content: [
            'Photograph the complete alarm screen before resetting anything',
            'Record whether the message identifies bearing temperature or motor temperature',
            'Record spindle speed, load, warm-up time, and time from start to alarm',
            'Note whether the event occurs from cold, only after sustained operation, or at a particular speed or load',
            'Record any recent collision, abnormal cut, new vibration, or maintenance work',
          ],
        },
        {
          heading: 'Step 2: Confirm the Sensor Type From the Correct Manual',
          content: (
            <>
              <p>
                Depending on the spindle configuration, the temperature sensor may be a <strong>PT100</strong>, <strong>KTY84</strong>, or another sensor type. Their resistance curves are different and must not be interpreted with the same conversion table.
              </p>
              <p>
                Before measuring, a qualified technician must confirm the exact spindle version, sensor type, connector, pin assignment, isolation requirements, and resistance-to-temperature data from the documentation for that machine. Do not copy a connector or pin assignment from another M21 installation.
              </p>
            </>
          ),
        },
        {
          heading: 'Step 3: Compare the Alarm With a Qualified Resistance Check',
          content: (
            <>
              <p>
                On some installations, a trained technician can access the relevant temperature circuit at a machine-side connector or intermediate connection point without removing the complete spindle or two-axis head. The bearing and motor circuits should be identified and evaluated separately.
              </p>
              <p>
                The measured resistance is then converted using the correct table for the confirmed sensor. The purpose is to determine whether the controller indication agrees with the physical sensor signal—and whether the problem points toward real heat or toward the sensor, cable, connector, or input channel.
              </p>
              <p>
                As an approximate example only, a PT100 reading near 125 Ω corresponds to roughly 65°C. That relationship must not be used for KTY84 or another sensor. If the sensor type is unknown, the resistance number alone is not a valid temperature diagnosis.
              </p>
            </>
          ),
        },
        {
          heading: 'Possible Signal Problem vs. Confirmed Overheating',
          content: (
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-secondary-200 bg-secondary-50 p-5">
                <h3 className="font-bold text-secondary-900">Evidence that may point toward the signal path</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-secondary-700">
                  <li>The controller reports high temperature but the correct resistance check does not support it</li>
                  <li>The displayed value jumps abruptly or is physically implausible</li>
                  <li>The value changes when a connector or cable is disturbed</li>
                  <li>The sensor circuit is outside the expected range in the applicable manual</li>
                </ul>
              </div>
              <div className="rounded-lg border border-red-200 bg-red-50 p-5">
                <h3 className="font-bold text-red-900">Evidence that may support real overheating</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-red-900">
                  <li>The controller reading and the correctly converted sensor measurement agree</li>
                  <li>Temperature rises consistently with running time, speed, or load</li>
                  <li>Temperature falls progressively after the spindle stops</li>
                  <li>The same operating condition is now significantly hotter than its previous normal pattern</li>
                  <li>New vibration or abnormal runout appears with the temperature rise</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          heading: 'When the Spindle Should Stop',
          content: (
            <>
              <p>
                If the correct sensor conversion confirms that the bearing is genuinely overheating, do not keep running the spindle simply because it has not yet become noisy.
              </p>
              <p>
                In one field-diagnostic context, a bearing temperature around or above 65°C was treated as a stop-and-investigate condition. This is an approximate experience-based reference, not a universal limit. The actual limit depends on the spindle version, sensor location, bearing arrangement, grease, and machine-builder specification.
              </p>
              <p>
                When the applicable limit cannot be verified, the conservative response is to stop and obtain qualified guidance. Continued operation during confirmed overheating can further damage the bearing, degrade grease, increase vibration and runout, and expand the repair scope.
              </p>
            </>
          ),
        },
        {
          heading: 'What May Be Investigated After Real Overheating Is Confirmed',
          content: (
            <>
              <p>
                After the temperature signal has been validated, the next investigation depends on the actual machine and operating pattern. Possible directions include bearing damage, abnormal bearing retention or preload, a loosened retaining feature, a previous collision, cooling-circuit problems, abnormal motor load, or another source of heat.
              </p>
              <p>
                A spindle that previously ran smoothly but has developed new vibration together with rising temperature deserves further mechanical assessment. Depending on the configuration, spindle runout can provide additional evidence.
              </p>
              <p>
                In our field experience, measured runout above approximately <strong>20 μm</strong> is a reason to investigate the spindle condition more closely. It is not, by itself, proof of a specific failure. The measurement location, spindle condition, tool interface, method, and applicable tolerance must all be documented.
              </p>
              <p>
                For an overview of inspection and repair paths after a spindle problem is confirmed, see our{' '}
                <Link href="/spindle-repair-rebuild" className="font-medium text-primary-600 underline hover:text-primary-800">
                  M21 and G30 spindle repair and rebuild assessment
                </Link>.
              </p>
            </>
          ),
        },
        {
          heading: 'Information to Send for Assessment',
          type: 'ordered',
          content: [
            'Complete alarm-screen photo and the exact alarm wording',
            'Machine, controller, and full spindle identification',
            'Whether the alarm identifies bearing or motor temperature',
            'RPM, load, warm-up time, and time to alarm',
            'Whether the issue changes from cold to hot or at specific operating conditions',
            'Any recent collision, abnormal cut, service work, new noise, or vibration',
            'Sensor type and resistance measurement obtained by a qualified person using the correct manual',
            'Runout result, measurement location, and method if professionally measured',
            'A clear operating video with sound, if the machine can be run safely within approved limits',
          ],
        },
      ]}
      faqItems={[
        {
          question: 'Does a temperature alarm mean the spindle bearings must be replaced?',
          answer: 'No. First verify the sensor type, wiring, resistance conversion, and credibility of the temperature signal. Bearing condition is investigated after real overheating has been confirmed.',
        },
        {
          question: 'Can the spindle keep running if there is no unusual noise?',
          answer: 'Do not use sound alone as the decision. Early overheating may occur without obvious noise or vibration. If the correct measurement confirms overheating, stop and follow the applicable technical limits.',
        },
        {
          question: 'Can I use 125 Ω as a universal M21 overtemperature threshold?',
          answer: 'No. Approximately 125 Ω is only a rough PT100 example near 65°C. A KTY84 or another sensor has a different resistance curve. Confirm the installed sensor and use its correct documentation.',
        },
        {
          question: 'Do all M21 spindles use the same sensor pins?',
          answer: 'No assumption should be made. Connectors, pins, sensors, and PLC configurations can vary by spindle and machine builder. Use the documentation for the exact installation.',
        },
        {
          question: 'Does runout above 20 μm prove the spindle is damaged?',
          answer: 'It is a reason for further assessment, not a complete diagnosis. Measurement position, method, spindle state, interface, temperature, vibration, and the applicable tolerance must be considered together.',
        },
      ]}
      issueType="M21 Spindle Overheating"
      formTitle="Submit a Temperature Alarm for Assessment"
      relatedArticles={relatedArticles}
    />
  );
}
