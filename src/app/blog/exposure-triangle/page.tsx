import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <div>
      {/* Full width hero section with the same width constraint as CTA */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mb-16">
        <div className="relative h-[70vh] rounded-3xl overflow-hidden">
          <Image
            src="/images/blog/exposure-triangle-diagram.jpg"
            alt="Camera settings showing aperture, shutter speed and ISO controls"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center text-sm text-gray-200 mb-4">
              <span>March 5, 2024</span>
              <span className="mx-2">•</span>
              <span>7 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">The Photography Exposure Triangle Explained</h1>
            <p className="text-xl text-gray-200">How aperture, shutter speed, and ISO work together—and how to get the balance right.</p>
          </div>
        </div>
      </div>

      {/* Content section with readable width */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Exposure Triangle?</h2>
            <p className="text-gray-700 mb-6">
              If you're just getting started with photography, you've probably heard the term "exposure triangle." It's the foundation of how cameras work—and it's not as complicated as it sounds.
            </p>
            <p className="text-gray-700 mb-6">
              The exposure triangle is made up of three settings that control how bright or dark your photo will be:
            </p>
            <ul className="list-disc pl-8 mb-6 text-gray-700">
              <li>Aperture – how wide your lens opens</li>
              <li>Shutter Speed – how long your camera's sensor (or film) is exposed to light</li>
              <li>ISO – how sensitive your sensor or film is to light</li>
            </ul>
            <p className="text-gray-700 mb-6">
              All three are connected. Change one, and it affects the others. That's why it's called a triangle—there's a balance involved.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why It Matters</h2>
            <p className="text-gray-700 mb-6">
              Understanding the exposure triangle helps you take control of your photos, rather than leaving everything up to auto mode. It lets you:
            </p>
            <ul className="list-disc pl-8 mb-6 text-gray-700">
              <li>Choose whether your photo is sharp or has motion blur</li>
              <li>Control how much of your scene is in focus (depth of field)</li>
              <li>Get the right brightness without sacrificing image quality</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Once you understand how these three settings interact, you can use them creatively instead of just technically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Aperture: Controlling Depth of Field</h2>
            <p className="text-gray-700 mb-6">
              Aperture refers to how wide the lens opens when taking a photo. It's measured in f-stops like f/2.8, f/5.6, or f/11.
            </p>
            <p className="text-gray-700 mb-6">
              A wider aperture (like f/1.8 or f/2.8) lets in more light and gives you a shallower depth of field, meaning only part of the image is in focus. This is great for portraits where you want a blurry background.
            </p>
            <p className="text-gray-700 mb-6">
              A narrower aperture (like f/8 or f/16) lets in less light but gives you more depth of field, so more of the image appears sharp—useful for landscapes or product photography.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Shutter Speed: Capturing Motion</h2>
            <p className="text-gray-700 mb-6">
              Shutter speed controls how long your camera's sensor or film is exposed to light. It's measured in seconds or fractions of a second—like 1/1000 (very fast) or 1/30 (slower).
            </p>
            <p className="text-gray-700 mb-6">
              A fast shutter speed (like 1/1000) freezes motion—great for sports, wildlife, or fast-moving subjects.
            </p>
            <p className="text-gray-700 mb-6">
              A slower shutter speed (like 1/10 or 1 second) lets in more light but can create motion blur. You might use this for artistic shots, low-light scenes, or to capture movement like waterfalls or car trails.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">ISO: Adjusting Light Sensitivity</h2>
            <p className="text-gray-700 mb-6">
              ISO measures how sensitive your sensor (or film) is to light. Lower numbers like ISO 100 or 200 are less sensitive, while higher numbers like ISO 1600 or 3200 are more sensitive.
            </p>
            <p className="text-gray-700 mb-6">
              Use low ISO when there's plenty of light—your images will be cleaner with less grain or noise.
            </p>
            <p className="text-gray-700 mb-6">
              Use higher ISO in darker settings when you need to brighten things up—but expect some added grain, especially with digital sensors.
            </p>
            <p className="text-gray-700 mb-6">
              With film, ISO is set by the roll you're using (like ISO 400 film), so you'll want to meter your light based on that fixed number.
            </p>
            
            <div className="relative h-96 my-10 rounded-lg overflow-hidden">
              <Image
                src="/images/blog/exposure-comparison.jpg"
                alt="Three versions of the same photo with different exposure settings"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-sm">
                Each side of the triangle changes how your photo looks—and feels.
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Balancing the Triangle</h2>
            <p className="text-gray-700 mb-6">
              The real skill comes in balancing the three settings based on the lighting and what kind of image you want to create. Here's a quick example:
            </p>
            <p className="text-gray-700 mb-6">
              Let's say you're shooting a portrait in natural light, but it's starting to get dark. You might:
            </p>
            <ul className="list-disc pl-8 mb-6 text-gray-700">
              <li>Open your aperture to f/2.8 to let in more light</li>
              <li>Lower your shutter speed a bit, but not too much or you'll get blur</li>
              <li>Raise your ISO slightly to brighten the image without too much noise</li>
            </ul>
            <p className="text-gray-700 mb-6">
              There's no one perfect setting—it's all about tradeoffs. The more you practice, the more intuitive it becomes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
            <p className="text-gray-700 mb-6">
              Learning the exposure triangle is one of the biggest steps in becoming a confident photographer. It takes a bit of trial and error at first, but once it clicks, you'll be able to look at a scene and know exactly how to expose it.
            </p>
            <p className="text-gray-700 mb-6">
              You'll start to see light differently. You'll think about your photos more intentionally. And you'll have way more creative control over the final image.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Thea Helps You Practice</h2>
            <p className="text-gray-700 mb-6">
              If you're learning manual photography or shooting film, Thea makes understanding the exposure triangle much easier. It's a free light metering app for iPhone that shows you real-time exposure readings based on your current settings.
            </p>
            <p className="text-gray-700 mb-6">
              You can choose between aperture priority, shutter priority, or manual mode—depending on which part of the triangle you want to control. Thea shows you the matching settings that complete the triangle for a correct exposure.
            </p>
            <p className="text-gray-700 mb-6">
              You can also limit your aperture, shutter speed, or ISO to match your camera or film, which is especially helpful when you're learning how different settings interact.
            </p>
            <p className="text-gray-700 mb-6">
              The best part? You can try things out without even picking up your camera. Use Thea to meter a scene, adjust settings, and see how the exposure changes. It's a hands-on way to understand the triangle—without wasting a roll of film or guessing your settings.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
} 