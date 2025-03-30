import React from 'react';
import Image from 'next/image';
import { blogPosts } from '@/lib/data/blog-posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {post.image && (
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <header className="mb-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center">
          <span className="text-gray-600">By {post.author}</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
} 