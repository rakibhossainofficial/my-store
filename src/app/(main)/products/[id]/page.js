import SingleProductClient from "@/components/SingleProductClient";

export default async function SingleProduct({ params }) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`);
  const { data } = await res.json();

  return <SingleProductClient product={data} />;
}
