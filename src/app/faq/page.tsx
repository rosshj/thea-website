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

const faqs = [
  {
    question: 'What is Thea?',
    answer: 'Thea is a professional light meter app for iOS that helps photographers achieve perfect exposure in any lighting condition. It combines the accuracy of traditional light meters with the convenience of a smartphone app.',
  },
  {
    question: 'How does Thea work?',
    answer: 'Thea uses your iPhone\'s camera and sensors to measure light levels in your scene. It can measure both incident light (light falling on your subject) and reflected light (light bouncing off your subject), giving you accurate exposure readings for your camera settings.',
  },
  {
    question: 'What types of photography is Thea best for?',
    answer: 'Thea is versatile and works great for all types of photography, including studio photography, portrait photography, landscape photography, and low-light photography. It\'s particularly useful when working with manual camera settings or when you need precise exposure control.',
  },
  {
    question: 'Do I need any additional hardware?',
    answer: 'No additional hardware is required! Thea works with your iPhone\'s built-in camera and sensors. However, for the most accurate readings, we recommend using the app in a controlled environment or with consistent lighting conditions.',
  },
  {
    question: 'Is Thea compatible with all iOS devices?',
    answer: 'Thea requires iOS 15.0 or later and works on iPhone models from the iPhone 12 and newer. This ensures you get the most accurate light measurements using the latest camera and sensor technology.',
  },
  {
    question: 'How accurate is Thea compared to traditional light meters?',
    answer: 'Thea is highly accurate and comparable to professional light meters in most situations. It uses advanced algorithms and calibration to provide precise readings. However, for the most critical professional work, we recommend cross-referencing with a traditional light meter.',
  },
  {
    question: 'Can I save my camera settings?',
    answer: 'Yes! Thea allows you to save custom presets for your camera settings and lighting scenarios. This makes it easy to quickly switch between different setups and maintain consistency across your shoots.',
  },
  {
    question: 'Does Thea work with all camera brands?',
    answer: 'Yes, Thea works with all camera brands and models. It provides universal exposure readings that you can apply to any camera\'s manual settings.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 py-28">
      <style jsx global>{`
        .icon-container {
          position: relative;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .icon-open, .icon-closed {
          position: absolute;
          top: 0;
          left: 0;
          transition: opacity 200ms ease;
        }
        
        .accordion-trigger[data-state="open"] .icon-open {
          opacity: 1;
        }
        
        .accordion-trigger[data-state="open"] .icon-closed {
          opacity: 0;
        }
        
        .accordion-trigger[data-state="closed"] .icon-open {
          opacity: 0;
        }
        
        .accordion-trigger[data-state="closed"] .icon-closed {
          opacity: 1;
        }

        .accordion-content {
          overflow: hidden;
          height: 0;
          transition: height 350ms cubic-bezier(0.33, 1, 0.68, 1);
        }
        
        .accordion-content[data-state="open"] {
          height: var(--radix-accordion-content-height);
        }
        
        .accordion-content-inner {
          padding: 20px 32px 24px;
          opacity: 0;
          transform: translateY(-8px);
          transition: all 200ms;
          transition-delay: 100ms;
        }
        
        .accordion-content[data-state="open"] .accordion-content-inner {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h1 
          className="text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600"
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
                className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden data-[state=open]:bg-white"
              >
                <Accordion.Header className="w-full">
                  <Accordion.Trigger 
                    className="w-full px-8 py-3 text-left flex justify-between items-center hover:bg-white transition-colors data-[state=open]:bg-white accordion-trigger min-h-[48px]"
                    style={{ position: 'relative' }}
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <div className="icon-container">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 18 18"
                        className="text-gray-500 icon-closed"
                      >
                        <g className="nc-icon-wrapper" fill="currentColor">
                          <path d="M9,13.5c-.192,0-.384-.073-.53-.22L2.22,7.03c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l5.72,5.72,5.72-5.72c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-6.25,6.25c-.146,.146-.338,.22-.53,.22Z"></path>
                        </g>
                      </svg>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 18 18"
                        className="text-gray-500 icon-open"
                      >
                        <g className="nc-icon-wrapper" fill="currentColor">
                          <path d="M9.53,4.72c-.293-.293-.768-.293-1.061,0L2.22,10.97c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l5.72-5.72,5.72,5.72c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-6.25-6.25Z"></path>
                        </g>
                      </svg>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="text-gray-600 bg-white accordion-content">
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