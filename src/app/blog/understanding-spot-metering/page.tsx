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
            src="/images/blog/spot-metering-portrait.jpg"
            alt="Woman with blonde hair surrounded by green foliage - perfect for spot metering"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center text-sm text-gray-200 mb-4">
              <span>March 15, 2024</span>
              <span className="mx-2">•</span>
              <span>8 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Understanding Spot Metering: A Beginner's Guide</h1>
            <p className="text-xl text-gray-200">What it is, why it matters, and how to start using it with confidence.</p>
          </div>
        </div>
      </div>

      {/* Content section with readable width */}
      <article className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Spot Metering?</h2>
            <p className="text-gray-700 mb-6">
              If you've ever taken a photo where your subject looked too dark or too bright, you're not alone. That usually happens because your camera—or phone—is trying to expose for everything in the frame, not just the part you care about.
            </p>
            <p className="text-gray-700 mb-6">
              That's where spot metering comes in. It lets you measure the light in one small part of the scene—like someone's face, or a detail you want to highlight—and base your exposure on just that spot.
            </p>
            <p className="text-gray-700 mb-6">
              Instead of averaging the light from the whole image, spot metering says: "Just measure this one area." It's incredibly useful in scenes with high contrast, where you want to make sure one specific subject is correctly exposed.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Should You Use It?</h2>
            <p className="text-gray-700 mb-6">
              Let's say you're taking a portrait of a friend who's standing in front of a bright window. If your camera meters for the whole scene, your friend might end up underexposed while the window looks perfect.
            </p>
            <p className="text-gray-700 mb-6">
              But if you meter just for their face, you'll get the exposure you actually want—even if the background ends up bright or blown out.
            </p>
            <p className="text-gray-700 mb-6">
              This kind of precision is especially helpful when you're shooting film, where you can't see your results immediately. Spot metering gives you a reliable way to get your exposure right, even when the lighting is tricky.
            </p>
            
            <div className="relative h-96 my-10 rounded-lg overflow-hidden">
              <Image
                src="/images/blog/window-portrait-2.jpg"
                alt="Woman with dark hair by a window in low light - perfect for spot metering"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-sm">
                Spot metering helps your subject come out properly exposed—even in tricky light.
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Does Spot Metering Work?</h2>
            <p className="text-gray-700 mb-6">
              Spot metering works by measuring a small part of the scene and calculating the exposure as if that area were a medium gray. This is the baseline most meters use—what's often called "18% gray." If you're metering something darker or lighter than that, you'll need to adjust accordingly.
            </p>
            <p className="text-gray-700 mb-6">
              For example, if you point your meter at a white wall, it might try to darken it to gray—meaning your photo will be underexposed. If you meter off a dark jacket, it might brighten it too much, resulting in overexposure.
            </p>
            <p className="text-gray-700 mb-6">
              Understanding how different tones affect the meter's reading is a key part of learning how to use spot metering well. It takes a little practice, but once you get it, you'll be able to predict and adjust for these situations with ease.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Talk: Why It's Worth Learning</h2>
            <p className="text-gray-700 mb-6">
              Spot metering isn't just for pros. It's for anyone who wants a little more control over how their photos turn out. Once you understand how to expose for the subject you care about—especially in challenging lighting—you'll see a huge difference in your results.
            </p>
            <p className="text-gray-700 mb-6">
              It also helps build your overall understanding of how light works, which will carry over into every other part of your photography.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Thea Makes It Easy</h2>
            <p className="text-gray-700 mb-6">
              If you're new to metering or just want a simple tool that works, Thea is designed to make spot metering feel natural. You open the app, point your phone at the subject, and see live exposure readings. You can choose between aperture priority, shutter priority, or manual mode—just like on a real camera.
            </p>
            <p className="text-gray-700 mb-6">
              When you find the right reading, tap to lock it. This is helpful if you want to reframe your shot without losing your settings. You can even switch to the front-facing camera if you're metering for a selfie or a self-portrait.
            </p>
            <p className="text-gray-700 mb-6">
              Thea also lets you set your ISO and limit your aperture or shutter speed—especially useful if you're shooting film and want the readings to match your actual gear. And it's completely free, with no ads or clutter.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
} 