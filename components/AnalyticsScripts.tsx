'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { hasAnalyticsConsent } from '@/lib/consent';

/**
 * Analytics Scripts Component
 * Only loads analytics after user consent
 * 
 * To enable Google Analytics:
 * 1. Set NEXT_PUBLIC_GA_ID in your environment variables
 * 2. Analytics will automatically load after consent
 */
export default function AnalyticsScripts() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // Check consent on mount and when consent changes
    setShouldLoad(hasAnalyticsConsent());
  }, []);

  // Don't render anything if no consent or no GA_ID configured
  if (!shouldLoad || !GA_ID) return null;

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
