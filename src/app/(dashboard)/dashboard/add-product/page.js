import AddProductForm from "@/components/AddProductForm";

export default function AddProduct() {
  return (
    <div className="h-full w-full grid place-content-center">
      <div className="min-w-2xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-5">
          Add New Product
        </h1>
        <AddProductForm />
      </div>
    </div>
  );
}
