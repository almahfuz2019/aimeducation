function UserDataInputForm() {
  return (
    <div>
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
              Apply Now
            </a>
          </li>
        </ol>
      </nav>
      <div className="min-h-screen py-20 flex bg-primary/10 mx-2 md:mx-4 items-center justify-center  rounded-lg">
        {/* <div className="min-h-screen py-20 flex items-center justify-center bg-gradient-to-br from-primary/40 via-primary to-primary/20"> */}
        <div className="max-w-2xl w-full p-6 bg-white rounded-md row-span-6 shadow-lg shadow-primary border-2 border-primary">
          <h1 className="text-3xl font-bold text-center mb-4 text-primary uppercase">
            Student Visa Application Form
          </h1>
          <form>
            {/* Name */}
            <div className="mb-4">
              <label className="text-gray-700 font-semibold">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
              />
            </div>

            {/* Present Address */}
            <div className="mb-4">
              <label className="text-gray-700 font-semibold">
                Present Address:
              </label>
              <textarea
                name="presentAddress"
                placeholder="Your Present Address"
                className=" w-full px-4 py-2 mt-2   border rounded-md shadow-sm input-bordered input-primary bg-gray-200"
              ></textarea>
            </div>

            {/* Mobile */}
            <div className="mb-4">
              <label className="text-gray-700 font-semibold">Mobile:</label>
              <input
                type="number"
                name="mobile"
                placeholder="Your Phone Number"
                className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="text-gray-700 font-semibold">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
              />
            </div>

            {/* Educational Qualifications */}
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">
                Educational Qualifications
              </h2>
              {/* Level of Education */}
              <div className="mb-4">
                <label className="text-gray-700 font-semibold">
                  Level of Education:
                </label>
                <select
                  name="level"
                  className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                >
                  <option value="">Select Your Program...</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                  <option value="others">Others</option>
                </select>
              </div>

              {/* Higher Secondary Certificate */}
              <div className="mb-4">
                <h3 className="text-md font-medium mb-2">
                  Higher Secondary Certificate
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Name of College:
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name of College"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Group:
                    </label>
                    <input
                      type="text"
                      name="group"
                      placeholder="Group"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Board:
                    </label>
                    <input
                      type="text"
                      name="board"
                      placeholder="Board"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Result:
                    </label>
                    <input
                      type="number"
                      name="result"
                      placeholder="Result"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Year of Passing:
                    </label>
                    <input
                      type="text"
                      name="year"
                      placeholder="Year of Passing"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                </div>
              </div>

              {/* Secondary School Certificate */}
              <div className="mb-4">
                <h3 className="text-md font-medium mb-2">
                  Secondary School Certificate
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Name of College:
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name of College"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Group:
                    </label>
                    <input
                      type="text"
                      placeholder="Group"
                      name="group"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Board:
                    </label>
                    <input
                      type="text"
                      name="board"
                      placeholder="Board"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Result:
                    </label>
                    <input
                      type="number"
                      placeholder="Result"
                      name="result"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Year of Passing:
                    </label>
                    <input
                      type="text"
                      placeholder="Year Of Passing"
                      name="year"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Language Proficiency */}
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">Language Proficiency</h2>
              {/* Skills */}
              <div className="mb-4">
                <p className="text-gray-700 font-semibold">Skills:</p>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="skills"
                    value="IELTS"
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span className="ml-2">IELTS</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="checkbox"
                    name="skills"
                    value="TOEFL"
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span className="ml-2">TOEFL</span>
                </label>
                {/* Add more skills here */}
              </div>

              {/* IELTS */}
              <div>
                {/* <h3 className="text-md font-medium mb-2 ">IELTS</h3> */}
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Listening:
                    </label>
                    <input
                      type="number"
                      name="listening"
                      placeholder="Listening"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Reading:
                    </label>
                    <input
                      type="number"
                      name="reading"
                      placeholder="Reading"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Writing:
                    </label>
                    <input
                      type="number"
                      name="writing"
                      placeholder="Writing"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Speaking:
                    </label>
                    <input
                      type="number"
                      name="speaking"
                      placeholder="Speaking"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 font-semibold">
                      Overall:
                    </label>
                    <input
                      type="number"
                      name="overall"
                      placeholder="Overall"
                      className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="mb-4">
              <label className=" text-sm font-medium ">Signature:</label>
              <input
                type="file"
                name="signature"
                className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
              />
            </div>
            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full btn btn-primary text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserDataInputForm;
