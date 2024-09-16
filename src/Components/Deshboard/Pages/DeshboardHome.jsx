// DeshboardHome.jsx

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaInfoCircle,
  FaUsers,
  FaAddressBook,
  FaMapMarkedAlt,
  FaHistory,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../Firebase/firebase.config"; // Import your Firebase auth config
import Loading from "../../Sheared/Loading";
import useUserInfo from "../../../Hooks/UseUserInfo"; // Corrected import
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * DeshboardHome Component
 *
 * This component serves as the main layout for the dashboard.
 * It includes a sidebar with navigation links that vary based on user roles.
 * The sidebar is responsive and can be toggled on smaller screens.
 */
const DeshboardHome = () => {
  // Get the current user and loading state
  const [user, authLoading, authError] = useAuthState(auth);
  const { userInfo, userLoading, userError } = useUserInfo();
  console.log("User Info:", userInfo);

  // Show loading state while fetching user info
  if (userLoading || authLoading) {
    return <Loading />; // Show loading component
  }

  // Handle errors in fetching user info
  if (userError || authError) {
    return (
      <div className="text-center text-red-500">
        Error: {userError?.message || authError?.message}
      </div>
    );
  }

  /**
   * Logout function
   *
   * Signs out the user and removes the JWT token from localStorage.
   */
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Remove token from localStorage
        localStorage.removeItem("jwtToken");
        console.log("User signed out and token removed");
        toast.success("Logged out successfully.");
        // Optionally, redirect to the login page or home page here
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error signing out:", error);
        toast.error("Error signing out. Please try again.");
      });
  };

  return (
    <div className="drawer lg:drawer-open">
      {/* Hidden checkbox for drawer toggle */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Drawer Content */}
      <div className="drawer-content">
        {/* Toggle button for smaller screens */}
        <div className="absolute top-2 lg:hidden z-10 right-0">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <FaBars className="text-2xl font-extrabold" />
          </label>
        </div>

        {/* Toast Container for Notifications */}
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar />

        {/* Outlet to render nested routes */}
        <Outlet />
      </div>

      {/* Drawer Sidebar */}
      <div className="drawer-side mt-[115px] lg:mt-0">
        {/* Overlay for drawer */}
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        {/* Sidebar Content */}
        <div className="h-full p-3 space-y-2 w-60 bg-white border border-y-0 border-l-0">
          <div className="divide-y-2 divide-white">
            {/* Navigation for Super Admin */}
            {userInfo?.role === "super-admin" && (
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                {/* Basic Info */}
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `flex items-center p-2 space-x-3 text-lg rounded transition-all ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-900 hover:text-white"
                      }`
                    }
                  >
                    <FaInfoCircle />
                    <span>Basic Info</span>
                  </NavLink>
                </li>

                {/* Users Info */}
                <li>
                  <NavLink
                    to="users"
                    className={({ isActive }) =>
                      `flex items-center p-2 space-x-3 text-lg rounded transition-all ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-900 hover:text-white"
                      }`
                    }
                  >
                    <FaUsers />
                    <span>Users Info</span>
                  </NavLink>
                </li>

                {/* Contact Info */}
                <li>
                  <NavLink
                    to="contact-info"
                    className={({ isActive }) =>
                      `flex items-center p-2 space-x-3 text-lg rounded transition-all ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-900 hover:text-white"
                      }`
                    }
                  >
                    <FaAddressBook />
                    <span>Contact Info</span>
                  </NavLink>
                </li>

                {/* Add An Area */}
                <li>
                  <NavLink
                    to="add-area"
                    className={({ isActive }) =>
                      `flex items-center p-2 space-x-3 text-lg rounded transition-all ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-900 hover:text-white"
                      }`
                    }
                  >
                    <FaMapMarkedAlt />
                    <span>Add An Area</span>
                  </NavLink>
                </li>

                {/* Area Info */}
                <li>
                  <NavLink
                    to="area-info"
                    className={({ isActive }) =>
                      `flex items-center p-2 space-x-3 text-lg rounded transition-all ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-900 hover:text-white"
                      }`
                    }
                  >
                    <FaMapMarkedAlt />
                    <span>Area Info</span>
                  </NavLink>
                </li>

                {/* Payment History */}
                <li>
                  <NavLink
                    to="payment-history"
                    className={({ isActive }) =>
                      `flex items-center p-2 space-x-3 text-lg rounded transition-all ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-900 hover:text-white"
                      }`
                    }
                  >
                    <FaHistory />
                    <span>Payment History</span>
                  </NavLink>
                </li>

                {/* Logout */}
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center p-2 space-x-3 text-lg bg-red-700 text-white rounded hover:bg-red-800 transition-all w-full"
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            )}
            
            {/* Navigation for Admin */}
            {userInfo?.role === "admin" && (
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                {/* Basic Info */}
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `flex items-center p-2 space-x-3 text-lg rounded transition-all ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-900 hover:text-white"
                      }`
                    }
                  >
                    <FaInfoCircle />
                    <span>Basic Info</span>
                  </NavLink>
                </li>

                {/* Add An Area */}
                <li>
                  <NavLink
                    to="add-area"
                    className={({ isActive }) =>
                      `flex items-center p-2 space-x-3 text-lg rounded transition-all ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-900 hover:text-white"
                      }`
                    }
                  >
                    <FaMapMarkedAlt />
                    <span>Add An Area</span>
                  </NavLink>
                </li>

                {/* Area Info */}
                <li>
                  <NavLink
                    to="area-info"
                    className={({ isActive }) =>
                      `flex items-center p-2 space-x-3 text-lg rounded transition-all ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-700 hover:bg-gray-900 hover:text-white"
                      }`
                    }
                  >
                    <FaMapMarkedAlt />
                    <span>Area Info</span>
                  </NavLink>
                </li>

                {/* Logout */}
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center p-2 space-x-3 text-lg bg-red-700 text-white rounded hover:bg-red-800 transition-all w-full"
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeshboardHome;
