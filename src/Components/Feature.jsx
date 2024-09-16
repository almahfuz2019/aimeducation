// Import necessary modules and icons from react-icons
import {
  FaMapMarkerAlt,
  FaHandsHelping,
  FaDonate,
  FaUsers,
  FaBell,
  FaHandshake,
  FaDatabase,
} from "react-icons/fa";

/**
 * Feature Component
 *
 * This component showcases the key features of the Relief Tracker,
 * including real-time monitoring, resource management, donation tracking,
 * volunteer coordination, disaster alerts, partner collaborations, and
 * a survivor database. Each feature is represented with an icon and
 * descriptive text, organized in a responsive layout.
 */
const Feature = () => {
  return (
    <div>
      {/* Features Section */}
      <section className="bg-white mx-2 py-20">
        <div className="container py-12 mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center py-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide mb-3 text-primary uppercase">
              <span className=" px-5 py-2 rounded-md ">
                Relief Tracker Features
              </span>
            </h2>
            <p className="md:max-w-4xl mx-auto mt-1 text-black text-center">
              Our Relief Tracker helps streamline disaster relief efforts,
              offering real-time updates, resource management, and coordination
              with partners to ensure a timely and efficient response.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            {/* Features List */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-primary uppercase underline underline-offset-2">
                Key Features
              </h3>
              <div className="mt-10 space-y-12">
                {/* Real-Time Area Monitoring */}
                <div className="flex">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary text-white">
                      <FaMapMarkerAlt className="w-7 h-7" />
                    </div>
                  </div>
                  {/* Feature Description */}
                  <div className="ml-4">
                    <h4 className="text-lg sm:text-xl font-medium leading-tight text-primary">
                      Real-Time Area Monitoring
                    </h4>
                    <p className="mt-2 text-gray-700">
                      Track flood-affected areas and get real-time updates on
                      the severity, evacuation statuses, and local relief
                      efforts with interactive maps.
                    </p>
                  </div>
                </div>

                {/* Relief Resource Management */}
                <div className="flex">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary text-white">
                      <FaHandsHelping className="w-7 h-7" />
                    </div>
                  </div>
                  {/* Feature Description */}
                  <div className="ml-4">
                    <h4 className="text-lg sm:text-xl font-medium leading-tight text-primary">
                      Relief Resource Management
                    </h4>
                    <p className="mt-2 text-gray-700">
                      Efficiently allocate and manage resources such as food,
                      water, and medical supplies to the areas most in need.
                    </p>
                  </div>
                </div>

                {/* Donation Tracking */}
                <div className="flex">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary text-white">
                      <FaDonate className="w-7 h-7" />
                    </div>
                  </div>
                  {/* Feature Description */}
                  <div className="ml-4">
                    <h4 className="text-lg sm:text-xl font-medium leading-tight text-primary">
                      Donation Tracking
                    </h4>
                    <p className="mt-2 text-gray-700">
                      Ensure transparency by tracking donations and providing
                      real-time updates on their distribution and impact.
                    </p>
                  </div>
                </div>

                {/* Volunteer Coordination */}
                <div className="flex">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary text-white">
                      <FaUsers className="w-7 h-7" />
                    </div>
                  </div>
                  {/* Feature Description */}
                  <div className="ml-4">
                    <h4 className="text-lg sm:text-xl font-medium leading-tight text-primary">
                      Volunteer Coordination
                    </h4>
                    <p className="mt-2 text-gray-700">
                      Assign volunteers based on their skills and availability,
                      and track their efforts in real-time.
                    </p>
                  </div>
                </div>

                {/* Disaster Alerts & Notifications */}
                <div className="flex">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary text-white">
                      <FaBell className="w-7 h-7" />
                    </div>
                  </div>
                  {/* Feature Description */}
                  <div className="ml-4">
                    <h4 className="text-lg sm:text-xl font-medium leading-tight text-primary">
                      Disaster Alerts & Notifications
                    </h4>
                    <p className="mt-2 text-gray-700">
                      Send real-time disaster alerts via SMS, email, or app
                      notifications to keep everyone informed.
                    </p>
                  </div>
                </div>

                {/* Partners & Collaborators */}
                <div className="flex">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary text-white">
                      <FaHandshake className="w-7 h-7" />
                    </div>
                  </div>
                  {/* Feature Description */}
                  <div className="ml-4">
                    <h4 className="text-lg sm:text-xl font-medium leading-tight text-primary">
                      Partners & Collaborators
                    </h4>
                    <p className="mt-2 text-gray-700">
                      Collaborate with government agencies, NGOs, and
                      international organizations to share resources and make
                      decisions faster.
                    </p>
                  </div>
                </div>

                {/* Survivor & Aid Recipient Database */}
                <div className="flex">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary text-white">
                      <FaDatabase className="w-7 h-7" />
                    </div>
                  </div>
                  {/* Feature Description */}
                  <div className="ml-4">
                    <h4 className="text-lg sm:text-xl font-medium leading-tight text-primary">
                      Survivor & Aid Recipient Database
                    </h4>
                    <p className="mt-2 text-gray-700">
                      Maintain a secure database of survivors and aid recipients
                      to ensure continuous and efficient support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Illustration */}
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Relief Efforts Illustration"
                className="mx-auto rounded-lg shadow-lg w-full h-auto"
                loading="lazy" // Lazy loading for performance
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
