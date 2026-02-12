'use client';

import { useState, useEffect } from 'react';

export default function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    issue: '',
    email: '',
    serialNumber: '',
    location: '',
    company: '',
  });
  const [couponCode, setCouponCode] = useState('');
  const [showCoupon, setShowCoupon] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('discountPopupShown');
    
    if (!popupShown) {
      // Show popup after 15 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('discountPopupShown', 'true');
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate coupon code
    const code = `M21G30-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setCouponCode(code);

    // Send to Formspree
    try {
      await fetch('https://formspree.io/f/mvzbpkbz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          couponCode: code,
          couponAmount: '$150 USD',
          formType: 'Free Assessment + Discount Coupon',
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error('Failed to send email:', error);
    }

    // Store coupon in localStorage
    localStorage.setItem('discountCoupon', JSON.stringify({
      code,
      amount: 150,
      formData,
      createdAt: new Date().toISOString(),
    }));

    // Show coupon code first, then redirect
    setShowCoupon(true);
    
    // Redirect to thank you page after showing coupon (for conversion tracking)
    setTimeout(() => {
      window.location.href = '/contact-success';
    }, 8000); // Give user time to see and copy their coupon code
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {!showCoupon ? (
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-t-2xl relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="text-center">
                <div className="text-5xl mb-2">🎉</div>
                <h2 className="text-3xl font-bold mb-2">
                  Congratulations!
                </h2>
                <p className="text-xl text-orange-100">
                  You&apos;ve unlocked a special welcome offer!
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-6">
                <p className="text-center text-lg font-bold text-gray-900 mb-2">
                  🎁 FREE Online Assessment + $150 OFF Coupon!
                </p>
                <p className="text-center text-sm text-gray-600">
                  Fill in your details to claim your free professional assessment and discount code.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What&apos;s your repair need? *
                  </label>
                  <textarea
                    name="issue"
                    required
                    value={formData.issue}
                    onChange={handleChange}
                    rows={2}
                    placeholder="e.g., Spindle leakage on M21 head"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Head Serial Number *
                  </label>
                  <input
                    type="text"
                    name="serialNumber"
                    required
                    value={formData.serialNumber}
                    onChange={handleChange}
                    placeholder="e.g., M21-12345 or G30-67890"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., Germany, USA, Taiwan"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-xs text-gray-700 leading-relaxed">
                    💡 <strong>Our team will personally reach out to you via email</strong> to provide your complimentary online assessment and preventive maintenance recommendations for your head.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
                >
                  🎯 Claim My FREE Assessment + $150 Coupon!
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                ⏰ Limited time offer • Don&apos;t miss this opportunity!
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="p-8 text-center">
              <div className="text-6xl mb-4">🎊</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Awesome! Here&apos;s Your Discount Code
              </h2>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-400 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">Your Exclusive Code:</p>
                <div className="text-3xl font-mono font-bold text-orange-600 mb-3 tracking-wider">
                  {couponCode}
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  🎁 FREE Assessment + $150 OFF
                </p>
                <p className="text-sm text-gray-600">
                  Valid for your first repair service
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-2">📋 What Happens Next:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Our team will email you within 24-48 hours</li>
                  <li>✓ You&apos;ll receive a FREE professional assessment</li>
                  <li>✓ Get preventive maintenance recommendations</li>
                  <li>✓ Use this code for $150 OFF your service</li>
                  <li>✓ Valid for 90 days from today</li>
                </ul>
              </div>

              <div className="space-y-3">
                <a
                  href="#contact"
                  onClick={handleClose}
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Request Assessment Now →
                </a>
                <button
                  onClick={handleClose}
                  className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 rounded-lg transition-colors"
                >
                  I&apos;ll Use This Later
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                💾 Code saved to your browser - you can find it anytime!
              </p>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
