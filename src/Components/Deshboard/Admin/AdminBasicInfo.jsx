import TopBanner from "../Client/TopBanner";
import UserDataTable from "../Client/UserDataTable";
import DataFilter_Admin from "./DataFilter_Admin";

const AdminBasicInfo = () => {
  return (
    <div>
      <TopBanner />
      <h1 className="text-center font-bold text-4xl uppercase text-primary ">
        Filter Data
      </h1>
      <div className="flex animate-pulse justify-center ">
        <progress className=" progress mt-3 cursor-progress w-96  progress-primary  mx-4"></progress>
      </div>
      <div className="flex justify-center mt-5 ">
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-lg" />
      </div>
      <DataFilter_Admin />
      <UserDataTable />
    </div>
  );
};
export default AdminBasicInfo;
