// Import necessary modules and components
import { Link, NavLink } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import Marquee from "react-fast-marquee";

// Import Firebase and React Firebase Hooks
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.config"; // Adjust the path as necessary

const Navbar = () => {
  // Get the current user and loading state from Firebase Auth
  const [user, loading] = useAuthState(auth);

  /**
   * Handle user logout by signing out from Firebase Auth
   * and removing the JWT token from localStorage.
   */
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Remove token from localStorage upon successful sign-out
        localStorage.removeItem("jwtToken");
        console.log("User signed out and token removed");
      })
      .catch((error) => {
        // Log any errors that occur during sign-out
        console.error("Error signing out:", error);
      });
  };

  /**
   * Define navigation items accessible to all users.
   * Each NavLink includes styling for hover effects.
   */
  const navItems = (
    <>
      <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink className="text-md" to="/">
          Home
        </NavLink>
      </li>

      <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink className="text-md" to="/about">
          About Us
        </NavLink>
      </li>

      <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink className="text-md" to="/contact">
          Contact Us
        </NavLink>
      </li>

      <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
        <NavLink className="text-md" to="/donate">
          Donate
        </NavLink>
      </li>
    </>
  );

  return (
    <div className=" hidden lg:block">
      {/* Top Bar: Contains opening times, contact info, and apply button */}
      <div className="flex justify-between items-center px-3 bg-gradient-to-br from-primary via-primary to-primary">
        {/* Marquee for opening times and phone number (visible on medium screens and up) */}
        <div className="hidden md:block">
          <Marquee
            pauseOnHover={true}
            className="text-white uppercase cursor-pointer"
          >
            Opening Time : 8:30 AM - 9:30 PM | Phone: +8801787878743
          </Marquee>
        </div>

        {/* Contact and Apply buttons */}
        <div className="flex gap-5 items-center py-2">
          <Link to="/donate" className="btn btn-sm btn-white text-primary">
            Donate Please
          </Link>
        </div>
      </div>

      {/* Main Navbar: Contains logo, navigation links, and user actions */}
      <div className="navbar py-0 bg-white border-b-4 border-primary">
        {/* Navbar Start: Logo and mobile menu toggle */}
        <div className="navbar-start">
          {/* Mobile Menu Toggle Button */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              {/* Hamburger Icon */}
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

       
          </div>

          {/* Logo: Redirects to Home */}
          <Link to="/" className="text-black normal-case text-3xl logo">
            Flood Buddy
          </Link>
        </div>

        {/* Navbar Center: Desktop Navigation Links */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
            {/* Conditionally render Dashboard and Logout for authenticated users */}
            {user ? (
              <>
                <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
                  <NavLink className="text-md" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              /* Render Login link for unauthenticated users */
              <li className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100">
                <NavLink className="text-md" to="/login">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Navbar End: User Avatar and Dropdown (Visible if user is authenticated) */}
        {user && (
          <div className="navbar-end flex z-50">
            <div className="">
              <div className="dropdown dropdown-end">
                {/* User Avatar Toggle */}
                <label tabIndex={0} className="">
                  <div className="rounded-full">
                    <div className="avatar placeholder online animate-pulse cursor-pointer">
                      <div className="bg-primary-focus text-primary-content rounded-full w-12 font-semibold">
                        {/* Display user's photo if available, else default avatar */}
                        {user.photoURL ? (
                          <img
                            src={user.photoURL}
                            alt="User Avatar"
                            className="w-full h-full rounded-full"
                          />
                        ) : (
                          <img
                            src="https://w7.pngwing.com/pngs/782/115/png-transparent-avatar-boy-man-avatar-vol-1-icon-thumbnail.png"
                            alt="User Avatar"
                            className="w-full h-full rounded-full"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </label>

                {/* User Dropdown Menu */}
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border border-primary z-50 border-opacity-30"
                >
                  <li>
                    <NavLink className="text-md" to="/dashboard">
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Login Button (Visible if user is not authenticated) */}
        {!user && (
          <div className="navbar-end flex z-50 lg:hidden">
            <NavLink to="/login" className="btn btn-sm btn-primary">
              Login
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
