import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog-posts";
import { siteConfig, getUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest insights on AI animation, model benchmarks, and animation generation technology. Stay updated with RiftRunner's AI-powered tools and industry trends.",
  keywords: ["AI blog", "animation tutorials", "AI benchmarks", "Gemini 3.0 Pro", "AI coding", "animation generation"],
  alternates: {
    canonical: getUrl("/blog"),
  },
  openGraph: {
    title: `${siteConfig.name} Blog - AI Animation & Benchmarks`,
    description: "Latest insights on AI animation, model benchmarks, and technology trends",
    url: getUrl("/blog"),
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 返回首页链接 */}
        <Link
          href="/"
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
          Back to Home
        </Link>

        {/* 博客标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            RiftRunner <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Latest insights on AI animation, benchmarks, and cutting-edge technology
          </p>
        </div>

        {/* 博客文章列表 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* 文章元数据 */}
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
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

              {/* 分类标签 */}
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* 文章标题 */}
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {post.title}
              </h2>

              {/* 文章描述 */}
              <p className="text-gray-300 mb-4 line-clamp-3">
                {post.description}
              </p>

              {/* 标签 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* 阅读更多 */}
              <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                <span className="font-medium">Read more</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
            </Link>
          ))}
        </div>

        {/* 空状态 */}
        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
