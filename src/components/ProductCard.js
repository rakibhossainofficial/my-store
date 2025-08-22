"use client";

import { useRouter } from "next/navigation";

export default function ProductCard({ product, onAddToCart }) {
  const router = useRouter();

  return (
    <div
      key={product._id}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      <img
        src={product.imageUrl}
        alt={product.name || "Product image"}
        className="h-48 w-full object-cover"
        onError={(e) => (e.currentTarget.src = "https://placehold.co/400x300")}
      />

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {product.name}
          </h2>
          <p className="text-gray-500 text-sm mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-indigo-600 font-bold text-lg">
            {product.price}
          </span>
          <button
            onClick={() => router.push(`/products/${product._id}`)}
            className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
