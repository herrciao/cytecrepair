import { Metadata } from 'next';
import Link from 'next/link';
import SpokePageTemplate from '@/components/SpokePageTemplate';
import { getRelatedM21Articles } from '@/lib/knowledge-articles';

export const metadata: Metadata = {
  title: 'Case Study: CTS Coolant Leak at Spindle Face — Ceramic Seal Failure & Same-Day Fix',
  description: 'Through-spindle coolant spraying from spindle face drain hole when CTS activates. Trigger-test diagnosis pinpointed rotary union ceramic seal failure. Same-day replacement with filtration guidance.',
  keywords: [
    'Cytec M21 CTS coolant leak',
    'through spindle coolant leak repair',
    'M21 rotary union ceramic seal failure',
    'spindle face coolant spray CTS',
    'Cytec two-axis head coolant leak',
    'M21 rotary union replacement CTS',
  ],
  alternates: {
    canonical: 'https://5axisheadrepair.com/knowledge/cytec-m21/case-spindle-cts-leak-ceramic-seal',
  },
  openGraph: {
    title: 'Case Study: CTS Coolant Leak — Ceramic Seal Failure | Cytec Specialist',
    description: 'Coolant spraying from spindle face on CTS activation. Trigger-test → rotary union ceramic seal failure → same-day replacement + filtration guidance.',
    url: 'https://5axisheadrepair.com/knowledge/cytec-m21/case-spindle-cts-leak-ceramic-seal',
  },
};

