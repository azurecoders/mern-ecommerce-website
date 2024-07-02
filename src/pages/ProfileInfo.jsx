import React, { useState } from "react";

const ProfileInfo = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(URL.createObjectURL(file));
  };

  return (
    <form>
      <div className="mb-4">
        <label
          htmlFor="profilePic"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Profile Picture
        </label>
        <input
          type="file"
          id="profilePic"
          name="profilePic"
          accept="image/*"
          onChange={handleProfilePicChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        {profilePic && (
          <img
            src={profilePic}
            alt="Profile"
            className="mt-4 w-32 h-32 rounded-full object-cover"
          />
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Save
      </button>
    </form>
  );
};

export default ProfileInfo;
