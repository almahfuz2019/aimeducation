// UsersTable.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../../Sheared/Loading";
import { toast } from "react-toastify";
import { FaSpinner, FaExclamationTriangle } from "react-icons/fa";

/**
 * UsersTable Component
 *
 * Displays a table of users with functionalities to search, paginate, and update user roles.
 * Incorporates error handling, loading states, responsive design, and comprehensive comments.
 */
const UsersTable = () => {
  // State variables for managing users data, loading states, errors, and search/filter parameters
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  // Pagination state variables
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10); // Number of items per page

  /**
   * useEffect Hook
   *
   * Fetches users data whenever the page or limit changes.
   */
  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  /**
   * loadUsers Function
   *
   * Fetches users from the backend API with pagination.
   * Handles loading and error states.
   */
  const loadUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`http://localhost:5000/api/users`, {
        params: { page, limit },
      });
      setUsers(response.data.users);
      setTotalPages(Math.ceil(response.data.totalUsers / limit));
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Failed to load users. Please try again later.");
      toast.error("Failed to load users.");
    }
    setLoading(false);
  };

  /**
   * handleSearch Function
   *
   * Searches users based on the searchTerm (name or email).
   * Resets pagination to the first page after search.
   */
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/search`,
        {
          params: { query: searchTerm },
        },
      );
      setUsers(response.data.users);
      setTotalPages(1); // Assuming search results fit on one page
      setPage(1);
    } catch (error) {
      console.error("Error searching users:", error);
      setError("Failed to search users. Please try again.");
      toast.error("Failed to search users.");
    }
    setLoading(false);
  };

  /**
   * handleRoleChange Function
   *
   * Updates the role of a user.
   * Provides feedback through toast notifications.
   */
  const handleRoleChange = async (id, newRole) => {
    setLoading(true);
    try {
      await axios.put(`http://localhost:5000/api/user/${id}`, {
        role: newRole,
      });
      toast.success("User role updated successfully.");
      loadUsers(); // Reload users to reflect changes
    } catch (error) {
      console.error("Error updating user role:", error);
      setError("Failed to update user role.");
      toast.error("Error updating user role.");
    }
    setLoading(false);
  };

  /**
   * handleInputChange Function
   *
   * Updates the searchTerm state as the user types in the search input.
   */
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  /**
   * handleLimitChange Function
   *
   * Updates the number of items per page and resets to the first page.
   */
  const handleLimitChange = (e) => {
    setLimit(e.target.value);
    setPage(1); // Reset to page 1 when limit changes
  };

  /**
   * paginationNumbers Function
   *
   * Generates pagination buttons based on the total number of pages.
   */
  const paginationNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`px-3 py-2 mx-1 rounded ${
            page === i
              ? "bg-primary text-white"
              : "bg-gray-300 hover:bg-gray-400 text-gray-800"
          }`}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  // Render the Loading component if data is being fetched
  if (loading) return <Loading />;

  // Render the error message if an error occurred
  if (error)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <FaExclamationTriangle className="mx-auto mb-4 text-4xl text-red-500" />
          <p className="text-xl text-red-500">{error}</p>
        </div>
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      {/* Search Form */}
      <form
        className="flex flex-col md:flex-row justify-center items-center mt-5 mb-10 space-y-4 md:space-y-0"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={handleInputChange}
          className="input input-bordered input-primary w-full max-w-lg"
        />
        <button
          type="submit"
          className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-200 w-full md:w-auto"
        >
          Search
        </button>
      </form>

      {/* Items Per Page Selector */}
      <div className="flex justify-center items-center mb-4">
        <label
          htmlFor="limit"
          className="mr-2 text-lg font-medium text-gray-700"
        >
          Items per page:
        </label>
        <select
          id="limit"
          value={limit}
          onChange={handleLimitChange}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user._id, e.target.value)
                      }
                      className="p-2 border rounded-lg w-full md:w-40 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option value="super-admin">Super Admin</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2 text-center" colSpan="3">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
        {/* Previous Button */}
        <button
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          className={`px-4 py-2 mx-1 rounded ${
            page === 1
              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400 text-gray-800"
          }`}
          disabled={page === 1}
        >
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex">{paginationNumbers()}</div>

        {/* Next Button */}
        <button
          onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
          className={`px-4 py-2 mx-1 rounded ${
            page === totalPages
              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
              : "bg-gray-300 hover:bg-gray-400 text-gray-800"
          }`}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersTable;
