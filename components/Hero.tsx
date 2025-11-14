"use client";

import { useState } from "react";

export default function Hero() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // TODO: Replace with actual API call when backend is ready
    setTimeout(() => {
      setIsGenerating(false);
      alert("Animation generation will be implemented when API is ready!");
    }, 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-purple-dark opacity-90"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">RiftRunner</span>
          <br />
          <span className="text-white">AI Animation Generator</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
          Transform your ideas into stunning animations with RiftRunner
        </p>

        <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          RiftRunner is a fast, reliable AI tool for creating animations. Perfect for designers,
          developers, and creators. Use our free generator right in your browser, without any
          need to register or install software.
        </p>

        {/* Input section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Generate Animation Now
          </h2>

          <div className="space-y-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your animation... (e.g., a bouncing ball with trail effect)"
              className="w-full px-6 py-4 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              rows={4}
              disabled={isGenerating}
            />

            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="w-full py-4 px-8 bg-gradient-purple hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Generate with RiftRunner</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 向下滚动提示动画 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group"
          aria-label="Scroll down to see more"
        >
          <span className="text-sm font-medium">Scroll to see examples</span>
          <svg
            className="w-6 h-6 group-hover:translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
