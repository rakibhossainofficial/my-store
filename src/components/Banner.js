"use client";

import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center py-16 md:py-24">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Welcome to MyStore
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mb-8 opacity-90">
            Discover premium products and seamless shopping — all in one place.
          </p>

          <Link
            href="/products"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
