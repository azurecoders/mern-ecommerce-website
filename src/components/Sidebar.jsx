import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col">
      <div className="py-4 px-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <nav className="flex-1 px-2">
        <ul>
          <li>
            <Link
              to="/dashboard"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/orders"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600"
            >
              Manage Orders
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/upload-product"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600"
            >
              Upload Product
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
