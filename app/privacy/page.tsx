import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for RiftRunner AI Animation Generator. Learn how we protect your data and respect your privacy when using our free AI animation tool.",
  alternates: {
    canonical: "https://riftrunner.online/privacy",
  },
  openGraph: {
    title: "Privacy Policy - RiftRunner",
    description: "Privacy policy for RiftRunner AI Animation Generator",
    url: "https://riftrunner.online/privacy",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>
              RiftRunner is designed with privacy in mind. We do not require user accounts and
              collect minimal information necessary to provide our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Information</h2>
            <p>
              Any information collected is used solely to improve our service and provide you with
              the best animation generation experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Storage</h2>
            <p>
              We do not store your text prompts or generated animations on our servers. Everything
              happens in real-time and is not retained after generation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
            <p>
              We may use third-party analytics services to understand how users interact with our
              platform. These services have their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete any personal information we may have
              collected. Contact us if you have any concerns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Updates to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on
              this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us through our
              support channels.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">Last updated: January 2025</p>
        </div>
      </div>
    </div>
  );
}
