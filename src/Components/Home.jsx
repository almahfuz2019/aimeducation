import Contact from "./Contact";
import Countrys from "./Countrys";
import FAQ from "./FAQ";
import Feature from "./Feature";
import LeandingBanner from "./LeandingBanner";
import OurWorksAmount from "./OurWorksAmount";
import StudentReview from "./StudentReview";

const Home = () => {
     return (
          <div>
               <LeandingBanner/>
               <OurWorksAmount/>
               <Countrys/>
               <Feature/>
               <StudentReview/>
               <FAQ/>
               <Contact/>
          </div>
     );
};
export default Home;