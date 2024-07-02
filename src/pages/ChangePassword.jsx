import React from "react";

const ChangePassword = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Password changed successfully!");
      }}
    >
      <div className="mb-4">
        <label
          htmlFor="currentPassword"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Current Password
        </label>
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          placeholder="Enter your current password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="newPassword"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          New Password
        </label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          placeholder="Enter your new password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Confirm New Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your new password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Change Password
      </button>
    </form>
  );
};

export default ChangePassword;
