import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Spot Metering: A Beginner's Guide",
    excerpt: 'Learn the fundamentals of spot metering and how it can help you achieve more precise exposures in your photography.',
    image: '/images/blog/spot-metering-portrait.jpg',
    date: 'March 15, 2024',
    readTime: '8 min read',
    slug: 'understanding-spot-metering'
  },
  {
    id: 2,
    title: 'Studio Photography: Mastering Spot Metering',
    excerpt: 'Control your light. Nail your exposure. One spot at a time. Learn how to use spot metering for precise studio exposures.',
    image: '/images/blog/studio-portrait-setup.jpg',
    date: 'March 10, 2024',
    readTime: '10 min read',
    slug: 'studio-spot-metering'
  },
  {
    id: 3,
    title: 'The Photography Exposure Triangle Explained',
    excerpt: 'How aperture, shutter speed, and ISO work together—and how to get the balance right. Master these fundamentals for better photos.',
    image: '/images/blog/exposure-triangle.png',
    date: 'March 5, 2024',
    readTime: '7 min read',
    slug: 'exposure-triangle'
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-28">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Photography Tips & Tutorials
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Learn how to master light metering and take your photography to the next level with our expert guides.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block h-full"
          >
            <article className="bg-gray-50 rounded-2xl transition-all duration-200 border border-gray-100 overflow-hidden h-full flex flex-col">
              <div className="relative aspect-square">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center text-gray-800 hover:text-gray-600 font-medium min-h-[48px]">
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
} 