'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ConsentPreferences, getConsent, setConsent as saveConsent, hasConsentDecision } from '@/lib/consent';

interface ConsentContextType {
  consent: ConsentPreferences | null;
  hasDecision: boolean;
  setConsent: (analytics: boolean) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  preferencesOpen: boolean;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<ConsentPreferences | null>(null);
  const [hasDecision, setHasDecision] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    // Load consent on mount
    const current = getConsent();
    setConsentState(current);
    setHasDecision(hasConsentDecision());
  }, []);

  const setConsent = (analytics: boolean) => {
    saveConsent({ analytics });
    const updated = getConsent();
    setConsentState(updated);
    setHasDecision(true);
    
    // Reload page to initialize analytics if accepted
    if (analytics) {
      window.location.reload();
    }
  };

  const openPreferences = () => setPreferencesOpen(true);
  const closePreferences = () => setPreferencesOpen(false);

  return (
    <ConsentContext.Provider
      value={{
        consent,
        hasDecision,
        setConsent,
        openPreferences,
        closePreferences,
        preferencesOpen,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within ConsentProvider');
  }
  return context;
}
