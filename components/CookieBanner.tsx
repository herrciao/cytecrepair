'use client';

import { useConsent } from './ConsentProvider';
import Link from 'next/link';

export default function CookieBanner() {
  const { hasDecision, setConsent, openPreferences } = useConsent();

  // Don't show if user has already made a decision
  if (hasDecision) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary-900 text-white border-t border-secondary-700 shadow-lg">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm leading-relaxed">
              We use cookies to improve your experience. Essential cookies are always active. 
              Analytics cookies help us understand how you use our site.{' '}
              <Link href="/privacy" className="underline hover:text-primary-300">
                Learn more
              </Link>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setConsent(false)}
              className="px-4 py-2 text-sm font-medium border border-secondary-500 rounded hover:bg-secondary-800 transition-colors"
            >
              Reject non-essential
            </button>
            
            <button
              onClick={() => openPreferences()}
              className="px-4 py-2 text-sm font-medium border border-secondary-500 rounded hover:bg-secondary-800 transition-colors"
            >
              Manage preferences
            </button>
            
            <button
              onClick={() => setConsent(true)}
              className="px-4 py-2 text-sm font-medium bg-primary-600 rounded hover:bg-primary-700 transition-colors"
            >
              Accept analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
