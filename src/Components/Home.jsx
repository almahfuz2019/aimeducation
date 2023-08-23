import Contact from "./Contact";
import Countrys from "./Countrys";
import FAQ from "./FAQ";
import Feature from "./Feature";
import Gallery from "./Gallery";
import LeandingBanner from "./LeandingBanner";
import Messange from "./Messange";
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
               <Gallery/>
               <FAQ/>
               <Contact/>
               {/* <Subscribe/> */}
               <Messange/>
               
          </div>
     );
};
export default Home;