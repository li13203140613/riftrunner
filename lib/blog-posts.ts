/**
 * 博客文章数据结构和管理
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishDate: string;
  lastModified: string;
  tags: string[];
  category: string;
  readingTime: number; // 阅读时间(分钟)
  featured: boolean;
}

// 博客文章数据
export const blogPosts: BlogPost[] = [
  {
    slug: "riftrunner-gemini-3-lmarena-rumor-battle-math-test",
    title: "Hunting for \"riftrunner\" on LMArena: Gemini 3.0 Rumor + Battle Derivation",
    description: "Chased the rumor that Gemini 3.0 hides as riftrunner on LMArena. Here's the battle-mode derivation, the recurrence proof, and why the response felt different.",
    author: "RiftRunner Team",
    publishDate: "2025-04-15",
    lastModified: "2025-04-15",
    tags: ["Gemini 3.0", "Riftrunner", "LMArena", "Battle Mode", "Math Derivation", "AI Rumor"],
    category: "AI Experiments",
    readingTime: 7,
    featured: true,
    content: `
<h1>Hunting for "riftrunner" on LMArena: Gemini 3.0 Rumor + Battle Derivation</h1>

<blockquote>听到传言：在 LMArena 里有个叫 “riftrunner” 的隐藏模型可能就是 Gemini 3.0。我在 Battle 模式里反复排队，终于遇到它，然后扔了一个微积分递推公式。</blockquote>

<h2>为什么在意</h2>
<ul>
  <li>LMArena 偶尔会把实验模型藏在代号里。</li>
  <li>“riftrunner” 据说在步骤化推导（尤其是数学）上更稳。</li>
  <li>如果属实，可能是 Gemini 3.0 的早期窗口。</li>
</ul>

<h2>操作流程</h2>
<ol>
  <li>进入 Battle，等到右侧匹配到 “riftrunner”。</li>
  <li>双方同时给出同一个微积分递推题，主打推导过程。</li>
  <li>只比推导和整合步骤，不比最终数值。</li>
</ol>

<h3>出题（递推公式）</h3>
<p>证明：对
<code>I_n = \\int_{0}^{\\pi/2} x \\cos^n x \\, dx</code>，有
<code>I_n = ((n-1)/n) I_{n-2} - 1/n^2</code></p>
<p><img src="/blog/riftrunner-gemini-3-lmarena-rumor-battle-math-test/math-problem.png" alt="微积分递推题图" /></p>

<h2>“riftrunner” 的推导要点</h2>
<ol>
  <li>分部积分：取 <code>u = x</code>，<code>dv = \\cos^n x\\,dx</code>，边界项为 0，剩下 <code>I_n = -(1/n) \\int_{0}^{\\pi/2} x \\cos^{n-1}x \\sin x \\, dx</code>。</li>
  <li>把积分拆成两部分：一部分提取 <code>x</code> 做递推，另一部分对 <code>\\cos^{n-1}x</code> 求导后用 <code>I_{n-2}</code> 的形式重写。</li>
  <li>合并得 <code>I_n = -(1/n) + (n-1)I_{n-2} - (n-1)I_n</code>。</li>
  <li>移项并整理：<code>I_n + (n-1)I_n = (n-1)I_{n-2} - 1/n</code>。</li>
  <li>两边同时除以 <code>n</code>：<code>I_n = ((n-1)/n) I_{n-2} - 1/n^2</code>，收尾。</li>
</ol>

<p><img src="/blog/riftrunner-gemini-3-lmarena-rumor-battle-math-test/battle-screenshot.png" alt="Battle 模式推导截图复刻" /></p>

<h2>感觉上的差异</h2>
<ul>
  <li>提前整体提取了 <code>I_n</code>，再除以 <code>n</code>，避免符号走丢。</li>
  <li>几乎没有走弯路，连贯地把 Part A/B 合回去。</li>
  <li>结尾很“教材风”，直接给出递推式并收尾。</li>
</ul>

<h2>结论 & 下一步</h2>
<p>这次实验性的战斗推导里，“riftrunner” 把递推式稳稳写完，体验比常见模型更像“刷习题”的感觉。如果想复现，继续在 Battle 模式等到 “riftrunner”，丢更多积分/级数的推导题，看看优势是否持续。</p>
`,
  },
  {
    slug: "gemini-3-pro-riftrunner-kingbench-results",
    title: "Gemini 3.0 Pro (Riftrunner) KingBench Performance Analysis",
    description: "Detailed analysis of Gemini 3.0 Pro (Riftrunner) performance on KingBench AI coding benchmark. Compare with Claude Sonnet 4.5, GPT-4, and other leading AI models.",
    author: "RiftRunner Team",
    publishDate: "2025-01-14",
    lastModified: "2025-01-14",
    tags: ["AI Benchmarks", "Gemini 3.0 Pro", "KingBench", "AI Coding", "Model Comparison"],
    category: "AI Performance",
    readingTime: 5,
    featured: true,
    content: `
# Gemini 3.0 Pro (Riftrunner) KingBench Performance Analysis

The latest checkpoint of **Gemini 3.0 Pro (Riftrunner)** has been benchmarked on KingBench, revealing interesting performance metrics compared to other leading AI models.

## 📊 Key Performance Metrics

### Overall Score: **77%** (170/220)

Gemini 3.0 Pro (Riftrunner) achieved:
- **Answered Questions**: 11/11 (100% completion rate)
- **Generation Score**: 75%
- **Code Quality Score**: 78%
- **Total Cost**: $1.5034

## 🏆 KingBench Rankings

### Top Performers

1. **Gemini 3.0 Pro (X28)** - 91% (201/220)
   - Gen: 100% | Code: 88%
   - Cost: $0.9512

2. **Gemini 3.0 Pro (2HT)** - 87% (192/220)
   - Gen: 100% | Code: 83%
   - Cost: $0.4558

3. **Gemini 3 (Lithiumflow)** - 83% (183/220)
   - Gen: 100% | Code: 77%
   - Cost: $1.2359

4. **Gemini 3.0 Pro (ECPT)** - 80% (176/220)
   - Gen: 100% | Code: 73%
   - Cost: $1.1671

5. **Gemini 3 Pro (Riftrunner)** - 77% (170/220)
   - Gen: 75% | Code: 78%
   - Cost: $1.5034

## 🆚 Comparison with Claude Models

### Gemini 3.0 Pro (Riftrunner) vs Claude Sonnet 4.5

**Performance Gap**: Riftrunner leads by **15%**

| Model | Score | Gen | Code | Cost |
|-------|-------|-----|------|------|
| Gemini 3.0 Pro (Riftrunner) | 77% | 75% | 78% | $1.50 |
| Claude Sonnet 4.5 | 62% | 40% | 71% | $0.43 |
| Claude 4.5 Sonnet (Max) | 61% | 45% | 67% | $1.97 |

**Key Insights**:
- Riftrunner significantly outperforms Claude Sonnet 4.5 in generation quality (75% vs 40%)
- Code quality is comparable (78% vs 71%)
- Better cost-performance ratio than Claude 4.5 Sonnet (Max)

## 📉 Performance Analysis

### Strengths
- ✅ **Excellent Code Quality**: 78% code score demonstrates strong programming capabilities
- ✅ **Competitive Pricing**: $1.50 per benchmark is reasonable for the performance
- ✅ **100% Completion**: Answered all 11 questions successfully
- ✅ **Ahead of Claude Models**: 15% better than Claude Sonnet 4.5

### Areas for Improvement
- ⚠️ **Generation Score**: 75% is lower than other Gemini 3.0 Pro checkpoints (100%)
- ⚠️ **14% Behind Best Checkpoint**: X28 checkpoint performs better overall
- ⚠️ **Room for Optimization**: Could improve response quality

## 🔬 Technical Analysis

### Why Riftrunner Performs Differently

This checkpoint appears to be optimized for:
1. **Code Quality over Speed**: Higher code score (78%) vs generation (75%)
2. **Cost Efficiency**: Competitive pricing for enterprise use
3. **Reliability**: 100% question completion rate

### Checkpoint Comparison

| Checkpoint | Focus | Best For |
|------------|-------|----------|
| X28 | Overall Performance | Production systems |
| 2HT | Balance & Cost | General use |
| Lithiumflow | High Quality | Critical tasks |
| ECPT | Efficiency | High-volume usage |
| **Riftrunner** | Code Quality | **Animation Generation** |

## 💡 Use Cases

Gemini 3.0 Pro (Riftrunner) excels in:

1. **Code Generation**: Strong 78% code quality score
2. **Animation Tasks**: Optimized for visual content generation
3. **Cost-Sensitive Projects**: Better ROI than premium Claude models
4. **Reliable Systems**: 100% completion rate ensures consistency

## 🚀 Future Outlook

While Riftrunner is the "worst checkpoint yet" among Gemini 3.0 Pro variants, it's important to note:

- Still **way ahead** of all current-gen models (Claude, GPT-4)
- Specialized optimization for specific tasks
- Continuous improvements expected in future checkpoints

## 📈 Recommendations

**Choose Riftrunner if you need**:
- High code quality for animation generation
- Cost-effective AI coding assistant
- Reliable 100% completion rates

**Consider X28 or 2HT if you need**:
- Maximum overall performance
- Best-in-class generation quality
- Lowest cost per query

## Conclusion

Gemini 3.0 Pro (Riftrunner) represents a specialized checkpoint optimized for code quality and animation generation. While it doesn't top the KingBench leaderboard, it maintains a significant 15% advantage over Claude Sonnet 4.5 and offers excellent cost-performance for its intended use cases.

---

**Benchmark Date**: January 14, 2025
**Source**: KingBench AI Coding Benchmark
**Questions Answered**: 11/11
**Total Score**: 170/220 (77%)

*Want to test Gemini 3.0 Pro (Riftrunner) yourself? Try our [AI animation generator](#) today!*
`,
  },
];

// 获取所有博客文章
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

// 根据slug获取文章
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// 获取精选文章
export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

// 根据标签获取文章
export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

// 根据分类获取文章
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}
