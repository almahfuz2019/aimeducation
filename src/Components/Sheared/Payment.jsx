// PaymentPage.jsx

import React, { useState, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useReactToPrint } from "react-to-print";

/**
 * Initialize Stripe with your Publishable Key.
 * Replace with your actual Publishable Key from Stripe Dashboard.
 */
const stripePromise = loadStripe(
  "pk_test_51PzB0X04pq12kJOGP41vMAMP1x7mNleRQk9r1Yzo2EWX7P7QqCEOh2xdYNYKJYgeA15vWHOMSznCjJt1CmVDv8go00aCurFGRL",
);

/**
 * PaymentPage Component
 *
 * This component handles the entire payment process, including:
 * - Displaying the payment form
 * - Processing the payment with Stripe
 * - Displaying a printable invoice upon successful payment
 *
 * It ensures responsiveness, accessibility, and provides real-time feedback to users.
 */
const PaymentPage = () => {
  // State to store payment details after successful payment
  const [paymentDetails, setPaymentDetails] = useState(null);

  // Ref for the Invoice component to enable printing
  const invoiceRef = useRef();

  // Hook to handle printing of the Invoice
  const handlePrintInvoice = useReactToPrint({
    content: () => invoiceRef.current,
    documentTitle: "Invoice",
    onAfterPrint: () => toast.info("Invoice printed successfully!"),
  });

  /**
   * Handles successful payment by setting payment details.
   *
   * @param {Object} details - Payment details including amount and paymentIntent.
   */
  const handlePaymentSuccess = (details) => {
    setPaymentDetails(details);
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="container mx-auto p-4">
          {/* Page Title */}
          <h2 className="text-5xl font-extrabold text-center mb-12 text-primary">
            Secure Payment
          </h2>

          {/* Description */}
          <p className="text-lg text-center mb-10 text-gray-700 max-w-3xl mx-auto">
            We value your contribution and assure you that this payment is 100%
            secure and handled with the utmost care. Please use the form below
            to make a payment for our services or donations. If you have any
            questions, feel free to reach out to us.
          </p>

          {/* Payment Form or Invoice Display */}
          {!paymentDetails ? (
            <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
          ) : (
            <>
              {/* Payment Success Message */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4 text-green-600">
                  Payment Successful!
                </h3>
                <button
                  onClick={handlePrintInvoice}
                  className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary-dark transition-colors duration-200"
                >
                  Download Invoice
                </button>
              </div>

              {/* Hidden Invoice for Printing */}
              <div style={{ display: "none" }}>
                <Invoice ref={invoiceRef} paymentDetails={paymentDetails} />
              </div>
            </>
          )}
        </div>
      </div>
      {/* Toast Notifications for Invoice Print */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </Elements>
  );
};

/**
 * PaymentForm Component
 *
 * Handles the payment process using Stripe's CardElement.
 * Utilizes react-hook-form for form management and validation.
 * Provides real-time feedback using react-toastify for notifications.
 *
 * @param {Function} onPaymentSuccess - Callback function invoked upon successful payment.
 */
const PaymentForm = ({ onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");

  /**
   * Handles form submission.
   * Creates a payment intent and confirms the payment with Stripe.
   *
   * @param {Object} data - Form data containing the payment amount.
   */
  const onSubmit = async (data) => {
    setLoading(true);

    // Validate Stripe and Elements presence
    if (!stripe || !elements || !amount) {
      toast.error("Please enter a valid amount.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      // Create Payment Intent on the server
      const response = await axios.post(
        "http://localhost:5000/api/create-payment-intent",
        {
          amount: Math.round(amount * 100), // Convert dollars to cents
        },
      );

      // Check if clientSecret is present
      if (!response.data || !response.data.clientSecret) {
        throw new Error("Invalid response from payment server.");
      }

      const clientSecret = response.data.clientSecret;

      // Confirm the payment on the client
      const confirmPayment = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (confirmPayment.error) {
        // Show error to the user
        toast.error(`Payment failed: ${confirmPayment.error.message}`);
      } else {
        if (confirmPayment.paymentIntent.status === "succeeded") {
          // Payment successful
          toast.success("Payment Successful!");
          reset(); // Reset the form
          setAmount("");
          onPaymentSuccess({
            amount,
            paymentIntent: confirmPayment.paymentIntent,
          }); // Pass payment details to parent
        }
      }
    } catch (error) {
      // Handle server or network errors
      toast.error(
        error.response?.data?.error ||
          error.message ||
          "Payment failed. Please try again.",
      );
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-6"
    >
      {/* Form Title */}
      <h3 className="text-3xl font-bold text-black mb-6 text-center">
        Payment Information
      </h3>

      {/* Amount Input */}
      <div className="mb-4">
        <label htmlFor="amount" className="block text-black font-medium mb-2">
          Payment Amount (USD)
        </label>
        <input
          type="number"
          id="amount"
          {...register("amount", {
            required: "Amount is required",
            min: { value: 1, message: "Amount must be at least $1" },
          })}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={`w-full px-4 py-2 border ${
            errors.amount ? "border-red-500" : "border-gray-400"
          } rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-primary`}
          placeholder="Enter amount (e.g., 10)"
          required
        />
        {errors.amount && (
          <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
        )}
      </div>

      {/* Card Element */}
      <div className="mb-4 p-4 border border-gray-400 rounded-lg">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#4B5563",
                "::placeholder": {
                  color: "#9CA3AF",
                },
              },
              invalid: {
                color: "#F87171",
              },
            },
          }}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full py-3 text-white font-bold rounded-lg ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-black hover:bg-gray-900"
        } transition-colors duration-200`}
        disabled={!stripe || loading}
      >
        {loading ? "Processing..." : `Pay $${amount || "0.00"}`}
      </button>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </form>
  );
};

/**
 * Invoice Component
 *
 * Displays payment details in a printable table format.
 * Utilizes React.forwardRef to work with react-to-print.
 *
 * @param {Object} props - Component props containing payment details.
 */
const Invoice = React.forwardRef(({ paymentDetails }, ref) => {
  const { amount, paymentIntent } = paymentDetails;

  // Safeguard in case paymentIntent or charges are undefined
  const last4 =
    paymentIntent.charges?.data[0]?.payment_method_details?.card?.last4 ||
    "****";

  return (
    <div ref={ref} className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Invoice</h2>
      <table className="min-w-full border-collapse">
        <tbody>
          <tr className="border-b">
            <th className="text-left py-2 px-4">Payment ID:</th>
            <td className="py-2 px-4">{paymentIntent.id}</td>
          </tr>
          <tr className="border-b">
            <th className="text-left py-2 px-4">Amount:</th>
            <td className="py-2 px-4">${parseFloat(amount).toFixed(2)}</td>
          </tr>
          <tr className="border-b">
            <th className="text-left py-2 px-4">Status:</th>
            <td className="py-2 px-4">
              {paymentIntent.status.charAt(0).toUpperCase() +
                paymentIntent.status.slice(1)}
            </td>
          </tr>
          <tr className="border-b">
            <th className="text-left py-2 px-4">Date:</th>
            <td className="py-2 px-4">
              {new Date(paymentIntent.created * 1000).toLocaleString()}
            </td>
          </tr>
          <tr>
            <th className="text-left py-2 px-4">Payment Method:</th>
            <td className="py-2 px-4">Card ending with {last4}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});

export default PaymentPage;
