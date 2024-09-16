import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaSpinner, FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

/**
 * PaymentHistory Component
 * Displays paginated payment history and allows users to print detailed payment information in a nice table.
 * Includes search functionality by payment intent ID.
 */
const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Ref for printable content
  const componentRef = useRef();

  /**
   * handlePrint Function
   * Triggers the print functionality for the selected payment details.
   */
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Payment Invoice",
  });

  /**
   * fetchPayments Function
   * Fetches payment history with pagination from the backend.
   */
  const fetchPayments = async (page, limit) => {
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/payments?page=${page}&limit=${limit}`,
      );
      setPayments(data.payments);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError("Failed to fetch payments. Please try again.");
    }
    setLoading(false);
  };

  // Fetch payments when the component loads or when currentPage or itemsPerPage changes
  useEffect(() => {
    fetchPayments(currentPage, itemsPerPage);
  }, [currentPage, itemsPerPage]);

  /**
   * handleSearch Function
   * Searches for a payment by its paymentIntentId.
   */
  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError("");
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/payments/search?paymentIntentId=${searchTerm}`,
      );
      if (data.payment) {
        setPayments([data.payment]);
        setTotalPages(1); // No need for pagination when searching by ID
      } else {
        setPayments([]);
        setError("No payment found with the provided ID.");
      }
    } catch (err) {
      setError("Failed to search payment. Please try again.");
    }
    setLoading(false);
  };

  /**
   * handlePageChange Function
   * Handles page changes in the pagination system.
   */
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  /**
   * handleSelectPaymentForPrint Function
   * Selects a payment and opens the print modal.
   */
  const handleSelectPaymentForPrint = (payment) => {
    setSelectedPayment(payment);
    handlePrint();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto mt-12">
      {/* Heading */}
      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Payment History
      </h3>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Enter Payment Intent ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-md w-full max-w-lg mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      {/* Items per page selector */}
      <div className="flex justify-end mb-6">
        <label className="mr-2 text-gray-700">Items per page:</label>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      {/* Payments Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Amount (USD)</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Payment Intent ID</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-4">
                  ${(payment.amount / 100).toFixed(2)}
                </td>
                <td className="px-6 py-4 capitalize">{payment.status}</td>
                <td className="px-6 py-4">{payment.paymentIntentId}</td>
                <td className="px-6 py-4">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleSelectPaymentForPrint(payment)}
                  >
                    <FaPrint className="inline-block mr-2" />
                    Print Invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* No Payments Found */}
        {payments.length === 0 && !loading && !error && (
          <div className="text-center py-4 text-gray-500">
            No payments found.
          </div>
        )}
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center mt-6">
          <FaSpinner className="animate-spin text-4xl text-blue-500" />
        </div>
      )}

      {/* Error Message */}
      {error && <div className="text-center py-4 text-red-500">{error}</div>}

      {/* Pagination Controls */}
      {!loading && !error && totalPages > 1 && (
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`mx-1 px-4 py-2 rounded-lg ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            } transition-colors duration-200`}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`mx-1 px-3 py-2 rounded-lg ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors duration-200`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`mx-1 px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            } transition-colors duration-200`}
          >
            Next
          </button>
        </div>
      )}

      {/* Hidden Printable Content */}
      {selectedPayment && (
        <div className="hidden">
          <div ref={componentRef}>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Payment Invoice
              </h2>
              <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Field</th>
                    <th className="px-4 py-2 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Amount</td>
                    <td className="border px-4 py-2">
                      ${(selectedPayment.amount / 100).toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Status</td>
                    <td className="border px-4 py-2">
                      {selectedPayment.status}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Payment Intent ID</td>
                    <td className="border px-4 py-2">
                      {selectedPayment.paymentIntentId}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Date</td>
                    <td className="border px-4 py-2">
                      {new Date(selectedPayment.createdAt).toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
