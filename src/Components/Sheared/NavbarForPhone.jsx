import { NavLink } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";
const NavbarForPhone = () => {
  let navItems = (
    <>
      <li className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100 ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink to="/trams-and-condition">Terms and Condition</NavLink>
      </li>
      <li className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink to="/qna">QNA</NavLink>
      </li>
      <li className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink to="/about">About US</NavLink>
      </li>
      <li className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink to="/contact">Contact US</NavLink>
      </li>
      <li className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink to="/deshboard">Deshboard</NavLink>
      </li>
    </>
  );
  return (
    <div className=" lg:hidden">
      <div className="flex justify-between items-center px-2 my-1 border-b-2 border-primary pb-1">
        <p >Opening time: 8:30PM-8:45AM</p>

        <button className=" btn btn-sm btn-primary ">Apply Now</button>
      </div>
      <div className="flex justify-between bg-white border-b-4 border-primary ">
        <div className="ml-4">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl pl-0">
            <img
              className="h-12 w-28"
              src="https://www.chaayasurgical.com/static/media/logo.2d39415743dd18fabe3e.png"
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="flex justify-end">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <i className="font-bold">
                <FaAlignLeft className="text-2xl font-extrabold rotate-180" />
              </i>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-48 border border-primary border-opacity-30 mr-1"
            >
              {navItems}
              <li className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
                {" "}
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarForPhone;
