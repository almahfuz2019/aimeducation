import CreateWithUs from "./CreateWithUs";
import FAQ from "./FAQ";
import LeandingBanner from "./LeandingBanner";
import OurWorksAmount from "./OurWorksAmount";
import StudentReview from "./StudentReview";

const Home = () => {
     return (
          <div>
               <LeandingBanner/>
               <OurWorksAmount/>
               <StudentReview/>
               <FAQ/>
               <CreateWithUs/>
          </div>
     );
};
export default Home;