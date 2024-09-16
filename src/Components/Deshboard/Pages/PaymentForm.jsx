import React, { useState} from "react";
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


// Load Stripe (Replace with your actual Publishable Key)
const stripePromise = loadStripe("pk_test_YOUR_STRIPE_PUBLISHABLE_KEY");

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [amount, setAmount] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);

    if (!stripe || !elements || !amount) {
      toast.error("Please enter a valid amount.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { data: clientData } = await axios.post(
        "http://localhost:5000/api/create-payment-intent",
        {
          amount: Math.round(amount * 100),
        },
      );

      const clientSecret = clientData.clientSecret;

      const confirmPayment = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (confirmPayment.error) {
        toast.error(`Payment failed: ${confirmPayment.error.message}`);
      } else {
        toast.success("Payment Successful!");
        reset();
        setAmount("");
      }
    } catch (error) {
      toast.error("Payment failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-6"
    >
      <h3 className="text-3xl font-bold text-black mb-6 text-center">
        Payment Information
      </h3>

      <div className="mb-4">
        <label htmlFor="amount" className="block text-black font-medium mb-2">
          Payment Amount (USD)
        </label>
        <input
          type="number"
          id="amount"
          {...register("amount", { required: true })}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black"
          placeholder="Enter amount (e.g., 10)"
          required
        />
      </div>

      <div className="mb-4 p-4 border border-gray-400 rounded-lg">
        <CardElement />
      </div>

      <button
        type="submit"
        className={`w-full py-3 text-white font-bold rounded-lg ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-black hover:bg-gray-900"
        }`}
        disabled={!stripe || loading}
      >
        {loading ? "Processing..." : `Pay $${amount || "0.00"}`}
      </button>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </form>
  );
};



// Main Component with Stripe Elements
const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="container mx-auto p-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-black">
            Secure Payment
          </h2>
          <PaymentForm />
       
        </div>
      </div>
    </Elements>
  );
};

export default PaymentPage;


