import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";

const AddService = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="bg-white text-xl flex justify-between px-4 py-3">
        <h2>Add Service</h2>
        <h2>{user?.displayName}</h2>
      </div>
      <div className="lg:ms-8 mx-2 lg:mt-8 mt-6 ">
        <form>
          <div className="bg-white lg:w-[390px] rounded-md p-8">
            <input
              type="text"
              placeholder="Service Title"
              className="input bg-white input-bordered w-full lg:max-w-xs"
            />
            <input
              type="number"
              placeholder="Service Price"
              className="input bg-white input-bordered w-full my-2 lg:max-w-xs"
            />
            <textarea
              className="textarea bg-white  w-full lg:max-w-xs  textarea-bordered"
              placeholder="Service Details"
            ></textarea>
            <input
              type="file"
              placeholder="Image*"
              className="input bg-white input-bordered w-full  my-2 lg:max-w-xs"
            />
          </div>
          <input
            className="btn mt-3 bg-[#F63E7B] hover:bg-[#cc295f] text-white px-8"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
