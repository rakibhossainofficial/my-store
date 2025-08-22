"use client";

import { useEffect, useState } from "react";
import ProductCardGrid from "./ProductCardGrid";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/product-limit");
        const data = await res.json();

        setProducts(data.data || []); // adjust if API shape differs
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, idx) => (
            <ProductCardGrid key={p._id || idx} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
