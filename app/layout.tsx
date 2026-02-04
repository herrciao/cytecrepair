import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://cytec-repair-services.com'),
  title: {
    default: 'Cytec M21 & G30 Repair Services | Independent Aftermarket Specialist',
    template: '%s | Cytec Repair Services',
  },
  description: 'Independent aftermarket repair and rebuild services for Cytec M21 and G30 two-axis milling heads. Over 10 years experience with on-site and return-to-base spindle repair worldwide.',
  keywords: [
    'Cytec M21 repair',
    'Cytec G30 repair',
    'M21 spindle repair',
    'G30 two-axis head',
    'Cytec rotary union leakage',
    'M21 G30 maintenance',
    'independent aftermarket',
    'non-OEM repair services',
  ],
  authors: [{ name: 'Cytec Repair Services' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Cytec Repair Services',
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
