// useUserInfo.js

import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth"; // Import useAuthState from Firebase hooks
import axios from "axios";
import auth from "../Firebase/firebase.config"; // Import your Firebase auth config

/**
 * useUserInfo Hook
 *
 * This hook fetches the authenticated user's information from the backend API.
 * It returns the user information, loading state, and any errors encountered.
 */
const useUserInfo = () => {
  const [user, loading, error] = useAuthState(auth); // Get the authenticated user from Firebase
  const [userInfo, setUserInfo] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!user?.email) {
        setUserLoading(false); // No user email available
        return;
      }

      try {
        setUserLoading(true);

        // Make an API request to get user information by email
        const response = await axios.get(
          `http://localhost:5000/api/user/info/${user.email}`, // Use email from Firebase
        );

        // Assuming the response has a 'user' object containing user details
        setUserInfo(response?.data?.user || null);
      } catch (error) {
        console.error("Error fetching user info:", error);
        setUserError(error.response?.data?.error || error.message);
      } finally {
        setUserLoading(false);
      }
    };

    fetchUserInfo();
  }, [user?.email]);

  return { userInfo, userLoading, userError, loading, error };
};

export default useUserInfo;
