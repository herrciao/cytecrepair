import { Metadata } from 'next';
import SpokePageTemplate from '@/components/SpokePageTemplate';
import { getRelatedM21Articles } from '@/lib/knowledge-articles';

export const metadata: Metadata = {
  title: 'Cytec M21 Tool Clamping Unstable: Symptoms, Diagnosis & Repair Options',
  description: 'Intermittent or weak tool clamping force on Cytec M21 two-axis heads. Causes, on-site checks, and what data engineers need for remote diagnosis.',
  keywords: [
    'M21 tool clamping unstable',
    'Cytec M21 clamping force',
    'M21 tool retention problem',
    'M21 drawbar issue',
    'Cytec M21 spindle clamping',
  ],
  alternates: {
    canonical: 'https://5axisheadrepair.com/knowledge/cytec-m21/tool-clamping-unstable',
  },
  openGraph: {
    title: 'M21 Tool Clamping Unstable | Cytec Repair Guide',
    description: 'Diagnosis and repair guidance for tool clamping issues on Cytec M21 two-axis heads.',
    url: 'https://5axisheadrepair.com/knowledge/cytec-m21/tool-clamping-unstable',
  },
};

export default function ToolClampingUnstablePage() {
  const relatedArticles = getRelatedM21Articles('tool-clamping-unstable', 3).map(article => ({
    title: article.title,
    href: `/knowledge/cytec-m21/${article.slug}`,
  }));

  return (
    <SpokePageTemplate
      articleSlug="tool-clamping-unstable"
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'M21 Knowledge Center', href: '/knowledge/cytec-m21' },
        { label: 'Tool Clamping Unstable' },
      ]}
      title="Cytec M21 Tool Clamping Unstable"
      subtitle="Intermittent or weak tool clamping force — causes, diagnosis, and data collection for assessment."
      sections={[
        {
          heading: 'What This Issue Means',
          content: `Tool clamping instability on the M21 two-axis head manifests as intermittent loss of clamping force, reduced retention torque, or complete clamping failure. This is often caused by issues in the drawbar assembly, hydraulic pressure system, or Belleville spring stack degradation. Unlike gradual wear patterns, clamping instability can escalate suddenly and poses significant collision risk.`,
        },
        {
          heading: 'Common Causes',
          type: 'ordered',
          content: [
            'Drawbar spring stack fatigue or permanent compression (most common after 3-5 years)',
            'Hydraulic pressure instability affecting clamping circuit',
            'Drawbar seal degradation allowing pressure loss',
            'Drawbar guide bushing wear causing misalignment',
            'Tool holder taper contamination or damage',
            'Spindle taper scoring from previous tool pull-out incidents',
          ],
        },
        {
          heading: 'On-Site Checks You Can Perform',
          type: 'checklist',
          content: [
            'Check hydraulic pressure gauge during clamp cycle (should reach spec pressure)',
            'Listen for abnormal drawbar release sound (hissing or delayed release)',
            'Visually inspect tool holder taper for scoring or contamination',
            'Test clamping with known-good tool holder',
            'Check if issue is intermittent or consistent',
            'Note if issue occurs on specific tool positions or all positions',
          ],
        },
        {
          heading: 'When Professional Inspection is Needed',
          content: `If on-site checks show inconsistent hydraulic pressure, abnormal drawbar behavior, or if the issue persists across multiple tool holders, internal inspection of the drawbar assembly is required. Do not continue operating with unreliable tool clamping — the risk of tool ejection and collision damage far exceeds the cost of assessment.`,
        },
        {
          heading: 'What We Need From You',
          type: 'ordered',
          content: [
            'Video of tool change cycle showing clamping and release',
            'Hydraulic pressure readings during clamp/unclamp if gauge available',
            'Photos of tool holder taper (clean condition)',
            'Description: when does instability occur (after X hours, specific tools, cold/hot)',
            'Any alarm codes related to clamping or hydraulic system',
          ],
        },
      ]}
      faqItems={[
        {
          question: 'Can I continue operating if clamping seems "mostly OK"?',
          answer: 'No. Intermittent clamping is unpredictable and poses collision risk. Even if the tool is currently holding, the next failure could occur mid-cut. Downtime for assessment is safer than the cost of a collision.',
        },
        {
          question: 'Is this a hydraulic issue or mechanical issue?',
          answer: 'It can be either, or both. Hydraulic pressure instability affects clamping force, but mechanical wear in the drawbar assembly (springs, seals, bushings) is equally common. Proper diagnosis requires isolating the hydraulic circuit from the drawbar mechanism.',
        },
        {
          question: 'How long does drawbar spring replacement take?',
          answer: 'Typical drawbar assembly service (spring stack replacement, seal replacement, bushing inspection) takes 2-4 business days including disassembly, parts replacement, reassembly, and clamping force validation testing.',
        },
        {
          question: 'Will replacing the tool holders fix this?',
          answer: 'Only if the tool holders themselves are damaged. If the issue persists across multiple known-good tool holders, the problem is in the M21 head itself, not the tooling.',
        },
        {
          question: 'Do you need the machine on-site to diagnose this?',
          answer: 'Initial assessment can be done remotely with video and pressure data. However, final diagnosis of drawbar spring stack condition and clamping force validation requires physical inspection and testing equipment.',
        },
      ]}
      issueType="Tool Clamping Unstable"
      formTitle="Submit Clamping Issue for Assessment"
      relatedArticles={relatedArticles}
    />
  );
}
