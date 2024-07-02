import React from "react";
import { useForm } from "react-hook-form";

const ProductUpload = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upload Product</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            {...register("productName", { required: true })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
          {errors.productName && (
            <span className="text-red-500 text-sm">
              Product Name is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="productDescription"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Product Description
          </label>
          <textarea
            id="productDescription"
            {...register("productDescription", { required: true })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            rows="4"
            required
          ></textarea>
          {errors.productDescription && (
            <span className="text-red-500 text-sm">
              Description is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="productPrice"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Product Price
          </label>
          <input
            type="number"
            id="productPrice"
            {...register("productPrice", { required: true })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
          {errors.productPrice && (
            <span className="text-red-500 text-sm">Price is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="productImage"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Product Image
          </label>
          <input
            type="file"
            id="productImage"
            {...register("productImage", { required: true })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
          {errors.productImage && (
            <span className="text-red-500 text-sm">Image is required</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default ProductUpload;
