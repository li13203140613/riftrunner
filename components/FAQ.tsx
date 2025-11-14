"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is RiftRunner really free to use?",
      answer:
        "Yes! RiftRunner is completely free to use. No hidden costs, no subscriptions, no credit card required.",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "No account needed! Just visit the website and start generating animations immediately. Your privacy is important to us.",
    },
    {
      question: "What devices are supported?",
      answer:
        "RiftRunner works on all modern browsers including Chrome, Safari, Firefox, and Edge on Windows, macOS, iOS, and Android devices.",
    },
    {
      question: "How long does it take to generate an animation?",
      answer:
        "Most animations generate in 5-30 seconds depending on complexity. Simple animations take 5-10 seconds, while complex ones may take up to 30 seconds.",
    },
    {
      question: "What format are the animations?",
      answer:
        "Animations are generated as high-quality video files that can be easily downloaded and used in any project.",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-purple-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
