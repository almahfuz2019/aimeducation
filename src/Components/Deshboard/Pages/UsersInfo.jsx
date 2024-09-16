// UsersInfo.jsx

import React from "react";
import TopBanner from "../Components/TopBanner";
import UsersTable from "../Components/UsersInfo/UsersTable";

/**
 * UsersInfo Component
 *
 * This component displays the top banner, a heading, a loading progress bar,
 * and the users table. It serves as the main container for the users information page.
 */
const UsersInfo = () => {
  return (
    <div>
      {/* Top Banner */}
      <TopBanner />

      {/* Page Heading */}
      <h1 className="text-center font-bold text-4xl uppercase text-primary mt-6">
        Users Information
      </h1>

      {/* Loading Progress Bar */}
      {/* 
        Note: The progress bar is always visible in this component.
        If you want to control its visibility based on the loading state of UsersTable,
        consider lifting the loading state up or using context.
      */}
      <div className="flex animate-pulse justify-center">
        <progress className="progress mt-3 cursor-progress w-96 progress-primary mx-4"></progress>
      </div>

      {/* Users Table */}
      <UsersTable />
    </div>
  );
};

export default UsersInfo;
