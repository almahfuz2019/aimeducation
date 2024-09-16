// AreaForm.jsx

import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner, FaExclamationTriangle } from "react-icons/fa";

/**
 * AreaForm Component
 *
 * This component renders a form to create a new area with various details.
 * It includes functionalities to handle form submission, display loading states,
 * manage errors, and provide user feedback through toast notifications.
 * The design is responsive and visually appealing using Tailwind CSS.
 */
const AreaForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    districtName: "",
    stateName: "",
    thanaName: "",
    postOfficeName: "",
    villageName: "",
    floodSeverity: "Low",
    affectedPopulation: "",
    reliefEfforts: "",
    statusDate: "",
  });

  // State to manage loading state during form submission
  const [loading, setLoading] = useState(false);

  // State to manage error messages
  const [error, setError] = useState("");

  /**
   * handleInputChange Function
   *
   * Updates the formData state as the user inputs data into the form fields.
   *
   * @param {Object} e - The event object from the input field.
   */
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * handleSubmit Function
   *
   * Handles the form submission by sending a POST request to the backend API.
   * Displays success or error notifications based on the response.
   *
   * @param {Object} e - The event object from the form submission.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setLoading(true); // Sets the loading state to true
    setError(""); // Resets any existing error messages

    try {
      // Sends a POST request to create a new area with the form data
      await axios.post("http://localhost:5000/api/area", formData);

      // Resets the form fields after successful submission
      setFormData({
        districtName: "",
        stateName: "",
        thanaName: "",
        postOfficeName: "",
        villageName: "",
        floodSeverity: "Low",
        affectedPopulation: "",
        reliefEfforts: "",
        statusDate: "",
      });

      // Displays a success toast notification
      toast.success("Area created successfully!");
    } catch (error) {
      console.error("Error creating area:", error);

      // Sets the error message based on the response
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
        toast.error("An unexpected error occurred. Please try again.");
      }
    }

    setLoading(false); // Resets the loading state
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg max-w-4xl">
      {/* Toast Container for Notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />

      {/* Form Heading */}
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">
        Create New Area
      </h2>

      {/* Display Error Message */}
      {error && (
        <div
          className="flex items-center bg-red-100 text-red-700 px-4 py-3 rounded mb-6"
          role="alert"
        >
          <FaExclamationTriangle className="w-5 h-5 mr-2" />
          <span>{error}</span>
        </div>
      )}

      {/* Area Creation Form */}
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* District Name */}
        <div>
          <label htmlFor="districtName" className="block mb-1 font-medium">
            District Name<span className="text-red-500">*</span>
          </label>
          <select
            id="districtName"
            name="districtName"
            value={formData.districtName}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="" disabled>
              Select District
            </option>
            <option value="District 1">District 1</option>
            <option value="District 2">District 2</option>
            {/* Add more districts as needed */}
          </select>
        </div>

        {/* State Name */}
        <div>
          <label htmlFor="stateName" className="block mb-1 font-medium">
            State Name<span className="text-red-500">*</span>
          </label>
          <select
            id="stateName"
            name="stateName"
            value={formData.stateName}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="" disabled>
              Select State
            </option>
            <option value="State 1">State 1</option>
            <option value="State 2">State 2</option>
            {/* Add more states as needed */}
          </select>
        </div>

        {/* Thana Name */}
        <div>
          <label htmlFor="thanaName" className="block mb-1 font-medium">
            Thana Name<span className="text-red-500">*</span>
          </label>
          <select
            id="thanaName"
            name="thanaName"
            value={formData.thanaName}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="" disabled>
              Select Thana
            </option>
            <option value="Thana 1">Thana 1</option>
            <option value="Thana 2">Thana 2</option>
            {/* Add more thanas as needed */}
          </select>
        </div>

        {/* Post Office Name */}
        <div>
          <label htmlFor="postOfficeName" className="block mb-1 font-medium">
            Post Office Name<span className="text-red-500">*</span>
          </label>
          <select
            id="postOfficeName"
            name="postOfficeName"
            value={formData.postOfficeName}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="" disabled>
              Select Post Office
            </option>
            <option value="Post Office 1">Post Office 1</option>
            <option value="Post Office 2">Post Office 2</option>
            {/* Add more post offices as needed */}
          </select>
        </div>

        {/* Village Name */}
        <div>
          <label htmlFor="villageName" className="block mb-1 font-medium">
            Village Name<span className="text-red-500">*</span>
          </label>
          <select
            id="villageName"
            name="villageName"
            value={formData.villageName}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="" disabled>
              Select Village
            </option>
            <option value="Village 1">Village 1</option>
            <option value="Village 2">Village 2</option>
            {/* Add more villages as needed */}
          </select>
        </div>

        {/* Flood Severity */}
        <div>
          <label htmlFor="floodSeverity" className="block mb-1 font-medium">
            Flood Severity<span className="text-red-500">*</span>
          </label>
          <select
            id="floodSeverity"
            name="floodSeverity"
            value={formData.floodSeverity}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Affected Population */}
        <div>
          <label
            htmlFor="affectedPopulation"
            className="block mb-1 font-medium"
          >
            Affected Population<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="affectedPopulation"
            name="affectedPopulation"
            value={formData.affectedPopulation}
            onChange={handleInputChange}
            required
            min="0"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter number of affected population"
          />
        </div>

        {/* Relief Efforts */}
        <div className="md:col-span-2 lg:col-span-3">
          <label htmlFor="reliefEfforts" className="block mb-1 font-medium">
            Relief Efforts<span className="text-red-500">*</span>
          </label>
          <textarea
            id="reliefEfforts"
            name="reliefEfforts"
            value={formData.reliefEfforts}
            onChange={handleInputChange}
            required
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Describe the relief efforts being undertaken"
          ></textarea>
        </div>

        {/* Status Date */}
        <div className="md:col-span-2 lg:col-span-3">
          <label htmlFor="statusDate" className="block mb-1 font-medium">
            Status Date<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="statusDate"
            name="statusDate"
            value={formData.statusDate}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 lg:col-span-3 flex justify-center">
          <button
            type="submit"
            disabled={loading} // Disables the button when loading
            className={`w-full md:w-1/2 py-3 px-6 rounded-lg text-white font-semibold ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            } transition-colors duration-200 flex items-center justify-center`}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              "Create Area"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AreaForm;
