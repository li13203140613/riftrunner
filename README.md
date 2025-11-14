# RiftRunner - AI Text-to-Animation Generator

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-ISC-green)](./LICENSE)

Transform text descriptions into stunning animations with RiftRunner AI. Free, fast, and browser-based animation generator.

## 🚀 Features

- **AI-Powered Generation**: Advanced AI transforms text prompts into beautiful animations
- **Zero Setup Required**: No registration, no installation - just use it instantly in your browser
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **SEO Optimized**: Built with Next.js App Router and comprehensive SEO optimization
  - ✅ Complete metadata optimization (Open Graph, Twitter Cards)
  - ✅ Structured data (JSON-LD) for rich search results
  - ✅ Auto-generated sitemap.xml and robots.txt
  - ✅ PWA support with manifest.json
  - ✅ Google-compliant SEO best practices
- **Modern UI**: Beautiful purple gradient design with glassmorphism effects
- **TypeScript**: Full type safety throughout the application

## 📋 Current Status

**Version**: 1.0.0 (MVP - Frontend Only)

This is the initial frontend version of RiftRunner. The animation generation API is not yet implemented, but the complete UI and user flow are ready to go.

### What's Implemented:
✅ Responsive landing page with hero section
✅ Text input interface with loading states
✅ Feature showcase section
✅ Step-by-step usage guide
✅ FAQ section with collapsible answers
✅ Privacy Policy & Terms of Service pages
✅ **Blog System** ([BLOG-SYSTEM-GUIDE.md](BLOG-SYSTEM-GUIDE.md)):
  - Blog listing page (`/blog`)
  - Dynamic article pages (`/blog/[slug]`)
  - BlogPosting structured data (JSON-LD)
  - Auto-generated sitemap for all posts
  - SEO-optimized metadata per article
  - Tags, categories, and reading time
  - Easy content management system
✅ **Comprehensive SEO optimization** ([SEO-OPTIMIZATION.md](SEO-OPTIMIZATION.md)):
  - Metadata optimization (title templates, descriptions, keywords)
  - Structured data (JSON-LD) with WebSite, Organization, SoftwareApplication, FAQPage, BlogPosting schemas
  - Auto-generated sitemap.xml with proper priorities
  - Optimized robots.txt with Googlebot/Bingbot rules
  - PWA manifest with icons and screenshots
  - Canonical URLs for all pages
  - Open Graph and Twitter Card tags
✅ Mobile-friendly design

### What's Next:
⏳ Animation generation API integration
⏳ Result preview/playback functionality
⏳ Download functionality for generated animations
⏳ User authentication (optional)
⏳ Usage analytics dashboard

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd riftrunner
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
riftrunner/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles with Tailwind v4
│   ├── blog/
│   │   ├── page.tsx         # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx     # Dynamic blog post pages
│   ├── privacy/             # Privacy policy page
│   ├── terms/               # Terms of service page
│   ├── sitemap.ts           # Dynamic sitemap generation
│   ├── robots.ts            # Robots.txt configuration
│   └── manifest.ts          # PWA manifest configuration
├── components/
│   ├── Hero.tsx             # Hero section with input form
│   ├── Features.tsx         # Feature cards section
│   ├── HowItWorks.tsx       # Step-by-step guide
│   ├── FAQ.tsx              # FAQ accordion
│   ├── Footer.tsx           # Footer with Blog link
│   └── StructuredData.tsx   # JSON-LD structured data for SEO
├── lib/
│   └── blog-posts.ts        # Blog posts data and management
├── public/                  # Static assets (icons, OG images)
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.mjs       # PostCSS with Tailwind v4
├── package.json             # Dependencies
├── SEO-OPTIMIZATION.md      # Comprehensive SEO guide
└── BLOG-SYSTEM-GUIDE.md     # Blog system usage guide
```

## 🎨 Design System

### Color Palette

- **Background**: Dark purple gradient (`#0a0118`)
- **Primary**: Purple gradient (`#667eea` → `#764ba2`)
- **Accent**: Pink gradient for secondary elements
- **Text**: White with varying opacity for hierarchy

### Typography

- System font stack for optimal performance
- Responsive font sizes using Tailwind utilities

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set your domain to `https://riftrunner.online`
4. Deploy!

Vercel automatically detects Next.js and configures everything for you.

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables

Currently, no environment variables are required for the frontend. When you integrate the API:

```env
# .env.local
NEXT_PUBLIC_API_URL=your-api-endpoint
API_SECRET_KEY=your-secret-key
```

### SEO Configuration

**完整的SEO优化指南**: 查看 [SEO-OPTIMIZATION.md](SEO-OPTIMIZATION.md)

#### 快速配置

1. **更新Google验证码** in [app/layout.tsx](app/layout.tsx):
```typescript
verification: {
  google: "你的Google Search Console验证码",
}
```

2. **部署后立即执行**:
   - 在Google Search Console提交sitemap: `https://riftrunner.online/sitemap.xml`
   - 验证结构化数据: [Google Rich Results Test](https://search.google.com/test/rich-results)
   - 测试移动端友好性: [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

3. **创建所需图片资源**:
   - `/public/og-image.png` (1200x630px) - Open Graph分享图
   - `/public/logo.png` (512x512px) - Logo
   - `/public/icon-192.png` & `/public/icon-512.png` - PWA图标
   - `/public/screenshot-wide.png` & `/public/screenshot-narrow.png` - PWA截图

#### SEO特性
- ✅ **完整Metadata**: Open Graph, Twitter Cards, 规范链接
- ✅ **结构化数据**: JSON-LD格式(WebSite, Organization, SoftwareApplication, FAQPage)
- ✅ **Sitemap & Robots**: 自动生成,Google/Bing优化
- ✅ **PWA支持**: Manifest配置,可安装应用
- ✅ **性能优化**: Next.js 16静态生成,Turbopack构建

## 📝 API Integration Guide

When your backend API is ready, update the `handleGenerate` function in [components/Hero.tsx](components/Hero.tsx):

```typescript
const handleGenerate = async () => {
  setIsGenerating(true);

  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    // Handle the animation result

  } catch (error) {
    console.error('Generation failed:', error);
  } finally {
    setIsGenerating(false);
  }
};
```

## 🐛 Known Issues

- Animation generation currently shows a placeholder alert (API not implemented)
- Custom gradient utilities use Tailwind v4 `@utility` syntax

## 📄 License

ISC License - feel free to use this for your own projects!

## 🙏 Acknowledgments

- Design inspiration from modern AI tools
- Built with Next.js, TypeScript, and Tailwind CSS
- Deployed on Vercel

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

**Made with 💜 by 老王 (Lao Wang)**

*"艹！这代码写得真tm漂亮！"* - 老王, 2025
