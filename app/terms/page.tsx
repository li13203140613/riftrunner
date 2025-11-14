import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for RiftRunner AI Animation Generator. Read our terms and conditions for using our free AI-powered animation creation platform.",
  alternates: {
    canonical: "https://riftrunner.online/terms",
  },
  openGraph: {
    title: "Terms of Service - RiftRunner",
    description: "Terms of service for RiftRunner AI Animation Generator",
    url: "https://riftrunner.online/terms",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
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

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using RiftRunner, you accept and agree to be bound by the terms and
              provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p>
              Permission is granted to use RiftRunner for personal and commercial purposes. This
              license shall automatically terminate if you violate any of these restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Content Ownership</h2>
            <p>
              Animations you create with RiftRunner are yours to use. However, you are responsible
              for ensuring that your input text and usage do not infringe on others' intellectual
              property rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use</h2>
            <p>You agree not to use RiftRunner to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Generate content that is illegal, harmful, or offensive</li>
              <li>Violate any intellectual property rights</li>
              <li>Attempt to reverse engineer or exploit the service</li>
              <li>Use the service for any automated or bot activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Service Availability</h2>
            <p>
              We strive to maintain service availability but do not guarantee uninterrupted access.
              We reserve the right to modify or discontinue the service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p>
              RiftRunner is provided "as is" without warranties of any kind. We are not liable for
              any damages arising from the use or inability to use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service
              constitutes acceptance of modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
            <p>
              If you have any questions about these terms, please contact us through our support
              channels.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">Last updated: January 2025</p>
        </div>
      </div>
    </div>
  );
}
