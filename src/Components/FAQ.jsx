// FAQ.jsx

import React from "react";
import { BsPlus, BsDash } from "react-icons/bs";

/**
 * FAQ Component
 *
 * This component displays a list of frequently asked questions
 * related to flood relief efforts. Each question can be expanded
 * to reveal the corresponding answer. The component is fully
 * responsive and styled using Tailwind CSS.
 */
const FAQ = () => {
  return (
    <div className="bg-gradient-to-br from-primary/70 via-primary to-primary/70  px-3 rounded-lg container md:mx-auto py-20">
      {/* Section Title */}
      <p className="p-2 text-sm font-medium tracking-wide text-center uppercase text-white">
        How it works
      </p>
      <h2 className="mb-12 text-3xl md:text-4xl font-extrabold leading-tight text-center text-white uppercase">
        Frequently Asked Questions
      </h2>

      {/* FAQ Items */}
      <div className="space-y-4">
        {/* First FAQ */}
        <details
          className="group rounded-md backdrop-blur bg-white/10 py-3 px-4"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-2 text-white">
            {/* Question */}
            <h3 className="text-lg font-medium underline underline-offset-2">
              How can I track flood-affected areas in real-time?
            </h3>

            {/* Toggle Icons */}
            <span className="relative h-6 w-6 shrink-0 bg-white rounded-full flex items-center justify-center">
              <BsDash className="absolute inset-0 h-6 w-6 text-primary transition-opacity duration-300 group-open:opacity-0" />
              <BsPlus className="absolute inset-0 h-6 w-6 text-primary transition-opacity duration-300 opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          {/* Answer */}
          <p className="mt-4 text-gray-100">
            Our Relief Tracker provides real-time monitoring of flood-affected
            regions through an interactive map. The system updates automatically
            with data from local authorities, ensuring you have the latest
            information about the areas impacted by the disaster.
          </p>
        </details>

        {/* Second FAQ */}
        <details className="group rounded-md backdrop-blur bg-white/10 py-3 px-4">
          <summary className="flex cursor-pointer items-center justify-between gap-2 text-white">
            {/* Question */}
            <h3 className="text-lg font-medium underline underline-offset-2">
              How can I donate to support relief efforts?
            </h3>

            {/* Toggle Icons */}
            <span className="relative h-6 w-6 shrink-0 bg-white rounded-full flex items-center justify-center">
              <BsDash className="absolute inset-0 h-6 w-6 text-primary transition-opacity duration-300 group-open:opacity-0" />
              <BsPlus className="absolute inset-0 h-6 w-6 text-primary transition-opacity duration-300 opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          {/* Answer */}
          <p className="mt-4 text-gray-100">
            You can easily contribute to flood relief efforts through our
            donation tracking system. We ensure transparency by showing exactly
            how your donations are used, whether for food, medical supplies, or
            rescue operations.
          </p>
        </details>

        {/* Third FAQ */}
        <details className="group rounded-md backdrop-blur bg-white/10 py-3 px-4">
          <summary className="flex cursor-pointer items-center justify-between gap-2 text-white">
            {/* Question */}
            <h3 className="text-lg font-medium underline underline-offset-2">
              How can I volunteer for flood relief?
            </h3>

            {/* Toggle Icons */}
            <span className="relative h-6 w-6 shrink-0 bg-white rounded-full flex items-center justify-center">
              <BsDash className="absolute inset-0 h-6 w-6 text-primary transition-opacity duration-300 group-open:opacity-0" />
              <BsPlus className="absolute inset-0 h-6 w-6 text-primary transition-opacity duration-300 opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          {/* Answer */}
          <p className="mt-4 text-gray-100">
            Our platform allows volunteers to register and be matched with the
            areas that need help the most. Whether you're a medical
            professional, logistics expert, or general volunteer, our system
            will direct you to the regions where you can make the greatest
            impact.
          </p>
        </details>

        {/* Fourth FAQ */}
        <details className="group rounded-md backdrop-blur bg-white/10 py-3 px-4">
          <summary className="flex cursor-pointer items-center justify-between gap-2 text-white">
            {/* Question */}
            <h3 className="text-lg font-medium underline underline-offset-2">
              How do I receive alerts about floods in my area?
            </h3>

            {/* Toggle Icons */}
            <span className="relative h-6 w-6 shrink-0 bg-white rounded-full flex items-center justify-center">
              <BsDash className="absolute inset-0 h-6 w-6 text-primary transition-opacity duration-300 group-open:opacity-0" />
              <BsPlus className="absolute inset-0 h-6 w-6 text-primary transition-opacity duration-300 opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          {/* Answer */}
          <p className="mt-4 text-gray-100">
            Our system sends real-time alerts about incoming floods, evacuation
            notices, and available relief centers through SMS, email, and in-app
            notifications. You can customize your alert settings to receive
            updates relevant to your location and needs.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
