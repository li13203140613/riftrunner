import Hero from "@/components/Hero";
import Examples from "@/components/Examples";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BlogPreview from "@/components/BlogPreview";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Examples />
      <Features />
      <HowItWorks />
      <BlogPreview />
      <FAQ />
      <Footer />
    </main>
  );
}
