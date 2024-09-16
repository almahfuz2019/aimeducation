// Contact.jsx

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Contact Component
 *
 * This component provides a contact form for users to send feedback,
 * inquiries, or support requests related to flood relief efforts.
 * It includes form validation, submission handling, and real-time feedback
 * using react-toastify for notifications. The design is responsive and
 * styled with Tailwind CSS.
 */
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  /**
   * Handles form submission.
   * Sends form data to the backend API and provides user feedback.
   * @param {Object} data - The form data containing email and message.
   */
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        data,
      );
      toast.success(response.data.message);
      reset(); // Reset the form fields after successful submission
    } catch (err) {
      toast.error(
        err.response?.data?.error || "An error occurred. Please try again.",
      );
    }
  };

  return (
    <div className="relative py-20">
      {/* Toast Notifications */}
      <ToastContainer />

      {/* Contact Header */}
      <div className="mt-12 mb-5">
        <h2 className="text-3xl font-bold text-primary tracking-wide text-center md:text-4xl mt-7 uppercase mb-3">
          Contact Us
        </h2>
        <p className="max-w-3xl mx-auto text-center">
          We're here to help with any questions, feedback, or concerns regarding
          flood relief efforts and our Relief Tracker. Feel free to reach out to
          us anytime.
        </p>
      </div>

      {/* Contact Section with Map and Form */}
      <section className="text-white body-font relative">
        {/* Google Map Embed */}
        <div className="absolute inset-0 border-t-4 border-primary">
          <iframe
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4405672.220869587!2d87.70349162160367!3d23.489441696677737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e1!3m2!1sen!2sbd!4v1726465619728!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            frameBorder="0"
            className=""
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 glass bg-gradient-to-br from-primary/70 via-primary to-primary/70 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-white text-lg mb-1 font-semibold title-font">
              Send Us Your Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-white">
              Whether you're affected by the floods, a volunteer, or just want
              to contribute, we’d love to hear from you. Your feedback is
              valuable in helping us improve our relief efforts.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Field */}
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  placeholder="Your Email"
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  className={`w-full bg-white rounded border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-white"
                >
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  className={`w-full bg-white rounded border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <input
                className={`text-primary bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg cursor-pointer font-bold ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                value={isSubmitting ? "Submitting..." : "Submit"}
                disabled={isSubmitting}
              />

              {/* Additional Information */}
              <p className="text-xs text-white mt-3">
                Your feedback helps us provide better support to those in need.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
