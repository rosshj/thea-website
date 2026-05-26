'use client';

import { Drawer } from 'vaul';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const APP_STORE_URL = 'https://apps.apple.com/us/app/id6758333564';

interface DownloadSheetProps {
  children: React.ReactNode;
  className?: string;
}

function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check for touch capability and screen size
  const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.innerWidth <= 768;
  
  // Check user agent for mobile devices
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobileUA = mobileRegex.test(navigator.userAgent);
  
  // Consider it mobile if it has touch + small screen, or if UA indicates mobile
  return (hasTouchScreen && isSmallScreen) || isMobileUA;
}

export default function DownloadSheet({ children, className }: DownloadSheetProps) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  const handleClick = () => {
    if (isMobile) {
      // On mobile, redirect directly to the App Store
      window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer');
    } else {
      // On desktop, show the QR code sheet
      setOpen(true);
    }
  };

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <button className={className} onClick={handleClick}>
          {children}
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Drawer.Content className="bg-white dark:bg-neutral-900 flex flex-col rounded-t-3xl fixed bottom-0 left-0 right-0 z-50 max-h-[85vh]">
          <div className="p-4 bg-white dark:bg-neutral-900 rounded-t-3xl flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 dark:bg-neutral-700 mb-6" />
            <div className="max-w-md mx-auto text-center">
              <Drawer.Title className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Get Thea on the App Store
              </Drawer.Title>
              <Drawer.Description className="text-gray-600 dark:text-neutral-400 mb-6">
                Scan this QR code with your iPhone camera to download the app.
              </Drawer.Description>
              
              <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <Image
                    src="/images/app-store-qr.svg"
                    alt="QR code to download Thea on the App Store"
                    width={256}
                    height={256}
                  />
                </div>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-neutral-500 mb-6">
                Or open this link on your iPhone:
              </p>
              
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-white bg-gray-900 dark:bg-white dark:text-neutral-900 hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-[1.02] transition-all duration-200 mb-4"
              >
                Open App Store
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
