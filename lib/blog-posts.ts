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
    slug: "riftrunner-one-prompt-physics-experiment",
    title: "One-Prompt Physics: Riftrunner Simulates a 10kg Ball vs 10kg Cotton Drop",
    description: "With a single prompt, riftrunner on LMArena generated a gravity experiment: a 10kg ball and 10kg cotton falling from 100m. Here’s the video and why this matters for fast science visuals.",
    author: "RiftRunner Team",
    publishDate: "2025-11-18",
    lastModified: "2025-11-18",
    tags: ["riftrunner", "LMArena", "Gemini 3", "physics demo", "gravity", "AI video", "science visualization"],
    category: "AI Experiments",
    readingTime: 4,
    featured: true,
    content: `
<h1>One-Prompt Physics: Riftrunner Simulates a 10kg Ball vs 10kg Cotton Drop</h1>

<blockquote>Prompt: “A 10kg ball and 10kg of cotton drop simultaneously from 100 meters.” Riftrunner on LMArena turned it into a clean science visual in one go.</blockquote>

<p>
  <video controls preload="metadata" style="width:100%;max-width:900px;border-radius:12px;border:1px solid rgba(255,255,255,0.1)">
    <source src="/videos/777.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <br />
  <small>Gravity demo: equal mass, different density, same drop height.</small>
</p>

<h2>Why this is interesting</h2>
<ul>
  <li><strong>Physics intuition:</strong> mass is equal, drag differs; outcome depends on air resistance, not weight alone.</li>
  <li><strong>Rapid science visualization:</strong> one prompt produced a usable clip for teaching/demo.</li>
  <li><strong>Consistency:</strong> riftrunner kept camera, timing, and scale coherent through the fall.</li>
</ul>

<h2>What riftrunner did well</h2>
<ul>
  <li><strong>Ground plane & scale:</strong> clear 100m context avoids “floating” artifacts.</li>
  <li><strong>Motion clarity:</strong> cotton shows drag-influenced descent; ball stays ballistic.</li>
  <li><strong>Framing:</strong> neutral background makes the physics point, not the styling.</li>
</ul>

<h2>How to prompt for similar science clips</h2>
<ul>
  <li>State masses, materials, height, and camera framing in one sentence.</li>
  <li>Add one constraint about timing (“full fall in N seconds”) to keep pacing steady.</li>
  <li>Prefer neutral lighting/background so the motion is the focus.</li>
</ul>

<h2>Bottom line</h2>
<p><strong>Riftrunner</strong> on <strong>LMArena</strong> makes fast physics explainers practical: one concise prompt yields a teaching-ready video that spotlights gravity, drag, and mass intuition without manual editing.</p>
`,
  },
  {
    slug: "riftrunner-mate-in-2-chess-puzzle-vs-claude",
    title: "Riftrunner Cracks a Mate-in-2 Chess Puzzle: Outsmarts Claude 4.5",
    description: "An unusually hard mate-in-2 chess puzzle forced deep planning before coding. Riftrunner on LMArena crushed the attempt, outperforming Claude 4.5.",
    author: "RiftRunner Team",
    publishDate: "2025-11-18",
    lastModified: "2025-11-18",
    tags: ["riftrunner", "LMArena", "Gemini 3", "chess puzzle", "Claude 4.5", "AI reasoning"],
    category: "AI Experiments",
    readingTime: 5,
    featured: true,
    content: `
<h1>Riftrunner Cracks a Mate-in-2 Chess Puzzle: Outsmarts Claude 4.5</h1>

<blockquote>This was an insanely difficult task for an LLM: build a mate-in-2 chess puzzle, think like a chess player before coding, and avoid tactical traps. Riftrunner on LMArena delivered; Claude 4.5 stalled.</blockquote>

<p>
  <video controls preload="metadata" style="width:100%;max-width:900px;border-radius:12px;border:1px solid rgba(255,255,255,0.1)">
    <source src="/videos/555555.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <br />
  <small>LMArena run showing riftrunner’s reasoning path and final mate-in-2 construction.</small>
</p>

<h2>Why this puzzle is hard for LLMs</h2>
<ul>
  <li>Needs full-board reasoning and pruning non-forcing lines.</li>
  <li>Demands consistency between move generation and final FEN output.</li>
  <li>Requires verifying “only line” mates, not just flashy checks.</li>
</ul>

<h2>What riftrunner did differently</h2>
<ul>
  <li><strong>Plan-then-code:</strong> laid out threat + defensive resources before encoding moves.</li>
  <li><strong>Constraint checks:</strong> verified no dual solutions and protected against stalemate sidesteps.</li>
  <li><strong>Clean notation:</strong> SAN + FEN stayed aligned, simplifying validation.</li>
</ul>

<h2>Outcome vs Claude 4.5</h2>
<ul>
  <li><strong>Riftrunner:</strong> produced a legal mate-in-2 with forcing lines explained.</li>
  <li><strong>Claude 4.5:</strong> drifted into non-forcing checks and inconsistent board states.</li>
  <li><strong>Takeaway:</strong> riftrunner feels tuned for structured reasoning on tight combinatorial tasks.</li>
</ul>

<h2>Tips to replicate</h2>
<ul>
  <li>Ask for the plan first: threat, key squares, and opponent replies.</li>
  <li>Request legality checks and a final FEN/SAN pair for validation.</li>
  <li>Keep the prompt short—clarity beats verbosity for chess reasoning.</li>
</ul>
`,
  },
  {
    slug: "riftrunner-clone-cut-the-rope-lmarena",
    title: "Riftrunner Clones Cut the Rope in LMArena",
    description: "Riftrunner on LMArena recreated a Cut the Rope-style mini-game, showing quick game-loop reasoning and tidy code scaffolding.",
    author: "RiftRunner Team",
    publishDate: "2025-11-18",
    lastModified: "2025-11-18",
    tags: ["riftrunner", "LMArena", "Gemini 3", "game clone", "Cut the Rope", "AI coding"],
    category: "AI Experiments",
    readingTime: 4,
    featured: true,
    content: `
<h1>Riftrunner Clones Cut the Rope in LMArena</h1>

<blockquote>Asked riftrunner to build a Cut the Rope-like mini-game inside LMArena. It delivered a clean physics loop, scoring, and UI hooks without heavy refactoring.</blockquote>

<p>
  <video controls preload="metadata" style="width:100%;max-width:900px;border-radius:12px;border:1px solid rgba(255,255,255,0.1)">
    <source src="/videos/6666666.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <br />
  <small>Gameplay clip: rope cutting, candy fall, star pickup, and goal detection working end-to-end.</small>
</p>

<h2>What riftrunner built</h2>
<ul>
  <li><strong>Physics loop:</strong> rope segments + gravity with stable collision checks.</li>
  <li><strong>Scoring model:</strong> star pickups tracked separately from goal completion.</li>
  <li><strong>UI hooks:</strong> restart and level reset baked in for quick iteration.</li>
</ul>

<h2>Why it matters</h2>
<ul>
  <li>Shows riftrunner (Gemini 3) can ship playable loops fast.</li>
  <li>Code arrives organized for extension—levels, assets, and effects slot in easily.</li>
  <li>Good for prototyping interactive demos without a full engine stack.</li>
</ul>

<h2>Prompting tips</h2>
<ul>
  <li>Define mechanics first: rope cut, gravity, goals, and collectibles.</li>
  <li>Ask for event hooks to extend later (sound, particles, level data).</li>
  <li>Keep assets abstract; focus on physics correctness before polish.</li>
</ul>

<h2>Bottom line</h2>
<p><strong>Riftrunner</strong> on <strong>LMArena</strong> handled a casual game clone cleanly. For teams needing fast prototypes, this response shows why Gemini 3 is a strong coding copilot.</p>
`,
  },
  {
    slug: "riftrunner-lmarena-outstanding-performance-video",
    title: "Riftrunner on LMArena: Outstanding Performance (Video Walkthrough)",
    description: "Riftrunner on LMArena shows outstanding performance. See the full run, learn why Gemini 3 + riftrunner feels sharper, and how to prompt for consistent wins.",
    author: "RiftRunner Team",
    publishDate: "2025-11-17",
    lastModified: "2025-11-17",
    tags: ["riftrunner", "LMArena", "Gemini 3", "AI performance", "Battle Mode", "video run", "AI benchmarks"],
    category: "AI Experiments",
    readingTime: 4,
    featured: true,
    content: `
<h1>Riftrunner on LMArena: Outstanding Performance (Video Walkthrough)</h1>

<blockquote>Riftrunner on LMArena keeps delivering crisp solutions with stable reasoning. Here’s the run I captured and the prompts that made it shine.</blockquote>

<p>
  <video controls preload="metadata" style="width:100%;max-width:900px;border-radius:12px;border:1px solid rgba(255,255,255,0.1)">
    <source src="/videos/4444.mp4" type="video/mp4">
    Your browser does not support the video tag. 
  </video>
  <br />
  <small>Full clip from LMArena showing riftrunner’s response flow.</small>
</p>

<h2>Why it stands out</h2>
<ul>
  <li><strong>Reasoning stability:</strong> step-by-step layout with minimal backtracking.</li>
  <li><strong>Latency balance:</strong> quick enough for Battle Mode while keeping structure.</li>
  <li><strong>Style adaptability:</strong> switches tone and formatting cleanly between code-style and narrative responses.</li>
</ul>

<h2>Prompt pattern I used</h2>
<ul>
  <li>Open with a concise instruction: scope, constraints, and target output format.</li>
  <li>Add one guardrail about brevity to avoid overlong replies.</li>
  <li>Keep examples short so riftrunner fills the structure rather than copying.</li>
</ul>

<h2>Highlights from the run</h2>
<ul>
  <li><strong>Clarity:</strong> bullet-first summaries before diving into details.</li>
  <li><strong>Consistency:</strong> stable headings and inline formatting that make scanning easy.</li>
  <li><strong>Recovery:</strong> when ambiguity appeared, it asked for a quick clarification instead of guessing.</li>
</ul>

<h2>Takeaways for your own prompts</h2>
<ul>
  <li>Declare the goal, constraints, and output shape up front.</li>
  <li>Push for concise structure (headings + bullets) to keep answers readable.</li>
  <li>For deeper reasoning, add one line about checking edge cases before finalizing.</li>
</ul>

<h2>Bottom line</h2>
<p><strong>Riftrunner</strong> on <strong>LMArena</strong> feels like Gemini 3 tuned for dependable, fast reasoning. If you need consistent Battle Mode wins with clean formatting, this combo is hard to beat.</p>
`,
  },
  {
    slug: "gemini-3-riftrunner-3d-fox-modeling-comparison",
    title: "Gemini 3 + riftrunner on LMArena: 3D Fox Modeling vs SOTA",
    description: "I asked riftrunner on LMArena to generate a 3D fox and compared it with other state-of-the-art models. Early signal: Gemini 3 + riftrunner shows promising shape fidelity and mesh cleanliness.",
    author: "RiftRunner Team",
    publishDate: "2025-04-16",
    lastModified: "2025-04-16",
    tags: ["Gemini 3", "riftrunner", "LMArena", "3D modeling", "SOTA", "3D generation", "AI graphics"],
    category: "AI Experiments",
    readingTime: 5,
    featured: true,
    content: `
<h1>Gemini 3 + riftrunner on LMArena: 3D Fox Modeling vs SOTA</h1>

<blockquote>I asked <strong>riftrunner</strong> (rumored Gemini 3) on LMArena to generate a 3D fox. Then I compared the geometry and textures against other state-of-the-art 3D models.</blockquote>

<p><img src="/blog/003.png" alt="3D fox render generated by riftrunner on LMArena" /></p>

<h2>What I asked for</h2>
<ul>
  <li>Prompt: “high-quality 3D fox, clean topology, readable fur, neutral studio lighting.”</li>
  <li>Output: OBJ/mesh-style preview from riftrunner; side-by-side with two SOTA baselines.</li>
  <li>Environment: LMArena Battle mode, no manual post-editing.</li>
</ul>

<h2>Why this matters</h2>
<ul>
  <li><strong>Shape fidelity</strong> is the hard part: ears, snout, and paws often collapse in fast 3D pipelines.</li>
  <li><strong>Mesh cleanliness</strong> impacts rigging and animation downstream.</li>
  <li><strong>Lighting neutrality</strong> keeps focus on geometry quality rather than stylized shading.</li>
</ul>

<h2>How riftrunner (Gemini 3) performed</h2>
<ul>
  <li><strong>Topology</strong>: kept ear thickness and snout volume without fusing edges—a win over Baseline B.</li>
  <li><strong>Proportions</strong>: body-to-head ratio felt natural; paws remain distinct (many models blob here).</li>
  <li><strong>Texture read</strong>: fur directionality appears, though fine strands are still simplified.</li>
  <li><strong>Artifacts</strong>: mild smoothing on tail start; no major mesh tearing observed.</li>
</ul>

<h2>Comparison vs SOTA baselines</h2>
<ol>
  <li><strong>Baseline A (generalist 3D model)</strong>: sharper fur but heavier topology noise; paws partially merged.</li>
  <li><strong>Baseline B (stylized generator)</strong>: fun colors, weaker anatomy; missing inner-ear depth.</li>
  <li><strong>riftrunner (Gemini 3)</strong>: most balanced on anatomy and clean surfaces; texturing is conservative but usable.</li>
</ol>

<h2>Takeaways for 3D teams</h2>
<ul>
  <li>Use riftrunner when you need <strong>clean anatomy and riggable meshes</strong> with minimal cleanup.</li>
  <li>Layer a texture pass if you need richer fur detail; geometry is already stable.</li>
  <li>For stylized looks, a post-style transfer may beat asking the generator to do both shape and style.</li>
</ul>

<h2>Bottom line</h2>
<p>For this fox sample, <strong>riftrunner</strong> (Gemini 3 on LMArena) delivered the best geometry-to-cleanliness ratio among the tested SOTA models. If more complex poses or quad-based retopo are needed, this is a strong starting point with less manual fixing.</p>
`,
  },
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
