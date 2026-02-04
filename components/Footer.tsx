import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-secondary-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Cytec M21 & G30 Repair Services
            </h3>
            <p className="text-sm leading-relaxed">
              Independent aftermarket repair and rebuild services for Cytec M21 and G30 two-axis milling heads. 
              Over 10 years of specialized experience serving M21 and G30 users worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/spindle-rotary-union-leakage" className="hover:text-white transition-colors">
                  Spindle Rotary Union Leakage
                </Link>
              </li>
              <li>
                <Link href="/spindle-repair-rebuild" className="hover:text-white transition-colors">
                  Spindle Repair & Rebuild
                </Link>
              </li>
              <li>
                <Link href="/hydraulic-aggregate-pressure-issue" className="hover:text-white transition-colors">
                  Hydraulic Aggregate Issues
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Get Started
            </h3>
            <p className="text-sm mb-4">
              Submit your issue for online assessment. Photos and alarm descriptions help us provide faster diagnosis.
            </p>
            <Link href="/#contact" className="btn-primary text-sm">
              Request Assessment
            </Link>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-secondary-800 mt-8 pt-8">
          <div className="space-y-4 text-xs text-secondary-400">
            <p className="font-semibold text-secondary-300">
              IMPORTANT LEGAL DISCLAIMER
            </p>
            <p>
              We are an <strong>independent</strong>, <strong>non-OEM</strong>, <strong>aftermarket</strong> service provider 
              specializing in Cytec M21 and G30 two-axis milling heads. 
              We are NOT authorized, certified, or affiliated with any original equipment manufacturer (OEM). 
              With over 10 years of experience, we provide on-site and return-to-base repair services for M21 and G30 systems worldwide.
            </p>
            <p>
              All brand names, trademarks, and product names mentioned on this website are the property of their respective owners. 
              Use of these names is for identification purposes only and does not imply endorsement or affiliation.
            </p>
            <p>
              © {currentYear} Cytec Repair Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
