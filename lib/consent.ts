/**
 * GDPR Cookie Consent Utilities
 * Manages user consent for analytics and tracking
 */

export interface ConsentPreferences {
  v: number; // version
  necessary: boolean; // always true
  analytics: boolean;
  updatedAt: string;
}

const COOKIE_NAME = 'cookie_consent';
const COOKIE_MAX_AGE = 180 * 24 * 60 * 60; // 180 days in seconds

/**
 * Get current consent preferences from cookie
 */
export function getConsent(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${COOKIE_NAME}=`));
    
    if (!cookie) return null;
    
    const value = cookie.split('=')[1];
    const decoded = decodeURIComponent(value);
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

/**
 * Set consent preferences (both cookie and localStorage)
 */
export function setConsent(preferences: Omit<ConsentPreferences, 'v' | 'updatedAt'>): void {
  if (typeof window === 'undefined') return;
  
  const consent: ConsentPreferences = {
    v: 1,
    necessary: true, // always true
    analytics: preferences.analytics,
    updatedAt: new Date().toISOString(),
  };
  
  // Set cookie
  const encoded = encodeURIComponent(JSON.stringify(consent));
  const secure = window.location.protocol === 'https:' ? 'Secure;' : '';
  document.cookie = `${COOKIE_NAME}=${encoded}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax; ${secure}`;
  
  // Mirror to localStorage for quick client reads
  try {
    localStorage.setItem(COOKIE_NAME, JSON.stringify(consent));
  } catch {
    // localStorage might be blocked
  }
}

/**
 * Check if user has consented to analytics
 */
export function hasAnalyticsConsent(): boolean {
  const consent = getConsent();
  return consent?.analytics === true;
}

/**
 * Reset consent (delete cookie and localStorage)
 */
export function resetConsent(): void {
  if (typeof window === 'undefined') return;
  
  // Delete cookie
  document.cookie = `${COOKIE_NAME}=; Path=/; Max-Age=0`;
  
  // Delete from localStorage
  try {
    localStorage.removeItem(COOKIE_NAME);
  } catch {
    // localStorage might be blocked
  }
}

/**
 * Check if consent has been set (any decision made)
 */
export function hasConsentDecision(): boolean {
  return getConsent() !== null;
}
