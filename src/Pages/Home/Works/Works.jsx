import worksImg from "../../../assets/image/workImg.png";
// import { motion } from "framer-motion";

const Works = () => {
  return (
    <div>
      <div className="hero lg:py-10 py-4 bg-pink-100 lg:px-28">
        <div className="hero-content  flex-col-reverse lg:flex-row-reverse gap-16">
          <div className=" text-left">
            <h4 className="lg:text-4xl text-3xl font-bold">
              Let us handle your{" "}
            </h4>
            <h4 className="lg:text-4xl text-3xl  font-bold">
              screen <span className="text-[#F63E7B]">Professionally</span>.
            </h4>
            <p className="py-3">
              Let your screen be a mirror to your soul, where every swipe is a
              gesture of self-love. Nurture the pixels that reflect your
              essence, and in the glow, discover the power of embracing your
              digital sanctuary
            </p>
            <div className="flex gap-20  ">
              <div>
                <div className="stat-value text-[#F63E7B]">500+</div>
                <div>
                  <small className="font-semibold">Happy Customer</small>
                </div>
              </div>

              <div>
                <div className="stat-value text-[#F63E7B]">16+</div>
                <div>
                  <small className="font-semibold">Total Service</small>
                </div>
              </div>
            </div>
          </div>
          <div className="card shrink-0 lg:w-2/4  shadow-2xl bg-base-100">
            <img src={worksImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
