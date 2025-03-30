import React from 'react';
import Image from 'next/image';

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop"
          alt="Camera with spot metering display"
          fill
          className="object-cover"
        />
      </div>
      
      <header className="mb-12">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>March 15, 2024</span>
          <span className="mx-2">•</span>
          <span>8 min read</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Understanding Spot Metering: A Beginner's Guide</h1>
        <div className="flex items-center">
          <span className="text-gray-600">By John Smith</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Spot Metering?</h2>
          <p className="text-gray-700 mb-6">
            Spot metering is a precise light measurement technique that measures exposure from a very small area of your scene—typically around 1-5% of the viewfinder area. Unlike evaluative or matrix metering, which considers the entire frame, spot metering gives you pinpoint accuracy for exposure readings.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Use Spot Metering</h2>
          <p className="text-gray-700 mb-6">
            Spot metering is particularly useful in high-contrast situations where you need to ensure proper exposure of a specific subject. One common application is in backlit portraits, where you want to expose correctly for the subject's face despite strong light coming from behind. This technique is also invaluable in concert photography, where dramatic stage lighting can create challenging exposure situations.
          </p>
          <p className="text-gray-700 mb-6">
            Wildlife photographers often rely on spot metering when photographing subjects against bright skies, ensuring their subjects are properly exposed despite the dramatic background lighting. In product photography, where precise exposure is crucial for accurate representation, spot metering helps achieve consistent and accurate results by measuring light from specific parts of the product.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use Spot Metering</h2>
          <p className="text-gray-700 mb-6">
            The process of using spot metering effectively begins with switching your camera to spot metering mode. Once activated, you'll need to position the spot meter, typically located at your camera's center focus point, directly on your subject. Take your initial meter reading by half-pressing the shutter button, which will give you a baseline exposure for that specific area.
          </p>
          <p className="text-gray-700 mb-6">
            If you need to recompose your shot after metering, the exposure lock (AE-L) feature becomes essential. By pressing and holding the AE-L button, you can maintain your measured exposure while adjusting your composition. Fine-tune your exposure using exposure compensation if needed, especially in situations where the camera's suggested settings don't quite match your creative vision.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
          <p className="text-gray-700 mb-6">
            When working with spot metering, several common pitfalls can affect your results. The most frequent mistake is metering from the wrong part of your subject. For example, in portrait photography, metering from clothing instead of skin tones can lead to incorrect exposures. Similarly, forgetting to use exposure lock when recomposing can result in unwanted exposure shifts, as your camera continues to meter from whatever falls under the spot meter point.
          </p>
          <p className="text-gray-700 mb-6">
            Another critical mistake is not considering the overall scene exposure while focusing on spot metering. While spot metering is precise for your subject, it's important to maintain awareness of the entire scene's exposure range. Additionally, some photographers fall into the trap of using spot metering in situations where evaluative metering would be more appropriate, such as in evenly lit scenes or when capturing wide landscapes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Thea for Spot Metering</h2>
          <p className="text-gray-700 mb-6">
            Thea's spot metering feature provides incredibly accurate readings with a precise 1° measuring angle. The app's real-time display helps you understand exactly how different parts of your scene are exposed, making it easier to achieve the perfect exposure every time. This precision, combined with the app's intuitive interface, makes it an invaluable tool for photographers looking to master exposure in challenging lighting situations.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <p className="text-gray-700">
            Spot metering is a powerful tool in your photography arsenal. While it requires more thought and precision than other metering modes, the control it offers can help you capture exactly the exposure you want, especially in challenging lighting situations. With practice and understanding, it becomes an invaluable technique for achieving professional-quality results in your photography.
          </p>
        </section>
      </div>
    </article>
  );
} 