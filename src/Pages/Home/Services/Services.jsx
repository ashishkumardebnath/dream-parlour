import { Link } from "react-router-dom";
import img1 from "../../../assets/image/serviceImg 1.png";
import img2 from "../../../assets/image/serviceImg 2.png";
import img3 from "../../../assets/image/serviceImg 3.png";
// import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className=" py-20 lg:mx-28 mx-4">
      <h3 className="lg:text-3xl text-2xl font-bold text-center mb-14">
        Our Awesome <span className="text-[#F63E7B]">Services</span>
      </h3>
      <div className="grid bg-white lg:grid-cols-3 gap-6">
        <div className="card  bg-white shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Anti Age Face Treatment</h2>
            <p className="text-[#F63E7B]">$199</p>
            <p>
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </p>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          {" "}
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Hair Color & Styleing</h2>
            <p className="text-[#F63E7B]">$99</p>
            <p>
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </p>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          {" "}
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Skin Care Treatment</h2>
            <p className="text-[#F63E7B]">$299</p>

            <p>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="btn bg-[#F63E7B] text-white">
          <Link to="allservices">Explore more</Link>
        </button>
      </div>
    </div>
  );
};

export default Services;
