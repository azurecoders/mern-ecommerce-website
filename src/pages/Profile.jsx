import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
            My Profile
          </h2>
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-1/2 py-2 font-medium text-sm rounded-t-md border-b-2 ${
                activeTab === "profile"
                  ? "border-blue-500 text-blue-500"
                  : "border-gray-200 text-gray-500"
              }`}
            >
              Personal Information
            </button>
            <button
              onClick={() => setActiveTab("changePassword")}
              className={`w-1/2 py-2 font-medium text-sm rounded-t-md border-b-2 ${
                activeTab === "changePassword"
                  ? "border-blue-500 text-blue-500"
                  : "border-gray-200 text-gray-500"
              }`}
            >
              Change Password
            </button>
          </div>
          {activeTab === "profile" && <ProfileInfo />}
          {activeTab === "changePassword" && <ChangePassword />}
        </div>
        <div className="flex justify-center space-x-4">
          <div
            onClick={() => navigate("/wishlist")}
            className="cursor-pointer bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-center w-1/3"
          >
            <p className="font-semibold">Wishlist</p>
          </div>
          <div
            onClick={() => navigate("/orders")}
            className="cursor-pointer bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-center w-1/3"
          >
            <p className="font-semibold">Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
