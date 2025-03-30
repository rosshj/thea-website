import React from 'react';
import Image from 'next/image';

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1520549233664-03f65c1d1327?q=80&w=2000&auto=format&fit=crop"
          alt="Professional photography studio setup"
          fill
          className="object-cover"
        />
      </div>
      
      <header className="mb-12">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>March 10, 2024</span>
          <span className="mx-2">•</span>
          <span>10 min read</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Studio Photography: Mastering Spot Metering</h1>
        <div className="flex items-center">
          <span className="text-gray-600">By Sarah Johnson</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Importance of Precise Metering</h2>
          <p className="text-gray-700 mb-6">
            In studio photography, precise light metering is crucial for achieving consistent, professional results. Spot metering provides the accuracy needed to capture perfect exposures in controlled lighting environments. The ability to measure light with pinpoint accuracy becomes especially valuable when working with multiple light sources and complex lighting setups.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Setting Up Your Studio</h2>
          <p className="text-gray-700 mb-6">
            A successful studio photography session begins with proper lighting setup. Start by positioning your main light, often called the key light, at a 45-degree angle to your subject. This creates dimensional lighting that brings out the form and texture of your subject. The fill light should be positioned to complement the key light, helping to reduce shadows and control contrast in your images.
          </p>
          <p className="text-gray-700 mb-6">
            To add depth and separation to your images, consider incorporating a hair light or rim light. This additional light source, when properly positioned, creates a subtle highlight around your subject, helping them stand out from the background. Finally, shape and control your light using modifiers such as softboxes, umbrellas, or beauty dishes. These tools help you craft the exact quality of light you're seeking, from soft and flattering to dramatic and contrasty.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Areas to Meter</h2>
          <p className="text-gray-700 mb-6">
            When working in a studio environment, certain areas require particular attention when spot metering. The subject's face, especially the cheek area in portraits, serves as a crucial reference point for establishing your base exposure. This area typically should be exposed to render natural skin tones. Pay special attention to the highlights in your scene, as they can easily become overexposed and lose detail.
          </p>
          <p className="text-gray-700 mb-6">
            Shadow areas deserve equal consideration, as maintaining detail in these darker regions contributes to the overall depth of your image. Take time to meter your background separately, ensuring proper separation between your subject and their surroundings. This attention to detail in metering helps create images with proper depth and dimensionality.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Light Ratios</h2>
          <p className="text-gray-700 mb-6">
            Light ratios form the foundation of studio lighting control. The relationship between your key light and fill light typically follows established ratios, with 2:1 or 3:1 being common choices for standard portraiture. These ratios create natural-looking dimension while maintaining detail in shadow areas. The difference in exposure between your main subject and the background usually spans 1-2 stops, creating separation without the background becoming too dark or distracting.
          </p>
          <p className="text-gray-700 mb-6">
            Careful attention to highlights and shadows ensures your images retain detail throughout their tonal range. By measuring these areas independently, you can maintain the perfect balance between light and shadow, creating images with depth and dimension while avoiding problematic overexposure or blocked-up shadows.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Thea in the Studio</h2>
          <p className="text-gray-700 mb-6">
            Thea's advanced spot metering capabilities make it an invaluable tool in the studio environment. The precise 1° measuring angle allows for incredibly accurate readings of specific areas in your scene. As you work, the real-time exposure feedback helps you understand exactly how your adjustments affect different parts of the image. This immediate feedback loop accelerates the learning process and helps you make more informed decisions about your lighting.
          </p>
          <p className="text-gray-700 mb-6">
            The ability to easily compare readings from different areas of your scene helps maintain consistent ratios between light sources. Additionally, Thea's preset system allows you to save and recall successful lighting setups, streamlining your workflow and ensuring consistency across multiple sessions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Troubleshooting Common Issues</h2>
          <p className="text-gray-700 mb-6">
            Even in a controlled studio environment, several factors can affect your metering accuracy. The position and distance of your light modifiers can significantly impact your readings, so pay attention to their placement and angle relative to your subject. Power settings on your strobes need regular verification, as they can drift or be accidentally bumped between shots.
          </p>
          <p className="text-gray-700 mb-6">
            Ambient light interference can be particularly troublesome in studios with windows or mixed lighting. Take time to identify and control any unwanted light sources. Finally, double-check your camera settings, including ISO, aperture, and shutter speed, as these fundamental exposure controls work in concert with your lighting setup to create the final image.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <p className="text-gray-700">
            Mastering spot metering in the studio takes practice, but the results are worth the effort. With tools like Thea and a solid understanding of light measurement, you'll be able to achieve consistent, professional-quality results in your studio work. Remember that each session is an opportunity to refine your technique and deepen your understanding of light control.
          </p>
        </section>
      </div>
    </article>
  );
} 