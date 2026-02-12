'use client';

import { useState } from 'react';

export default function SimpleContactForm() {
  const [formData, setFormData] = useState({
    machineModel: '',
    issueDescription: '',
    country: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mvzbpkbz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `[URGENT] New Issue: ${formData.machineModel} - ${formData.country}`,
          source: 'homepage_contact_form',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          window.location.href = '/contact-success';
        }, 500);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800 font-medium text-sm">
            Submission failed. Please try again or email us directly.
          </p>
        </div>
      )}

      <div>
        <label htmlFor="machineModel" className="block text-sm font-medium text-secondary-700 mb-1">
          Machine Model *
        </label>
        <input
          type="text"
          id="machineModel"
          name="machineModel"
          required
          value={formData.machineModel}
          onChange={handleChange}
          placeholder="e.g. M21, G30, or full machine type"
          className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
        />
      </div>

      <div>
        <label htmlFor="issueDescription" className="block text-sm font-medium text-secondary-700 mb-1">
          Describe Your Issue *
        </label>
        <textarea
          id="issueDescription"
          name="issueDescription"
          required
          rows={4}
          value={formData.issueDescription}
          onChange={handleChange}
          placeholder="What symptoms are you seeing? Alarms, leaks, vibration, pressure loss..."
          className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-secondary-700 mb-1">
            Country *
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            placeholder="e.g. Germany, USA, India"
            className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@company.com"
            className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
          Phone <span className="text-secondary-400">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 234 567 8900"
          className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-md text-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Your Issue Now'}
      </button>

      <p className="text-xs text-secondary-500 text-center">
        We respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  );
}
