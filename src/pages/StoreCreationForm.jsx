import React from "react";
import { useForm } from "react-hook-form";

const StoreCreationForm = () => {
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
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center items-center sm:py-12">
      <div className="relative py-3 sm:max-w-4xl w-full sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
        <div className="relative px-8 py-10 bg-white shadow-lg sm:rounded-lg sm:p-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Create Your Store
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label
                    htmlFor="storeName"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Store Name
                  </label>
                  <input
                    type="text"
                    id="storeName"
                    {...register("storeName", { required: true })}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    required
                  />
                  {errors.storeName && (
                    <span className="text-red-500 text-sm">
                      Store Name is required
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Home Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    {...register("address", { required: true })}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    required
                  />
                  {errors.address && (
                    <span className="text-red-500 text-sm">
                      Address is required
                    </span>
                  )}
                </div>

                <div className="mb-4 md:col-span-2">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    {...register("description", { required: true })}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    rows="4"
                    required
                  ></textarea>
                  {errors.description && (
                    <span className="text-red-500 text-sm">
                      Description is required
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="profileImage"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Store Profile Image
                  </label>
                  <input
                    type="file"
                    id="profileImage"
                    {...register("profileImage", { required: true })}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    required
                  />
                  {errors.profileImage && (
                    <span className="text-red-500 text-sm">
                      Profile Image is required
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="coverImage"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Store Cover Image
                  </label>
                  <input
                    type="file"
                    id="coverImage"
                    {...register("coverImage", { required: true })}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    required
                  />
                  {errors.coverImage && (
                    <span className="text-red-500 text-sm">
                      Cover Image is required
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 mt-6 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300"
              >
                Create Store
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCreationForm;
