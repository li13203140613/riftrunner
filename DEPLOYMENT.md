# 部署配置指南

## 🚀 快速部署

### 步骤1: 配置域名

**重要**: 部署前必须配置你的域名!

#### 方法1: 使用环境变量(推荐 ⭐)

在Vercel/Netlify等平台的环境变量中添加:

```env
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.com
```

**优势**: 不同环境可以用不同域名(开发/预览/生产)

#### 方法2: 直接修改配置文件

打开 [lib/site-config.ts](lib/site-config.ts),修改第11行:

```typescript
url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-actual-domain.com",
```

把 `https://your-actual-domain.com` 改成你的真实域名。

---

## 📋 Vercel部署

### 1. 推送代码到GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. 导入到Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 导入你的GitHub仓库
4. Vercel会自动识别Next.js项目

### 3. 配置环境变量

在Vercel项目设置中添加:

```
NEXT_PUBLIC_SITE_URL = https://your-domain.vercel.app
```

或者如果你有自定义域名:

```
NEXT_PUBLIC_SITE_URL = https://yourdomain.com
```

### 4. 部署

点击 "Deploy" - Vercel会自动:
- 安装依赖
- 构建项目
- 部署到全球CDN

### 5. 添加自定义域名(可选)

1. 在Vercel项目设置中找到 "Domains"
2. 添加你的域名
3. 更新DNS记录
4. 等待DNS生效

---

## 🔧 部署后配置

### 1. Google Search Console

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加你的网站
3. 验证所有权:
   - 在 [app/layout.tsx](app/layout.tsx) 第59行添加验证码:
   ```typescript
   verification: {
     google: "your-google-verification-code",
   },
   ```
4. 提交sitemap:
   - 在Search Console添加: `https://yourdomain.com/sitemap.xml`

### 2. 验证SEO配置

访问以下工具测试:

- **Rich Results Test**: https://search.google.com/test/rich-results
  - 输入你的网站URL
  - 检查结构化数据是否正确

- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
  - 确保移动端友好

- **PageSpeed Insights**: https://pagespeed.web.dev/
  - 检查性能得分

### 3. 创建OG图片

在 `/public` 目录下添加以下图片:

```
public/
├── og-image.png         (1200x630px)  - Open Graph分享图
├── logo.png             (512x512px)   - Logo
├── icon-192.png         (192x192px)   - PWA图标
├── icon-512.png         (512x512px)   - PWA图标
├── screenshot-wide.png  (1280x720px)  - PWA截图(横屏)
└── screenshot-narrow.png (750x1334px) - PWA截图(竖屏)
```

**在线工具**:
- Canva: https://www.canva.com (设计OG图片)
- Figma: https://www.figma.com (专业设计)

---

## 🌐 其他平台部署

### Netlify

1. 连接GitHub仓库
2. 构建命令: `npm run build`
3. 发布目录: `.next`
4. 环境变量: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`

### Cloudflare Pages

1. 连接GitHub
2. 构建命令: `npm run build`
3. 输出目录: `.next`
4. 环境变量同上

### 自托管

```bash
# 构建
npm run build

# 启动
npm start

# PM2守护进程
pm2 start npm --name "riftrunner" -- start
```

---

## ✅ 部署检查清单

部署后确认以下项目:

- [ ] 网站可以正常访问
- [ ] 所有页面URL正确(不是localhost或错误域名)
- [ ] sitemap.xml可访问: `/sitemap.xml`
- [ ] robots.txt可访问: `/robots.txt`
- [ ] manifest可访问: `/manifest.webmanifest`
- [ ] 博客页面可访问: `/blog`
- [ ] Open Graph图片显示正确
- [ ] Twitter卡片预览正常
- [ ] Google Search Console验证通过
- [ ] sitemap已提交

---

## 🐛 常见问题

### Q1: 部署后URL还是localhost怎么办?

**A**: 确保设置了环境变量 `NEXT_PUBLIC_SITE_URL`,然后重新部署。

在Vercel:
1. 项目设置 → Environment Variables
2. 添加 `NEXT_PUBLIC_SITE_URL`
3. Redeploy

### Q2: sitemap显示错误的域名?

**A**: 检查 [lib/site-config.ts](lib/site-config.ts) 和环境变量,确保域名正确。

### Q3: 结构化数据测试失败?

**A**:
1. 确保所有图片资源存在(`/logo.png`, `/og-image.png`)
2. 检查URL是否正确
3. 使用Google Rich Results Test验证

### Q4: 博客文章无法访问?

**A**:
1. 检查 [lib/blog-posts.ts](lib/blog-posts.ts) 数据是否正确
2. 确保`slug`没有特殊字符
3. 重新构建项目

---

## 📊 性能优化建议

### 1. 图片优化

使用Next.js Image组件:
```typescript
import Image from 'next/image';

<Image
  src="/og-image.png"
  width={1200}
  height={630}
  alt="..."
/>
```

### 2. 启用Gzip/Brotli

Vercel自动启用,自托管需要配置Nginx:

```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
```

### 3. CDN配置

- Vercel: 自动全球CDN
- Cloudflare: 添加DNS代理
- 自托管: 使用Cloudflare免费CDN

---

## 🔐 安全配置

### 1. 环境变量

敏感信息使用环境变量:
```env
API_SECRET_KEY=your-secret-key
DATABASE_URL=your-database-url
```

### 2. HTTPS

确保使用HTTPS:
- Vercel: 自动HTTPS
- 自托管: Let's Encrypt免费证书

### 3. Headers

在 [next.config.ts](next.config.ts) 添加安全headers:

```typescript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        }
      ]
    }
  ];
}
```

---

## 📞 需要帮助?

遇到问题?检查:

1. **Vercel文档**: https://vercel.com/docs
2. **Next.js文档**: https://nextjs.org/docs
3. **项目README**: [README.md](README.md)
4. **SEO指南**: [SEO-OPTIMIZATION.md](SEO-OPTIMIZATION.md)
5. **博客系统**: [BLOG-SYSTEM-GUIDE.md](BLOG-SYSTEM-GUIDE.md)

---

**部署文档创建日期**: 2025-11-14
**创建者**: 老王 (Lao Wang)

*"艹!配置这么简单,部署一次就搞定!"* - 老王
