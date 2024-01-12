const Contact = () => {
  return (
    <div className="bg-pink-100 px-4 mt-6">
      <div className="text-center py-14">
        <h3 className="text-2xl font-bold">Let us handle your </h3>
        <h3 className="text-2xl font-bold">
          project, <span className="text-[#F63E7B]">professionally.</span>
        </h3>
      </div>
      <form>
        <div>
          <div className=" text-center">
            <input
              type="text"
              placeholder="Full Name*"
              className="input bg-white input-bordered w-full lg:mr-3 mb-2  lg:max-w-xs"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input bg-white input-bordered w-full mb-2  lg:max-w-xs"
            />
          </div>
          <div className=" text-center">
            <input
              type="text"
              placeholder="Email**"
              className="input  bg-white input-bordered w-full lg:mr-3  mb-2 lg:max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input bg-white input-bordered w-full mb-2  lg:max-w-xs"
            />
          </div>
          <div className="text-center ">
            <textarea
              className="  textarea bg-white lg:w-[650px] w-full textarea-bordered"
              placeholder="Your Message*"
            ></textarea>
          </div>
        </div>
        <div className="text-center pb-8 mt-2">
          <input
            className="btn  bg-[#F63E7B] text-white"
            type="submit"
            value="Send Message"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
