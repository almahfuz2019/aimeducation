// Import necessary modules and icons from react-icons
import { FaWater, FaHandsHelping, FaUsers, FaBuilding } from "react-icons/fa";

/**
 * BasicInfo Component
 *
 * This component displays key statistics about the Flood Management System,
 * including the number of affected areas, successful donations, volunteers deployed,
 * and partner agencies. Each statistic is represented with an icon and descriptive text.
 * The component is designed to be fully responsive across various device sizes.
 */
const BasicInfo = () => {
  return (
    <div className="mx-2">
      {/* Section Container */}
      <section className="p-4 md:p-6 bg-primary mt-4 rounded-lg shadow-lg container mx-auto">
        {/* Grid Layout for Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Affected Areas */}
          <div className="flex items-center p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-md">
            {/* Icon Container: Visible on small screens and up */}
            <div className="hidden sm:flex justify-center items-center p-3 bg-white bg-opacity-80 rounded-full mr-4">
              <FaWater className="h-8 w-8 text-primary" />
            </div>
            {/* Statistic Text */}
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-white">
                500+
              </p>
              <p className="capitalize text-sm md:text-base text-white">
                Flood Affected Areas
              </p>
            </div>
          </div>

          {/* Successful Donations */}
          <div className="flex items-center p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-md">
            {/* Icon Container: Visible on small screens and up */}
            <div className="hidden sm:flex justify-center items-center p-3 bg-white bg-opacity-80 rounded-full mr-4">
              <FaHandsHelping className="h-8 w-8 text-primary" />
            </div>
            {/* Statistic Text */}
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-white">
                1200+
              </p>
              <p className="capitalize text-sm md:text-base text-white">
                Successful Donations
              </p>
            </div>
          </div>

          {/* Volunteers Deployed */}
          <div className="flex items-center p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-md">
            {/* Icon Container: Visible on small screens and up */}
            <div className="hidden sm:flex justify-center items-center p-3 bg-white bg-opacity-80 rounded-full mr-4">
              <FaUsers className="h-8 w-8 text-primary" />
            </div>
            {/* Statistic Text */}
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-white">
                750+
              </p>
              <p className="capitalize text-sm md:text-base text-white">
                Volunteers Deployed
              </p>
            </div>
          </div>

          {/* Partner Agencies */}
          <div className="flex items-center p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-md">
            {/* Icon Container: Visible on small screens and up */}
            <div className="hidden sm:flex justify-center items-center p-3 bg-white bg-opacity-80 rounded-full mr-4">
              <FaBuilding className="h-8 w-8 text-primary" />
            </div>
            {/* Statistic Text */}
            <div>
              <p className="text-2xl md:text-3xl font-semibold text-white">
                30+
              </p>
              <p className="capitalize text-sm md:text-base text-white">
                Partner Agencies
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BasicInfo;
