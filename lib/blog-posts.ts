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
    slug: "riftrunner-gemini-3-lmarena-rumor-battle-derivation",
    title: "Hunting for \"riftrunner\" on LMArena: Gemini 3.0 Rumor + Battle Derivation",
    description: "Chased the rumor that Gemini 3.0 hides as riftrunner on LMArena. Battle-mode derivation walkthrough on the cosine-power recurrence and why riftrunner felt sharper.",
    author: "RiftRunner Team",
    publishDate: "2025-04-15",
    lastModified: "2025-04-15",
    tags: ["Gemini 3.0", "Riftrunner", "LMArena", "Battle Mode", "Math Derivation", "AI Rumor"],
    category: "AI Experiments",
    readingTime: 7,
    featured: true,
    content: `
<h1>Hunting for "riftrunner" on LMArena: Gemini 3.0 Rumor + Battle Derivation</h1>

<blockquote>Rumor: <strong>Gemini 3.0</strong> is hiding on LMArena under the codename <strong>riftrunner</strong>. I camped in Battle mode until riftrunner appeared, then threw a calculus recurrence at it to see how it reasons.</blockquote>

<h2>Why this matters</h2>
<ul>
  <li>LMArena sometimes ships experimental models under code names.</li>
  <li>Reports say <strong>riftrunner</strong> is stronger at stepwise math derivations.</li>
  <li>If true, this could be an early look at Gemini 3.0's reasoning upgrades.</li>
</ul>

<h2>What I did</h2>
<ol>
  <li>Stayed in Battle until the right-hand side showed <strong>riftrunner</strong>.</li>
  <li>Prompted both sides with the same integral recurrence to stress symbolic reasoning.</li>
  <li>Judged on derivation steps and algebra hygiene, not just final values.</li>
</ol>

<h3>The problem (reduction formula)</h3>
<p>Show that for <code>I_n = \\int_{0}^{\\pi/2} x \\cos^n x \\, dx</code>:</p>
<p><code>I_n = ((n-1)/n) I_{n-2} - 1/n^2</code></p>
<p><img src="/blog/riftrunner-gemini-3-lmarena-rumor-battle-derivation/001.png" alt="Cosine power reduction problem used for riftrunner test" /></p>

<h2>How riftrunner solved it (key moves)</h2>
<ol>
  <li>Integration by parts with <code>u = x</code>, <code>dv = \\cos^n x\\,dx</code>; boundary term is 0, leaving <code>-(1/n) \\int_{0}^{\\pi/2} x \\cos^{n-1}x \\sin x \\, dx</code>.</li>
  <li>Split the remaining integral: one part factors out <code>x</code> for recurrence, the other rewrites <code>\\cos^{n-1}x</code> in terms of <code>I_{n-2}</code> after differentiation.</li>
  <li>Combine to get <code>I_n = -(1/n) + (n-1)I_{n-2} - (n-1)I_n</code>.</li>
  <li>Group like terms: <code>I_n + (n-1)I_n = (n-1)I_{n-2} - 1/n</code>.</li>
  <li>Divide by <code>n</code>: <code>I_n = ((n-1)/n) I_{n-2} - 1/n^2</code>. Done.</li>
</ol>

<p><img src="/blog/riftrunner-gemini-3-lmarena-rumor-battle-derivation/002.png" alt="Battle view showing riftrunner derivation steps" /></p>

<h2>What felt different about riftrunner</h2>
<ul>
  <li>Clean factor handling: pulled <code>I_n</code> to one side before dividing, avoiding sign slips.</li>
  <li>Fewer dead ends: minimal backtracking vs. other models that stalled mid-derivation.</li>
  <li>Textbook finish: concise recurrence and tidy Q.E.D.-style wrap.</li>
</ul>

<h2>Takeaways</h2>
<p>This small Battle-mode trial hints that <strong>riftrunner</strong>—if it’s really Gemini 3.0—has tighter symbolic reasoning. To replicate, wait for riftrunner in Battle, then test tougher integrals or series proofs to see if the edge holds.</p>
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
