import { Metadata } from 'next';
import SpokePageTemplate from '@/components/SpokePageTemplate';
import { getRelatedM21Articles } from '@/lib/knowledge-articles';

export const metadata: Metadata = {
  title: 'Cytec M21 Hydraulic Alarm Won\'t Reset: Quick Diagnosis Checklist',
  description: 'When M21 hydraulic alarms persist after reset attempts. Systematic troubleshooting steps to identify underlying hydraulic system issues.',
  keywords: [
    'M21 hydraulic alarm',
    'Cytec M21 alarm reset',
    'M21 alarm won\'t clear',
    'Cytec M21 hydraulic fault',
    'M21 persistent alarm',
  ],
  alternates: {
    canonical: 'https://5axisheadrepair.com/knowledge/cytec-m21/hydraulic-alarm-reset',
  },
  openGraph: {
    title: 'M21 Hydraulic Alarm Won\'t Reset | Cytec Repair Guide',
    description: 'Troubleshooting guide for persistent hydraulic alarms on Cytec M21 two-axis heads.',
    url: 'https://5axisheadrepair.com/knowledge/cytec-m21/hydraulic-alarm-reset',
  },
};

export default function HydraulicAlarmResetPage() {
  const relatedArticles = getRelatedM21Articles('hydraulic-alarm-reset', 3).map(article => ({
    title: article.title,
    href: `/knowledge/cytec-m21/${article.slug}`,
  }));

  return (
    <SpokePageTemplate
      articleSlug="hydraulic-alarm-reset"
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'M21 Knowledge Center', href: '/knowledge/cytec-m21' },
        { label: 'Hydraulic Alarm Won\'t Reset' },
      ]}
      title="Cytec M21 Hydraulic Alarm Won't Reset"
      subtitle="Persistent hydraulic alarms that return immediately after reset — systematic diagnosis to identify the root cause."
      sections={[
        {
          heading: 'Understanding Persistent Hydraulic Alarms',
          content: `When a hydraulic alarm on the M21 two-axis head cannot be cleared, or returns immediately after reset, it indicates an active fault condition in the hydraulic system. The control system is detecting a real problem — pressure out of range, sensor fault, or valve malfunction. Simply resetting the alarm without addressing the underlying cause will not resolve the issue and may mask a failure that is escalating.`,
        },
        {
          heading: 'Common Alarm Types and Likely Causes',
          type: 'ordered',
          content: [
            'Pressure Too Low: Hydraulic pump malfunction, aggregate internal leakage, or supply line blockage',
            'Pressure Too High: Pressure relief valve stuck closed, pressure sensor fault, or contamination in pressure control circuit',
            'Pressure Cycling: Check valve leakage, accumulator bladder failure, or seal degradation causing pressure instability',
            'Sensor Fault: Pressure transducer failure, wiring damage, or connector corrosion',
            'Valve Fault: Solenoid coil failure, valve spool stuck, or electrical connection issue',
          ],
        },
        {
          heading: 'Immediate Troubleshooting Steps',
          type: 'checklist',
          content: [
            'Record the exact alarm code and description from the control panel',
            'Note when the alarm occurred (during tool change, during machining, at startup)',
            'Check hydraulic oil level in reservoir',
            'Inspect all hydraulic hoses and fittings for visible leakage',
            'Check electrical connections to hydraulic aggregate and pressure sensors',
            'Attempt reset and observe how quickly alarm returns (immediate, after X seconds, after next operation)',
          ],
        },
        {
          heading: 'When Remote Diagnosis is Possible',
          content: `Many hydraulic alarm root causes can be identified remotely if you provide clear alarm code information, pressure gauge readings, and detailed description of when the alarm occurs. However, sensor faults and intermittent electrical issues may require on-site measurement with diagnostic equipment.`,
        },
        {
          heading: 'What We Need From You',
          type: 'ordered',
          content: [
            'Exact alarm code and message from control display',
            'Photos of control screen showing alarm',
            'Video showing alarm reset attempt and how quickly it returns',
            'Hydraulic pressure gauge readings if available',
            'Description of machine behavior immediately before alarm (was it operating normally, making noise, etc.)',
            'Any recent maintenance or changes to hydraulic system',
          ],
        },
        {
          heading: 'Why You Should Not Ignore Persistent Alarms',
          content: `Persistent hydraulic alarms indicate a real fault that affects system reliability. Operating with bypassed alarms or frequent manual resets risks:

• Unexpected loss of clamping force during machining
• Hydraulic component damage from operating outside design parameters  
• Escalation from component-level fault to system-wide failure
• Safety hazards from unpredictable head behavior

The cost of proper diagnosis is far less than the cost of collision damage or extended downtime from catastrophic failure.`,
        },
      ]}
      faqItems={[
        {
          question: 'Can I keep resetting the alarm to finish my current job?',
          answer: 'This is not recommended. If the alarm is persistent, the underlying fault is real and active. Continuing to operate may cause the fault to escalate. At minimum, reduce cutting parameters and avoid heavy tool loading until the issue is properly diagnosed.',
        },
        {
          question: 'Is the pressure sensor just faulty, or is there a real hydraulic problem?',
          answer: 'Both are possible. Sensor faults typically cause steady alarm states (constantly too high or too low). Intermittent or cycling alarms usually indicate real hydraulic system instability. Proper diagnosis requires comparing sensor readings against direct pressure measurement.',
        },
        {
          question: 'How do I know if it\'s electrical or hydraulic?',
          answer: 'Electrical faults (sensor, wiring, connector) typically cause sudden alarm onset without any change in machine behavior. Hydraulic faults often have preceding symptoms — noise, temperature rise, sluggish response. Diagnostic process isolates electrical from hydraulic by measuring actual system pressure independent of the control system.',
        },
        {
          question: 'Will replacing the hydraulic oil fix this?',
          answer: 'Only if the alarm is caused by contaminated oil affecting valves or sensors. Most persistent alarms are caused by component wear or failure, not oil condition. However, if oil has not been changed per maintenance schedule, contamination may be a contributing factor.',
        },
        {
          question: 'How long does hydraulic alarm diagnosis take remotely?',
          answer: 'Initial assessment based on alarm codes and your data can typically be completed within 24 hours. We can identify likely causes and recommend next steps (on-site measurement, component replacement, or return-to-base service) based on remote analysis.',
        },
      ]}
      issueType="Hydraulic Alarm Won't Reset"
      formTitle="Submit Alarm Information for Assessment"
      relatedArticles={relatedArticles}
    />
  );
}
