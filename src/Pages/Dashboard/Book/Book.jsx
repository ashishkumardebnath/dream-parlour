import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";

const Book = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full ">
      <div className="bg-white text-xl flex justify-between px-4 py-3">
        <h2>Book</h2>
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
            type="email"
            placeholder="Type Your Email"
            className="input bg-white input-bordered w-full my-2 lg:max-w-xs"
          />
          <br />
          <select className="select select-bordered w-full lg:max-w-xs">
            <option>Who shot first?</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Book;
