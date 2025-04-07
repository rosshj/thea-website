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
            src="/images/blog/studio-portrait-setup.jpg"
            alt="Studio portrait session with softbox lighting creating dramatic shadows"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center text-sm text-gray-200 mb-4">
              <span>March 10, 2024</span>
              <span className="mx-2">•</span>
              <span>10 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Studio Photography: Mastering Spot Metering</h1>
            <p className="text-xl text-gray-200">Control your light. Nail your exposure. One spot at a time.</p>
          </div>
        </div>
      </div>

      {/* Content section with readable width */}
      <article className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Studio Photography Demands Precision</h2>
            <p className="text-gray-700 mb-6">
              Shooting in a studio gives you complete control over lighting, which is one of the reasons it's so popular. You can shape shadows, highlight textures, and create just the mood you want. But with that control comes responsibility—your exposure has to be spot-on.
            </p>
            <p className="text-gray-700 mb-6">
              Unlike natural light situations, where the environment can help fill in shadows or create even exposure, studio lighting is often more dramatic and directional. One side of the subject might be fully lit while the other falls into deep shadow. That means average or automatic metering modes can struggle, often giving you exposure that's off by a stop or more.
            </p>
            <p className="text-gray-700 mb-6">
              This is where spot metering becomes an essential part of your workflow.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Spot Metering Does in the Studio</h2>
            <p className="text-gray-700 mb-6">
              Spot metering allows you to tell your camera—or your light meter—exactly what part of your scene you want to expose correctly. That might be a model's cheekbone, a highlight on a product, or the edge of a backlit fabric.
            </p>
            <p className="text-gray-700 mb-6">
              Instead of averaging the light across the entire frame, you're saying: "I want this part to be right—ignore the rest."
            </p>
            <p className="text-gray-700 mb-6">
              This is especially useful for:
            </p>
            <ul className="list-disc pl-8 mb-6 text-gray-700">
              <li>Portraits with dramatic lighting (like Rembrandt or split light)</li>
              <li>Product photography where highlights and shadows matter</li>
              <li>Scenes with bright backdrops or reflective surfaces</li>
            </ul>
            <p className="text-gray-700 mb-6">
              It also lets you maintain consistency across shots. Once you find the exposure that works for your subject under your lighting setup, you can meter that exact same spot for every frame—so your results don't vary from shot to shot.
            </p>
            
            <div className="relative h-96 my-10 rounded-lg overflow-hidden">
              <Image
                src="/images/blog/dramatic-portrait.jpg"
                alt="Black and white portrait of a man in a hat with dramatic lighting"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-sm">
                Spot metering lets you expose for the light you've carefully crafted in the studio.
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Spot Metering vs. Incident Light Meters</h2>
            <p className="text-gray-700 mb-6">
              Many studio photographers use handheld incident light meters, which measure the light falling on a subject rather than the light reflected from it. These meters are great—but they're not the only way.
            </p>
            <p className="text-gray-700 mb-6">
              If you don't have a handheld meter (or don't want to carry one), spot metering gives you a simple, accessible alternative. By metering off a carefully chosen point on your subject—like a midtone on the skin or fabric—you can achieve a similar result, especially if you understand how tones affect your meter reading.
            </p>
            <p className="text-gray-700 mb-6">
              The key is to know how the subject you're metering compares to a midtone. If it's lighter, you'll need to increase exposure slightly. If it's darker, you may need to reduce it. With a little practice, this becomes second nature.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
            <p className="text-gray-700 mb-6">
              In the studio, the lighting is in your hands—but exposure still takes precision. Spot metering gives you the accuracy you need to bring your vision to life. It helps you meter intentionally, expose consistently, and get the most out of the lighting you've worked hard to set up.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you're shooting fashion, products, or portraits, learning to use spot metering can elevate your work—giving you more creative control and fewer exposure surprises when you load your film or review your files.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Thea Makes It Easy</h2>
            <p className="text-gray-700 mb-6">
              If you're looking for a simple, reliable way to meter in your studio, Thea is a great tool to keep in your pocket. Built for iPhone, Thea gives you accurate spot metering using your phone's camera, with real-time readings that reflect the light in your scene.
            </p>
            <p className="text-gray-700 mb-6">
              You can point your phone directly at your subject, choose your preferred metering mode (aperture priority, shutter priority, or manual), and tap to lock the reading. This makes it easy to check different parts of the setup—from highlights to shadows—and get consistent results throughout your shoot.
            </p>
            <p className="text-gray-700 mb-6">
              For film photographers, Thea lets you set a fixed ISO and limit your shutter speed or aperture based on your gear. It's especially handy if you're shooting with cameras that don't have built-in meters or you just want a fast way to double-check your light.
            </p>
            <p className="text-gray-700 mb-6">
              The best part? It's free, easy to use, and designed to help you learn as you go—no extra gear or complex settings needed.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
} 