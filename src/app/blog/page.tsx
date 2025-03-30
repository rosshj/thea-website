import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Spot Metering: A Beginner's Guide",
    excerpt: 'Learn the fundamentals of spot metering and how it can help you achieve more precise exposures in your photography.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop',
    date: 'March 15, 2024',
    readTime: '8 min read',
    slug: 'understanding-spot-metering'
  },
  {
    id: 2,
    title: 'Studio Photography: Mastering Spot Metering',
    excerpt: 'Discover how to use spot metering effectively in a studio environment to achieve perfect exposure every time.',
    image: 'https://images.unsplash.com/photo-1520549233664-03f65c1d1327?q=80&w=2000&auto=format&fit=crop',
    date: 'March 10, 2024',
    readTime: '10 min read',
    slug: 'studio-spot-metering'
  },
  {
    id: 3,
    title: 'The Photography Exposure Triangle Explained',
    excerpt: 'Master the three fundamental elements of exposure: aperture, shutter speed, and ISO. Learn how they work together.',
    image: 'https://images.unsplash.com/photo-1610448721566-47369c768e70?q=80&w=2000&auto=format&fit=crop',
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
          <article
            key={post.id}
            className="bg-gray-50 rounded-2xl transition-all duration-200 border border-gray-100 overflow-hidden"
          >
            <div className="relative aspect-square">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <time dateTime={post.date}>{post.date}</time>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                <Link href={`/blog/${post.slug}`} className="hover:text-gray-700 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-6">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-gray-800 hover:text-gray-600 font-medium"
              >
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
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 