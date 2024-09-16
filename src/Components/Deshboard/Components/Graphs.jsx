// Graphs.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto"; // Automatically register chart components
import { FaSpinner, FaExclamationTriangle } from "react-icons/fa";

/**
 * Graphs Component
 *
 * This component fetches payment and area data from the backend APIs
 * and displays them using Line and Bar charts. It includes error handling,
 * loading states, and is fully responsive with an enhanced design.
 */
const Graphs = () => {
  // State variables for payment data, loading, and error states
  const [paymentData, setPaymentData] = useState([]);
  const [paymentLoading, setPaymentLoading] = useState(true);
  const [paymentError, setPaymentError] = useState(null);

  // State variables for area data, loading, and error states
  const [areaData, setAreaData] = useState([]);
  const [areaLoading, setAreaLoading] = useState(true);
  const [areaError, setAreaError] = useState(null);

  /**
   * useEffect Hook
   *
   * Fetches payment and area data when the component mounts.
   */
  useEffect(() => {
    // Fetch payment data
    const fetchPayments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/payments");
        const allPayments = response.data.payments;

        // Get the date three days ago
        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

        // Filter payments to include only those from the last three days
        const recentPayments = allPayments.filter((payment) => {
          const paymentDate = new Date(payment.createdAt);
          return paymentDate >= threeDaysAgo;
        });

        setPaymentData(recentPayments);
      } catch (error) {
        console.error("Error fetching payments:", error);
        setPaymentError("Failed to load payment data.");
      } finally {
        setPaymentLoading(false);
      }
    };

    // Fetch flood area data
    const fetchAreas = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/areas");
        setAreaData(response.data.areas);
      } catch (error) {
        console.error("Error fetching areas:", error);
        setAreaError("Failed to load area data.");
      } finally {
        setAreaLoading(false);
      }
    };

    // Initiate data fetching
    fetchPayments();
    fetchAreas();
  }, []);

  /**
   * Prepare data for the Line Chart
   *
   * Displays the total payment amounts over the last three days.
   */
  const prepareLineChartData = () => {
    // Create a map to aggregate payment amounts by date
    const paymentMap = {};

    paymentData.forEach((payment) => {
      const date = new Date(payment.createdAt).toLocaleDateString("en-GB");
      paymentMap[date] = (paymentMap[date] || 0) + payment.amount / 100; // Convert cents to dollars
    });

    // Generate labels for the last three days
    const labels = [];
    const data = [];
    for (let i = 2; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const formattedDate = date.toLocaleDateString("en-GB");
      labels.push(formattedDate);
      data.push(paymentMap[formattedDate] || 0);
    }

    return {
      labels,
      datasets: [
        {
          label: "Total Payments ($)",
          data,
          fill: false,
          borderColor: "#4bc0c0",
          backgroundColor: "#4bc0c0",
          tension: 0.1,
        },
      ],
    };
  };

  /**
   * Prepare data for the Bar Chart
   *
   * Displays the distribution of flood severity levels.
   */
  const prepareBarChartData = () => {
    // Aggregate flood severity counts
    const severityCounts = areaData.reduce(
      (acc, area) => {
        acc[area.floodSeverity] = (acc[area.floodSeverity] || 0) + 1;
        return acc;
      },
      { Low: 0, Medium: 0, High: 0 },
    );

    return {
      labels: ["Low", "Moderate", "High"],
      datasets: [
        {
          label: "Flood Severity",
          data: [
            severityCounts.Low,
            severityCounts.Moderate,
            severityCounts.High,
          ],
          backgroundColor: ["#36a2eb", "#ffcd56", "#ff6384"],
          borderColor: ["#36a2eb", "#ffcd56", "#ff6384"],
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="container max-w-screen-xl mx-auto p-4">
      {/* Dashboard Title */}
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>

      {/* Display Loading State */}
      {(paymentLoading || areaLoading) && (
        <div className="flex justify-center items-center h-64">
          <FaSpinner className="animate-spin text-4xl text-primary" />
        </div>
      )}

      {/* Display Error Messages */}
      {(paymentError || areaError) && (
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          {paymentError && (
            <div className="flex items-center space-x-2 text-red-500">
              <FaExclamationTriangle />
              <span>{paymentError}</span>
            </div>
          )}
          {areaError && (
            <div className="flex items-center space-x-2 text-red-500">
              <FaExclamationTriangle />
              <span>{areaError}</span>
            </div>
          )}
        </div>
      )}

      {/* Display Charts if Data is Loaded and No Errors */}
      {!paymentLoading && !areaLoading && !paymentError && !areaError && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Line Chart: Payments Over Last 3 Days */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Payments Over Last 3 Days
            </h3>
            {paymentData.length > 0 ? (
              <Line data={prepareLineChartData()} />
            ) : (
              <p className="text-center text-gray-500">
                No payment data available for the last 3 days.
              </p>
            )}
          </div>

          {/* Bar Chart: Flood Severity Distribution */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Flood Severity Distribution
            </h3>
            {areaData.length > 0 ? (
              <Bar data={prepareBarChartData()} />
            ) : (
              <p className="text-center text-gray-500">
                No area data available.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Graphs;
