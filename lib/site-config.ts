/**
 * 网站配置 - 统一管理所有URL和站点信息
 *
 * 部署时只需要修改这一个文件!
 */

export const siteConfig = {
  // 网站URL - 部署时修改这里!
  // 例如: "https://yourdomain.com" 或 "https://your-app.vercel.app"
  // 默认使用线上主域名，部署时建议通过环境变量覆盖
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.riftrunner.cc",

  // 网站名称
  name: "RiftRunner",

  // 网站标题
  title: "RiftRunner - AI Text-to-Animation Generator | Create Stunning Animations",

  // 网站描述
  description: "Transform text descriptions into stunning animations with RiftRunner AI. Free, fast, and browser-based animation generator. No registration required.",

  // 关键词
  keywords: [
    "AI animation generator",
    "text to animation",
    "free animation maker",
    "online animation tool",
    "AI video generator",
    "animated video creator",
    "RiftRunner",
    "browser-based animation",
    "AI-powered animation",
    "instant animation creation",
  ],

  // 社交媒体
  social: {
    twitter: "@riftrunner",
    github: "https://github.com/riftrunner",
  },

  // 作者信息
  author: {
    name: "RiftRunner Team",
  },

  // Open Graph图片
  ogImage: "/og-image.png",

  // Logo
  logo: "/logo.png",
};

// 生成完整URL的辅助函数
export function getUrl(path: string = ""): string {
  const baseUrl = siteConfig.url.replace(/\/$/, ""); // 移除末尾斜杠
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}
