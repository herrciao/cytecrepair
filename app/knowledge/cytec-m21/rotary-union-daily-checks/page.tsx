import { Metadata } from 'next';
import SpokePageTemplate from '@/components/SpokePageTemplate';
import { getRelatedM21Articles } from '@/lib/knowledge-articles';

export const metadata: Metadata = {
  title: 'M21 Rotary Union: Daily Checks That Prevent Costly Failures',
  description: 'After servicing hundreds of M21 units, we\'ve learned which daily inspections catch rotary union problems early. Simple checks that prevent seal failure escalation.',
  keywords: [
    'M21 rotary union maintenance',
    'M21 spindle daily inspection',
    'rotary union seal prevention',
    'M21 coolant leakage check',
    'preventive maintenance M21',
  ],
  alternates: {
    canonical: 'https://5axisheadrepair.com/knowledge/cytec-m21/rotary-union-daily-checks',
  },
  openGraph: {
    title: 'M21 Rotary Union Daily Checks | Preventive Maintenance Guide',
    description: 'Simple daily inspections that prevent rotary union failures, based on field experience.',
    url: 'https://5axisheadrepair.com/knowledge/cytec-m21/rotary-union-daily-checks',
  },
};

export default function RotaryUnionDailyChecksPage() {
  const relatedArticles = getRelatedM21Articles('rotary-union-daily-checks', 3).map(article => ({
    title: article.title,
    href: `/knowledge/cytec-m21/${article.slug}`,
  }));

  return (
    <SpokePageTemplate
      articleSlug="rotary-union-daily-checks"
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'M21 Knowledge Center', href: '/knowledge/cytec-m21' },
        { label: 'Rotary Union Daily Checks' },
      ]}
      title="M21 Rotary Union: Simple Daily Checks That Prevent Costly Failures"
      subtitle="After 10+ years servicing M21 units worldwide, we've learned which 2-minute daily checks catch seal problems before they become emergency shutdowns."
      sections={[
        {
          heading: 'Why This Matters to Us (and to You)',
          content: `We see this pattern too often: a customer contacts us with "sudden" catastrophic spindle failure — bearings destroyed, motor windings contaminated. When we ask for the history, it always starts the same way: "We noticed some oil residue a few weeks ago, but the machine was still running fine."

The rotary union on your M21 isn't just a convenience component — it's a barrier keeping coolant and hydraulic oil from flooding your spindle housing. When that barrier fails, you don't get much warning time. From our repair bench experience, we've learned that the difference between a simple seal replacement and a complete spindle rebuild is often just a matter of catching the problem 48 hours earlier.

This isn't a maintenance manual. This is what we wish every M21 operator knew before they call us.`,
        },
        {
          heading: 'The 2-Minute Morning Check',
          content: `We recommend this every morning before first cut. It takes less time than checking your email, and it has saved our customers thousands in emergency repairs.`,
        },
        {
          heading: '1. Visual Check — Spindle Nose Face',
          type: 'text',
          content: `Look at the flat face surface of your spindle nose. There are small drain holes — these are intentional leakage ports.

**What you're looking for:**
- Any fresh oil film or coolant residue around these ports
- Wet spots that weren't there yesterday
- Discoloration in the drain holes

**What it means if you see it:**
If there's ANY fresh fluid here, your rotary union seals are already compromised. This isn't "maybe needs attention soon" — this is "stop the machine and call for assessment today." We've seen units where this warning was ignored for a week, and the repair cost went from $800 (seal replacement) to $8,000+ (bearing set, motor checks, full spindle rebuild).`,
        },
        {
          heading: '2. Coolant Quality Check',
          type: 'text',
          content: `This is the one that surprises people, but contaminated coolant is the second most common cause of seal failure we see.

**What you're checking:**
- Visual clarity of the coolant (cloudy = contaminated)
- Filter mesh condition
- Any visible debris, especially quartz sludge or abrasive particles

**Why this destroys seals:**
Ceramic rotary seals are designed for clean fluids. Abrasive particles act like sandpaper — gradual wear that accelerates suddenly once the seal surface is compromised. We've disassembled units where the seal showed fine scoring lines that eventually led to complete failure. The root cause? Coolant filter bypass or inadequate filtering.`,
        },
        {
          heading: '3. Listen During Spindle Rotation',
          type: 'text',
          content: `Abnormal sounds from the rotary union area often precede visible leakage.

**What you're listening for:**
- Hissing or air leakage sounds
- Grinding or scraping (indicates contamination already inside)
- Changes in normal operation noise

**Why sound matters:**
When the rotary union begins to fail, you often hear it before you see it. The seal contact changes, creating turbulence or cavitation in the fluid passages. If you're hearing something new, don't wait for visible leakage — that's the late stage.`,
        },
        {
          heading: '4. Check Your Coolant Pressure',
          type: 'text',
          content: `Excessive coolant pressure forces fluid past seals even when they're still functional.

**The mistake we see repeatedly:**
Shop sets coolant pressure too high "to ensure good flow" → seals are constantly fighting pressure they weren't designed for → premature failure.

**From our repair data:**
Coolant pressure above specification is a contributing factor in roughly 30% of the rotary union seal failures we service. The irony: operators increase pressure trying to improve performance, then end up with a flooded spindle that requires complete teardown.`,
        },
        {
          heading: 'What About the Leakage Ports — Should They Ever Be Sealed?',
          content: `No. Never.

We've seen units where someone sealed the leakage ports because "it was messy" or "to keep coolant from dripping." When the rotary union then failed, the fluid had nowhere to go except into the bearing housing and motor. What should have been an early warning became catastrophic damage.

The leakage ports exist as indicators. If they're discharging fluid, your rotary union needs attention. Sealing them doesn't fix the problem — it just removes your warning system.`,
        },
        {
          heading: 'Realistic Maintenance Intervals',
          content: `Based on our field service data and industry practice, here's what actually works:`,
        },
        {
          heading: 'Daily (Every Morning)',
          type: 'checklist',
          content: [
            'Visual check: spindle nose face for fresh fluid',
            'Visual check: coolant clarity and filter condition',
            'Auditory check: abnormal sounds during rotation',
          ],
        },
        {
          heading: 'Monthly',
          type: 'checklist',
          content: [
            'Clean leakage port area (without sealing)',
            'Verify coolant pressure is within specification',
            'Inspect coolant filter system for bypass or saturation',
          ],
        },
        {
          heading: 'Every 500 Operating Hours',
          type: 'checklist',
          content: [
            'Clamping force measurement (requires clamping force meter)',
            'Comprehensive rotary union seal assessment',
            'Coolant system full inspection',
          ],
        },
        {
          heading: 'What Data Helps Us Help You',
          content: `When customers contact us early — before complete seal failure — remote assessment is often possible. Here's what helps:`,
        },
        {
          heading: 'Photos We Need',
          type: 'ordered',
          content: [
            'Spindle nose face in dry condition (baseline)',
            'Spindle nose face showing any fresh fluid residue',
            'Coolant condition in reservoir (clarity, color)',
            'Filter element condition',
          ],
        },
        {
          heading: 'Information That Guides Diagnosis',
          type: 'ordered',
          content: [
            'When did you first notice fluid at the leakage ports (days/weeks ago)',
            'Current coolant pressure setting',
            'Type of coolant and mixing ratio',
            'Filter change frequency',
            'Any recent changes in machining (new materials, longer cycles)',
          ],
        },
        {
          heading: 'Why Early Contact Saves You Money',
          content: `The economics are straightforward:

**Caught early (fluid just appearing at drain ports):**
- Seal replacement: 3-5 business days
- Typical cost: seal kit + labor
- Machine downtime: ~1 week
- Collateral damage: minimal to none

**Caught late (fluid already entering bearing housing):**
- Full spindle rebuild: 2-3 weeks
- Typical cost: bearings, seals, motor validation, complete teardown
- Machine downtime: 3-4 weeks
- Collateral damage: often requires bearing set and motor checks

The difference in cost isn't 2x or 3x. It's often 10x. And the difference in downtime can make or break production schedules.

We're not trying to upsell services — we're trying to prevent the calls we get that start with "the spindle stopped mid-cut and now there's oil everywhere." Those are the calls where we already know the repair will be expensive before we even see the unit.`,
        },
      ]}
      faqItems={[
        {
          question: 'How do I know if what I\'m seeing is "normal" seepage vs. actual failure?',
          answer: 'Any fresh fluid at the spindle nose drain ports is not normal. The rotary union is designed to be sealed — those ports should stay dry during normal operation. If you\'re seeing fluid, the seals are already compromised. The question isn\'t whether to act, but how quickly.',
        },
        {
          question: 'Can I just wipe it off and keep running until scheduled maintenance?',
          answer: 'We understand the pressure to keep production running. But from our repair experience: once seals start leaking, the progression is unpredictable. We\'ve seen units that ran for another month with minor seepage, and we\'ve seen units that went from "slight dampness" to "oil everywhere" in 48 hours. The risk equation doesn\'t favor continuing operation.',
        },
        {
          question: 'Is it worth paying for assessment if the machine is still running fine?',
          answer: 'Consider the alternative: if you wait until the machine is NOT running fine, you\'re looking at emergency service rates, rush shipping, and extended downtime. Our assessment costs a fraction of emergency spindle rebuild, and it gives you the option to schedule repair during planned downtime rather than having downtime forced on you.',
        },
        {
          question: 'What if I don\'t have a clamping force meter for the 500-hour check?',
          answer: 'Clamping force meters aren\'t commonly available on shop floors. If you don\'t have one, focus on the daily visual/auditory checks and contact us if you notice any changes. We can often assess clamping system health from behavior descriptions, pressure readings, and cycle consistency.',
        },
        {
          question: 'My coolant supplier says their product is "low-residue" — do I still need to worry about contamination?',
          answer: 'Yes. Even premium coolant can carry machining debris — metal chips, grinding dust, quartz particles from certain materials. It\'s not usually the coolant itself that damages seals, it\'s what gets suspended in it. Filter maintenance is more important than coolant brand.',
        },
      ]}
      issueType="Rotary Union Preventive Maintenance"
      formTitle="Request Rotary Union Assessment"
      relatedArticles={relatedArticles}
    />
  );
}
