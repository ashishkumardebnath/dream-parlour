import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Works from "../Works/Works";

const Home = () => {
  return (
    <div className="bg-white">
      <Banner></Banner>
      <Services></Services>
      <Works></Works>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
