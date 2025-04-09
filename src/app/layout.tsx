import type { Metadata } from 'next';
import './globals.css';
import MainLayout from '@/components/layout/MainLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://thea.app'),
  title: 'Thea - Professional Light Meter App for iOS',
  description: 'Achieve perfect exposure in any lighting condition with Thea, your professional light meter app for iOS.',
  keywords: 'light meter, photography, exposure, iOS app, camera settings, studio lighting',
  authors: [{ name: 'Thea Team' }],
  themeColor: '#ffffff',
  appleWebApp: {
    statusBarStyle: 'default',
  },
  openGraph: {
    title: 'Thea - Professional Light Meter App for iOS',
    description: 'Achieve perfect exposure in any lighting condition with Thea, your professional light meter app for iOS.',
    url: 'https://thea.app',
    siteName: 'Thea',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thea Light Meter App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thea - Professional Light Meter App for iOS',
    description: 'Achieve perfect exposure in any lighting condition with Thea, your professional light meter app for iOS.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
} 