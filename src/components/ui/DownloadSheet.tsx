'use client';

import { Drawer } from 'vaul';
import { useState, useEffect } from 'react';

const TESTFLIGHT_URL = 'https://testflight.apple.com/join/7tp4bYZh';

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
      // On mobile, redirect directly to TestFlight
      window.open(TESTFLIGHT_URL, '_blank', 'noopener,noreferrer');
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
                Get Thea on TestFlight
              </Drawer.Title>
              <Drawer.Description className="text-gray-600 dark:text-neutral-400 mb-6">
                Scan this QR code with your iPhone camera to download the beta.
              </Drawer.Description>
              
              <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2251_7858)">
                      <path d="M256 0H0V256H256V0Z" fill="white"/>
                      <path d="M22.7879 16H16V22.7879H22.7879V16Z" fill="black"/>
                      <path d="M29.5758 16H22.7879V22.7879H29.5758V16Z" fill="black"/>
                      <path d="M36.3636 16H29.5758V22.7879H36.3636V16Z" fill="black"/>
                      <path d="M43.1515 16H36.3636V22.7879H43.1515V16Z" fill="black"/>
                      <path d="M49.9394 16H43.1515V22.7879H49.9394V16Z" fill="black"/>
                      <path d="M56.7273 16H49.9394V22.7879H56.7273V16Z" fill="black"/>
                      <path d="M63.5152 16H56.7273V22.7879H63.5152V16Z" fill="black"/>
                      <path d="M83.8788 16H77.0909V22.7879H83.8788V16Z" fill="black"/>
                      <path d="M90.6667 16H83.8788V22.7879H90.6667V16Z" fill="black"/>
                      <path d="M104.242 16H97.4546V22.7879H104.242V16Z" fill="black"/>
                      <path d="M111.03 16H104.242V22.7879H111.03V16Z" fill="black"/>
                      <path d="M117.818 16H111.03V22.7879H117.818V16Z" fill="black"/>
                      <path d="M124.606 16H117.818V22.7879H124.606V16Z" fill="black"/>
                      <path d="M131.394 16H124.606V22.7879H131.394V16Z" fill="black"/>
                      <path d="M158.545 16H151.758V22.7879H158.545V16Z" fill="black"/>
                      <path d="M165.333 16H158.545V22.7879H165.333V16Z" fill="black"/>
                      <path d="M185.697 16H178.909V22.7879H185.697V16Z" fill="black"/>
                      <path d="M199.273 16H192.485V22.7879H199.273V16Z" fill="black"/>
                      <path d="M206.061 16H199.273V22.7879H206.061V16Z" fill="black"/>
                      <path d="M212.848 16H206.061V22.7879H212.848V16Z" fill="black"/>
                      <path d="M219.636 16H212.848V22.7879H219.636V16Z" fill="black"/>
                      <path d="M226.424 16H219.636V22.7879H226.424V16Z" fill="black"/>
                      <path d="M233.212 16H226.424V22.7879H233.212V16Z" fill="black"/>
                      <path d="M240 16H233.212V22.7879H240V16Z" fill="black"/>
                      <path d="M22.7879 22.7879H16V29.5758H22.7879V22.7879Z" fill="black"/>
                      <path d="M63.5152 22.7879H56.7273V29.5758H63.5152V22.7879Z" fill="black"/>
                      <path d="M77.0909 22.7879H70.303V29.5758H77.0909V22.7879Z" fill="black"/>
                      <path d="M83.8788 22.7879H77.0909V29.5758H83.8788V22.7879Z" fill="black"/>
                      <path d="M124.606 22.7879H117.818V29.5758H124.606V22.7879Z" fill="black"/>
                      <path d="M131.394 22.7879H124.606V29.5758H131.394V22.7879Z" fill="black"/>
                      <path d="M151.758 22.7879H144.97V29.5758H151.758V22.7879Z" fill="black"/>
                      <path d="M185.697 22.7879H178.909V29.5758H185.697V22.7879Z" fill="black"/>
                      <path d="M199.273 22.7879H192.485V29.5758H199.273V22.7879Z" fill="black"/>
                      <path d="M240 22.7879H233.212V29.5758H240V22.7879Z" fill="black"/>
                      <path d="M22.7879 29.5758H16V36.3636H22.7879V29.5758Z" fill="black"/>
                      <path d="M36.3636 29.5758H29.5758V36.3636H36.3636V29.5758Z" fill="black"/>
                      <path d="M43.1515 29.5758H36.3636V36.3636H43.1515V29.5758Z" fill="black"/>
                      <path d="M49.9394 29.5758H43.1515V36.3636H49.9394V29.5758Z" fill="black"/>
                      <path d="M63.5152 29.5758H56.7273V36.3636H63.5152V29.5758Z" fill="black"/>
                      <path d="M83.8788 29.5758H77.0909V36.3636H83.8788V29.5758Z" fill="black"/>
                      <path d="M104.242 29.5758H97.4546V36.3636H104.242V29.5758Z" fill="black"/>
                      <path d="M117.818 29.5758H111.03V36.3636H117.818V29.5758Z" fill="black"/>
                      <path d="M124.606 29.5758H117.818V36.3636H124.606V29.5758Z" fill="black"/>
                      <path d="M131.394 29.5758H124.606V36.3636H131.394V29.5758Z" fill="black"/>
                      <path d="M138.182 29.5758H131.394V36.3636H138.182V29.5758Z" fill="black"/>
                      <path d="M144.97 29.5758H138.182V36.3636H144.97L144.97 29.5758Z" fill="black"/>
                      <path d="M165.333 29.5758H158.545V36.3636H165.333V29.5758Z" fill="black"/>
                      <path d="M185.697 29.5758H178.909V36.3636H185.697V29.5758Z" fill="black"/>
                      <path d="M199.273 29.5758H192.485V36.3636H199.273V29.5758Z" fill="black"/>
                      <path d="M212.848 29.5758H206.061V36.3636H212.848V29.5758Z" fill="black"/>
                      <path d="M219.636 29.5758H212.848V36.3636H219.636V29.5758Z" fill="black"/>
                      <path d="M226.424 29.5758H219.636V36.3636H226.424V29.5758Z" fill="black"/>
                      <path d="M240 29.5758H233.212V36.3636H240V29.5758Z" fill="black"/>
                      <path d="M22.7879 36.3636H16V43.1515H22.7879V36.3636Z" fill="black"/>
                      <path d="M36.3636 36.3636H29.5758V43.1515H36.3636V36.3636Z" fill="black"/>
                      <path d="M43.1515 36.3636H36.3636V43.1515H43.1515V36.3636Z" fill="black"/>
                      <path d="M49.9394 36.3636H43.1515V43.1515H49.9394V36.3636Z" fill="black"/>
                      <path d="M63.5152 36.3636H56.7273V43.1515H63.5152V36.3636Z" fill="black"/>
                      <path d="M90.6667 36.3636H83.8788V43.1515H90.6667V36.3636Z" fill="black"/>
                      <path d="M97.4546 36.3636H90.6667V43.1515H97.4546V36.3636Z" fill="black"/>
                      <path d="M104.242 36.3636H97.4546V43.1515H104.242V36.3636Z" fill="black"/>
                      <path d="M124.606 36.3636H117.818V43.1515H124.606V36.3636Z" fill="black"/>
                      <path d="M158.545 36.3636H151.758V43.1515H158.545V36.3636Z" fill="black"/>
                      <path d="M178.909 36.3636H172.121V43.1515H178.909V36.3636Z" fill="black"/>
                      <path d="M199.273 36.3636H192.485V43.1515H199.273V36.3636Z" fill="black"/>
                      <path d="M212.848 36.3636H206.061V43.1515H212.848V36.3636Z" fill="black"/>
                      <path d="M219.636 36.3636H212.848V43.1515H219.636V36.3636Z" fill="black"/>
                      <path d="M226.424 36.3636H219.636V43.1515H226.424V36.3636Z" fill="black"/>
                      <path d="M240 36.3636H233.212V43.1515H240V36.3636Z" fill="black"/>
                      <path d="M22.7879 43.1515H16V49.9394H22.7879V43.1515Z" fill="black"/>
                      <path d="M36.3636 43.1515H29.5758V49.9394H36.3636V43.1515Z" fill="black"/>
                      <path d="M43.1515 43.1515H36.3636V49.9394H43.1515V43.1515Z" fill="black"/>
                      <path d="M49.9394 43.1515H43.1515V49.9394H49.9394V43.1515Z" fill="black"/>
                      <path d="M63.5152 43.1515H56.7273V49.9394H63.5152V43.1515Z" fill="black"/>
                      <path d="M77.0909 43.1515H70.303V49.9394H77.0909V43.1515Z" fill="black"/>
                      <path d="M97.4546 43.1515H90.6667V49.9394H97.4546V43.1515Z" fill="black"/>
                      <path d="M131.394 43.1515H124.606V49.9394H131.394V43.1515Z" fill="black"/>
                      <path d="M144.97 43.1515H138.182V49.9394H144.97V43.1515Z" fill="black"/>
                      <path d="M151.758 43.1515H144.97V49.9394H151.758V43.1515Z" fill="black"/>
                      <path d="M158.545 43.1515H151.758V49.9394H158.545V43.1515Z" fill="black"/>
                      <path d="M178.909 43.1515H172.121V49.9394H178.909V43.1515Z" fill="black"/>
                      <path d="M199.273 43.1515H192.485V49.9394H199.273V43.1515Z" fill="black"/>
                      <path d="M212.848 43.1515H206.061V49.9394H212.848V43.1515Z" fill="black"/>
                      <path d="M219.636 43.1515H212.848V49.9394H219.636V43.1515Z" fill="black"/>
                      <path d="M226.424 43.1515H219.636V49.9394H226.424V43.1515Z" fill="black"/>
                      <path d="M240 43.1515H233.212V49.9394H240V43.1515Z" fill="black"/>
                      <path d="M22.7879 49.9394H16V56.7273H22.7879V49.9394Z" fill="black"/>
                      <path d="M63.5152 49.9394H56.7273V56.7273H63.5152V49.9394Z" fill="black"/>
                      <path d="M104.242 49.9394H97.4546V56.7273H104.242V49.9394Z" fill="black"/>
                      <path d="M111.03 49.9394H104.242V56.7273H111.03V49.9394Z" fill="black"/>
                      <path d="M117.818 49.9394H111.03V56.7273H117.818V49.9394Z" fill="black"/>
                      <path d="M131.394 49.9394H124.606V56.7273H131.394V49.9394Z" fill="black"/>
                      <path d="M138.182 49.9394H131.394V56.7273H138.182V49.9394Z" fill="black"/>
                      <path d="M151.758 49.9394H144.97L144.97 56.7273H151.758V49.9394Z" fill="black"/>
                      <path d="M165.333 49.9394H158.545V56.7273H165.333V49.9394Z" fill="black"/>
                      <path d="M172.121 49.9394H165.333V56.7273H172.121V49.9394Z" fill="black"/>
                      <path d="M199.273 49.9394H192.485V56.7273H199.273V49.9394Z" fill="black"/>
                      <path d="M240 49.9394H233.212V56.7273H240V49.9394Z" fill="black"/>
                      <path d="M22.7879 56.7273H16V63.5152H22.7879V56.7273Z" fill="black"/>
                      <path d="M29.5758 56.7273H22.7879V63.5152H29.5758V56.7273Z" fill="black"/>
                      <path d="M36.3636 56.7273H29.5758V63.5152H36.3636V56.7273Z" fill="black"/>
                      <path d="M43.1515 56.7273H36.3636V63.5152H43.1515V56.7273Z" fill="black"/>
                      <path d="M49.9394 56.7273H43.1515V63.5152H49.9394V56.7273Z" fill="black"/>
                      <path d="M56.7273 56.7273H49.9394V63.5152H56.7273V56.7273Z" fill="black"/>
                      <path d="M63.5152 56.7273H56.7273V63.5152H63.5152V56.7273Z" fill="black"/>
                      <path d="M77.0909 56.7273H70.303V63.5152H77.0909V56.7273Z" fill="black"/>
                      <path d="M90.6667 56.7273H83.8788V63.5152H90.6667V56.7273Z" fill="black"/>
                      <path d="M104.242 56.7273H97.4546V63.5152H104.242V56.7273Z" fill="black"/>
                      <path d="M117.818 56.7273H111.03V63.5152H117.818V56.7273Z" fill="black"/>
                      <path d="M131.394 56.7273H124.606V63.5152H131.394V56.7273Z" fill="black"/>
                      <path d="M144.97 56.7273H138.182V63.5152H144.97L144.97 56.7273Z" fill="black"/>
                      <path d="M158.545 56.7273H151.758V63.5152H158.545V56.7273Z" fill="black"/>
                      <path d="M172.121 56.7273H165.333V63.5152H172.121V56.7273Z" fill="black"/>
                      <path d="M185.697 56.7273H178.909V63.5152H185.697V56.7273Z" fill="black"/>
                      <path d="M199.273 56.7273H192.485V63.5152H199.273V56.7273Z" fill="black"/>
                      <path d="M206.061 56.7273H199.273V63.5152H206.061V56.7273Z" fill="black"/>
                      <path d="M212.848 56.7273H206.061V63.5152H212.848V56.7273Z" fill="black"/>
                      <path d="M219.636 56.7273H212.848V63.5152H219.636V56.7273Z" fill="black"/>
                      <path d="M226.424 56.7273H219.636V63.5152H226.424V56.7273Z" fill="black"/>
                      <path d="M233.212 56.7273H226.424V63.5152H233.212V56.7273Z" fill="black"/>
                      <path d="M240 56.7273H233.212V63.5152H240V56.7273Z" fill="black"/>
                      <path d="M83.8788 63.5152H77.0909V70.303H83.8788V63.5152Z" fill="black"/>
                      <path d="M90.6667 63.5152H83.8788V70.303H90.6667V63.5152Z" fill="black"/>
                      <path d="M97.4546 63.5152H90.6667V70.303H97.4546V63.5152Z" fill="black"/>
                      <path d="M104.242 63.5152H97.4546V70.303H104.242V63.5152Z" fill="black"/>
                      <path d="M111.03 63.5152H104.242V70.303H111.03V63.5152Z" fill="black"/>
                      <path d="M138.182 63.5152H131.394V70.303H138.182V63.5152Z" fill="black"/>
                      <path d="M151.758 63.5152H144.97L144.97 70.303H151.758V63.5152Z" fill="black"/>
                      <path d="M165.333 63.5152H158.545V70.303H165.333V63.5152Z" fill="black"/>
                      <path d="M172.121 63.5152H165.333V70.303H172.121V63.5152Z" fill="black"/>
                      <path d="M178.909 63.5152H172.121V70.303H178.909V63.5152Z" fill="black"/>
                      <path d="M185.697 63.5152H178.909V70.303H185.697V63.5152Z" fill="black"/>
                      <path d="M36.3636 70.303H29.5758V77.0909H36.3636V70.303Z" fill="black"/>
                      <path d="M49.9394 70.303H43.1515V77.0909H49.9394V70.303Z" fill="black"/>
                      <path d="M56.7273 70.303H49.9394V77.0909H56.7273V70.303Z" fill="black"/>
                      <path d="M63.5152 70.303H56.7273V77.0909H63.5152V70.303Z" fill="black"/>
                      <path d="M77.0909 70.303H70.303V77.0909H77.0909V70.303Z" fill="black"/>
                      <path d="M83.8788 70.303H77.0909V77.0909H83.8788V70.303Z" fill="black"/>
                      <path d="M97.4546 70.303H90.6667V77.0909H97.4546V70.303Z" fill="black"/>
                      <path d="M117.818 70.303H111.03V77.0909H117.818V70.303Z" fill="black"/>
                      <path d="M124.606 70.303H117.818V77.0909H124.606V70.303Z" fill="black"/>
                      <path d="M138.182 70.303H131.394V77.0909H138.182V70.303Z" fill="black"/>
                      <path d="M192.485 70.303H185.697V77.0909H192.485V70.303Z" fill="black"/>
                      <path d="M212.848 70.303H206.061V77.0909H212.848V70.303Z" fill="black"/>
                      <path d="M233.212 70.303H226.424V77.0909H233.212V70.303Z" fill="black"/>
                      <path d="M29.5758 77.0909H22.7879V83.8788H29.5758V77.0909Z" fill="black"/>
                      <path d="M36.3636 77.0909H29.5758V83.8788H36.3636V77.0909Z" fill="black"/>
                      <path d="M43.1515 77.0909H36.3636V83.8788H43.1515V77.0909Z" fill="black"/>
                      <path d="M49.9394 77.0909H43.1515V83.8788H49.9394V77.0909Z" fill="black"/>
                      <path d="M70.303 77.0909H63.5152V83.8788H70.303V77.0909Z" fill="black"/>
                      <path d="M83.8788 77.0909H77.0909V83.8788H83.8788V77.0909Z" fill="black"/>
                      <path d="M97.4546 77.0909H90.6667V83.8788H97.4546V77.0909Z" fill="black"/>
                      <path d="M104.242 77.0909H97.4546V83.8788H104.242V77.0909Z" fill="black"/>
                      <path d="M131.394 77.0909H124.606V83.8788H131.394V77.0909Z" fill="black"/>
                      <path d="M138.182 77.0909H131.394V83.8788H138.182V77.0909Z" fill="black"/>
                      <path d="M144.97 77.0909H138.182V83.8788H144.97V77.0909Z" fill="black"/>
                      <path d="M151.758 77.0909H144.97V83.8788H151.758V77.0909Z" fill="black"/>
                      <path d="M158.545 77.0909H151.758V83.8788H158.545V77.0909Z" fill="black"/>
                      <path d="M172.121 77.0909H165.333V83.8788H172.121V77.0909Z" fill="black"/>
                      <path d="M178.909 77.0909H172.121V83.8788H178.909V77.0909Z" fill="black"/>
                      <path d="M185.697 77.0909H178.909V83.8788H185.697V77.0909Z" fill="black"/>
                      <path d="M192.485 77.0909H185.697V83.8788H192.485V77.0909Z" fill="black"/>
                      <path d="M199.273 77.0909H192.485V83.8788H199.273V77.0909Z" fill="black"/>
                      <path d="M206.061 77.0909H199.273V83.8788H206.061V77.0909Z" fill="black"/>
                      <path d="M29.5758 83.8788H22.7879V90.6667H29.5758V83.8788Z" fill="black"/>
                      <path d="M43.1515 83.8788H36.3636V90.6667H43.1515V83.8788Z" fill="black"/>
                      <path d="M63.5152 83.8788H56.7273V90.6667H63.5152V83.8788Z" fill="black"/>
                      <path d="M77.0909 83.8788H70.303V90.6667H77.0909V83.8788Z" fill="black"/>
                      <path d="M97.4546 83.8788H90.6667V90.6667H97.4546V83.8788Z" fill="black"/>
                      <path d="M104.242 83.8788H97.4546V90.6667H104.242V83.8788Z" fill="black"/>
                      <path d="M111.03 83.8788H104.242V90.6667H111.03V83.8788Z" fill="black"/>
                      <path d="M117.818 83.8788H111.03V90.6667H117.818V83.8788Z" fill="black"/>
                      <path d="M131.394 83.8788H124.606V90.6667H131.394V83.8788Z" fill="black"/>
                      <path d="M144.97 83.8788H138.182V90.6667H144.97V83.8788Z" fill="black"/>
                      <path d="M165.333 83.8788H158.545V90.6667H165.333V83.8788Z" fill="black"/>
                      <path d="M172.121 83.8788H165.333V90.6667H172.121V83.8788Z" fill="black"/>
                      <path d="M192.485 83.8788H185.697V90.6667H192.485V83.8788Z" fill="black"/>
                      <path d="M199.273 83.8788H192.485V90.6667H199.273V83.8788Z" fill="black"/>
                      <path d="M212.848 83.8788H206.061V90.6667H212.848V83.8788Z" fill="black"/>
                      <path d="M240 83.8788H233.212V90.6667H240V83.8788Z" fill="black"/>
                      <path d="M22.7879 90.6667H16V97.4546H22.7879V90.6667Z" fill="black"/>
                      <path d="M29.5758 90.6667H22.7879V97.4546H29.5758V90.6667Z" fill="black"/>
                      <path d="M36.3636 90.6667H29.5758V97.4546H36.3636V90.6667Z" fill="black"/>
                      <path d="M49.9394 90.6667H43.1515V97.4546H49.9394V90.6667Z" fill="black"/>
                      <path d="M56.7273 90.6667H49.9394V97.4546H56.7273V90.6667Z" fill="black"/>
                      <path d="M70.303 90.6667H63.5152V97.4546H70.303V90.6667Z" fill="black"/>
                      <path d="M77.0909 90.6667H70.303V97.4546H77.0909V90.6667Z" fill="black"/>
                      <path d="M97.4546 90.6667H90.6667V97.4546H97.4546V90.6667Z" fill="black"/>
                      <path d="M111.03 90.6667H104.242V97.4546H111.03V90.6667Z" fill="black"/>
                      <path d="M144.97 90.6667H138.182V97.4546H144.97V90.6667Z" fill="black"/>
                      <path d="M158.545 90.6667H151.758V97.4546H158.545V90.6667Z" fill="black"/>
                      <path d="M165.333 90.6667H158.545V97.4546H165.333V90.6667Z" fill="black"/>
                      <path d="M172.121 90.6667H165.333V97.4546H172.121V90.6667Z" fill="black"/>
                      <path d="M226.424 90.6667H219.636V97.4546H226.424V90.6667Z" fill="black"/>
                      <path d="M36.3636 97.4546H29.5758V104.242H36.3636V97.4546Z" fill="black"/>
                      <path d="M43.1515 97.4546H36.3636V104.242H43.1515V97.4546Z" fill="black"/>
                      <path d="M56.7273 97.4546H49.9394V104.242H56.7273V97.4546Z" fill="black"/>
                      <path d="M63.5152 97.4546H56.7273V104.242H63.5152V97.4546Z" fill="black"/>
                      <path d="M90.6667 97.4546H83.8788V104.242H90.6667V97.4546Z" fill="black"/>
                      <path d="M138.182 97.4546H131.394V104.242H138.182V97.4546Z" fill="black"/>
                      <path d="M144.97 97.4546H138.182V104.242H144.97V97.4546Z" fill="black"/>
                      <path d="M165.333 97.4546H158.545V104.242H165.333V97.4546Z" fill="black"/>
                      <path d="M178.909 97.4546H172.121V104.242H178.909V97.4546Z" fill="black"/>
                      <path d="M185.697 97.4546H178.909V104.242H185.697V97.4546Z" fill="black"/>
                      <path d="M192.485 97.4546H185.697V104.242H192.485V97.4546Z" fill="black"/>
                      <path d="M219.636 97.4546H212.848V104.242H219.636V97.4546Z" fill="black"/>
                      <path d="M29.5758 104.242H22.7879V111.03H29.5758V104.242Z" fill="black"/>
                      <path d="M36.3636 104.242H29.5758V111.03H36.3636V104.242Z" fill="black"/>
                      <path d="M56.7273 104.242H49.9394V111.03H56.7273V104.242Z" fill="black"/>
                      <path d="M77.0909 104.242H70.303V111.03H77.0909V104.242Z" fill="black"/>
                      <path d="M83.8788 104.242H77.0909V111.03H83.8788V104.242Z" fill="black"/>
                      <path d="M90.6667 104.242H83.8788V111.03H90.6667V104.242Z" fill="black"/>
                      <path d="M97.4546 104.242H90.6667V111.03H97.4546V104.242Z" fill="black"/>
                      <path d="M104.242 104.242H97.4546V111.03H104.242V104.242Z" fill="black"/>
                      <path d="M165.333 104.242H158.545V111.03H165.333V104.242Z" fill="black"/>
                      <path d="M172.121 104.242H165.333V111.03H172.121V104.242Z" fill="black"/>
                      <path d="M178.909 104.242H172.121V111.03H178.909V104.242Z" fill="black"/>
                      <path d="M199.273 104.242H192.485V111.03H199.273V104.242Z" fill="black"/>
                      <path d="M206.061 104.242H199.273V111.03H206.061V104.242Z" fill="black"/>
                      <path d="M240 104.242H233.212V111.03H240V104.242Z" fill="black"/>
                      <path d="M22.7879 111.03H16V117.818H22.7879V111.03Z" fill="black"/>
                      <path d="M36.3636 111.03H29.5758V117.818H36.3636V111.03Z" fill="black"/>
                      <path d="M43.1515 111.03H36.3636V117.818H43.1515V111.03Z" fill="black"/>
                      <path d="M56.7273 111.03H49.9394V117.818H56.7273V111.03Z" fill="black"/>
                      <path d="M63.5152 111.03H56.7273V117.818H63.5152V111.03Z" fill="black"/>
                      <path d="M77.0909 111.03H70.303V117.818H77.0909V111.03Z" fill="black"/>
                      <path d="M83.8788 111.03H77.0909V117.818H83.8788V111.03Z" fill="black"/>
                      <path d="M90.6667 111.03H83.8788V117.818H90.6667V111.03Z" fill="black"/>
                      <path d="M97.4546 111.03H90.6667V117.818H97.4546V111.03Z" fill="black"/>
                      <path d="M111.03 111.03H104.242V117.818H111.03V111.03Z" fill="black"/>
                      <path d="M124.606 111.03H117.818V117.818H124.606V111.03Z" fill="black"/>
                      <path d="M131.394 111.03H124.606V117.818H131.394V111.03Z" fill="black"/>
                      <path d="M138.182 111.03H131.394V117.818H138.182V111.03Z" fill="black"/>
                      <path d="M158.545 111.03H151.758V117.818H158.545V111.03Z" fill="black"/>
                      <path d="M165.333 111.03H158.545V117.818H165.333V111.03Z" fill="black"/>
                      <path d="M172.121 111.03H165.333V117.818H172.121V111.03Z" fill="black"/>
                      <path d="M185.697 111.03H178.909V117.818H185.697V111.03Z" fill="black"/>
                      <path d="M212.848 111.03H206.061V117.818H212.848V111.03Z" fill="black"/>
                      <path d="M219.636 111.03H212.848V117.818H219.636V111.03Z" fill="black"/>
                      <path d="M226.424 111.03H219.636V117.818H226.424V111.03Z" fill="black"/>
                      <path d="M233.212 111.03H226.424V117.818H233.212V111.03Z" fill="black"/>
                      <path d="M36.3636 117.818H29.5758V124.606H36.3636V117.818Z" fill="black"/>
                      <path d="M49.9394 117.818H43.1515V124.606H49.9394V117.818Z" fill="black"/>
                      <path d="M56.7273 117.818H49.9394V124.606H56.7273V117.818Z" fill="black"/>
                      <path d="M70.303 117.818H63.5152V124.606H70.303V117.818Z" fill="black"/>
                      <path d="M77.0909 117.818H70.303V124.606H77.0909V117.818Z" fill="black"/>
                      <path d="M83.8788 117.818H77.0909V124.606H83.8788V117.818Z" fill="black"/>
                      <path d="M90.6667 117.818H83.8788V124.606H90.6667V117.818Z" fill="black"/>
                      <path d="M104.242 117.818H97.4546V124.606H104.242V117.818Z" fill="black"/>
                      <path d="M111.03 117.818H104.242V124.606H111.03V117.818Z" fill="black"/>
                      <path d="M117.818 117.818H111.03V124.606H117.818V117.818Z" fill="black"/>
                      <path d="M138.182 117.818H131.394V124.606H138.182V117.818Z" fill="black"/>
                      <path d="M151.758 117.818H144.97V124.606H151.758V117.818Z" fill="black"/>
                      <path d="M165.333 117.818H158.545V124.606H165.333V117.818Z" fill="black"/>
                      <path d="M172.121 117.818H165.333V124.606H172.121V117.818Z" fill="black"/>
                      <path d="M178.909 117.818H172.121V124.606H178.909V117.818Z" fill="black"/>
                      <path d="M185.697 117.818H178.909V124.606H185.697V117.818Z" fill="black"/>
                      <path d="M192.485 117.818H185.697V124.606H192.485V117.818Z" fill="black"/>
                      <path d="M206.061 117.818H199.273V124.606H206.061V117.818Z" fill="black"/>
                      <path d="M212.848 117.818H206.061V124.606H212.848V117.818Z" fill="black"/>
                      <path d="M233.212 117.818H226.424V124.606H233.212V117.818Z" fill="black"/>
                      <path d="M29.5758 124.606H22.7879V131.394H29.5758V124.606Z" fill="black"/>
                      <path d="M36.3636 124.606H29.5758V131.394H36.3636V124.606Z" fill="black"/>
                      <path d="M49.9394 124.606H43.1515V131.394H49.9394V124.606Z" fill="black"/>
                      <path d="M63.5152 124.606H56.7273V131.394H63.5152V124.606Z" fill="black"/>
                      <path d="M77.0909 124.606H70.303V131.394H77.0909V124.606Z" fill="black"/>
                      <path d="M97.4546 124.606H90.6667V131.394H97.4546V124.606Z" fill="black"/>
                      <path d="M104.242 124.606H97.4546V131.394H104.242V124.606Z" fill="black"/>
                      <path d="M131.394 124.606H124.606V131.394H131.394V124.606Z" fill="black"/>
                      <path d="M151.758 124.606H144.97V131.394H151.758V124.606Z" fill="black"/>
                      <path d="M158.545 124.606H151.758V131.394H158.545V124.606Z" fill="black"/>
                      <path d="M192.485 124.606H185.697V131.394H192.485V124.606Z" fill="black"/>
                      <path d="M199.273 124.606H192.485V131.394H199.273V124.606Z" fill="black"/>
                      <path d="M206.061 124.606H199.273V131.394H206.061V124.606Z" fill="black"/>
                      <path d="M219.636 124.606H212.848V131.394H219.636V124.606Z" fill="black"/>
                      <path d="M226.424 124.606H219.636V131.394H226.424V124.606Z" fill="black"/>
                      <path d="M240 124.606H233.212V131.394H240V124.606Z" fill="black"/>
                      <path d="M22.7879 131.394H16V138.182H22.7879V131.394Z" fill="black"/>
                      <path d="M29.5758 131.394H22.7879V138.182H29.5758V131.394Z" fill="black"/>
                      <path d="M43.1515 131.394H36.3636V138.182H43.1515V131.394Z" fill="black"/>
                      <path d="M70.303 131.394H63.5152V138.182H70.303V131.394Z" fill="black"/>
                      <path d="M77.0909 131.394H70.303V138.182H77.0909V131.394Z" fill="black"/>
                      <path d="M90.6667 131.394H83.8788V138.182H90.6667V131.394Z" fill="black"/>
                      <path d="M97.4546 131.394H90.6667V138.182H97.4546V131.394Z" fill="black"/>
                      <path d="M117.818 131.394H111.03V138.182H117.818V131.394Z" fill="black"/>
                      <path d="M131.394 131.394H124.606V138.182H131.394V131.394Z" fill="black"/>
                      <path d="M151.758 131.394H144.97V138.182H151.758V131.394Z" fill="black"/>
                      <path d="M178.909 131.394H172.121V138.182H178.909V131.394Z" fill="black"/>
                      <path d="M185.697 131.394H178.909V138.182H185.697V131.394Z" fill="black"/>
                      <path d="M199.273 131.394H192.485V138.182H199.273V131.394Z" fill="black"/>
                      <path d="M212.848 131.394H206.061V138.182H212.848V131.394Z" fill="black"/>
                      <path d="M240 131.394H233.212V138.182H240V131.394Z" fill="black"/>
                      <path d="M43.1515 138.182H36.3636V144.97H43.1515V138.182Z" fill="black"/>
                      <path d="M49.9394 138.182H43.1515V144.97H49.9394V138.182Z" fill="black"/>
                      <path d="M56.7273 138.182H49.9394V144.97H56.7273V138.182Z" fill="black"/>
                      <path d="M63.5152 138.182H56.7273V144.97H63.5152V138.182Z" fill="black"/>
                      <path d="M83.8788 138.182H77.0909V144.97H83.8788V138.182Z" fill="black"/>
                      <path d="M97.4546 138.182H90.6667V144.97H97.4546V138.182Z" fill="black"/>
                      <path d="M104.242 138.182H97.4546V144.97H104.242V138.182Z" fill="black"/>
                      <path d="M117.818 138.182H111.03V144.97H117.818V138.182Z" fill="black"/>
                      <path d="M131.394 138.182H124.606V144.97H131.394V138.182Z" fill="black"/>
                      <path d="M158.545 138.182H151.758V144.97H158.545V138.182Z" fill="black"/>
                      <path d="M165.333 138.182H158.545V144.97H165.333V138.182Z" fill="black"/>
                      <path d="M172.121 138.182H165.333V144.97H172.121V138.182Z" fill="black"/>
                      <path d="M178.909 138.182H172.121V144.97H178.909V138.182Z" fill="black"/>
                      <path d="M192.485 138.182H185.697V144.97H192.485V138.182Z" fill="black"/>
                      <path d="M219.636 138.182H212.848V144.97H219.636V138.182Z" fill="black"/>
                      <path d="M226.424 138.182H219.636V144.97H226.424V138.182Z" fill="black"/>
                      <path d="M233.212 138.182H226.424V144.97H233.212V138.182Z" fill="black"/>
                      <path d="M240 138.182H233.212V144.97H240V138.182Z" fill="black"/>
                      <path d="M29.5758 144.97H22.7879V151.758H29.5758V144.97Z" fill="black"/>
                      <path d="M49.9394 144.97H43.1515V151.758H49.9394V144.97Z" fill="black"/>
                      <path d="M56.7273 144.97H49.9394V151.758H56.7273V144.97Z" fill="black"/>
                      <path d="M77.0909 144.97L70.303 144.97V151.758H77.0909V144.97Z" fill="black"/>
                      <path d="M104.242 144.97H97.4546V151.758H104.242V144.97Z" fill="black"/>
                      <path d="M111.03 144.97H104.242V151.758H111.03V144.97Z" fill="black"/>
                      <path d="M117.818 144.97H111.03V151.758H117.818V144.97Z" fill="black"/>
                      <path d="M124.606 144.97H117.818V151.758H124.606V144.97Z" fill="black"/>
                      <path d="M151.758 144.97L144.97 144.97V151.758H151.758V144.97Z" fill="black"/>
                      <path d="M165.333 144.97H158.545V151.758H165.333V144.97Z" fill="black"/>
                      <path d="M212.848 144.97L206.061 144.97V151.758H212.848V144.97Z" fill="black"/>
                      <path d="M233.212 144.97H226.424V151.758H233.212V144.97Z" fill="black"/>
                      <path d="M29.5758 151.758H22.7879V158.545H29.5758V151.758Z" fill="black"/>
                      <path d="M43.1515 151.758H36.3636V158.545H43.1515V151.758Z" fill="black"/>
                      <path d="M49.9394 151.758H43.1515V158.545H49.9394V151.758Z" fill="black"/>
                      <path d="M63.5152 151.758H56.7273V158.545H63.5152V151.758Z" fill="black"/>
                      <path d="M90.6667 151.758H83.8788V158.545H90.6667V151.758Z" fill="black"/>
                      <path d="M104.242 151.758H97.4546V158.545H104.242V151.758Z" fill="black"/>
                      <path d="M124.606 151.758H117.818V158.545H124.606V151.758Z" fill="black"/>
                      <path d="M131.394 151.758H124.606V158.545H131.394V151.758Z" fill="black"/>
                      <path d="M151.758 151.758H144.97V158.545H151.758V151.758Z" fill="black"/>
                      <path d="M158.545 151.758H151.758V158.545H158.545V151.758Z" fill="black"/>
                      <path d="M165.333 151.758H158.545V158.545H165.333V151.758Z" fill="black"/>
                      <path d="M185.697 151.758H178.909V158.545H185.697V151.758Z" fill="black"/>
                      <path d="M192.485 151.758H185.697V158.545H192.485V151.758Z" fill="black"/>
                      <path d="M206.061 151.758H199.273V158.545H206.061V151.758Z" fill="black"/>
                      <path d="M212.848 151.758H206.061V158.545H212.848V151.758Z" fill="black"/>
                      <path d="M36.3636 158.545H29.5758V165.333H36.3636V158.545Z" fill="black"/>
                      <path d="M49.9394 158.545H43.1515V165.333H49.9394V158.545Z" fill="black"/>
                      <path d="M70.303 158.545H63.5152V165.333H70.303V158.545Z" fill="black"/>
                      <path d="M77.0909 158.545H70.303V165.333H77.0909V158.545Z" fill="black"/>
                      <path d="M90.6667 158.545H83.8788V165.333H90.6667V158.545Z" fill="black"/>
                      <path d="M97.4546 158.545H90.6667V165.333H97.4546V158.545Z" fill="black"/>
                      <path d="M104.242 158.545H97.4546V165.333H104.242V158.545Z" fill="black"/>
                      <path d="M111.03 158.545H104.242V165.333H111.03V158.545Z" fill="black"/>
                      <path d="M117.818 158.545H111.03V165.333H117.818V158.545Z" fill="black"/>
                      <path d="M124.606 158.545H117.818V165.333H124.606V158.545Z" fill="black"/>
                      <path d="M131.394 158.545H124.606V165.333H131.394V158.545Z" fill="black"/>
                      <path d="M151.758 158.545H144.97V165.333H151.758V158.545Z" fill="black"/>
                      <path d="M178.909 158.545H172.121V165.333H178.909V158.545Z" fill="black"/>
                      <path d="M185.697 158.545H178.909V165.333H185.697V158.545Z" fill="black"/>
                      <path d="M192.485 158.545H185.697V165.333H192.485V158.545Z" fill="black"/>
                      <path d="M199.273 158.545H192.485V165.333H199.273V158.545Z" fill="black"/>
                      <path d="M206.061 158.545H199.273V165.333H206.061V158.545Z" fill="black"/>
                      <path d="M219.636 158.545H212.848V165.333H219.636V158.545Z" fill="black"/>
                      <path d="M226.424 158.545H219.636V165.333H226.424V158.545Z" fill="black"/>
                      <path d="M233.212 158.545H226.424V165.333H233.212V158.545Z" fill="black"/>
                      <path d="M240 158.545H233.212V165.333H240V158.545Z" fill="black"/>
                      <path d="M36.3636 165.333H29.5758V172.121H36.3636V165.333Z" fill="black"/>
                      <path d="M43.1515 165.333H36.3636V172.121H43.1515V165.333Z" fill="black"/>
                      <path d="M49.9394 165.333H43.1515V172.121H49.9394V165.333Z" fill="black"/>
                      <path d="M56.7273 165.333H49.9394V172.121H56.7273V165.333Z" fill="black"/>
                      <path d="M63.5152 165.333H56.7273V172.121H63.5152V165.333Z" fill="black"/>
                      <path d="M70.303 165.333H63.5152V172.121H70.303V165.333Z" fill="black"/>
                      <path d="M77.0909 165.333H70.303V172.121H77.0909V165.333Z" fill="black"/>
                      <path d="M97.4546 165.333H90.6667V172.121H97.4546V165.333Z" fill="black"/>
                      <path d="M104.242 165.333H97.4546V172.121H104.242V165.333Z" fill="black"/>
                      <path d="M117.818 165.333H111.03V172.121H117.818V165.333Z" fill="black"/>
                      <path d="M131.394 165.333H124.606V172.121H131.394V165.333Z" fill="black"/>
                      <path d="M144.97 165.333H138.182V172.121H144.97L144.97 165.333Z" fill="black"/>
                      <path d="M151.758 165.333H144.97L144.97 172.121H151.758V165.333Z" fill="black"/>
                      <path d="M158.545 165.333H151.758V172.121H158.545V165.333Z" fill="black"/>
                      <path d="M165.333 165.333H158.545V172.121H165.333V165.333Z" fill="black"/>
                      <path d="M185.697 165.333H178.909V172.121H185.697V165.333Z" fill="black"/>
                      <path d="M199.273 165.333H192.485V172.121H199.273V165.333Z" fill="black"/>
                      <path d="M212.848 165.333H206.061V172.121H212.848V165.333Z" fill="black"/>
                      <path d="M219.636 165.333H212.848V172.121H219.636V165.333Z" fill="black"/>
                      <path d="M226.424 165.333H219.636V172.121H226.424V165.333Z" fill="black"/>
                      <path d="M233.212 165.333H226.424V172.121H233.212V165.333Z" fill="black"/>
                      <path d="M240 165.333H233.212V172.121H240V165.333Z" fill="black"/>
                      <path d="M22.7879 172.121H16V178.909H22.7879V172.121Z" fill="black"/>
                      <path d="M43.1515 172.121H36.3636V178.909H43.1515V172.121Z" fill="black"/>
                      <path d="M49.9394 172.121H43.1515V178.909H49.9394V172.121Z" fill="black"/>
                      <path d="M70.303 172.121H63.5152V178.909H70.303V172.121Z" fill="black"/>
                      <path d="M83.8788 172.121H77.0909V178.909H83.8788V172.121Z" fill="black"/>
                      <path d="M90.6667 172.121H83.8788V178.909H90.6667V172.121Z" fill="black"/>
                      <path d="M97.4546 172.121H90.6667V178.909H97.4546V172.121Z" fill="black"/>
                      <path d="M111.03 172.121H104.242V178.909H111.03V172.121Z" fill="black"/>
                      <path d="M117.818 172.121H111.03V178.909H117.818V172.121Z" fill="black"/>
                      <path d="M138.182 172.121H131.394V178.909H138.182V172.121Z" fill="black"/>
                      <path d="M144.97 172.121H138.182V178.909H144.97V172.121Z" fill="black"/>
                      <path d="M165.333 172.121H158.545V178.909H165.333V172.121Z" fill="black"/>
                      <path d="M172.121 172.121H165.333V178.909H172.121V172.121Z" fill="black"/>
                      <path d="M185.697 172.121H178.909V178.909H185.697V172.121Z" fill="black"/>
                      <path d="M192.485 172.121H185.697V178.909H192.485V172.121Z" fill="black"/>
                      <path d="M219.636 172.121H212.848V178.909H219.636V172.121Z" fill="black"/>
                      <path d="M233.212 172.121H226.424V178.909H233.212V172.121Z" fill="black"/>
                      <path d="M29.5758 178.909H22.7879V185.697H29.5758V178.909Z" fill="black"/>
                      <path d="M36.3636 178.909H29.5758V185.697H36.3636V178.909Z" fill="black"/>
                      <path d="M43.1515 178.909H36.3636V185.697H43.1515V178.909Z" fill="black"/>
                      <path d="M56.7273 178.909H49.9394V185.697H56.7273V178.909Z" fill="black"/>
                      <path d="M63.5152 178.909H56.7273V185.697H63.5152V178.909Z" fill="black"/>
                      <path d="M70.303 178.909H63.5152V185.697H70.303V178.909Z" fill="black"/>
                      <path d="M77.0909 178.909H70.303V185.697H77.0909V178.909Z" fill="black"/>
                      <path d="M97.4546 178.909H90.6667V185.697H97.4546V178.909Z" fill="black"/>
                      <path d="M117.818 178.909H111.03V185.697H117.818V178.909Z" fill="black"/>
                      <path d="M124.606 178.909H117.818V185.697H124.606V178.909Z" fill="black"/>
                      <path d="M144.97 178.909H138.182V185.697H144.97V178.909Z" fill="black"/>
                      <path d="M165.333 178.909H158.545V185.697H165.333V178.909Z" fill="black"/>
                      <path d="M172.121 178.909H165.333V185.697H172.121V178.909Z" fill="black"/>
                      <path d="M178.909 178.909H172.121V185.697H178.909V178.909Z" fill="black"/>
                      <path d="M185.697 178.909H178.909V185.697H185.697V178.909Z" fill="black"/>
                      <path d="M192.485 178.909H185.697V185.697H192.485V178.909Z" fill="black"/>
                      <path d="M199.273 178.909H192.485V185.697H199.273V178.909Z" fill="black"/>
                      <path d="M206.061 178.909H199.273V185.697H206.061V178.909Z" fill="black"/>
                      <path d="M212.848 178.909H206.061V185.697H212.848V178.909Z" fill="black"/>
                      <path d="M219.636 178.909H212.848V185.697H219.636V178.909Z" fill="black"/>
                      <path d="M233.212 178.909H226.424V185.697H233.212V178.909Z" fill="black"/>
                      <path d="M240 178.909H233.212V185.697H240V178.909Z" fill="black"/>
                      <path d="M77.0909 185.697H70.303V192.485H77.0909V185.697Z" fill="black"/>
                      <path d="M83.8788 185.697H77.0909V192.485H83.8788V185.697Z" fill="black"/>
                      <path d="M90.6667 185.697H83.8788V192.485H90.6667V185.697Z" fill="black"/>
                      <path d="M97.4546 185.697H90.6667V192.485H97.4546V185.697Z" fill="black"/>
                      <path d="M111.03 185.697H104.242V192.485H111.03V185.697Z" fill="black"/>
                      <path d="M117.818 185.697H111.03V192.485H117.818V185.697Z" fill="black"/>
                      <path d="M124.606 185.697H117.818V192.485H124.606V185.697Z" fill="black"/>
                      <path d="M151.758 185.697H144.97L144.97 192.485H151.758V185.697Z" fill="black"/>
                      <path d="M165.333 185.697H158.545V192.485H165.333V185.697Z" fill="black"/>
                      <path d="M172.121 185.697H165.333V192.485H172.121V185.697Z" fill="black"/>
                      <path d="M185.697 185.697H178.909V192.485H185.697V185.697Z" fill="black"/>
                      <path d="M212.848 185.697H206.061V192.485H212.848V185.697Z" fill="black"/>
                      <path d="M233.212 185.697H226.424V192.485H233.212V185.697Z" fill="black"/>
                      <path d="M240 185.697H233.212V192.485H240V185.697Z" fill="black"/>
                      <path d="M22.7879 192.485H16V199.273H22.7879V192.485Z" fill="black"/>
                      <path d="M29.5758 192.485H22.7879V199.273H29.5758V192.485Z" fill="black"/>
                      <path d="M36.3636 192.485H29.5758V199.273H36.3636V192.485Z" fill="black"/>
                      <path d="M43.1515 192.485H36.3636V199.273H43.1515V192.485Z" fill="black"/>
                      <path d="M49.9394 192.485H43.1515V199.273H49.9394V192.485Z" fill="black"/>
                      <path d="M56.7273 192.485H49.9394V199.273H56.7273V192.485Z" fill="black"/>
                      <path d="M63.5152 192.485H56.7273V199.273H63.5152V192.485Z" fill="black"/>
                      <path d="M90.6667 192.485H83.8788V199.273H90.6667V192.485Z" fill="black"/>
                      <path d="M97.4546 192.485H90.6667V199.273H97.4546V192.485Z" fill="black"/>
                      <path d="M104.242 192.485H97.4546V199.273H104.242V192.485Z" fill="black"/>
                      <path d="M117.818 192.485H111.03V199.273H117.818V192.485Z" fill="black"/>
                      <path d="M124.606 192.485H117.818V199.273H124.606V192.485Z" fill="black"/>
                      <path d="M131.394 192.485H124.606V199.273H131.394V192.485Z" fill="black"/>
                      <path d="M144.97 192.485H138.182V199.273H144.97L144.97 192.485Z" fill="black"/>
                      <path d="M158.545 192.485H151.758V199.273H158.545V192.485Z" fill="black"/>
                      <path d="M185.697 192.485H178.909V199.273H185.697V192.485Z" fill="black"/>
                      <path d="M199.273 192.485H192.485V199.273H199.273V192.485Z" fill="black"/>
                      <path d="M212.848 192.485H206.061V199.273H212.848V192.485Z" fill="black"/>
                      <path d="M219.636 192.485H212.848V199.273H219.636V192.485Z" fill="black"/>
                      <path d="M226.424 192.485H219.636V199.273H226.424V192.485Z" fill="black"/>
                      <path d="M233.212 192.485H226.424V199.273H233.212V192.485Z" fill="black"/>
                      <path d="M22.7879 199.273H16V206.061H22.7879V199.273Z" fill="black"/>
                      <path d="M63.5152 199.273H56.7273V206.061H63.5152V199.273Z" fill="black"/>
                      <path d="M77.0909 199.273H70.303V206.061H77.0909V199.273Z" fill="black"/>
                      <path d="M111.03 199.273H104.242V206.061H111.03V199.273Z" fill="black"/>
                      <path d="M117.818 199.273H111.03V206.061H117.818V199.273Z" fill="black"/>
                      <path d="M124.606 199.273H117.818V206.061H124.606V199.273Z" fill="black"/>
                      <path d="M144.97 199.273H138.182V206.061H144.97V199.273Z" fill="black"/>
                      <path d="M151.758 199.273H144.97V206.061H151.758V199.273Z" fill="black"/>
                      <path d="M165.333 199.273H158.545V206.061H165.333V199.273Z" fill="black"/>
                      <path d="M185.697 199.273H178.909V206.061H185.697V199.273Z" fill="black"/>
                      <path d="M212.848 199.273H206.061V206.061H212.848V199.273Z" fill="black"/>
                      <path d="M219.636 199.273H212.848V206.061H219.636V199.273Z" fill="black"/>
                      <path d="M226.424 199.273H219.636V206.061H226.424V199.273Z" fill="black"/>
                      <path d="M22.7879 206.061H16V212.848H22.7879V206.061Z" fill="black"/>
                      <path d="M36.3636 206.061H29.5758V212.848H36.3636V206.061Z" fill="black"/>
                      <path d="M43.1515 206.061H36.3636V212.848H43.1515V206.061Z" fill="black"/>
                      <path d="M49.9394 206.061H43.1515V212.848H49.9394V206.061Z" fill="black"/>
                      <path d="M63.5152 206.061H56.7273V212.848H63.5152V206.061Z" fill="black"/>
                      <path d="M77.0909 206.061H70.303V212.848H77.0909V206.061Z" fill="black"/>
                      <path d="M104.242 206.061H97.4546V212.848H104.242V206.061Z" fill="black"/>
                      <path d="M131.394 206.061H124.606V212.848H131.394V206.061Z" fill="black"/>
                      <path d="M158.545 206.061H151.758V212.848H158.545V206.061Z" fill="black"/>
                      <path d="M185.697 206.061H178.909V212.848H185.697V206.061Z" fill="black"/>
                      <path d="M192.485 206.061H185.697V212.848H192.485V206.061Z" fill="black"/>
                      <path d="M199.273 206.061H192.485V212.848H199.273V206.061Z" fill="black"/>
                      <path d="M206.061 206.061H199.273V212.848H206.061V206.061Z" fill="black"/>
                      <path d="M212.848 206.061H206.061V212.848H212.848V206.061Z" fill="black"/>
                      <path d="M219.636 206.061H212.848V212.848H219.636V206.061Z" fill="black"/>
                      <path d="M226.424 206.061H219.636V212.848H226.424V206.061Z" fill="black"/>
                      <path d="M22.7879 212.848H16V219.636H22.7879V212.848Z" fill="black"/>
                      <path d="M36.3636 212.848H29.5758V219.636H36.3636V212.848Z" fill="black"/>
                      <path d="M43.1515 212.848H36.3636V219.636H43.1515V212.848Z" fill="black"/>
                      <path d="M49.9394 212.848H43.1515V219.636H49.9394V212.848Z" fill="black"/>
                      <path d="M63.5152 212.848H56.7273V219.636H63.5152V212.848Z" fill="black"/>
                      <path d="M83.8788 212.848H77.0909V219.636H83.8788V212.848Z" fill="black"/>
                      <path d="M90.6667 212.848H83.8788V219.636H90.6667V212.848Z" fill="black"/>
                      <path d="M104.242 212.848H97.4546V219.636H104.242V212.848Z" fill="black"/>
                      <path d="M138.182 212.848H131.394V219.636H138.182V212.848Z" fill="black"/>
                      <path d="M144.97 212.848H138.182V219.636H144.97V212.848Z" fill="black"/>
                      <path d="M158.545 212.848H151.758V219.636H158.545V212.848Z" fill="black"/>
                      <path d="M165.333 212.848H158.545V219.636H165.333V212.848Z" fill="black"/>
                      <path d="M199.273 212.848H192.485V219.636H199.273V212.848Z" fill="black"/>
                      <path d="M212.848 212.848H206.061V219.636H212.848V212.848Z" fill="black"/>
                      <path d="M219.636 212.848H212.848V219.636H219.636V212.848Z" fill="black"/>
                      <path d="M233.212 212.848H226.424V219.636H233.212V212.848Z" fill="black"/>
                      <path d="M22.7879 219.636H16V226.424H22.7879V219.636Z" fill="black"/>
                      <path d="M36.3636 219.636H29.5758V226.424H36.3636V219.636Z" fill="black"/>
                      <path d="M43.1515 219.636H36.3636V226.424H43.1515V219.636Z" fill="black"/>
                      <path d="M49.9394 219.636H43.1515V226.424H49.9394V219.636Z" fill="black"/>
                      <path d="M63.5152 219.636H56.7273V226.424H63.5152V219.636Z" fill="black"/>
                      <path d="M77.0909 219.636H70.303V226.424H77.0909V219.636Z" fill="black"/>
                      <path d="M83.8788 219.636H77.0909V226.424H83.8788V219.636Z" fill="black"/>
                      <path d="M111.03 219.636H104.242V226.424H111.03V219.636Z" fill="black"/>
                      <path d="M117.818 219.636H111.03V226.424H117.818V219.636Z" fill="black"/>
                      <path d="M138.182 219.636H131.394V226.424H138.182V219.636Z" fill="black"/>
                      <path d="M172.121 219.636H165.333V226.424H172.121V219.636Z" fill="black"/>
                      <path d="M192.485 219.636H185.697V226.424H192.485V219.636Z" fill="black"/>
                      <path d="M22.7879 226.424H16V233.212H22.7879V226.424Z" fill="black"/>
                      <path d="M63.5152 226.424H56.7273V233.212H63.5152V226.424Z" fill="black"/>
                      <path d="M83.8788 226.424H77.0909V233.212H83.8788V226.424Z" fill="black"/>
                      <path d="M90.6667 226.424H83.8788V233.212H90.6667V226.424Z" fill="black"/>
                      <path d="M117.818 226.424H111.03V233.212H117.818V226.424Z" fill="black"/>
                      <path d="M131.394 226.424H124.606V233.212H131.394V226.424Z" fill="black"/>
                      <path d="M138.182 226.424H131.394V233.212H138.182V226.424Z" fill="black"/>
                      <path d="M151.758 226.424H144.97V233.212H151.758V226.424Z" fill="black"/>
                      <path d="M165.333 226.424H158.545V233.212H165.333V226.424Z" fill="black"/>
                      <path d="M172.121 226.424H165.333V233.212H172.121V226.424Z" fill="black"/>
                      <path d="M185.697 226.424H178.909V233.212H185.697V226.424Z" fill="black"/>
                      <path d="M192.485 226.424H185.697V233.212H192.485V226.424Z" fill="black"/>
                      <path d="M199.273 226.424H192.485V233.212H199.273V226.424Z" fill="black"/>
                      <path d="M219.636 226.424H212.848V233.212H219.636V226.424Z" fill="black"/>
                      <path d="M22.7879 233.212H16V240H22.7879V233.212Z" fill="black"/>
                      <path d="M29.5758 233.212H22.7879V240H29.5758V233.212Z" fill="black"/>
                      <path d="M36.3636 233.212H29.5758V240H36.3636V233.212Z" fill="black"/>
                      <path d="M43.1515 233.212H36.3636V240H43.1515V233.212Z" fill="black"/>
                      <path d="M49.9394 233.212H43.1515V240H49.9394V233.212Z" fill="black"/>
                      <path d="M56.7273 233.212H49.9394V240H56.7273V233.212Z" fill="black"/>
                      <path d="M63.5152 233.212H56.7273V240H63.5152V233.212Z" fill="black"/>
                      <path d="M97.4546 233.212H90.6667V240H97.4546V233.212Z" fill="black"/>
                      <path d="M158.545 233.212H151.758V240H158.545V233.212Z" fill="black"/>
                      <path d="M178.909 233.212H172.121V240H178.909V233.212Z" fill="black"/>
                      <path d="M240 233.212H233.212V240H240V233.212Z" fill="black"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2251_7858">
                        <rect width="256" height="256" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-neutral-500 mb-6">
                Or open this link on your iPhone:
              </p>
              
              <a
                href="https://testflight.apple.com/join/7tp4bYZh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-white bg-gray-900 dark:bg-white dark:text-neutral-900 hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-[1.02] transition-all duration-200 mb-4"
              >
                Open TestFlight Link
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
