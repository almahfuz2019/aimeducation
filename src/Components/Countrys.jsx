import { Link } from "react-router-dom";

const Countrys = () => {
  return (
    // <Marquee  pauseOnHover="true" pauseOnClick="true" speed="100">
    <div className="mx-2 md:mx-2">
      <h2 className="text-3xl font-extrabold text-primary tracki text-center sm:text-4xl mt-10 mb-3 uppercase  ">
        Aliquip definiebas
      </h2>

      <p className="max-w-3xl mx-auto  text-center pb-5">
        Quando cetero his ne, eum admodum sapientem ut sdfsd. Quando cetero his
        ne, eum admodum sa
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-3 mx-3 gap-3">
        <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden relative">
          <img
            className="w-full h-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png"
            alt="Card"
          />
          <div className="absolute inset-0 flex flex-col justify-end px-4 py-3 bg-gradient-to-t from-primary to-transparent ">
            <h2 className="text-white text-xl font-semibold">
              <Link to="/details/bangladesh" className="  px-2 rounded-md">Bangladesh</Link>
            </h2>
          </div>
        </div>
        <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden relative">
          <img
            className="w-full h-auto"
            src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
            alt="Card"
          />
          <div className="absolute inset-0 flex flex-col justify-end px-4 py-3 bg-gradient-to-t from-primary to-transparent ">
            <h2 className="text-white text-xl font-semibold">
              <Link to="/details/bangladesh" className=" px-2 rounded-md ">India</Link>
            </h2>
          </div>
        </div>
        <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden relative">
          <img
            className="w-full h-auto"
            src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
            alt="Card"
          />
          <div className="absolute inset-0 flex flex-col justify-end px-4 py-3 bg-gradient-to-t from-primary to-transparent ">
            <h2 className="text-white text-xl font-semibold">
              <Link to="/details/bangladesh"  className="  px-2 rounded-md">USA</Link>
            </h2>
          </div>
        </div>
        <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden relative">
          <img
            className="w-full h-auto"
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Card"
          />
          <div className="absolute inset-0 flex flex-col justify-end px-4 py-3 bg-gradient-to-t from-primary to-transparent ">
            <h2 className="text-white text-xl font-semibold">
              <Link to="/details/bangladesh"  className="  px-2 rounded-md">Canada</Link>
            </h2>
          </div>
        </div>
        <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden relative">
          <img
            className="w-full h-auto"
            src="https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg"
            alt="Card"
          />
          <div className="absolute inset-0 flex flex-col justify-end px-4 py-3 bg-gradient-to-t from-primary to-transparent ">
            <h2 className="text-white text-xl font-semibold">
              <Link to="/details/bangladesh"  className="  px-2 rounded-md">China</Link>
            </h2>
          </div>
        </div>
        <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden relative">
          <img
            className="w-full h-auto"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png"
            alt="Card"
          />
          <div className="absolute inset-0 flex flex-col justify-end px-4 py-3 bg-gradient-to-t from-primary to-transparent ">
            <h2 className="text-white text-xl font-semibold">
              <Link to="/details/bangladesh"  className="  px-2 rounded-md">Japan</Link>
            </h2>
          </div>
        </div>
        <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden relative">
          <img
            className="w-full h-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png"
            alt="Card"
          />
          <div className="absolute inset-0 flex flex-col justify-end px-4 py-3 bg-gradient-to-t from-primary to-transparent ">
            <h2 className="text-white text-xl font-semibold">
              <Link to="/details/bangladesh"  className="  px-2 rounded-md">Bangladesh</Link>
            </h2>
          </div>
        </div>
        <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden relative">
          <img
            className="w-full h-auto"
            src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
            alt="Card"
          />
          <div className="absolute inset-0 flex flex-col justify-end px-4 py-3 bg-gradient-to-t from-primary to-transparent ">
            <h2 className="text-white text-xl font-semibold">
              <Link to="/details/bangladesh"  className=" px-2 rounded-md ">India</Link>
            </h2>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Countrys;
