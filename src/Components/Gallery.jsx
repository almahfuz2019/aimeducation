// Gallery.jsx

import React from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const Gallery = () => {
  const imageUrls = [
    "https://images.pexels.com/photos/1390183/pexels-photo-1390183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1390183/pexels-photo-1390183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1390183/pexels-photo-1390183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1739855/pexels-photo-1739855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1390183/pexels-photo-1390183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1390183/pexels-photo-1390183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1390183/pexels-photo-1390183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1390183/pexels-photo-1390183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1390183/pexels-photo-1390183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1390183/pexels-photo-1390183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <section className="py-20 mx-2 md:mx-4">
      <h2 className="text-3xl font-extrabold text-primary tracking-wide text-center sm:text-4xl mt-10 mb-3 uppercase">
        Image Gallery
      </h2>
      <p className="max-w-3xl mx-auto text-center pb-5">
        Quando cetero his ne, eum admodum sapientem ut sdfsd. Quando cetero his
        ne, eum admodum sa
      </p>
      <SlideshowLightbox
        fullScreen
        disableZoom
        showControls
        imgAnimation
        animateThumbnails
        showThumbnails
        className="container grid grid-cols-2 gap-4 m-0 p-0 mx-auto md:grid-cols-4"
      >
        {imageUrls.map((imageUrl, index) => {
          if (index === 0) {
            return (
              <img
                key={index}
                src={imageUrl}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-primary glass aspect-square object-cover object-top"
              />
            );
          } else if (index === 9) {
            return (
              <img
                key={index}
                src={imageUrl}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-primary glass aspect-square object-cover object-top"
              />
            );
          } else {
            return (
              <img
                key={index}
                src={imageUrl}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full rounded shadow-sm min-h-48 bg-primary glass aspect-square object-cover object-top"
              />
            );
          }
        })}
      </SlideshowLightbox>
      <div className="text-center mt-5">
        <button className="btn btn-primary px-10 font-semibold">
          Show More
        </button>
      </div>
    </section>
  );
};

export default Gallery;
