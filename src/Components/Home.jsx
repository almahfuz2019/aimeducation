import Contact from "./Contact";

import FAQ from "./FAQ";
import Feature from "./Feature";
import Gallery from "./Gallery";
import LeandingBanner from "./LeandingBanner";

import BasicInfo from "./BasicInfo";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <LeandingBanner />
      <BasicInfo />
      <Feature />
      <Reviews />
      <Gallery />
      <FAQ />
      <Contact />
    </div>
  );
};
export default Home;
