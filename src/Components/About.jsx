// About.jsx

import React from "react";

/**
 * About Component
 *
 * This component provides detailed information about the organization,
 * its mission, values, and commitment to flood relief efforts. It is
 * designed to be fully responsive and styled using Tailwind CSS with a
 * white background for a clean and professional look.
 */
const About = () => {
  return (
    <div className="py-20 mx-2 md:mx-4">
      {/* About Us Content */}
      <div className="mx-auto p-6 bg-white   my-3">
        <div className="max-w-screen-2xl mx-auto">
          {/* About Us Title */}
          <h1 className="text-4xl font-bold text-primary uppercase mb-4 text-center">
            About Us
          </h1>

          {/* Introduction */}
          <p className="text-lg text-gray-700 leading-relaxed">
            At our core, we are a team dedicated to saving lives and supporting
            communities affected by floods and natural disasters. Our mission is
            to provide effective flood relief solutions through innovative
            technologies, real-time tracking, and seamless coordination.
          </p>

          {/* Additional Information */}
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            We understand the devastation that floods can cause, which is why we
            have developed a comprehensive platform designed to help manage and
            mitigate the effects of flooding. Our Relief Tracker provides
            real-time updates, resource management, and coordination with relief
            agencies to ensure that help reaches those in need as quickly as
            possible.
          </p>

          {/* What Sets Us Apart */}
          <h2 className="text-3xl font-bold text-primary uppercase my-4">
            What Sets Us Apart:
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              <strong>Real-Time Tracking:</strong> Our platform leverages
              cutting-edge technology to monitor flood-affected areas, ensuring
              that relief efforts are directed to where they are most needed.
            </li>
            <li>
              <strong>Collaboration with Agencies:</strong> We work hand-in-hand
              with government agencies, NGOs, and volunteers to streamline
              relief efforts and optimize resource allocation.
            </li>
            <li>
              <strong>User-Centric Approach:</strong> Whether you are a victim
              seeking help or a volunteer looking to contribute, our system is
              designed to provide you with the information and tools you need to
              make a difference.
            </li>
            <li>
              <strong>Innovation in Crisis Management:</strong> We push
              boundaries with our technology, continuously improving our
              platform to better respond to the challenges presented by flooding
              and other natural disasters.
            </li>
          </ul>

          {/* Our Commitment */}
          <h2 className="text-3xl font-bold text-primary uppercase my-4">
            Our Commitment:
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our commitment is to be at the forefront of disaster relief and
            flood management. We aim to continuously improve our platform to
            better serve communities during times of crisis. From real-time
            tracking to resource management, we are here to support both victims
            and relief workers every step of the way.
          </p>

          {/* Closing Statement */}
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Thank you for trusting us to be a part of your disaster recovery
            efforts. We look forward to partnering with you to ensure that every
            person affected by a flood receives the assistance they need quickly
            and efficiently. Together, we can make a difference and save lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
