'use client';

import { useState, useEffect } from 'react';
import { useConsent } from './ConsentProvider';

export default function CookiePreferences() {
  const { consent, preferencesOpen, closePreferences, setConsent, openPreferences } = useConsent();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    setAnalyticsEnabled(consent?.analytics ?? false);
  }, [consent]);

  useEffect(() => {
    // Listen for global event to open preferences
    const handleOpen = () => openPreferences();
    window.addEventListener('openCookiePreferences', handleOpen);
    return () => window.removeEventListener('openCookiePreferences', handleOpen);
  }, [openPreferences]);

  if (!preferencesOpen) return null;

  const handleSave = () => {
    setConsent(analyticsEnabled);
    closePreferences();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-secondary-900">Cookie Preferences</h2>
            <button
              onClick={closePreferences}
              className="text-secondary-500 hover:text-secondary-700 text-2xl"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Description */}
          <p className="text-secondary-700 mb-6">
            We use cookies to enhance your browsing experience and analyze site traffic. 
            You can choose which types of cookies to accept below.
          </p>

          {/* Cookie Categories */}
          <div className="space-y-4">
            {/* Necessary Cookies */}
            <div className="card p-4 bg-secondary-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Necessary Cookies</h3>
                  <p className="text-sm text-secondary-600">
                    Essential for the website to function properly. These cannot be disabled 
                    as they are required for security, navigation, and basic functionality.
                  </p>
                </div>
                <div className="ml-4">
                  <div className="px-3 py-1 bg-secondary-300 text-secondary-700 text-sm font-medium rounded">
                    Always Active
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="card p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Analytics Cookies</h3>
                  <p className="text-sm text-secondary-600 mb-3">
                    Help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously. This allows us to improve our services.
                  </p>
                  <p className="text-xs text-secondary-500">
                    Examples: Google Analytics (if enabled)
                  </p>
                </div>
                <div className="ml-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={() => {
                setAnalyticsEnabled(false);
                setConsent(false);
                closePreferences();
              }}
              className="btn-secondary flex-1"
            >
              Reject All
            </button>
            <button
              onClick={handleSave}
              className="btn-primary flex-1"
            >
              Save Preferences
            </button>
            <button
              onClick={() => {
                setAnalyticsEnabled(true);
                setConsent(true);
                closePreferences();
              }}
              className="btn-primary flex-1"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
