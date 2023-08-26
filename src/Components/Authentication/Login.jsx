function Login() {
  return (
    <div className="">
    <nav className="my-3 mx-2 md:mx-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-sm text-gray-600">
          <li>
            <a href="#" className="block transition hover:text-gray-700">
              <span className="sr-only"> Home </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a href="#" className="block transition hover:text-gray-700">
              Login
            </a>
          </li>
        </ol>
      </nav>
    <div className=" py-16 mx-2 md:mx-4 rounded-lg items-center justify-center flex bg-primary/10">
      <div className="w-full  max-w-sm p-6 m-auto mx-auto  rounded-lg  border-2 border-primary shadow-lg shadow-primary ">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-8 sm:h-10 "
            src="https://merakiui.com/images/logo.svg"
            alt="Meraki UI"
          />
        </div>

        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold ">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Your Name"
              className="block w-full px-4 py-2 mt-2   border rounded-lg shadow-sm input-bordered input-primary bg-gray-200"
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm  font-semibold"
              >
                Password
              </label>
              <a href="#" className="text-xs   underline text-red-700">
                Forget Password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              className=" block w-full px-4 py-2 mt-2   border rounded-lg shadow-sm input-bordered input-primary bg-gray-200"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-sm font-semibold text-white uppercase transition-colors duration-300 bg-primary rounded-lg focus:outline-none focus:ring focus:ring-opacity-40"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 h-px bg-black "></span>
          <a href="#" className="text-xs  uppercase dark: hover:underline">
            or login with Social Media
          </a>
          <span className="w-1/5 h-px bg-black "></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 mx-2 text-sm  text-primary shadow-sm font-bold transition-colors duration-300 border rounded-lg  focus:outline-none bg-gray-200 border-primary"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              {/* Google icon SVG path */}
            </svg>
            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
          <a
            href="#"
            className="p-2 mx-2 text-sm font-medium text-primary transition-colors duration-300 transform bg-gray-200 rounded-lg border border-primary"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
            </svg>
          </a>
        </div>

        <p className="mt-8 text-xs font-light text-center ">
          Don not have an account?{" "}
          <a href="#" className="font-medium   hover:underline text-green-700">
            Create One
          </a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Login;
