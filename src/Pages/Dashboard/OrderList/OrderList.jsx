import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { useQuery } from "react-query";

const OrderList = () => {
  const { user } = useContext(AuthContext);

  const { data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/orders");
      return res.json();
    },
  });

  return (
    <div>
      <div className="bg-white text-xl flex justify-between px-4 py-3">
        <h2>Order List</h2>
        <h2>{user?.displayName}</h2>
      </div>
      <div className="bg-white m-8 rounded-2xl">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Pay With</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.userName}</td>
                  <td>{order.email}</td>
                  <td>{order.name}</td>
                  <td>Creadit Card</td>
                  <td className="text-[#F63E7B]">Pending</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
