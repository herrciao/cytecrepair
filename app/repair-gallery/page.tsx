import { Metadata } from 'next';
import ImageCarousel from '@/components/ImageCarousel';
import AssessmentForm from '@/components/AssessmentForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Repair Case Studies | 5 Axis Head Repair',
  description: 'Real-world repair examples of Cytec M21 and G30 two-axis milling head systems. Spindle rotary union leakage, spindle repair & rebuild, and hydraulic aggregate repairs.',
  keywords: 'repair examples, case studies, M21 repair, G30 repair, spindle repair gallery, rotary union repair, hydraulic aggregate repair',
  alternates: {
    canonical: 'https://5axisheadrepair.com/repair-gallery',
  },
  openGraph: {
    title: 'Repair Case Studies | 5 Axis Head Repair',
    description: 'Real-world repair examples of Cytec M21 and G30 two-axis milling head systems.',
    url: 'https://5axisheadrepair.com/repair-gallery',
  },
};

// 圖片資料結構（未來可從 API 或資料庫讀取）
const repairCategories = [
  {
    id: 'rotary-union',
    title: 'Spindle Rotary Union Leakage',
    description: 'Oil and coolant leakage repairs, seal replacement, and rotary union refurbishment cases.',
    images: [
      '/case-studies/rotary-union/IMG_0599.JPEG',
      '/case-studies/rotary-union/IMG_0600.JPEG',
      '/case-studies/rotary-union/IMG_0766.JPEG',
      '/case-studies/rotary-union/IMG_0768.JPEG',
      '/case-studies/rotary-union/IMG_0770.JPEG',
      '/case-studies/rotary-union/IMG_0774.JPEG',
      '/case-studies/rotary-union/IMG_0775.JPEG',
      '/case-studies/rotary-union/IMG_0776.JPEG',
      '/case-studies/rotary-union/IMG_0777.JPEG',
      '/case-studies/rotary-union/IMG_0778.JPEG',
      '/case-studies/rotary-union/IMG_0878.JPEG',
      '/case-studies/rotary-union/IMG_1434.JPEG',
    ],
    link: '/spindle-rotary-union-leakage',
  },
  {
    id: 'spindle-repair',
    title: 'Spindle Repair & Rebuild',
    description: 'Complete spindle overhaul, bearing replacement, encoder system repair, and precision testing.',
    images: [
      '/case-studies/spindle-repair/IMG_0002.JPEG',
      '/case-studies/spindle-repair/IMG_0016.JPEG',
      '/case-studies/spindle-repair/IMG_0037.JPEG',
      '/case-studies/spindle-repair/IMG_0100.JPEG',
      '/case-studies/spindle-repair/IMG_0101.JPEG',
      '/case-studies/spindle-repair/IMG_0102.JPEG',
      '/case-studies/spindle-repair/IMG_0206.JPEG',
      '/case-studies/spindle-repair/IMG_0610.JPEG',
      '/case-studies/spindle-repair/IMG_0611.JPEG',
      '/case-studies/spindle-repair/IMG_0714.JPEG',
      '/case-studies/spindle-repair/IMG_0717.JPEG',
      '/case-studies/spindle-repair/IMG_0740.JPEG',
      '/case-studies/spindle-repair/IMG_1191.JPEG',
      '/case-studies/spindle-repair/IMG_1352.JPEG',
      '/case-studies/spindle-repair/IMG_1638.JPEG',
    ],
    link: '/spindle-repair-rebuild',
  },
  {
    id: 'hydraulic-aggregate',
    title: 'Hydraulic Aggregate Pressure Issues',
    description: 'Pressure stability restoration, component replacement, and system validation.',
    images: [
      '/case-studies/hydraulic-aggregate/IMG_0068.JPEG',
      '/case-studies/hydraulic-aggregate/IMG_0069.JPEG',
      '/case-studies/hydraulic-aggregate/IMG_0071.JPEG',
      '/case-studies/hydraulic-aggregate/IMG_0075.JPEG',
      '/case-studies/hydraulic-aggregate/IMG_0145.JPEG',
      '/case-studies/hydraulic-aggregate/IMG_0146.JPEG',
      '/case-studies/hydraulic-aggregate/IMG_0204.JPEG',
      '/case-studies/hydraulic-aggregate/IMG_0209.JPEG',
      '/case-studies/hydraulic-aggregate/IMG_0211.JPEG',
      '/case-studies/hydraulic-aggregate/IMG_0721.JPEG',
      '/case-studies/hydraulic-aggregate/IMG_0736.JPEG',
      '/case-studies/hydraulic-aggregate/IMG_0955.JPEG',
    ],
    link: '/hydraulic-aggregate-pressure-issue',
  },
];

export default function RepairGalleryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Repair Case Studies
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Real-world examples of our independent aftermarket repair services for Cytec M21 and G30 two-axis milling head systems
            </p>
            <p className="text-sm text-blue-200 italic">
              * Customer information and serial numbers anonymized for confidentiality
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {repairCategories.map((category) => (
              <div 
                key={category.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* 左側：圖片輪播 */}
                  <div>
                    <ImageCarousel 
                      images={category.images} 
                      interval={3000}
                      category={category.title}
                    />
                  </div>

                  {/* 右側：說明文字 */}
                  <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* 統計資訊 */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">10+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">100+</div>
                        <div className="text-sm text-gray-600">Repairs Completed</div>
                      </div>
                    </div>

                    {/* CTA 按鈕 */}
                    <div className="flex space-x-4">
                      <Link 
                        href={category.link}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        Learn More
                      </Link>
                      <Link 
                        href="/#contact"
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        Request Assessment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Similar Repair Services?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Submit your issue for online assessment. Photos and videos help us provide accurate diagnosis.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Submit Your Issue
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Request Your Free Assessment
              </h2>
              <p className="text-xl text-gray-600">
                Tell us about your repair needs. Include photos, videos, and alarm descriptions 
                to help us provide faster, more accurate diagnosis.
              </p>
              <div className="mt-6 flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24-48h Response
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No Obligation
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Confidential
                </div>
              </div>
            </div>
            <AssessmentForm />
          </div>
        </div>
      </section>
    </main>
  );
}
