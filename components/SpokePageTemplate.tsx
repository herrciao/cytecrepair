import Image from 'next/image';
import AssessmentForm from './AssessmentForm';
import FAQ from './FAQ';
import Breadcrumb from './Breadcrumb';
import Link from 'next/link';

interface SpokeSection {
  heading: string;
  content: string | string[] | React.ReactNode;
  type?: 'text' | 'checklist' | 'ordered';
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SpokePageTemplateProps {
  // Breadcrumb
  breadcrumbItems: Array<{ label: string; href?: string }>;
  
  // Hero section
  title: string;
  subtitle: string;
  heroImage?: {
    src: string;
    alt: string;
  };
  
  // Main content sections
  sections: SpokeSection[];
  
  // FAQ
  faqItems: FAQItem[];
  
  // Assessment form
  issueType: string;
  formTitle: string;
  
  // Related articles (optional)
  relatedArticles?: Array<{
    title: string;
    href: string;
  }>;
  
  // Back to hub link
  hubHref?: string;
  hubLabel?: string;
}

export default function SpokePageTemplate({
  breadcrumbItems,
  title,
  subtitle,
  heroImage,
  sections,
  faqItems,
  issueType,
  formTitle,
  relatedArticles,
  hubHref = '/knowledge/cytec-m21',
  hubLabel = 'M21 Knowledge Center',
}: SpokePageTemplateProps) {
  const renderContent = (content: string | string[] | React.ReactNode, type?: string) => {
    if (typeof content !== 'string' && !Array.isArray(content)) {
      return <div className="text-secondary-700 leading-relaxed space-y-4">{content}</div>;
    }

    if (typeof content === 'string') {
      return <p className="text-secondary-700 leading-relaxed">{content}</p>;
    }

    if (type === 'checklist') {
      return (
        <ul className="space-y-3">
          {content.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded border-2 border-primary-600 mt-0.5" />
              <span className="text-secondary-700">{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (type === 'ordered') {
      return (
        <ol className="space-y-3 list-decimal list-inside">
          {content.map((item, idx) => (
            <li key={idx} className="text-secondary-700 leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      );
    }

    // Default: unordered list
    return (
      <ul className="space-y-2 list-disc list-inside">
        {content.map((item, idx) => (
          <li key={idx} className="text-secondary-700 leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />
            
            {/* Back to Hub link */}
            <Link 
              href={hubHref}
              className="inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to {hubLabel}
            </Link>
            
            {/* Title */}
            <h1 className="heading-xl mb-6">{title}</h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl">{subtitle}</p>
            
            {/* Hero image if provided */}
            {heroImage && (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl mt-8">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="heading-lg text-secondary-900">{section.heading}</h2>
                
                {/* Section image */}
                {section.image && (
                  <div className="relative w-full rounded-lg overflow-hidden my-6">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={section.image.width || 800}
                      height={section.image.height || 600}
                      className="w-full h-auto"
                      sizes="(max-width: 1024px) 100vw, 800px"
                    />
                  </div>
                )}
                
                {/* Section content */}
                <div className="space-y-4">
                  {renderContent(section.content, section.type)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqItems.length > 0 && (
        <section className="section-padding bg-secondary-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg text-center mb-10">Frequently Asked Questions</h2>
              <FAQ items={faqItems} />
            </div>
          </div>
        </section>
      )}

      {/* Assessment Form Section */}
      <section id="assessment" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-lg text-center mb-4">{formTitle}</h2>
            <p className="text-center text-secondary-600 mb-8">
              24-hour engineer review. Photos and alarm codes help us diagnose faster.
            </p>
            <div className="bg-white rounded-lg shadow-lg border border-secondary-200 p-6 md:p-8">
              <AssessmentForm issueType={issueType} formTitle={formTitle} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="section-padding bg-secondary-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg mb-8">Related Issues</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((article, index) => (
                  <Link
                    key={index}
                    href={article.href}
                    className="card hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-semibold text-secondary-900 mb-2">
                      {article.title}
                    </h3>
                    <span className="text-primary-600 text-sm font-medium flex items-center gap-1">
                      Read More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Legal Disclaimer */}
      <section className="py-8 bg-secondary-100 border-t border-secondary-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-xs text-secondary-600">
            <p className="font-semibold mb-2">INDEPENDENT AFTERMARKET SERVICE</p>
            <p>
              We are an independent, non-OEM aftermarket service provider specializing in 
              Cytec M21 and G30 two-axis milling heads. We are NOT authorized, certified, 
              or affiliated with any original equipment manufacturer (OEM). All brand names 
              and trademarks mentioned are the property of their respective owners and are 
              used for identification purposes only.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
