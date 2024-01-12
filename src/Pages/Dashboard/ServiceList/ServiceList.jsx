import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { useQuery } from "react-query";

const ServiceList = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/orders?email=${user?.email}`
      );
      return res.json();
    },
  });

  console.log(bookings);

  return (
    <div>
      <div className="bg-white text-xl flex justify-between px-4 py-3">
        <h2>Service List</h2>
        <h2>{user?.displayName}</h2>
      </div>

      <div className="p-8 ">
        <div className=" grid lg:grid-cols-2 gap-4   ">
          {bookings.map((book) => (
            <div key={book._id} className="bg-white p-4 rounded-xl">
              <div className="flex justify-between">
                <img src={book.image} alt="" />
                <button className="btn text-[#F63E7B]">Pending</button>
              </div>
              <h2 className="text-lg font-semibold mt-4 mb-1">{book.name}</h2>
              <p>{book.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
