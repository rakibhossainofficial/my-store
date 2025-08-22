"use client";

import { useState } from "react";

export default function SingleProductClient({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <div className="aspect-4/3  bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover"
          onError={(e) =>
            (e.currentTarget.src = "https://placehold.co/400x300")
          }
        />
      </div>

      <div className="flex flex-col ">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-2 text-gray-500">{product.description}</p>
          <p className="mt-4 text-2xl font-semibold text-indigo-600">
            {product.price}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <label className="text-sm text-gray-600">
            Qty:
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="ml-2 w-16 border rounded-md px-2 py-1"
            />
          </label>
          <button className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
