// src/Hooks/UseToken.js

import { useState, useEffect } from "react";

const useToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Retrieve token from localStorage or any other storage mechanism
    const storedToken = localStorage.getItem("jwtToken");
    setToken(storedToken);
  }, []);

  return { token };
};

export default useToken;