export default function CaseSpindleCtsLeakCeramicSealPage() {
  const relatedArticles = getRelatedM21Articles('case-spindle-cts-leak-ceramic-seal', 4).map(article => ({
    title: article.title,
    href: `/knowledge/cytec-m21/${article.slug}`,
  }));

  return (
    <SpokePageTemplate
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'M21 Knowledge Center', href: '/knowledge/cytec-m21' },
        { label: 'Case: CTS Coolant Leak' },
      ]}
      title="Case Study: CTS Coolant Leak at Spindle Face — Ceramic Seal Failure & Same-Day Resolution"
      subtitle="Through-spindle coolant spraying from the spindle face drain hole the moment CTS activates. How a single trigger test narrowed the fault to the rotary union ceramic seal — and why filtration matters as much as the replacement itself."
      sections={[
        {
          heading: 'Situation',
          content: (
            <>
              <p>
                A customer operating a gantry five-axis machining center with a Cytec two-axis head (spindle + A-axis + C-axis) reported coolant leaking from the spindle face. The behavior was specific and repeatable:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-secondary-700">
                <li><strong>CTS active:</strong> Cutting coolant sprayed visibly from the spindle face drain hole — not a drip, but a pressurized spray</li>
                <li><strong>CTS off:</strong> Residual coolant in the line continued to drip from the same drain hole</li>
              </ul>
              <p className="mt-4">
                The leaked fluid was milky white, immediately identifiable as cutting coolant — not motor cooling water and not hydraulic oil. This ruled out two of the three possible fluid sources within the first minute of inspection.
              </p>
              <p className="mt-4">
                The customer&apos;s constraint was clear: the machine could not stay down for long. Any diagnosis had to lead quickly to a decision and a path back to production.
              </p>
            </>
          ),
        },
        {
          heading: 'Task',
          content: (
            <>
              <p>
                The objective was not just to replace a part — it was to build a complete evidence chain fast enough for the customer to make a confident decision under time pressure:
              </p>
              <ol className="list-decimal list-inside space-y-2 mt-4 text-secondary-700">
                <li>Identify the root cause — not just the symptom</li>
                <li>Provide a clear risk assessment of what happens if repair is delayed</li>
                <li>Complete the repair same-day if spare parts are available</li>
                <li>Address the upstream cause (coolant contamination) to prevent premature failure of the new part</li>
              </ol>
            </>
          ),
        },
        {
          heading: 'Action — Step 1: Trigger Test to Reproduce and Localize',
          content: (
            <>
              <p>
                The first diagnostic step was to make the failure repeatable and observable. The customer was asked to activate CTS while the engineer observed the spindle face directly.
              </p>
              <p className="mt-4">
                Result: coolant immediately sprayed from the spindle face drain hole the moment CTS pressure was applied. When CTS was deactivated, the spray stopped and transitioned to a slow drip from residual line pressure.
              </p>
              <p className="mt-4">
                This single test established a direct, causal link between CTS activation and the leak. The fault scope was immediately narrowed to <strong>components in the CTS coolant path</strong> — specifically the rotary union (rotary joint) that transfers coolant from the stationary housing into the rotating spindle.
              </p>
            </>
          ),
        },
        {
          heading: 'Action — Step 2: Root Cause — Rotary Union Ceramic Seal Failure',
          content: (
            <>
              <p>
                The CTS coolant path runs: coolant tank → filter → pump → <strong>rotary union</strong> → spindle internal channel → tool tip. The rotary union is the critical transition point where coolant crosses from a stationary frame into a rotating shaft.
              </p>
              <p className="mt-4">
                Inside the rotary union, two precision-lapped ceramic faces form the primary seal. These faces are held together by spring preload. The failure mechanism:
              </p>
              <ol className="list-decimal list-inside space-y-2 mt-4 text-secondary-700">
                <li>Particulate contamination in the coolant (metal chips, grinding dust) enters the seal interface</li>
                <li>Abrasive particles score the ceramic faces, increasing surface friction</li>
                <li>Higher friction resists the sliding motion needed to maintain seal contact during spindle rotation</li>
                <li>Spring preload can no longer keep the faces flush — a gap opens</li>
                <li>Pressurized coolant escapes through the gap into the spindle&apos;s designed drain passage</li>
                <li>Coolant exits at the spindle face drain hole — exactly matching the observed symptom</li>
              </ol>
              <p className="mt-4">
                This failure mechanism aligned perfectly with the on-site observation: pressurized spray on CTS activation (gap under pressure), drip on deactivation (residual drainage). For background on how rotary union seal failures present and progress, see{' '}
                <Link href="/spindle-rotary-union-leakage" className="text-primary-600 underline hover:text-primary-800 font-medium">
                  rotary union leakage: symptoms and repair options
                </Link>.
              </p>
            </>
          ),
        },
        {
          heading: 'Action — Step 3: Coolant Filtration Audit',
          content: (
            <>
              <p>
                Before replacing the rotary union, the upstream contamination source had to be addressed — otherwise the new ceramic seal faces would degrade on the same timeline as the failed unit.
              </p>
              <p className="mt-4">
                The following CTS filtration checklist was reviewed with the customer:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-secondary-700">
                <li><strong>Filter canister installed on CTS tank?</strong> — Required. Without inline filtration, every particle in the tank reaches the ceramic seal</li>
                <li><strong>Filter element replacement schedule?</strong> — Must be on a regular cycle, not only when flow drops noticeably</li>
                <li><strong>Filter element rating:</strong></li>
              </ul>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm border border-secondary-200 rounded">
                  <thead className="bg-secondary-50">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-secondary-700 border-b">Material Being Cut</th>
                      <th className="px-4 py-2 text-left font-semibold text-secondary-700 border-b">Recommended Filtration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-secondary-100">
                      <td className="px-4 py-2 text-secondary-700">Aluminum / Cast iron</td>
                      <td className="px-4 py-2 text-secondary-700 font-medium">15 &mu;m</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-secondary-700">Steel</td>
                      <td className="px-4 py-2 text-secondary-700 font-medium">25 &mu;m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Filtration is not optional — it is the single most effective measure to extend ceramic seal life. This is one of the{' '}
                <Link href="/knowledge/cytec-m21/rotary-union-costly-mistakes" className="text-primary-600 underline hover:text-primary-800 font-medium">
                  costly mistakes we see repeatedly
                </Link>{' '}
                on our repair bench: new rotary unions failing within months because the coolant system was never filtered properly.
              </p>
            </>
          ),
        },
        {
          heading: 'Action — Step 4: Replace the Rotary Union',
          content: 'The failed rotary union was removed and replaced with a new unit. The new assembly restores two fresh, precision-lapped ceramic seal faces with correct spring preload, eliminating the gap that allowed coolant to bypass into the drain passage. With the spare on hand at arrival, the replacement was completed during the same visit.',
        },
        {
          heading: 'Result',
          content: (
            <>
              <p>
                After replacement, CTS was activated and the system was run continuously for 30 minutes under normal operating pressure. The spindle face drain hole remained completely dry throughout the test — no spray, no drip, no residual moisture.
              </p>
              <p className="mt-4">
                With a spare rotary union available on arrival, the complete sequence — diagnosis, root cause confirmation, replacement, and 30-minute validation — was completed in a single day, meeting the customer&apos;s constraint of minimal downtime.
              </p>
            </>
          ),
        },
        {
          heading: 'What Happens If You Don\u0027t Replace It',
          content: (
            <>
              <p>
                Customers sometimes ask whether it is safe to continue running with a small CTS leak. The answer is no — and the consequences escalate in three stages:
              </p>
              <div className="mt-6 space-y-6">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-bold text-secondary-900">Stage 1: Rotary union seizes inside the spindle</h4>
                  <p className="text-secondary-700 mt-1">
                    Coolant continuously leaking past the seal contacts the outer surface of the rotary union body. Over weeks, this causes external corrosion. Eventually the rotary union rusts and bonds to the spindle bore — making it impossible to extract for replacement without specialized tooling and potentially damaging the spindle housing.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-secondary-900">Stage 2: Coolant enters the hydraulic circuit — tool clamping fails</h4>
                  <p className="text-secondary-700 mt-1">
                    As the leak path widens, coolant can migrate into the tool clamping and unclamping hydraulic circuit. Coolant contamination causes internal corrosion of hydraulic valves, pump wear, and pressure loss. The result: the spindle can no longer reliably clamp or release tools. At this stage, the repair scope expands from one rotary union to the entire hydraulic subsystem.
                  </p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-bold text-secondary-900">Stage 3: Coolant reaches the spindle motor — motor burnout</h4>
                  <p className="text-secondary-700 mt-1">
                    If coolant penetrates further into the spindle interior, it reaches the spindle motor windings. Electrical insulation failure leads to motor burnout. At this point, the entire spindle must be removed from the machine and sent for rebuild — a process measured in weeks, not days, with costs an order of magnitude higher than a rotary union replacement.
                  </p>
                </div>
              </div>
              <p className="mt-6">
                The progression from Stage 1 to Stage 3 is not a matter of if — it is a matter of when. Every day of continued operation with a leaking CTS seal compresses the timeline.
              </p>
            </>
          ),
        },
        {
          heading: 'Preventing Recurrence',
          content: (
            <>
              <p>
                Two actions that significantly extend the life of a replacement rotary union:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-secondary-700">
                <li>
                  <Link href="/knowledge/cytec-m21/rotary-union-daily-checks" className="text-primary-600 underline hover:text-primary-800 font-medium">
                    M21 Rotary Union: Simple Daily Checks That Prevent Costly Failures
                  </Link>{' '}
                  — a 2-minute morning routine that catches early signs of seal degradation before coolant reaches the drain hole.
                </li>
                <li>
                  <strong>Maintain CTS filtration rigorously</strong> — replace filter elements on schedule, not when flow is already visibly reduced. Contaminated coolant is the primary accelerant for ceramic seal wear.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: 'If You Are Seeing This Now',
          type: 'ordered',
          content: [
            'Activate CTS and observe whether the leak volume increases immediately — this confirms CTS-path involvement',
            'Check the fluid color: milky white = cutting coolant, amber and oily = hydraulic oil (different root cause — see our oil leak case study)',
            'Photograph the spindle face while CTS is running, showing the drain hole',
            'Check whether your CTS tank has a filter canister installed — photograph it if present',
            'Send the above to us for remote assessment before scheduling a visit',
          ],
        },
      ]}
      faqItems={[
        {
          question: 'How can I tell if the leak is coolant vs hydraulic oil?',
          answer: 'Cutting coolant is typically milky white or has a visible color additive, feels watery, and has a chemical/metallic smell. Hydraulic oil is amber, viscous, and leaves a persistent oily film. The definitive test: activate CTS and observe whether the leak volume increases instantly — if yes, the fluid is almost certainly coolant following the CTS path. If the leak is constant regardless of CTS status, it is more likely hydraulic oil from the clamping circuit.',
        },
        {
          question: 'Why does the leak spray when CTS is on but only drip when CTS is off?',
          answer: 'CTS operates under significant pressure (typically 20-70 bar depending on configuration). When CTS activates, this pressure forces coolant through the failed ceramic seal gap at high velocity — producing a visible spray. When CTS deactivates, the pump stops and pressure drops to zero. The remaining drip is simply residual coolant draining from the internal passages by gravity. The spray-to-drip transition is itself a strong diagnostic indicator of ceramic seal failure.',
        },
        {
          question: 'Can the ceramic seal be repaired, or must the entire rotary union be replaced?',
          answer: 'The ceramic seal faces are precision-lapped to mirror finish during manufacturing. Once scored by particulate contamination, the surface damage cannot be reversed by field reconditioning. The entire rotary union is replaced as an assembly to ensure both ceramic faces, the spring preload mechanism, and all secondary seals are renewed together. Partial repair reliably leads to repeat failure.',
        },
        {
          question: 'How does coolant filtration affect rotary union lifespan?',
          answer: 'Filtration is the single largest variable. A rotary union running on properly filtered coolant (15-25 \u03BCm depending on material) can last years. The same unit running on unfiltered coolant — carrying metal chips, grinding dust, and scale particles — may fail within months. The abrasive particles physically destroy the ceramic seal surfaces. Investing in proper filtration is far less expensive than frequent rotary union replacements.',
        },
        {
          question: 'How long does the replacement take on site?',
          answer: 'With a spare rotary union available on arrival, a single visit covers: diagnosis confirmation, removal, replacement, CTS system pressure test, and a 30-minute continuous run validation. Total on-site time is typically within one working day. The primary delay factor is parts availability — if a spare is not on hand, diagnosis is completed in the first visit and replacement is scheduled for a second visit after procurement.',
        },
      ]}
      issueType="CTS Coolant Leak"
      formTitle="Report a CTS Coolant Leak"
      relatedArticles={relatedArticles}
    />
  );
}
