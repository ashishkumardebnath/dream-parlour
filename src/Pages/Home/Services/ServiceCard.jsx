import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ServiceCard = ({ allService, refetch, setServiceModal }) => {
  const { name, image, details, price, _id } = allService;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (allService) => {
    console.log(allService);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        userName: user.displayName,
        name,
        image,
        price,
        details,
        email: user.email,
      };
      fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card  shadow-xl">
        <figure className=" px-10 pt-10">
          <img src={image} alt="Shoes" className=" w-24 rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="text-[#F63E7B]">${price}</p>
          <p>
            {details.slice(0, 70)}{" "}
            <label
              htmlFor="booking-modal"
              onClick={() => setServiceModal(allService)}
              className="text-[#F63E7B]"
            >
              see more...
            </label>
          </p>
        </div>
        <div className="text-center -mt-4 mb-4">
          <button
            onClick={() => handleAddToCart(allService)}
            className="btn  px-8 text-white bg-[#F63E7B] hover:bg-[#bd144c] text-center"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
