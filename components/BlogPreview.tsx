import Link from "next/link";
import { getAllPosts } from "@/lib/blog-posts";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="bg-[#0b0714] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-purple-300 text-sm uppercase tracking-wider mb-2">Latest from the blog</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Riftrunner Experiments & Benchmarks</h2>
          </div>
          <Link
            href="/blog"
            className="text-purple-300 hover:text-white transition-colors font-medium"
          >
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
            >
              <p className="text-xs uppercase tracking-wide text-purple-200 mb-2">{post.category}</p>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-300 line-clamp-3 mb-4">{post.description}</p>
              <div className="flex items-center text-xs text-gray-400 gap-3">
                <span>{new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                <span>•</span>
                <span>{post.readingTime} min read</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
