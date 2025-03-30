import React from 'react';
import Image from 'next/image';

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1610448721566-47369c768e70?q=80&w=2000&auto=format&fit=crop"
          alt="Camera settings dials showing aperture and shutter speed"
          fill
          className="object-cover"
        />
      </div>
      
      <header className="mb-12">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>March 5, 2024</span>
          <span className="mx-2">•</span>
          <span>7 min read</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">The Photography Exposure Triangle Explained</h1>
        <div className="flex items-center">
          <span className="text-gray-600">By Mike Wilson</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the Exposure Triangle</h2>
          <p className="text-gray-700 mb-6">
            The exposure triangle is the foundation of photography. It consists of three elements that work together to create a properly exposed image: aperture, shutter speed, and ISO. Understanding how these elements interact is crucial for taking control of your photography. Each element not only affects exposure but also brings its own creative possibilities to your images.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Aperture: Controlling Light and Depth</h2>
          <p className="text-gray-700 mb-6">
            Aperture refers to the opening in your lens that lets light through to your camera's sensor. It's measured in f-stops, and understanding its dual nature is key to mastering exposure. Wider apertures, denoted by lower f-numbers like f/1.8, allow more light to reach your sensor while creating a shallow depth of field. This creates the beautiful background blur that many photographers desire for portraits and detail shots.
          </p>
          <p className="text-gray-700 mb-6">
            Conversely, smaller apertures, indicated by higher f-numbers like f/16, restrict the amount of light but increase depth of field, keeping more of your scene in focus. This makes them ideal for landscape photography where you want everything sharp from foreground to background. Each full stop change in aperture either halves or doubles the amount of light, giving you precise control over your exposure.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Shutter Speed: Controlling Motion</h2>
          <p className="text-gray-700 mb-6">
            Shutter speed determines how long your sensor is exposed to light, and it's your primary tool for controlling motion in your images. Fast shutter speeds, such as 1/1000th of a second, freeze action but require more light or higher ISO settings to achieve proper exposure. These speeds are essential for sports photography or capturing fast-moving subjects without blur.
          </p>
          <p className="text-gray-700 mb-6">
            Slower shutter speeds, like 1/30th of a second or longer, allow more light to reach your sensor but may introduce motion blur if either the camera or subject moves during exposure. This can be used creatively to show movement in your images, such as flowing water or light trails. As a general rule, when shooting handheld, try to keep your shutter speed at least as fast as the reciprocal of your lens's focal length to avoid camera shake.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">ISO: Controlling Light Sensitivity</h2>
          <p className="text-gray-700 mb-6">
            ISO determines your camera sensor's sensitivity to light, and it's often the final element photographers adjust after setting their desired aperture and shutter speed. Lower ISO values, such as 100, produce the cleanest images with minimal noise but require more light to achieve proper exposure. This makes low ISO settings ideal for bright conditions or when using a tripod to allow longer exposures.
          </p>
          <p className="text-gray-700 mb-6">
            Higher ISO settings, like 3200 or above, allow you to shoot in darker conditions or maintain faster shutter speeds, but at the cost of increased noise in your images. Modern cameras handle high ISO better than ever, but it's still best to use the lowest ISO possible for your shooting conditions. Your camera's base ISO typically offers the best image quality and should be your starting point when possible.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Balancing the Triangle</h2>
          <p className="text-gray-700 mb-6">
            The key to mastering exposure lies in understanding how these three elements work together. When you adjust one element, you often need to compensate by changing another to maintain the same exposure. For example, if you want a faster shutter speed to freeze motion, you'll need to either widen your aperture or increase your ISO to compensate for the reduced light.
          </p>
          <p className="text-gray-700 mb-6">
            Different combinations of these settings can achieve the same exposure while creating different creative effects. For instance, you might choose a wide aperture and fast shutter speed for a portrait with a blurred background, or a small aperture and slower shutter speed for a landscape with everything in focus. The specific requirements of your scene and your creative vision will guide which combination works best.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Scenarios and Settings</h2>
          <p className="text-gray-700 mb-6">
            Different types of photography often call for different approaches to exposure. In landscape photography, photographers typically opt for small apertures (f/11-f/16) combined with low ISO settings and slower shutter speeds, often using a tripod to ensure sharpness. Sports photographers, on the other hand, prioritize fast shutter speeds (1/500s or faster) and may need to use wider apertures and higher ISO settings to freeze action in challenging light.
          </p>
          <p className="text-gray-700 mb-6">
            Portrait photographers often gravitate toward wide apertures (f/1.8-f/4) to create pleasing background blur, using moderate ISO settings and appropriate shutter speeds to maintain sharpness. Night photography presents its own challenges, typically requiring a combination of wide apertures, high ISO settings, and slow shutter speeds, often with some form of stabilization to capture enough light while maintaining image quality.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Thea to Perfect Your Exposure</h2>
          <p className="text-gray-700 mb-6">
            Thea's sophisticated light metering capabilities serve as an invaluable tool in mastering exposure. The app provides accurate light readings that help inform your exposure settings, while its real-time feedback system allows you to see immediately how adjustments to any part of the exposure triangle affect your image. This immediate feedback loop accelerates the learning process and helps you develop an intuitive understanding of exposure.
          </p>
          <p className="text-gray-700 mb-6">
            Beyond basic exposure readings, Thea helps you understand the relationships between different exposure elements, making it easier to achieve your creative vision. The ability to save preferred exposure combinations as presets streamlines your workflow, allowing you to quickly recall successful settings for similar shooting situations in the future.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <p className="text-gray-700">
            Understanding the exposure triangle is essential for taking control of your photography. While it may seem complex at first, with practice and the right tools like Thea, you'll be able to make quick, intuitive decisions to achieve the perfect exposure for any situation. Remember that mastering exposure is a journey of continuous learning and experimentation, where each shooting session provides new opportunities to refine your skills and creative vision.
          </p>
        </section>
      </div>
    </article>
  );
} 