import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog-posts";
import { siteConfig, getUrl } from "@/lib/site-config";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 生成静态参数
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 生成元数据
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: getUrl(`/blog/${post.slug}`),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: getUrl(`/blog/${post.slug}`),
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.lastModified,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // 结构化数据 - BlogPosting Schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": siteConfig.url
    },
    "datePublished": post.publishDate,
    "dateModified": post.lastModified,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}${siteConfig.logo}`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": getUrl(`/blog/${post.slug}`)
    },
    "keywords": post.tags.join(", "),
    "articleSection": post.category,
    "wordCount": post.content.split(/\s+/).length,
  };

  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen py-20 px-4">
        <article className="max-w-4xl mx-auto">
          {/* 返回博客列表 */}
          <Link
            href="/blog"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </Link>

          {/* 文章头部 */}
          <header className="mb-12">
            {/* 分类 */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 text-sm font-medium bg-purple-500/20 text-purple-300 rounded-full">
                {post.category}
              </span>
            </div>

            {/* 标题 */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* 元数据 */}
            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <time dateTime={post.publishDate}>
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </div>

            {/* 标签 */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* 文章内容 */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h1:text-4xl prose-h1:mb-6
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
                prose-strong:text-white prose-strong:font-bold
                prose-ul:text-gray-300 prose-ul:my-6
                prose-ol:text-gray-300 prose-ol:my-6
                prose-li:my-2
                prose-code:text-purple-300 prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-black/30 prose-pre:border prose-pre:border-white/10
                prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-4 prose-blockquote:italic
                prose-table:border prose-table:border-white/10
                prose-th:bg-white/5 prose-th:text-white prose-th:font-bold prose-th:p-3
                prose-td:border prose-td:border-white/10 prose-td:p-3 prose-td:text-gray-300
                prose-img:rounded-xl prose-img:border prose-img:border-white/10"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            />
          </div>

          {/* 文章底部 - 分享和返回 */}
          <footer className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                More Articles
              </Link>

              <div className="text-sm text-gray-400">
                Last updated: {new Date(post.lastModified).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}
