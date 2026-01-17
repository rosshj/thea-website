'use client';

import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedGradient from '@/components/ui/AnimatedGradient';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'What is Thea?',
    answer: 'Thea is a professional-grade spot light meter app for iOS designed for photographers. It transforms your iPhone into a precise light meter, helping you calculate accurate exposure settings for both film and digital photography. With a clean, modern interface and intuitive controls, Thea makes light metering accessible for photographers of all skill levels.',
  },
  {
    question: 'How does Thea work?',
    answer: 'Thea uses your iPhone\'s camera to continuously measure light at the center of the frame using spot metering. It then calculates the appropriate exposure settings using the standard photographic exposure equation. Simply point your phone at your subject, and Thea will provide real-time exposure readings that you can dial into your camera.',
  },
  {
    question: 'What exposure modes does Thea support?',
    answer: (
      <>
        <p className="mb-3">Thea offers three exposure modes to match your shooting style:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Aperture Priority:</strong> Set your desired aperture and ISO, and Thea calculates the recommended shutter speed</li>
          <li><strong>Shutter Priority:</strong> Set your desired shutter speed and ISO, and Thea calculates the recommended aperture</li>
          <li><strong>Manual:</strong> Set all values yourself, and Thea shows you the exposure offset (how many stops over or under exposed your settings are)</li>
        </ul>
      </>
    ),
  },
  {
    question: 'What types of photography is Thea best for?',
    answer: (
      <>
        <p className="mb-3">Thea is ideal for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Film photography:</strong> Essential for cameras without built-in meters, or for overriding your camera\'s meter with spot readings</li>
          <li><strong>Studio photography:</strong> Get precise readings for controlled lighting setups</li>
          <li><strong>Landscape photography:</strong> Meter specific areas of your scene for accurate exposures</li>
          <li><strong>Low light photography:</strong> Accurate readings in challenging lighting conditions</li>
          <li><strong>Learning photography:</strong> Understand the relationship between aperture, shutter speed, and ISO</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Do I need any additional hardware?',
    answer: 'No additional hardware is required. Thea uses your iPhone\'s built-in camera sensor to measure light. Just open the app, point at your subject, and get instant exposure readings.',
  },
  {
    question: 'Is Thea compatible with my iPhone?',
    answer: 'Thea requires iOS 17.0 or later and works on any iPhone with a camera. For the most accurate readings, we recommend using a recent iPhone model, though Thea will work on any compatible device.',
  },
  {
    question: 'How accurate is Thea compared to traditional light meters?',
    answer: 'Thea uses the same exposure equation as traditional light meters and professional cameras. The accuracy depends on your iPhone\'s camera sensor, but Thea includes calibration algorithms to deliver readings comparable to dedicated handheld meters. Many photographers find Thea provides readings within a third of a stop of professional meters—more than accurate enough for most photography needs.',
  },
  {
    question: 'Can I save my camera and lens settings?',
    answer: (
      <>
        <p className="mb-3">Yes. Thea includes a Shooting Profile system that lets you save configurations for your cameras, lenses, and film stocks:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Camera profiles:</strong> Store your camera\'s available ISO, aperture, and shutter speed ranges</li>
          <li><strong>Lens profiles:</strong> Save your lens\'s maximum and minimum aperture values</li>
          <li><strong>Film profiles:</strong> Keep track of your favorite film stocks and their ISO ratings</li>
        </ul>
        <p className="mt-3">This makes it easy to switch between different camera setups without reconfiguring settings each time.</p>
      </>
    ),
  },
  {
    question: 'What settings ranges does Thea support?',
    answer: (
      <>
        <p className="mb-3">Thea supports an extensive range of exposure settings:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>ISO:</strong> 25 to 409,600</li>
          <li><strong>Aperture:</strong> f/0.7 to f/64</li>
          <li><strong>Shutter Speed:</strong> 30 seconds to 1/32000 second</li>
          <li><strong>Exposure Compensation:</strong> -5 to +5 EV</li>
          <li><strong>Stop Increments:</strong> Full stops, half stops, or third stops</li>
        </ul>
        <p className="mt-3">You can customize the available ranges in Settings to match your specific camera\'s capabilities.</p>
      </>
    ),
  },
  {
    question: 'Does Thea work with all camera brands?',
    answer: 'Yes. Thea provides exposure readings that you apply to your camera manually, so it works with any camera—digital or film, regardless of brand. Whether you shoot Canon, Nikon, Sony, Fujifilm, Leica, Hasselblad, or a vintage film camera, Thea gives you the exposure values to dial in.',
  },
  {
    question: 'Can I lock my light reading?',
    answer: 'Yes. Thea includes a reading lock feature that freezes the current light measurement. This is useful when you want to meter a specific area of your scene, then recompose your shot without the reading changing. Simply tap to lock, and tap again to unlock and resume continuous metering.',
  },
  {
    question: 'How do I know if my exposure is out of range?',
    answer: 'When the calculated exposure exceeds your camera\'s settings range, Thea displays visual warnings. The readout will blink with an underexposure icon when there\'s not enough light for your current settings, or an overexposure icon when there\'s too much light. This helps you quickly identify when you need to adjust your ISO or other settings.',
  },
  {
    question: 'Is Thea free?',
    answer: 'Yes. Thea is completely free with no ads and no in-app purchases. It\'s built as a simple, useful tool for photographers.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 py-28">
      <style jsx global>{`
        .accordion-item {
          transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .accordion-item[data-state="open"] {
          box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.08);
        }

        .accordion-chevron {
          transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }
        
        .accordion-trigger[data-state="open"] .accordion-chevron {
          transform: rotate(180deg);
        }

        .accordion-content {
          overflow: hidden;
          will-change: height;
        }
        
        .accordion-content[data-state="closed"] {
          animation: accordion-close 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .accordion-content[data-state="open"] {
          animation: accordion-open 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes accordion-open {
          from {
            height: 0;
          }
          to {
            height: var(--radix-accordion-content-height);
          }
        }
        
        @keyframes accordion-close {
          from {
            height: var(--radix-accordion-content-height);
          }
          to {
            height: 0;
          }
        }
        
        .accordion-content-inner {
          padding: 0 32px 24px;
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 300ms ease, transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .accordion-content[data-state="open"] .accordion-content-inner {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 100ms;
        }
        
        .accordion-content[data-state="closed"] .accordion-content-inner {
          transition-delay: 0ms;
        }
      `}</style>
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h1 
          className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          Find answers to common questions about Thea and light metering.
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <Accordion.Root
          type="single"
          collapsible
          className="space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Accordion.Item
                value={`item-${index}`}
                className="accordion-item bg-gray-50 dark:bg-neutral-800/10 rounded-2xl border border-gray-100 dark:border-neutral-700/10 overflow-hidden data-[state=open]:bg-white dark:data-[state=open]:bg-neutral-800/15 data-[state=open]:border-gray-200 dark:data-[state=open]:border-neutral-600/15"
              >
                <Accordion.Header className="w-full">
                  <Accordion.Trigger 
                    className="w-full px-8 py-5 text-left flex justify-between items-center gap-4 hover:bg-white/50 dark:hover:bg-neutral-700/30 transition-colors data-[state=open]:bg-white dark:data-[state=open]:bg-transparent accordion-trigger min-h-[48px]"
                  >
                    <span className="text-lg font-medium text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 18 18"
                      className="text-gray-400 dark:text-neutral-500 accordion-chevron"
                    >
                      <path 
                        fill="currentColor"
                        d="M9,13.5c-.192,0-.384-.073-.53-.22L2.22,7.03c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l5.72,5.72,5.72-5.72c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-6.25,6.25c-.146,.146-.338,.22-.53,.22Z"
                      />
                    </svg>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="text-gray-600 dark:text-neutral-400 bg-white dark:bg-transparent accordion-content">
                  <div className="accordion-content-inner">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </motion.div>
    </div>
  );
} 