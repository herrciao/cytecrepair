import { Metadata } from 'next';
import Link from 'next/link';
import SpokePageTemplate from '@/components/SpokePageTemplate';
import { getRelatedM21Articles } from '@/lib/knowledge-articles';

export const metadata: Metadata = {
  title: 'Case Study: Cytec M21 Spindle Face Oil Leak — Same-Day Root Cause & Repair',
  description: 'Hydraulic oil leaking from the spindle face drain hole on a gantry five-axis machine. Full diagnosis from fluid identification to rotary union seal failure — resolved same day.',
  keywords: [
    'Cytec M21 spindle oil leak case study',
    'M21 rotary union seal failure',
    'spindle face hydraulic oil leak repair',
    'Cytec two-axis head oil leak diagnosis',
    'M21 same day spindle repair',
    'gantry five-axis head oil leak',
  ],
  alternates: {
    canonical: 'https://5axisheadrepair.com/knowledge/cytec-m21/case-spindle-oil-leak-rotary-union',
  },
  openGraph: {
    title: 'Case Study: M21 Spindle Face Oil Leak — Same-Day Repair | Cytec Specialist',
    description: 'Hydraulic oil at spindle face drain hole. Fluid ID → leak path → rotary union seal failure confirmed. Same-day resolution with spare parts on site.',
    url: 'https://5axisheadrepair.com/knowledge/cytec-m21/case-spindle-oil-leak-rotary-union',
  },
};

