import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/logo.png'
import { FaMapMarkerAlt } from "react-icons/fa";
const Navbar = () => {
     
  let navItems = (
    <>
      <li className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100 ">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink to="/about">About US</NavLink>
      </li>
      <li className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink to="/contact">Contact US</NavLink>
      </li>
      <li className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink to="/trams-and-condition">Terms and Condition</NavLink>
      </li>
    </>
  );
  return (
    <div className="lg:sticky  lg:top-0 lg:z-20 hidden  lg:block">
      <div className="flex justify-between items-center px-5  bg-primary">
        <div className="hidden md:block">
          <p className="text-white">Opening Time : 8:30 AM - 9:30 PM</p>
        </div>
        <div className="flex gap-5 items-center">
  <div className="border-r-2 text-white px-4 flex items-center hover:underline underline-offset-4 cursor-pointer hover:font-semibold my-2">
    <FaMapMarkerAlt className="mr-2 " />
    Our Location
  </div>
  <button className="btn btn-sm btn-white border-1 border-black text-primary">Apply Now</button>
</div>

      </div>
      <div className="navbar py-0 bg-white border-b-4 border-primary">
        <div className="navbar-start ">
          <div className="dropdown  ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border border-primary border-opacity-30"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl logo">
            <img
              className="h-14  "
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
            <li className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
              {" "}
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex">
          <div className="">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="">
                <div className=" rounded-full ">
                  <div className="avatar placeholder online animate-pulse cursor-pointer">
                    <div className="bg-primary-focus text-primary-content rounded-full w-12 font-semibold ">
                      <span>MA</span>
                    </div>
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border border-primary border-opacity-30"
              >
                <li>
                  <NavLink to="/deshboard">Dashboard</NavLink>
                </li>
                <li>
                  <button>Sign out</button>
                </li>
                :
                <li className="">
                  {" "}
                  <NavLink to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
