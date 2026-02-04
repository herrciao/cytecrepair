'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  withSchema?: boolean;
}

export default function FAQ({ items, withSchema = true }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema markup for SEO
  const faqSchema = withSchema ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': items.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer,
      },
    })),
  } : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="card">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-secondary-50 transition-colors"
            >
              <span className="font-semibold text-secondary-900 pr-4">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-secondary-600 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-secondary-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
