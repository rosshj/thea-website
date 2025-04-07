import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollButton from '@/components/ui/ScrollButton';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[calc(80vh-4rem)] flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 text-gray-900">
            A beautiful light meter for everyone.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Thea is a free, beautifully simple light meter for iPhone—made for every kind of photographer, anywhere you shoot.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="https://apps.apple.com/app/thea"
              className="inline-flex items-center px-8 py-3 text-base font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 transition-all duration-200 min-h-[48px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
                <g className="nc-icon-wrapper" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.3091 6.48971C13.8886 6.26249 14.614 6.00143 15.6913 6.00143C17.3749 6.00143 19.1523 6.89003 20.3404 8.35613L21.0976 9.29055L20.0406 9.86449C17.5093 11.2391 17.8608 14.8633 20.4912 15.8476L21.4953 16.2234L21.0506 17.199C20.5752 18.2418 20.3284 18.7499 19.6885 19.7119C18.7074 21.192 17.3565 22.9787 15.3958 22.997C14.1793 23.0084 13.2116 22.1656 12.0053 22.172C10.7909 22.1784 9.80329 23 8.57946 22.9999L8.57073 22.9999C6.64549 22.9829 5.31146 21.3315 4.3393 19.8664C1.80437 16.0461 1.46451 11.568 3.19812 8.92508C4.43251 7.04322 6.3164 6.00413 8.20878 6.00413C9.15354 6.00413 9.91949 6.26847 10.5172 6.47873C11.1502 6.70144 11.5462 6.84 11.9823 6.84C12.4376 6.84 12.7407 6.71256 13.3091 6.48971Z" fill="currentColor"></path>
                  <path d="M15.3653 3.793C16.0815 2.87425 16.5703 1.63176 16.373 0.305766C15.203 0.386016 13.89 1.07576 13.0913 2.0455C12.3668 2.92525 11.7675 4.231 12 5.5C13.2765 5.53975 14.598 4.77775 15.3653 3.793Z" fill="currentColor" data-color="color-2"></path>
                </g>
              </svg>
              Download for iOS
            </Link>
            <ScrollButton
              targetId="features-grid"
              className="inline-flex items-center px-8 py-3 text-base font-medium rounded-full border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 min-h-[48px]"
            >
              Learn More
            </ScrollButton>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features-grid" className="bg-white mb-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="gradient-blue-yellow rounded-2xl overflow-hidden flex flex-col">
              <div className="relative aspect-square">
                <Image
                  src="/images/home/iphone-pocket.jpg"
                  alt="Person with iPhone in pocket"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 gradient-box bg-white/10 flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">A meter wherever you go</h3>
                <p className="text-gray-700">
                  Your phone is always with you—so is Thea. Get quick, accurate readings anywhere you shoot.
                </p>
              </div>
            </div>

            <div className="gradient-blue-purple rounded-2xl overflow-hidden flex flex-col">
              <div className="relative aspect-square">
                <Image
                  src="/images/home/film-camera.jpg"
                  alt="Medium format film camera with waterfall view in viewfinder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 gradient-box bg-white/10 flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Accurate readings</h3>
                <p className="text-gray-700">
                  Thea uses your iPhone's camera to deliver real-time exposure readings—so you can shoot with confidence.
                </p>
              </div>
            </div>

            <div className="gradient-orange-pink rounded-2xl overflow-hidden flex flex-col">
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1452697620382-f6543ead73b5?q=80&w=2000&auto=format&fit=crop"
                  alt="Camera settings display"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 gradient-box bg-white/10 flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">An intuitive interface</h3>
                <p className="text-gray-700">
                  No clutter. No confusion. Just a clean, minimal design that helps you focus on creating great photos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="mb-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="bg-gray-50 rounded-3xl py-10 px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Loved by photographers of all kinds
              </h2>
              <p className="text-xl text-gray-600">
                Whether you're shooting city streets, medium format film, or just getting started—Thea was built to be simple, beautiful, and useful for everyone.
              </p>
            </div>
            
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex -space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Made for the streets.</h4>
                <p className="text-gray-600 mb-4">
                  "As a street photographer, I need to move quick. Thea gives me accurate readings in seconds, without any fuss."
                </p>
                <span className="text-sm text-gray-500">Jordan R. - Street Photographer</span>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex -space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">A perfect light meter for film.</h4>
                <p className="text-gray-600 mb-4">
                  "I shoot mostly 35mm and Thea has replaced my handheld meter. It's accurate, easy to use, and always with me."
                </p>
                <span className="text-sm text-gray-500">Lena M. - Film Photographer</span>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex -space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Simple, elegant, and exactly what I need.</h4>
                <p className="text-gray-600 mb-4">
                  "I'm not a pro—I just love taking photos. Thea's design is so clean and intuitive, I actually enjoy metering now."
                </p>
                <span className="text-sm text-gray-500">Sam D. - Amateur Photographer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="bg-gray-900 text-white rounded-3xl py-10 px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Try Thea—free on iOS.
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              A simple, beautiful light meter built for photographers of all levels. No ads, no cost—just a tool to help you shoot with confidence.
            </p>
            <Link
              href="https://apps.apple.com/app/thea"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full text-gray-900 bg-white hover:bg-gray-100 transition-all duration-200 min-h-[48px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
                <g className="nc-icon-wrapper" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.3091 6.48971C13.8886 6.26249 14.614 6.00143 15.6913 6.00143C17.3749 6.00143 19.1523 6.89003 20.3404 8.35613L21.0976 9.29055L20.0406 9.86449C17.5093 11.2391 17.8608 14.8633 20.4912 15.8476L21.4953 16.2234L21.0506 17.199C20.5752 18.2418 20.3284 18.7499 19.6885 19.7119C18.7074 21.192 17.3565 22.9787 15.3958 22.997C14.1793 23.0084 13.2116 22.1656 12.0053 22.172C10.7909 22.1784 9.80329 23 8.57946 22.9999L8.57073 22.9999C6.64549 22.9829 5.31146 21.3315 4.3393 19.8664C1.80437 16.0461 1.46451 11.568 3.19812 8.92508C4.43251 7.04322 6.3164 6.00413 8.20878 6.00413C9.15354 6.00413 9.91949 6.26847 10.5172 6.47873C11.1502 6.70144 11.5462 6.84 11.9823 6.84C12.4376 6.84 12.7407 6.71256 13.3091 6.48971Z" fill="currentColor"></path>
                  <path d="M15.3653 3.793C16.0815 2.87425 16.5703 1.63176 16.373 0.305766C15.203 0.386016 13.89 1.07576 13.0913 2.0455C12.3668 2.92525 11.7675 4.231 12 5.5C13.2765 5.53975 14.598 4.77775 15.3653 3.793Z" fill="currentColor" data-color="color-2"></path>
                </g>
              </svg>
              Download for iOS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 