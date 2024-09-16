import { Link, NavLink } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.config"; // Adjust the path as necessary

const NavbarForPhone = () => {
  const [user, loading] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("jwtToken");
        console.log("User signed out and token removed");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  let navItems = (
    <>
      <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink to="/about">About US</NavLink>
      </li>

      <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink to="/contact">Contact US</NavLink>
      </li>

      {/* Conditionally render Dashboard and Logout for authenticated users */}
      {user ? (
        <>
          <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      ) : (
        /* Render Login link for unauthenticated users */
        <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="z-50 relative lg:hidden">
      <div className="flex justify-between items-center my-1 border-b-4 border-primary pb-1">
        <Marquee pauseOnHover={true} className="mr-2 bg-primary">
          <p className="font-semibold mr-2 text-white">
            Opening Time : 8:30 AM - 9:30 PM | Phone: 01787878743
          </p>
        </Marquee>

        <Link to="/donate" className="btn btn-sm btn-primary mr-2">
          Donate
        </Link>
      </div>
      <div className="flex justify-between items-center bg-white border-b-4 border-primary">
        <div className="ml-4">
          <Link to="/" className="text-black normal-case text-3xl logo">
            Flood Buddy
          </Link>
        </div>
        <div className="flex justify-end">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaAlignLeft className="text-2xl font-extrabold rotate-180" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-48 border border-primary border-opacity-30 mr-1"
            >
              {navItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarForPhone;
