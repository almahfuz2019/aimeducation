import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
// import logo from "../Images/logo.png";
import { toast } from "react-toastify";
import Loading from "../Sheared/Loading"; 

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  if (sending) {
    return <Loading />;
  }

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(email);
      toast.success("Please check your email for the password reset link.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
    }
  };

  return (
    <div className="py-10 sm:py-28 bg-white">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl border-primary border border-opacity-30">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            {/* <img className="h-12 w-28 mx-auto" src={logo} alt="logo" /> */}
          </h2>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <span className="text-xs text-center text-gray-500 uppercase">
              Forgot password
            </span>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Type your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 text-primary focus:outline-primary focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
            />
          </div>
          {error && <p className="text-red-700 mt-2">{error.message}</p>}
          <div className="mt-8 text-center">
            <button
              onClick={handleResetPassword}
              className="bg-primary text-white font-bold py-2 px-4 w-full rounded cursor-pointer"
            >
              Submit
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <NavLink to="/register" className="text-xs text-gray-500">
              Don’t have an account?{" "}
              <span className="text-primary underline font-bold">Sign up</span>
            </NavLink>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
