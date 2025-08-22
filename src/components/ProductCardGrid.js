"use client";

import Link from "next/link";

export default function ProductCardGrid({ product }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <div className="h-40 bg-gray-100 mb-4 rounded overflow-hidden flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name || "Product image"}
          className="h-48 w-full object-cover"
          onError={(e) =>
            (e.currentTarget.src = "https://placehold.co/400x300")
          }
        />
      </div>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <Link
        href={`/products/${product._id}`}
        className="mt-4 px-4 py-2 inline-block bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}
