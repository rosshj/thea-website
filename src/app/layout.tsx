import type { Metadata } from 'next';
import './globals.css';
import MainLayout from '@/components/layout/MainLayout';
import { ThemeProvider } from '@/lib/ThemeContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://thea.app'),
  title: 'Thea - Professional Light Meter App for iOS',
  description: 'Achieve perfect exposure in any lighting condition with Thea, your professional light meter app for iOS.',
  keywords: 'light meter, photography, exposure, iOS app, camera settings, studio lighting',
  authors: [{ name: 'Thea Team' }],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = theme === 'dark' || (theme === 'system' && systemDark) || (!theme && systemDark);
                  document.documentElement.classList.add(isDark ? 'dark' : 'light');
                } catch (e) {}
              })();
            `,
          }}
        />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Favicon links - these will be dynamically updated by the ThemeSwitcher component */}
        <link
          rel="icon"
          href="/icon-light-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/icon-light-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/icon-light-48x48.png"
          type="image/png"
          sizes="48x48"
        />
        <link
          rel="icon"
          href="/icon-light-96x96.png"
          type="image/png"
          sizes="96x96"
        />
        <link
          rel="apple-touch-icon"
          href="/icon-light-96x96.png"
          sizes="96x96"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
} 