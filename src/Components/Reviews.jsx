// Reviews.jsx

import React from "react";

/**
 * Reviews Component
 * 
 * This component displays testimonials from individuals affected by floods.
 * It showcases their experiences and the positive impact of the Relief Tracker.
 * The component is designed to be fully responsive and accessible across devices.
 */
const Reviews = () => {
  return (
    <div>
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br py-20 from-primary/70 via-primary to-primary/70 mx-4 text-gray-100 my-2  md:mx-4 rounded-lg">
        <div className="container px-6  mx-auto">
          {/* Header */}
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto text-center xl:col-span-2 xl:text-left">
              <h2 className="text-3xl md:text-4xl uppercase font-extrabold text-white">
                Flood Relief Testimonials
              </h2>
              <div className="mb-4 flex justify-center xl:justify-start">
                {/* Decorative Lines */}
                <span className="inline-block w-40 h-1 bg-white rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-white rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-white rounded-full"></span>
              </div>
              <p className="md:max-w-4xl mx-auto mt-1  text-justify">
                Hear from those who were directly affected by the flood and
                benefited from the relief efforts made possible by the Relief
                Tracker. These testimonials show the impact our system has had
                on their recovery and well-being.
              </p>
            </div>
            {/* Testimonials Grid */}
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                {/* First Column of Testimonials */}
                <div className="grid content-center gap-4">
                  {/* Testimonial 1 */}
                  <div className="p-6 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm shadow-lg">
                    <p className="text-gray-100">
                      "Thanks to the real-time updates on the Relief Tracker, my
                      family and I were able to safely evacuate before the
                      floodwaters reached our home. We also received timely
                      assistance with food and medical supplies during the
                      crisis."
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png"
                        alt="Sarah Thompson"
                        className="w-12 h-12 object-cover rounded-full bg-gray-500"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-lg font-semibold">Sarah Thompson</p>
                        <p className="text-sm text-gray-300">Flood Victim</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="p-6 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm shadow-lg">
                    <p className="text-gray-100">
                      "The Relief Tracker made it easy for us to know where to
                      find help during the flood. We could track resource
                      availability at local shelters, which helped us find a
                      safe place to stay."
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png"
                        alt="James Rodriguez"
                        className="w-12 h-12 object-cover rounded-full bg-gray-500"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-lg font-semibold">James Rodriguez</p>
                        <p className="text-sm text-gray-300">Flood Survivor</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Column of Testimonials */}
                <div className="grid content-center gap-4">
                  {/* Testimonial 3 */}
                  <div className="p-6 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm shadow-lg">
                    <p className="text-gray-100">
                      "I was worried about my elderly parents who were trapped
                      in a high-risk area. With the Relief Tracker, we were able
                      to request immediate assistance, and they were safely
                      evacuated within hours."
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png"
                        alt="Aisha Patel"
                        className="w-12 h-12 object-cover rounded-full bg-gray-500"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-lg font-semibold">Aisha Patel</p>
                        <p className="text-sm text-gray-300">Family Member</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 4 */}
                  <div className="p-6 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm shadow-lg">
                    <p className="text-gray-100">
                      "We were overwhelmed when the flood hit our town. The
                      Relief Tracker allowed us to register for food and water
                      distribution and kept us updated about the nearest medical
                      assistance centers."
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png"
                        alt="David Nguyen"
                        className="w-12 h-12 object-cover rounded-full bg-gray-500"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-lg font-semibold">David Nguyen</p>
                        <p className="text-sm text-gray-300">Flood Victim</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
          </section>
        </div>
      );
    };

    export default Reviews;
