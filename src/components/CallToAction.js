"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to experience the difference?
        </h2>
        <p className="mb-8 opacity-90">
          Join thousands of happy customers today.
        </p>
        <Link
          href="/signup"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
