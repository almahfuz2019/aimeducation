// BasicContact.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../Sheared/Loading"; // Ensure the path is correct
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaSpinner,
  FaExclamationTriangle,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

/**
 * BasicContact Component
 *
 * This component displays a list of contact messages with functionalities to:
 * - Search contacts by email
 * - Paginate through contacts
 * - Update the read/unread status of a contact
 * - View detailed information of a contact in a modal with a fancy table
 *
 * It includes comprehensive error handling, loading states, responsive design,
 * and detailed comments for better readability and maintainability.
 */
const BasicContact = () => {
  // State variables for contacts data, loading state, and error messages
  const [contacts, setContacts] = useState([]);
  const [totalContacts, setTotalContacts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage, setContactsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState(""); // Stores the search query
  const [showModal, setShowModal] = useState(false); // Controls modal visibility
  const [selectedContact, setSelectedContact] = useState(null); // Stores the contact selected for viewing
  const [loading, setLoading] = useState(false); // Indicates data fetching state
  const [error, setError] = useState(""); // Stores error messages

  /**
   * useEffect Hook
   *
   * Fetches contacts data whenever the currentPage, contactsPerPage, or searchQuery changes.
   */
  useEffect(() => {
    fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, contactsPerPage, searchQuery]);

  /**
   * fetchContacts Function
   *
   * Fetches contacts from the backend API based on current pagination and search parameters.
   * Handles loading and error states.
   */
  const fetchContacts = async () => {
    setLoading(true);
    setError("");
    try {
      // Define API endpoint and parameters
      const endpoint = searchQuery
        ? `http://localhost:5000/api/contacts/search`
        : `http://localhost:5000/api/contacts`;

      const params = searchQuery
        ? { query: searchQuery, page: currentPage, limit: contactsPerPage }
        : { page: currentPage, limit: contactsPerPage };

      // Make GET request to fetch contacts
      const response = await axios.get(endpoint, { params });

      // Update state with fetched data
      setContacts(response.data.contacts);
      setTotalContacts(response.data.totalContacts);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError("Failed to fetch contacts. Please try again later.");
      toast.error("Failed to fetch contacts.");
    }
    setLoading(false);
  };

  /**
   * handleSearch Function
   *
   * Initiates a search based on the searchQuery.
   * Resets to the first page upon a new search.
   */
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form submission reload
    setCurrentPage(1); // Reset to first page for new search
    fetchContacts();
  };

  /**
   * handlePageChange Function
   *
   * Updates the currentPage state to navigate through pagination.
   * Ensures the new page is within valid bounds.
   */
  const handlePageChange = (page) => {
    if (page >= 1 && page <= Math.ceil(totalContacts / contactsPerPage)) {
      setCurrentPage(page);
    }
  };

  /**
   * handleContactsPerPageChange Function
   *
   * Updates the number of contacts displayed per page.
   * Resets to the first page when the limit changes.
   */
  const handleContactsPerPageChange = (e) => {
    setContactsPerPage(e.target.value);
    setCurrentPage(1); // Reset to first page when limit changes
  };

  /**
   * toggleReadStatus Function
   *
   * Toggles the read/unread status of a contact.
   * Provides user feedback through toast notifications.
   */
  const toggleReadStatus = async (id) => {
    setLoading(true);
    try {
      await axios.patch(`http://localhost:5000/api/contact/${id}/toggle-read`);
      toast.success("Status updated successfully.");
      fetchContacts(); // Refresh contacts to reflect changes
    } catch (err) {
      console.error("Error toggling read status:", err);
      setError("Failed to update status.");
      toast.error("Error toggling read status.");
    }
    setLoading(false);
  };

  /**
   * openModal Function
   *
   * Opens the modal to display detailed information of a selected contact.
   */
  const openModal = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  /**
   * closeModal Function
   *
   * Closes the contact details modal.
   */
  const closeModal = () => {
    setShowModal(false);
    setSelectedContact(null);
  };

  /**
   * paginationNumbers Function
   *
   * Generates pagination buttons based on the total number of pages.
   */
  const paginationNumbers = () => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 mx-1 rounded ${
            currentPage === i
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

  return (
    <div className="container mx-auto p-4">
      {/* Page Heading */}
      <h1 className="text-center font-bold text-4xl uppercase text-primary mt-6">
        Contact Information
      </h1>

      {/* Search Form */}
      <form
        className="flex flex-col md:flex-row justify-center items-center mt-5 mb-10 space-y-4 md:space-y-0"
        onSubmit={handleSearch}
      >
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search by email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery as user types
            className="input input-bordered input-primary w-full pr-10"
          />
        
        </div>
        <button
          type="submit" // Trigger search on form submission
          className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-200 w-full md:w-auto"
        >
          Search
        </button>
      </form>

      {/* Items Per Page Selector */}
      <div className="flex justify-center items-center mb-4">
        <label
          htmlFor="contactsPerPage"
          className="mr-2 text-lg font-medium text-gray-700"
        >
          Items per page:
        </label>
        <select
          id="contactsPerPage"
          value={contactsPerPage}
          onChange={handleContactsPerPageChange}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      {/* Display Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center h-64">
          <FaSpinner className="animate-spin text-4xl text-primary" />
        </div>
      )}

      {/* Display Error Message */}
      {error && (
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <FaExclamationTriangle className="mx-auto mb-4 text-4xl text-red-500" />
            <p className="text-xl text-red-500">{error}</p>
          </div>
        </div>
      )}

      {/* Users Table */}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
            <thead className="bg-primary text-white">
              <tr className="text-left">
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Received</th>
                <th className="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <tr key={contact._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{contact.email}</td>
                    <td className="px-4 py-2">{contact.message}</td>
                    <td className="px-4 py-2">
                      {contact.read ? (
                        <span className="text-green-600 font-semibold">
                          Read
                        </span>
                      ) : (
                        <span className="text-red-600 font-semibold">
                          Unread
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 text-right">
                      {/* Toggle Read Status Button */}
                      <button
                        className={`px-3 py-1 font-semibold rounded-md btn btn-xs ${
                          contact.read
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-gray-300 hover:bg-gray-400"
                        } text-white`}
                        onClick={() => toggleReadStatus(contact._id)}
                      >
                        {contact.read ? "Mark as Unread" : "Mark as Read"}
                      </button>

                      {/* View Details Button */}
                      <button
                        className="px-3 py-1 font-semibold rounded-md btn btn-xs bg-blue-500 hover:bg-blue-600 text-white ml-2"
                        onClick={() => openModal(contact)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No contacts found for the search query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination Controls */}
      {!loading && !error && totalContacts > 0 && (
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === 1
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-gray-300 hover:bg-gray-400 text-gray-800"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex">{paginationNumbers()}</div>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === Math.ceil(totalContacts / contactsPerPage)
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-gray-300 hover:bg-gray-400 text-gray-800"
            }`}
            disabled={
              currentPage === Math.ceil(totalContacts / contactsPerPage)
            }
          >
            Next
          </button>
        </div>
      )}

      {/* Modal for Contact Details */}
      {showModal && selectedContact && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Modal Content */}
            <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <tbody>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Email:</th>
                    <td className="px-4 py-2">{selectedContact.email}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Message:</th>
                    <td className="px-4 py-2">{selectedContact.message}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Status:</th>
                    <td className="px-4 py-2">
                      {selectedContact.read ? (
                        <span className="text-green-600 font-semibold">
                          Read
                        </span>
                      ) : (
                        <span className="text-red-600 font-semibold">
                          Unread
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Received:</th>
                    <td className="px-4 py-2">
                      {new Date(selectedContact.createdAt).toLocaleString()}
                    </td>
                  </tr>
                  {/* Add more fields here if necessary */}
                </tbody>
              </table>
            </div>

            {/* Close Modal Button */}
            <div className="flex justify-end mt-6">
              <button
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Container for Notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default BasicContact;
