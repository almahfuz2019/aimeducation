// TopBanner.jsx

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.config"; // Import your Firebase config

/**
 * TopBanner Component
 *
 * Displays a dynamic greeting based on the time of day,
 * the user's display name, and the current date and day.
 * Designed to be fully responsive and visually appealing using Tailwind CSS.
 */
const TopBanner = () => {
  // Get the current user from Firebase Authentication
  const [user] = useAuthState(auth);

  // Get the current date
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Get the current day of the week
  const options = { weekday: "long" };
  const currentDay = currentDate.toLocaleDateString("en-US", options);

  // Determine greeting based on time of day
  const hours = currentDate.getHours();
  const timeOfDay =
    hours < 12
      ? "Good morning"
      : hours < 18
      ? "Good afternoon"
      : "Good evening";

  // Provide a default username if displayName is not available
  const displayName = user?.displayName ? user.displayName : "User";

  return (
    <div className="m-2">
      {/* Header Container */}
      <header className="bg-primary bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            {/* Greeting Section */}
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                {timeOfDay}, {displayName}{" "}
                <span role="img" aria-label="waving hand">
                  👋
                </span>
              </h1>

              <p className="mt-2 text-sm text-white">
                Here’s what’s happening with your projects
              </p>
            </div>

            {/* Date and Day Section */}
            <div className="mt-4 sm:mt-0">
              <p className="text-sm font-semibold text-white">
                <span className="block sm:inline">Date: {formattedDate}</span> |{" "}
                <span className="block sm:inline">
                  {currentDay.toUpperCase()}
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopBanner;
