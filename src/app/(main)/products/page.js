import ProductCard from "@/components/ProductCard";

export default async function Products() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          🛍️ Our Products
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
