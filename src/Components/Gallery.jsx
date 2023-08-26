import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
function Gallery() {
  const imageUrls = [
    "https://source.unsplash.com/random/200x200/",
    "https://source.unsplash.com/random/200x200/?0",
    "https://source.unsplash.com/random/200x200/?1",
    "https://source.unsplash.com/random/200x200/?2",
    "https://source.unsplash.com/random/200x200/?3",
    "https://source.unsplash.com/random/200x200/?4",
    "https://source.unsplash.com/random/200x200/?5",
    "https://source.unsplash.com/random/200x200/?6",
    "https://source.unsplash.com/random/200x200/?7",
    "https://source.unsplash.com/random/200x200/?9",
  ];
  return (
    <>
      <section className="py-6 mx-2  ">
        <h2 className="text-3xl font-extrabold text-primary tracki text-center sm:text-4xl mt-10 mb-3 uppercase  ">
          Image Gallery
        </h2>
        <p className="max-w-3xl mx-auto  text-center pb-5 ">
          Quando cetero his ne, eum admodum sapientem ut sdfsd. Quando cetero
          his ne, eum admodum sa
        </p>
        <SlideshowLightbox
          fullScreen
          disableZoom
          showControls
          imgAnimation
          animateThumbnails
          showThumbnails
          className="container grid grid-cols-2 gap-4 m-0 p-0  mx-auto md:grid-cols-4"
        >
          {imageUrls.map((imageUrl, index) => {
            if (index === 0) {
              return (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Image ${index}`}
                  className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-primary glass aspect-square "
                />
              );
            } else if (index === 9) {
              return (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Image ${index}`}
                  className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-primary glass aspect-square"
                />
              );
            } else {
              return (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Image ${index}`}
                  className="w-full h-full rounded shadow-sm min-h-48 bg-primary glass aspect-square "
                />
              );
            }
          })}
        </SlideshowLightbox>
        <div className=" text-center mt-5">
          <button className="btn btn-primary  px-10 font-semibold">
            Show More
          </button>
        </div>
      </section>
    </>
  );
}

export default Gallery;
