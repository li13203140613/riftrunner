import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold gradient-text">RiftRunner</div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            © 2025 RiftRunner. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
