import React, { useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAuth } from "firebase/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "./SocialLogin";
import Loading from "../Sheared/Loading";
import { toast } from "react-toastify";
import axios from "axios"; // Import axios for API calls

const errorMessages = {
  "auth/invalid-email": "The email address is badly formatted.",
  "auth/user-not-found": "No user found with this email.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/popup-closed-by-user":
    "The login popup was closed before completing the sign-in. Please try again.",
  "auth/network-request-failed":
    "Network error. Please check your internet connection and try again.",
};

const getErrorMessage = (error) => {
  return (
    errorMessages[error.code] ||
    "An unexpected error occurred. Please try again."
  );
};

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = async (data) => {
    try {
      const response = await signInWithEmailAndPassword(
        data.email,
        data.password,
      );

      // Save the token to localStorage if sign-in is successful
      if (response.user) {
        const token = await response.user.getIdToken();
        localStorage.setItem("jwtToken", token);

        // Send user data and token to the backend
        const saveUserToDatabase = async () => {
          const { displayName, email } = response.user;
          try {
            await axios.post(
              "http://localhost:5000/api/user", // Your backend API endpoint
              { email, name: displayName },
              {
                headers: {
                  Authorization: `Bearer ${token}`, // Send the token in the Authorization header
                },
              },
            );
          } catch (error) {
            console.error("Error saving user to the database:", error);
            toast.error("Failed to save user info");
          }
        };
        saveUserToDatabase();

        navigate(from, { replace: true });
      }
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="py-10 bg-white">
      <div className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl border-primary border border-opacity-30">
        <div
          className=" lg:w-1/2 h-96 bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
          }}
        />
        <div className="w-full p-8 lg:w-1/2">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
