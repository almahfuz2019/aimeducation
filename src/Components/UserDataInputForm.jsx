function UserDataInputForm() {
  return (
    <div className="min-h-screen py-20 flex items-center justify-center ">
    {/* <div className="min-h-screen py-20 flex items-center justify-center bg-gradient-to-br from-primary/40 via-primary to-primary/20"> */}
      <div className="max-w-2xl w-full p-6 bg-white rounded-md row-span-6 shadow-lg shadow-primary border-2 border-primary">
        <h1 className="text-3xl font-bold text-center mb-4">
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
                  <label className="text-gray-700 font-semibold">Group:</label>
                  <input
                    type="text"
                    name="group"
                    placeholder="Group"
                    className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-semibold">Board:</label>
                  <input
                    type="text"
                    name="board"
                    placeholder="Board"
                    className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-semibold">Result:</label>
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
                  <label className="text-gray-700 font-semibold">Group:</label>
                  <input
                    type="text"
                    placeholder="Group"
                    name="group"
                    className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-semibold">Board:</label>
                  <input
                    type="text"
                    name="board"
                    placeholder="Board"
                    className=" w-full px-4 py-2 mt-2   border rounded-md row-span-6 shadow-sm input-bordered input-primary bg-gray-200"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-semibold">Result:</label>
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
            <button type="submit" className="w-full btn btn-primary text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserDataInputForm;
