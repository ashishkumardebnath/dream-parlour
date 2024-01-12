import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";

const Review = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full">
      <div className="bg-white text-xl flex justify-between px-4 py-3">
        <h2>Review</h2>
        <h2>{user?.displayName}</h2>
      </div>
      <div className="lg:ms-8 mx-2 lg:mt-8 mt-6">
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="input bg-white input-bordered w-full lg:max-w-xs"
          />
          <br />
          <input
            type="text"
            placeholder="Type Your Country Name"
            className="input bg-white input-bordered w-full my-2 lg:max-w-xs"
          />
          <br />
          <input
            type="file"
            placeholder="Type here"
            className="input bg-white input-bordered w-full lg:max-w-xs"
          />
          <br />
          <textarea
            className="textarea  bg-white w-full lg:max-w-xs my-2 textarea-bordered"
            placeholder="Details"
          ></textarea>
          <br />
          <input
            className="btn bg-[#F63E7B] text-white px-10"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
