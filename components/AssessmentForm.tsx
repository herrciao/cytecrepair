'use client';

import { useState } from 'react';

interface AssessmentFormProps {
  issueType?: string;
  formTitle?: string;
}

export default function AssessmentForm({ 
  issueType = 'General', 
  formTitle = 'Request Online Assessment' 
}: AssessmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    machineModel: '',
    issueCategory: issueType,
    issueDescription: '',
    hasPhotos: false,
    hasVideos: false,
    hasAlarms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mvzbpkbz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          machineModel: '',
          issueCategory: issueType,
          issueDescription: '',
          hasPhotos: false,
          hasVideos: false,
          hasAlarms: false,
        });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="card p-6 md:p-8">
      <h2 className="heading-md mb-6">{formTitle}</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800 font-medium">
            ✓ Assessment request submitted successfully! We&apos;ll review your information and contact you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800 font-medium">
            ✗ Submission failed. Please try again or contact us directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Machine Information */}
        <div>
          <label htmlFor="machineModel" className="block text-sm font-medium text-secondary-700 mb-2">
            Machine Model / Type
          </label>
          <input
            type="text"
            id="machineModel"
            name="machineModel"
            value={formData.machineModel}
            onChange={handleChange}
            placeholder="e.g., 5-axis machining center with Cytec two-axis head"
            className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="issueCategory" className="block text-sm font-medium text-secondary-700 mb-2">
            Issue Category *
          </label>
          <select
            id="issueCategory"
            name="issueCategory"
            required
            value={formData.issueCategory}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="General">General Inquiry</option>
            <option value="Spindle Rotary Union Leakage">Spindle Rotary Union Leakage</option>
            <option value="Spindle Repair & Rebuild">Spindle Repair & Rebuild</option>
            <option value="Hydraulic Aggregate">Hydraulic Aggregate - Pressure Issue</option>
          </select>
        </div>

        <div>
          <label htmlFor="issueDescription" className="block text-sm font-medium text-secondary-700 mb-2">
            Issue Description *
          </label>
          <textarea
            id="issueDescription"
            name="issueDescription"
            required
            rows={6}
            value={formData.issueDescription}
            onChange={handleChange}
            placeholder="Please describe the issue in detail. Include symptoms, when they started, any error codes/alarms, and whether you have photos or videos available."
            className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Available Documentation */}
        <div>
          <p className="block text-sm font-medium text-secondary-700 mb-3">
            What documentation can you provide?
          </p>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="hasPhotos"
                checked={formData.hasPhotos}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
              />
              <span className="ml-2 text-sm text-secondary-700">
                I can provide photos of the issue
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="hasVideos"
                checked={formData.hasVideos}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
              />
              <span className="ml-2 text-sm text-secondary-700">
                I can provide short videos
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="hasAlarms"
                checked={formData.hasAlarms}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
              />
              <span className="ml-2 text-sm text-secondary-700">
                I have alarm codes/error messages
              </span>
            </label>
          </div>
        </div>

        <div className="bg-primary-50 border border-primary-200 rounded-md p-4">
          <p className="text-sm text-primary-800">
            <strong>Note:</strong> After submission, we&apos;ll contact you with instructions for securely sharing photos, videos, or other documentation.
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Assessment Request'}
        </button>
      </form>
    </div>
  );
}
