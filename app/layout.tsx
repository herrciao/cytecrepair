import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ConsentProvider } from '@/components/ConsentProvider';
import CookieBanner from '@/components/CookieBanner';
import CookiePreferences from '@/components/CookiePreferences';
import AnalyticsScripts from '@/components/AnalyticsScripts';

export const metadata: Metadata = {
  metadataBase: new URL('https://5axisheadrepair.com'),
  title: {
    default: 'M21 & G30 Repair Services | Independent Aftermarket Specialist',
    template: '%s | 5 Axis Head Repair',
  },
  description: 'Independent aftermarket repair and rebuild services for Cytec M21 and G30 two-axis milling heads. Over 10 years experience with on-site and return-to-base spindle repair worldwide.',
  keywords: [
    'Cytec M21 repair',
    'Cytec G30 repair',
    'M21 spindle repair',
    'G30 two-axis head',
    '5 axis head repair',
    'Cytec rotary union leakage',
    'M21 G30 maintenance',
    'independent aftermarket',
    'non-OEM repair services',
  ],
  authors: [{ name: '5 Axis Head Repair' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: '5 Axis Head Repair',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Conversion Tracking - Global Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17933655916"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17933655916');
            `,
          }}
        />
      </head>
      <body>
        <ConsentProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
          <CookiePreferences />
          <AnalyticsScripts />
        </ConsentProvider>
      </body>
    </html>
  );
}
