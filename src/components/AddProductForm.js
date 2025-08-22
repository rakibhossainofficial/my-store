"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to add product");
      toast.success("Product added successfully")
      reset();
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-4 rounded-lg shadow-md space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          {...register("name", { required: "Product name is required" })}
          className="mt-1 block w-full border rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          rows="3"
          {...register("description")}
          className="mt-1 block w-full border rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          step="0.01"
          {...register("price", { required: "Price is required" })}
          className="mt-1 block w-full border rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="url"
          {...register("imageUrl")}
          className="mt-1 block w-full border rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50"
      >
        {isSubmitting ? "Adding..." : "Add Product"}
      </button>

    </form>
  );
}
