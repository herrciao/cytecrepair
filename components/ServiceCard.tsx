import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  symptoms: string[];
}

export default function ServiceCard({ title, description, href, icon, symptoms }: ServiceCardProps) {
  return (
    <Link href={href} className="card hover:shadow-lg transition-shadow duration-300 group">
      <div className="p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
          {icon}
        </div>
        
        <h3 className="heading-sm mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-secondary-600 mb-4">
          {description}
        </p>
        
        <div className="mb-4">
          <p className="text-sm font-semibold text-secondary-700 mb-2">Common Symptoms:</p>
          <ul className="space-y-1">
            {symptoms.map((symptom, index) => (
              <li key={index} className="text-sm text-secondary-600 flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
          Learn More & Request Assessment
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
