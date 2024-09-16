import React from "react";

export default function Loading() {
  return (
    <div>
      {" "}
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-primary"></div>
      </div>
    </div>
  );
}
