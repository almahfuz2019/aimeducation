const Subscribe = () => {
     return (
       <div className="mx-2">
         <section className="flex flex-col max-w-7xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg md:flex-row md:h-48 my-5 border border-primary ">
           <div className="md:flex md:items-center md:justify-center md:w-1/2 bg-primary glass">
             <div className="px-6 py-6 md:px-8 md:py-0">
               <h2 className="text-lg font-bold bg-white rounded px-4 py-1 text-primary">
                 Sign Up For{" "}
                 <span className="text-primary ">Project</span>{" "}
                 Updates
               </h2>
               <p className="mt-2 text-sm text-white">
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Consectetur obcaecati odio
               </p>
             </div>
           </div>
           <div className="flex items-center justify-center pb-6 md:py-0 mx-auto mt-5 sm:mt-0">
             <form className="w-full md:w-auto border border-primary rounded-md"> {/* Adjust form width */}
               <div className="sm:flex sm:flex-col p-1.5 overflow-hidden border rounded-lg lg:flex-row gap-2"> {/* Adjust padding and gap */}
                 <input
                   className="px-6 py-2 text-gray-700  placeholder-gray-500 rounded-lg outline-none bg-primary/10"
                   type="text"
                   name="email"
                   placeholder="Enter your email"
                   aria-label="Enter your email"
                 />
                 <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-primary/80 rounded-md focus:bg-primary focus:outline-none">
                   subscribe
                 </button>
               </div>
             </form>
           </div>
         </section>
       </div>
     );
   };
   
   export default Subscribe;
   