export default function CaseSpindleOilLeakRotaryUnionPage() {
  const relatedArticles = getRelatedM21Articles('case-spindle-oil-leak-rotary-union', 4).map(article => ({
    title: article.title,
    href: `/knowledge/cytec-m21/${article.slug}`,
  }));

  return (
    <SpokePageTemplate
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'M21 Knowledge Center', href: '/knowledge/cytec-m21' },
        { label: 'Case: Spindle Face Oil Leak' },
      ]}
      title="Case Study: Spindle Face Oil Leak — Same-Day Root Cause & Repair"
      subtitle="Hydraulic oil at the spindle face drain hole on a gantry five-axis machine. How we confirmed the fluid, eliminated five possible leak paths, and replaced the rotary union — all in a single visit."
      sections={[
        {
          heading: 'Situation',
          content: (
            <>
              <p>
                A customer operating a gantry machining center equipped with a Cytec two-axis head (spindle + A-axis + C-axis) reported visible fluid leaking from the spindle face. The machine is used for five-axis simultaneous contouring operations.
              </p>
              <p>
                Left unresolved, spindle face leakage risks contaminating the workpiece and machining zone, forcing an unplanned shutdown, and destabilizing five-axis accuracy — all of which directly affect delivery schedules.
              </p>
              <p>
                The spindle face area can simultaneously carry three different fluid types: motor cooling water, hydraulic oil, and cutting coolant. Each requires a completely different repair path. Misidentifying the fluid at this stage leads to incorrect diagnosis and repeated disassembly.
              </p>
            </>
          ),
        },
        {
          heading: 'Task',
          content: (
            <>
              <p>
                The diagnostic objective was to complete four things in a single on-site visit:
              </p>
              <ol className="list-decimal list-inside space-y-2 mt-4 text-secondary-700">
                <li>Confirm the fluid type to establish the correct diagnostic direction</li>
                <li>Narrow the leak path from five candidate locations down to one confirmed source</li>
                <li>Identify the root cause component — not just the symptom</li>
                <li>Complete the repair and validate with functional testing before leaving the site</li>
              </ol>
              <p className="mt-4">
                This was achievable because the engineer arrived with a spare rotary union on hand — eliminating the most common cause of extended downtime: waiting for parts.
              </p>
            </>
          ),
        },
        {
          heading: 'Action — Step 1: Identify the Fluid Type',
          content: (
            <>
              <p>
                Before tracing the leak path, the fluid itself was identified. Visual inspection and tactile assessment (color, viscosity, feel) provided the initial indication. The leaked fluid was amber-colored with a distinctly oily feel — consistent with hydraulic oil, not coolant or water.
              </p>
              <p>
                This was cross-confirmed by checking the hydraulic power unit oil level: it was measurably lower than the last recorded level, confirming active hydraulic oil loss through an external path.
              </p>
              <p>
                With fluid type confirmed as hydraulic oil, motor cooling water and cutting coolant were formally ruled out — narrowing the search to hydraulic circuit components only.
              </p>
            </>
          ),
        },
        {
          heading: 'Action — Step 2: Locate the Leak Path',
          type: 'checklist',
          content: [
            'Spindle face drain hole — oil seeping from drain port confirmed ✓',
            'Air curtain ring — no wetness, ruled out',
            'Tool release air blow hole — no oil residue, ruled out',
            'Spindle taper bore — clean, ruled out',
            'Drawbar center — no traces, ruled out',
          ],
        },
        {
          heading: 'Action — Step 3: Confirm the Root Cause',
          content: (
            <>
              <p>
                With the drain hole confirmed as the leak exit point, the spindle rotary union was disassembled for internal inspection. The rotary union body showed the same oil traces at its own internal drain port — providing a complete, traceable oil path from the internal seal failure to the external drain hole at the spindle face.
              </p>
              <p>
                Root cause confirmed: <strong>failed internal seals inside the spindle rotary union</strong>, allowing hydraulic oil to escape along the designed drain passage and emerge at the spindle face drain hole.
              </p>
              <p>
                This is the standard failure pattern for rotary union seal degradation under sustained hydraulic pressure cycling. For a detailed breakdown of how rotary union leakage presents and progresses, see{' '}
                <Link href="/spindle-rotary-union-leakage" className="text-primary-600 underline hover:text-primary-800 font-medium">
                  spindle rotary union leakage: symptoms and repair options
                </Link>.
              </p>
            </>
          ),
        },
        {
          heading: 'Action — Step 4: Replace the Rotary Union',
          content: (
            <>
              <p>
                The failed rotary union was removed and replaced with the spare unit brought on site. After installation, the hydraulic circuit was restored and the system was brought back to operating pressure.
              </p>
              <p>
                Because the spare part was on hand at arrival, there was no waiting period between root cause confirmation and repair completion — the entire sequence from diagnosis to reassembly was completed in the same visit.
              </p>
            </>
          ),
        },
        {
          heading: 'Result',
          content: (
            <>
              <p>
                After replacement, the spindle was put through a functional validation cycle: tool clamp and unclamp was executed more than 20 consecutive times under normal operating conditions. At each cycle, the spindle face was checked for fluid at the drain hole.
              </p>
              <p>
                Outcome: no oil at the spindle face drain hole across all 20+ cycles. Hydraulic power unit oil level remained stable. The machine was returned to five-axis operation the same day.
              </p>
              <p>
                The diagnostic chain — fluid type → leak path → seal failure — eliminated guesswork and prevented blind disassembly of unrelated components.
              </p>
            </>
          ),
        },
        {
          heading: 'Preventing Recurrence',
          content: (
            <>
              <p>
                Rotary union seal failure is a gradual, progressive process. The seals do not fail suddenly — they degrade under sustained pressure cycling, and early signs are detectable before the leak becomes visible.
              </p>
              <p>
                Two resources to help you catch this before it escalates:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-secondary-700">
                <li>
                  <Link href="/knowledge/cytec-m21/rotary-union-daily-checks" className="text-primary-600 underline hover:text-primary-800 font-medium">
                    M21 Rotary Union: Simple Daily Checks That Prevent Costly Failures
                  </Link>{' '}
                  — a 2-minute inspection routine that catches seal degradation before it becomes a drain hole leak.
                </li>
                <li>
                  <Link href="/knowledge/cytec-m21/rotary-union-costly-mistakes" className="text-primary-600 underline hover:text-primary-800 font-medium">
                    5 Costly Mistakes We See Repeatedly on Rotary Union Repairs
                  </Link>{' '}
                  — field data from hundreds of repairs: the preventable errors that accelerate seal wear and escalate costs.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: 'If You Are Seeing This Now',
          type: 'ordered',
          content: [
            'Note the fluid color and whether it feels oily or watery',
            'Check your hydraulic power unit oil level and record whether it has been dropping',
            'Photograph the spindle face clearly showing where the fluid is appearing',
            'Note whether the leak volume increases during spindle rotation or head indexing',
            'Send the above to us — we can often assess remotely before scheduling a visit',
          ],
        },
      ]}
      faqItems={[
        {
          question: 'How do I confirm it is hydraulic oil and not coolant or water?',
          answer: 'Three checks: (1) Fluid appearance — hydraulic oil is typically amber and viscous, coolant is thinner with color additives. (2) Feel — hydraulic oil leaves a persistent oily film, water-based fluids rinse off more easily. (3) Hydraulic power unit level — if the level has dropped over days, the loss is going somewhere. All three pointing the same direction gives high confidence in hydraulic oil identification.',
        },
        {
          question: 'Does rotary union seal failure always require replacing the full unit?',
          answer: 'In most cases, yes. The rotary union is a precision-sealed assembly operating under continuous pressure cycling. Once the internal seal surfaces are degraded, resealing individual components typically results in repeat failure within weeks. Full unit replacement provides reliable, long-term results and eliminates the risk of a second unplanned shutdown.',
        },
        {
          question: 'The leak is very small right now — is it safe to keep running?',
          answer: 'A small leak means the seal degradation has already started. It will not self-correct and will progress. The specific risk: as hydraulic oil continues to escape through the drain passage, it can eventually reach the spindle bearing area, contaminating bearing lubrication and escalating a seal replacement into a full spindle rebuild. Early action keeps the repair scope — and the cost — contained.',
        },
        {
          question: 'Why does the leak stop when the machine is idle?',
          answer: 'Hydraulic oil leaks through degraded seals are pressure-driven. When the spindle is idle, hydraulic system pressure drops or cycles off, reducing the force pushing oil through the failed seal. When the spindle is active — especially during tool clamp and unclamp operations — system pressure rises and drives oil through the seal gap more aggressively. Intermittent leaks that worsen during operation are a strong indicator of seal, not fitting or line, failure.',
        },
        {
          question: 'How long does rotary union replacement take on site?',
          answer: 'With a spare unit available on arrival, a single visit is sufficient: disassembly, replacement, reassembly, leak testing, and functional validation (20+ clamp/unclamp cycles) typically completes within the same day. The primary variable is parts availability — if the spare is not on hand, diagnosis can still be completed in the first visit, but repair requires a second visit after parts procurement.',
        },
      ]}
      issueType="Spindle Face Oil Leak"
      formTitle="Report a Spindle Face Leak"
      relatedArticles={relatedArticles}
    />
  );
}
