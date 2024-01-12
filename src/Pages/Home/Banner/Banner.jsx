import bannerImg from "../../../assets/image/banner-img.png";
// import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen lg:px-28  bg-pink-100 lg:py-28 py-14 ">
        <div className="hero-content flex-col  lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="lg:text-5xl text-3xl font-bold mb-2">
              BEAUTY SALON
            </h1>
            <h1 className="lg:text-5xl text-3xl font-bold mb-2">
              FOR EVERY WOMEN
            </h1>
            <p className="py-6">
              Empower the screen of your life with a touch of self-care, where
              every glance reflects the strength and beauty within you. Shield
              your radiance, embrace your screen, and let the world witness the
              vibrant colors of a confident and empowered woman translet bangla.
            </p>
            <button className="btn bg-[#F63E7B] text-white">Contact Us</button>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
