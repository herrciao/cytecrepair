import { Metadata } from 'next';
import Link from 'next/link';
import SpokePageTemplate from '@/components/SpokePageTemplate';
import { getRelatedM21Articles } from '@/lib/knowledge-articles';

export const metadata: Metadata = {
  title: 'Cytec M21 Spindle Face Oil Leak: Identify the Source & Fix It Fast',
  description: 'Oil traces on Cytec M21 spindle face? Multiple fluids (hydraulic oil, coolant, cutting fluid) can look similar. Step-by-step diagnosis to pinpoint the leak source and root cause.',
  keywords: [
    'M21 spindle face oil leak',
    'Cytec M21 oil leakage',
    'M21 spindle leak diagnosis',
    'Cytec spindle rotary union seal',
    'M21 hydraulic oil leak spindle',
  ],
  alternates: {
    canonical: 'https://5axisheadrepair.com/knowledge/cytec-m21/spindle-face-oil-leak',
  },
  openGraph: {
    title: 'M21 Spindle Face Oil Leak | Cytec Repair Guide',
    description: 'Step-by-step diagnosis for oil leakage on Cytec M21 spindle face. Identify the fluid, locate the leak path, and confirm the root cause.',
    url: 'https://5axisheadrepair.com/knowledge/cytec-m21/spindle-face-oil-leak',
  },
};

export default function SpindleFaceOilLeakPage() {
  const relatedArticles = getRelatedM21Articles('spindle-face-oil-leak', 3).map(article => ({
    title: article.title,
    href: `/knowledge/cytec-m21/${article.slug}`,
  }));

  return (
    <SpokePageTemplate
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'M21 Knowledge Center', href: '/knowledge/cytec-m21' },
        { label: 'Spindle Face Oil Leak' },
      ]}
      title="Cytec M21 Spindle Face Oil Leak"
      subtitle="Oil traces on the spindle face — how to identify the fluid, locate the leak path, and confirm the root cause before disassembly."
      sections={[
        {
          heading: 'What This Issue Looks Like',
          content: 'A customer reported oil traces on the spindle face of a Cytec M21 two-axis head. Because the spindle face area may have multiple fluids present simultaneously — motor cooling water, hydraulic oil, and cutting coolant — misidentifying the fluid type often leads to incorrect diagnosis, repeated disassembly, and extended downtime.',
        },
        {
          heading: 'Step 1: Identify the Fluid Type',
          type: 'checklist',
          content: [
            'Observe fluid color and viscosity by touch — hydraulic oil is typically amber and oily, coolant is thinner and may have color additives, cutting fluid has a distinct smell',
            'Check hydraulic power unit oil level — if it is dropping, the leak is likely hydraulic oil',
            'Rule out motor cooling water and cutting coolant before assuming hydraulic oil',
          ],
        },
        {
          heading: 'Step 2: Locate the Leak Path',
          type: 'checklist',
          content: [
            'Spindle face drain hole — check for oil seeping from the drain port',
            'Air curtain ring — inspect the seal around the air curtain for wetness',
            'Tool release air blow hole — look for oil residue around the blow-off port',
            'Spindle taper bore — check inside the taper for oil film or pooling',
            'Drawbar center — inspect the center of the drawbar for oil traces',
          ],
        },
        {
          heading: 'Root Cause Confirmed',
          content: (
            <>
              <p>
                In this case, the fluid was confirmed as hydraulic oil leaking from the spindle face drain hole. Upon disassembly and inspection of the spindle rotary union, the same oil traces were found at the drain hole on the rotary union body itself.
              </p>
              <p>
                The root cause was identified as failed seals inside the spindle rotary union, allowing hydraulic oil to escape along the internal path and emerge at the spindle face. This is a common failure pattern — learn more about{' '}
                <Link href="/spindle-rotary-union-leakage" className="text-primary-600 underline hover:text-primary-800 font-medium">
                  rotary union leakage symptoms and repair options
                </Link>.
              </p>
            </>
          ),
        },
        {
          heading: 'Resolution & Outcome',
          content: (
            <>
              <p>
                After replacing the spindle rotary union, the oil leak was completely eliminated. The machine has been running normally with no recurrence.
              </p>
              <p>
                To prevent this type of failure from recurring, we recommend implementing{' '}
                <Link href="/knowledge/cytec-m21/rotary-union-daily-checks" className="text-primary-600 underline hover:text-primary-800 font-medium">
                  simple daily checks for your rotary union
                </Link>{' '}
                — a 2-minute routine that catches seal degradation early. Also review the{' '}
                <Link href="/knowledge/cytec-m21/rotary-union-costly-mistakes" className="text-primary-600 underline hover:text-primary-800 font-medium">
                  5 costly maintenance mistakes we see repeatedly
                </Link>{' '}
                to avoid common errors that accelerate seal wear.
              </p>
            </>
          ),
        },
        {
          heading: 'What We Need From You',
          type: 'ordered',
          content: [
            'Clear photos of the spindle face showing where the fluid is appearing',
            'Description of the fluid — color, viscosity, and smell',
            'Whether the hydraulic power unit oil level has been dropping',
            'Whether the leak volume increases during spindle operation or head indexing',
          ],
        },
      ]}
      faqItems={[
        {
          question: 'How can I tell if it\'s hydraulic oil or coolant?',
          answer: 'Hydraulic oil is typically amber-colored with an oily, viscous feel. Coolant is thinner, often has a color additive (green, blue), and may feel slippery rather than oily. The simplest confirming test: check if your hydraulic power unit oil level is dropping over days — if yes, it\'s almost certainly hydraulic oil.',
        },
        {
          question: 'Does a rotary union seal failure always require full unit replacement?',
          answer: 'Not always, but in most cases yes. The rotary union is a precision-sealed assembly, and once internal seals fail, the damage pattern typically affects multiple seal surfaces. Resealing alone often results in repeat failure within weeks. Full unit replacement provides reliable, long-term results.',
        },
        {
          question: 'The leak is very small — can I keep running?',
          answer: 'A small leak indicates seal degradation that is already in progress. It will not improve on its own and will gradually worsen. Continued operation risks contaminating the spindle bearings with hydraulic oil, which escalates a seal replacement into a much more expensive spindle rebuild. Early action saves cost.',
        },
        {
          question: 'Can you diagnose this remotely?',
          answer: 'Initial assessment — identifying fluid type and likely leak path — can often be done remotely with clear photos and the information listed above. However, confirming the exact internal failure (which seal, which passage) requires physical disassembly and inspection.',
        },
        {
          question: 'How long does rotary union replacement take?',
          answer: 'Typical turnaround for rotary union replacement is 3-5 business days, including disassembly, replacement, reassembly, leak testing, and functional validation. Exact timeline depends on unit availability and the specific M21 configuration.',
        },
      ]}
      issueType="Spindle Face Oil Leak"
      formTitle="Submit Oil Leak for Assessment"
      relatedArticles={relatedArticles}
    />
  );
}
