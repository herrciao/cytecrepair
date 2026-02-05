import { Metadata } from 'next';
import ImageCarousel from '@/components/ImageCarousel';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Repair Case Studies | 5 Axis Head Repair',
  description: 'Real-world repair examples of Cytec M21 and G30 two-axis milling head systems. Spindle rotary union leakage, spindle repair & rebuild, and hydraulic aggregate repairs.',
  keywords: 'repair examples, case studies, M21 repair, G30 repair, spindle repair gallery, rotary union repair, hydraulic aggregate repair',
};

// 圖片資料結構（未來可從 API 或資料庫讀取）
const repairCategories = [
  {
    id: 'rotary-union',
    title: 'Spindle Rotary Union Leakage',
    description: 'Oil and coolant leakage repairs, seal replacement, and rotary union refurbishment cases.',
    images: [
      // 未來在這裡添加圖片路徑
      // '/case-studies/rotary-union/image1.jpg',
      // '/case-studies/rotary-union/image2.jpg',
    ],
    link: '/spindle-rotary-union-leakage',
  },
  {
    id: 'spindle-repair',
    title: 'Spindle Repair & Rebuild',
    description: 'Complete spindle overhaul, bearing replacement, encoder system repair, and precision testing.',
    images: [
      // 未來在這裡添加圖片路徑
      // '/case-studies/spindle-repair/image1.jpg',
      // '/case-studies/spindle-repair/image2.jpg',
    ],
    link: '/spindle-repair-rebuild',
  },
  {
    id: 'hydraulic-aggregate',
    title: 'Hydraulic Aggregate Pressure Issues',
    description: 'Pressure stability restoration, component replacement, and system validation.',
    images: [
      // 未來在這裡添加圖片路徑
      // '/case-studies/hydraulic-aggregate/image1.jpg',
      // '/case-studies/hydraulic-aggregate/image2.jpg',
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

      {/* 如何添加圖片說明 */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📸 How to Add Images to This Gallery
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Step 1:</strong> Place your images in the following folders:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    public/case-studies/rotary-union/
                  </code>
                </li>
                <li>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    public/case-studies/spindle-repair/
                  </code>
                </li>
                <li>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    public/case-studies/hydraulic-aggregate/
                  </code>
                </li>
              </ul>
              <p>
                <strong>Step 2:</strong> Update the <code className="bg-gray-100 px-2 py-1 rounded text-sm">images</code> arrays in this file with your image paths.
              </p>
              <p className="text-sm text-gray-600 italic">
                Example: <code className="bg-gray-100 px-2 py-1 rounded text-sm">&apos;/case-studies/rotary-union/repair-01.jpg&apos;</code>
              </p>
              <p className="text-sm text-orange-600">
                ⚠️ <strong>Important:</strong> Ensure all images are anonymized (no customer names, serial numbers, or identifying information visible).
              </p>
            </div>
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
          <Link 
            href="/#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Submit Your Issue
          </Link>
        </div>
      </section>
    </main>
  );
}
