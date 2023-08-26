const TopBanner = () => {
     return (
       <div className="m-2">
         <header className="bg-primary glass ">
           <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-4 sm:py-4 lg:px-8">
             <div className="sm:flex sm:items-center sm:justify-between">
               <div className="text-center sm:text-left">
                 <h1 className="text-2xl font-bold  sm:text-3xl text-white">
                   Good afternoon, Acme Inc. 👋
                 </h1>
   
                 <p className="mt-1.5 text-sm text-white">
                   Here is what’s happening with your projects today:
                 </p>
               </div>
               <div className="font-semibold text-white">
                <p>Date: 20-12-2023 | SUNDAY</p></div>
             </div>
           {/* <progress className="progress  cursor-progress bg-whtie text-whtie progress-accent  mx-4"></progress> */}
           </div>
         </header>
       </div>
     );
   };
   export default TopBanner;
   