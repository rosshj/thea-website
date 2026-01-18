'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import AnimatedGradient from '@/components/ui/AnimatedGradient';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { useTheme } from '@/lib/ThemeContext';

function MainLayoutContent({ children }: { children: React.ReactNode }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopSidebarCollapsed, setIsDesktopSidebarCollapsed] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { resolvedTheme } = useTheme();
  
  // Check if we're in embed mode (for webview usage)
  const isEmbedded = searchParams?.get('embed') === 'true';

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const sidebarWidth = isDesktopSidebarCollapsed ? '60px' : '260px';

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Desktop Header - hidden in embed mode */}
      {!isEmbedded && (
      <header className="fixed top-0 left-0 right-0 h-16 z-50 backdrop-blur-[10px] bg-white/80 dark:bg-neutral-950/80 supports-[backdrop-filter]:bg-white/30 dark:supports-[backdrop-filter]:bg-neutral-950/30 hidden xl:block transition-colors duration-300">
        <div className="px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src={resolvedTheme === 'dark' ? '/images/thea-logo-dark.svg' : '/images/thea-logo.svg'}
                  alt="Thea Logo"
                  width={72}
                  height={72}
                />
              </Link>
              
              {/* Sidebar Toggle Button */}
              <button 
                className="text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white flex items-center justify-center rounded-full w-8 h-8 hover:bg-gray-100 dark:hover:bg-neutral-800"
                onClick={() => setIsDesktopSidebarCollapsed(!isDesktopSidebarCollapsed)}
                aria-label={isDesktopSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                style={{ position: 'absolute', left: '130px' }}
              >
                {isDesktopSidebarCollapsed ? (
                  <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
                    <title>Hide sidebar</title>
                    <g strokeLinecap="round" strokeWidth="1.5" fill="none" stroke="currentColor" strokeLinejoin="round">
                      <line x1="6.25" y1="2.75" x2="6.25" y2="15.25"></line>
                      <rect x="1.75" y="2.75" width="14.5" height="12.5" rx="2" ry="2" transform="translate(18 18) rotate(180)"></rect>
                    </g>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
                    <title>Show sidebar</title>
                    <g strokeLinecap="round" strokeWidth="1.5" fill="none" stroke="currentColor" strokeLinejoin="round">
                      <rect x="1.75" y="2.75" width="14.5" height="12.5" rx="2" ry="2"></rect>
                      <line x1="4.75" y1="5.75" x2="4.75" y2="12.25"></line>
                    </g>
                  </svg>
                )}
              </button>
            </div>
            <div className="flex items-center">
              <Link
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-white bg-gray-900 dark:bg-white dark:text-neutral-900 hover:bg-gray-900 min-h-[48px] opacity-50 cursor-default"
                onClick={(e) => e.preventDefault()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
                  <g className="nc-icon-wrapper" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.3091 6.48971C13.8886 6.26249 14.614 6.00143 15.6913 6.00143C17.3749 6.00143 19.1523 6.89003 20.3404 8.35613L21.0976 9.29055L20.0406 9.86449C17.5093 11.2391 17.8608 14.8633 20.4912 15.8476L21.4953 16.2234L21.0506 17.199C20.5752 18.2418 20.3284 18.7499 19.6885 19.7119C18.7074 21.192 17.3565 22.9787 15.3958 22.997C14.1793 23.0084 13.2116 22.1656 12.0053 22.172C10.7909 22.1784 9.80329 23 8.57946 22.9999L8.57073 22.9999C6.64549 22.9829 5.31146 21.3315 4.3393 19.8664C1.80437 16.0461 1.46451 11.568 3.19812 8.92508C4.43251 7.04322 6.3164 6.00413 8.20878 6.00413C9.15354 6.00413 9.91949 6.26847 10.5172 6.47873C11.1502 6.70144 11.5462 6.84 11.9823 6.84C12.4376 6.84 12.7407 6.71256 13.3091 6.48971Z" fill="currentColor"></path>
                    <path d="M15.3653 3.793C16.0815 2.87425 16.5703 1.63176 16.373 0.305766C15.203 0.386016 13.89 1.07576 13.0913 2.0455C12.3668 2.92525 11.7675 4.231 12 5.5C13.2765 5.53975 14.598 4.77775 15.3653 3.793Z" fill="currentColor" data-color="color-2"></path>
                  </g>
                </svg>
                Coming soon for iOS
              </Link>
            </div>
          </div>
        </div>
      </header>
      )}

      {/* Mobile header - hidden in embed mode */}
      {!isEmbedded && (
      <div className="xl:hidden fixed top-0 left-0 right-0 z-30 backdrop-blur-[10px] bg-white/80 dark:bg-neutral-950/80 supports-[backdrop-filter]:bg-white/30 dark:supports-[backdrop-filter]:bg-neutral-950/30 transition-colors duration-300">
        <div className="px-6 sm:px-8 lg:px-10 flex items-center justify-center h-16 relative">
          <button
            onClick={() => setIsMobileSidebarOpen(true)}
            className="text-gray-900 dark:text-white absolute left-4 flex items-center justify-center rounded-full w-12 h-12 bg-gray-50 dark:bg-neutral-800"
            aria-label="Open navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <g className="nc-icon-wrapper" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
                <path d="M4,2.75H14.25c1.105,0,2,.895,2,2V13.25c0,1.105-.895,2-2,2H4"></path>
                <rect x="1.75" y="2.75" width="4.5" height="12.5" rx="2" ry="2" data-color="color-2"></rect>
              </g>
            </svg>
          </button>
          <Link href="/" className="flex items-center">
            <Image
              src={resolvedTheme === 'dark' ? '/images/thea-logo-dark.svg' : '/images/thea-logo.svg'}
              alt="Thea Logo"
              width={72}
              height={72}
            />
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center w-12 h-12 text-white bg-gray-900 dark:bg-white dark:text-neutral-900 hover:bg-gray-900 rounded-full absolute right-4 opacity-50 cursor-default"
            onClick={(e) => e.preventDefault()}
            aria-label="Download App"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <g className="nc-icon-wrapper" fill="currentColor">
                <path d="M15.25,11c-.414,0-.75,.336-.75,.75v1.5c0,.689-.561,1.25-1.25,1.25H4.75c-.689,0-1.25-.561-1.25-1.25v-1.5c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.5c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75v-1.5c0-.414-.336-.75-.75-.75Z"></path>
                <path d="M8.47,10.78c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3.5-3.5c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-2.22,2.22V2.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v5.689l-2.22-2.22c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.5,3.5Z" data-color="color-2"></path>
              </g>
            </svg>
          </Link>
        </div>
      </div>
      )}

      {/* Desktop Sidebar - hidden in embed mode */}
      {!isEmbedded && (
      <div 
        className={`fixed inset-y-0 left-0 z-20 transition-all duration-300 ease-in-out transform ${isDesktopSidebarCollapsed ? '-translate-x-full' : 'translate-x-0'} hidden xl:flex xl:flex-col`} 
        style={{ top: '4rem', width: '260px' }}
      >
        <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-neutral-950 transition-colors duration-300">
          <div className="flex-1 flex flex-col pt-8 overflow-y-auto">
            <nav className="px-6 sm:px-8 lg:px-10 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname?.startsWith(item.href));
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-6 py-3 text-sm font-medium rounded-full min-h-[48px]
                      ${isActive 
                        ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-neutral-800' 
                        : 'text-gray-600 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-gray-900 dark:hover:text-white'}`}
                    title={item.name}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
          {/* Theme Switcher at bottom of sidebar */}
          <div className="px-6 sm:px-8 lg:px-10 pb-6">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      )}

      {/* Silk-style Mobile Sidebar - hidden in embed mode */}
      {!isEmbedded && (
      <>
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 xl:hidden transition-opacity duration-300 ${isMobileSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
           onClick={() => setIsMobileSidebarOpen(false)}>
      </div>
      <div 
        className={`fixed left-4 top-4 bottom-4 w-64 bg-white dark:bg-neutral-900 z-50 xl:hidden transform transition-transform duration-300 ease-in-out rounded-2xl ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-[calc(100%+16px)]'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-4">
            <Link href="/" className="flex items-center">
              <Image
                src={resolvedTheme === 'dark' ? '/images/thea-logo-dark.svg' : '/images/thea-logo.svg'}
                alt="Thea Logo"
                width={72}
                height={72}
              />
            </Link>
            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-100 dark:hover:bg-neutral-800"
              aria-label="Close navigation menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <g className="nc-icon-wrapper" fill="#212121">
                  <path d="M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"></path> 
                  <path d="M4 4L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col pt-6 overflow-y-auto">
            <nav className="px-3 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname?.startsWith(item.href));
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-6 py-3 text-base font-medium rounded-full min-h-[48px]
                      ${isActive 
                        ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-neutral-800' 
                        : 'text-gray-600 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-gray-900 dark:hover:text-white'}`}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="px-3 mt-6">
              <Link
                href="#"
                className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium rounded-full text-white bg-gray-900 dark:bg-white dark:text-neutral-900 hover:bg-gray-900 min-h-[48px] opacity-50 cursor-default"
                onClick={(e) => e.preventDefault()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
                  <g className="nc-icon-wrapper" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.3091 6.48971C13.8886 6.26249 14.614 6.00143 15.6913 6.00143C17.3749 6.00143 19.1523 6.89003 20.3404 8.35613L21.0976 9.29055L20.0406 9.86449C17.5093 11.2391 17.8608 14.8633 20.4912 15.8476L21.4953 16.2234L21.0506 17.199C20.5752 18.2418 20.3284 18.7499 19.6885 19.7119C18.7074 21.192 17.3565 22.9787 15.3958 22.997C14.1793 23.0084 13.2116 22.1656 12.0053 22.172C10.7909 22.1784 9.80329 23 8.57946 22.9999L8.57073 22.9999C6.64549 22.9829 5.31146 21.3315 4.3393 19.8664C1.80437 16.0461 1.46451 11.568 3.19812 8.92508C4.43251 7.04322 6.3164 6.00413 8.20878 6.00413C9.15354 6.00413 9.91949 6.26847 10.5172 6.47873C11.1502 6.70144 11.5462 6.84 11.9823 6.84C12.4376 6.84 12.7407 6.71256 13.3091 6.48971Z" fill="currentColor"></path>
                    <path d="M15.3653 3.793C16.0815 2.87425 16.5703 1.63176 16.373 0.305766C15.203 0.386016 13.89 1.07576 13.0913 2.0455C12.3668 2.92525 11.7675 4.231 12 5.5C13.2765 5.53975 14.598 4.77775 15.3653 3.793Z" fill="currentColor" data-color="color-2"></path>
                  </g>
                </svg>
                Coming soon
              </Link>
            </div>
            {/* Theme Switcher in mobile sidebar */}
            <div className="px-3 mt-auto pb-6 pt-6">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
      </>
      )}

      {/* Main content */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${isEmbedded ? '' : 'mt-16'} ${isEmbedded ? '' : (isDesktopSidebarCollapsed ? 'xl:ml-0' : 'xl:ml-[260px]')}`}>
        <main className="flex-1">
          {children}
        </main>

        {/* CTA Section - hidden on home, contact, privacy pages, and in embed mode */}
        {!isEmbedded && pathname !== '/' && pathname !== '/contact' && pathname !== '/privacy' && (
          <section className="mb-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
              <AnimatedGradient className="rounded-3xl py-10 px-6 sm:px-8 lg:px-10 text-center">
                <h2 className="text-4xl font-bold mb-8 text-white dark:text-gray-900">
                  Try Thea—free on iOS.
                </h2>
                <p className="text-xl text-gray-200 dark:text-gray-700 mb-10 max-w-2xl mx-auto">
                  A simple, beautiful light meter built for photographers of all levels. No ads, no cost—just a tool to help you shoot with confidence.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full text-white dark:text-white bg-gray-900 dark:bg-gray-900 hover:bg-gray-900 transition-all duration-200 min-h-[48px] opacity-50 cursor-default"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
                    <g className="nc-icon-wrapper" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M13.3091 6.48971C13.8886 6.26249 14.614 6.00143 15.6913 6.00143C17.3749 6.00143 19.1523 6.89003 20.3404 8.35613L21.0976 9.29055L20.0406 9.86449C17.5093 11.2391 17.8608 14.8633 20.4912 15.8476L21.4953 16.2234L21.0506 17.199C20.5752 18.2418 20.3284 18.7499 19.6885 19.7119C18.7074 21.192 17.3565 22.9787 15.3958 22.997C14.1793 23.0084 13.2116 22.1656 12.0053 22.172C10.7909 22.1784 9.80329 23 8.57946 22.9999L8.57073 22.9999C6.64549 22.9829 5.31146 21.3315 4.3393 19.8664C1.80437 16.0461 1.46451 11.568 3.19812 8.92508C4.43251 7.04322 6.3164 6.00413 8.20878 6.00413C9.15354 6.00413 9.91949 6.26847 10.5172 6.47873C11.1502 6.70144 11.5462 6.84 11.9823 6.84C12.4376 6.84 12.7407 6.71256 13.3091 6.48971Z" fill="currentColor"></path>
                      <path d="M15.3653 3.793C16.0815 2.87425 16.5703 1.63176 16.373 0.305766C15.203 0.386016 13.89 1.07576 13.0913 2.0455C12.3668 2.92525 11.7675 4.231 12 5.5C13.2765 5.53975 14.598 4.77775 15.3653 3.793Z" fill="currentColor" data-color="color-2"></path>
                    </g>
                  </svg>
                  Coming soon for iOS
                </Link>
              </AnimatedGradient>
            </div>
          </section>
        )}

        {/* Footer - hidden in embed mode */}
        {!isEmbedded && (
        <footer className="bg-white dark:bg-neutral-950 transition-colors duration-300">
          <div className="mx-auto px-6 sm:px-8 lg:px-10 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src={resolvedTheme === 'dark' ? '/images/thea-logo-dark.svg' : '/images/thea-logo.svg'}
                    alt="Thea Logo"
                    width={48}
                    height={48}
                  />
                </Link>
              </div>
              
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  © {new Date().getFullYear()} Thea Apps Inc.
                </p>
                <Link href="/privacy" className="text-sm text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white">
                  Privacy Policy
                </Link>
              </div>
              
              <div className="flex items-center">
                <a 
                  href="https://instagram.com/theaapp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
        )}
      </div>
    </div>
  );
}

// Wrap in Suspense for useSearchParams
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="flex-1" />
      </div>
    }>
      <MainLayoutContent>{children}</MainLayoutContent>
    </Suspense>
  );
} 