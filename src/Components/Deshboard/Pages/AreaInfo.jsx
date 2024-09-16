import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

const AreaInfo = () => {
  const [areas, setAreas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedArea, setSelectedArea] = useState(null);
  const modalContentRef = useRef(); // Ref for printing modal content

  // Fetch areas from the backend with pagination
  const loadAreas = async (page = 1, limit = 10) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/areas?page=${page}&limit=${limit}`,
      );
      setAreas(response.data.areas || []);
      setTotalPages(Math.ceil(response.data.totalAreas / limit));
    } catch (error) {
      setError("Error loading areas. Please try again later.");
    }
    setLoading(false);
  };

  // Initial load and re-fetching on page/item changes
  useEffect(() => {
    loadAreas(currentPage, itemsPerPage);
  }, [currentPage, itemsPerPage]);

  // Search functionality
  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/areas/search?query=${searchTerm}`,
      );
      setAreas(response.data || []);
      setTotalPages(1); // No pagination needed for search results
    } catch (error) {
      setError("Error during search. Please try again.");
    }
    setLoading(false);
  };

  // Toggle area status
  const toggleStatus = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.patch(`http://localhost:5000/api/area/${id}/toggle-status`);
      loadAreas(currentPage, itemsPerPage); // Reload areas after status change
    } catch (error) {
      setError("Error updating status.");
    }
    setLoading(false);
  };

  // Print functionality
  const handlePrint = useReactToPrint({
    content: () => modalContentRef.current,
    documentTitle: "Area Details",
  });

  // Pagination logic with jump links
  const renderPagination = () => {
    const pageNumbers = [];
    const jumpSize = 2; // How many page numbers to show around current page
    let startPage = Math.max(currentPage - jumpSize, 1);
    let endPage = Math.min(currentPage + jumpSize, totalPages);

    if (startPage > 1) {
      pageNumbers.push(1); // Always show the first page
      if (startPage > 2) pageNumbers.push("..."); // Add dots for skipped pages
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push("...");
    }
    if (endPage < totalPages) {
      pageNumbers.push(totalPages); // Always show the last page
    }

    return pageNumbers.map((number, index) => (
      <button
        key={index}
        onClick={() => number !== "..." && setCurrentPage(number)}
        className={`mx-1 px-4 py-2 rounded-lg ${
          number === currentPage
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-blue-200 transition duration-300"
        }`}
        disabled={number === "..."}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className="container mx-auto p-4 text-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Flood Area Management
      </h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by district or village"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border-2 border-gray-300 rounded-lg w-full max-w-lg shadow-lg focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-blue-500"></div>
        </div>
      )}

      {/* Areas Table */}
      {!loading && areas.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
            <thead className="bg-blue-600 text-white text-lg">
              <tr>
                <th className="px-6 py-3 text-left">District Name</th>
                <th className="px-6 py-3 text-left">State Name</th>
                <th className="px-6 py-3 text-left">Thana Name</th>
                <th className="px-6 py-3 text-left">Post Office</th>
                <th className="px-6 py-3 text-left">Village Name</th>
                <th className="px-6 py-3 text-left">Flood Severity</th>
                <th className="px-6 py-3 text-left">Affected Population</th>
                <th className="px-6 py-3 text-left">Relief Efforts</th>
                <th className="px-6 py-3 text-left">Status Date</th>
                <th className="px-6 py-3 text-left">View</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {areas.map((area) => (
                <tr key={area._id} className="border-b text-gray-700">
                  <td className="px-6 py-4">{area.districtName}</td>
                  <td className="px-6 py-4">{area.stateName}</td>
                  <td className="px-6 py-4">{area.thanaName}</td>
                  <td className="px-6 py-4">{area.postOfficeName}</td>
                  <td className="px-6 py-4">{area.villageName}</td>
                  <td className="px-6 py-4">{area.floodSeverity}</td>
                  <td className="px-6 py-4">{area.affectedPopulation}</td>
                  <td className="px-6 py-4">{area.reliefEfforts}</td>
                  <td className="px-6 py-4">
                    {new Date(area.statusDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <FaEye
                      className="cursor-pointer text-blue-600 hover:text-blue-800 transition duration-200"
                      onClick={() => setSelectedArea(area)}
                    />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => toggleStatus(area._id)}
                      className={`px-4 py-2 rounded-lg font-semibold text-white ${
                        area.status
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-red-500 hover:bg-red-600"
                      } transition duration-200`}
                    >
                      {area.status ? "Resolved" : "Not Resolved"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination Controls */}
      {!loading && !error && totalPages > 1 && (
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="mx-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {renderPagination()}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="mx-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal for Area Details */}
      {selectedArea && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl"
            ref={modalContentRef}
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Area Details
            </h3>
            <table className="w-full text-left">
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-semibold">District</td>
                  <td className="border px-4 py-2">
                    {selectedArea.districtName}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">State</td>
                  <td className="border px-4 py-2">{selectedArea.stateName}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">Village</td>
                  <td className="border px-4 py-2">
                    {selectedArea.villageName}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">
                    Flood Severity
                  </td>
                  <td className="border px-4 py-2">
                    {selectedArea.floodSeverity}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">
                    Affected Population
                  </td>
                  <td className="border px-4 py-2">
                    {selectedArea.affectedPopulation}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">
                    Relief Efforts
                  </td>
                  <td className="border px-4 py-2">
                    {selectedArea.reliefEfforts}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold">
                    Status Date
                  </td>
                  <td className="border px-4 py-2">
                    {new Date(selectedArea.statusDate).toLocaleDateString()}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end mt-6">
              <button
                onClick={handlePrint}
                className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-200"
              >
                Print
              </button>
              <button
                onClick={() => setSelectedArea(null)}
                className="ml-3 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AreaInfo;
