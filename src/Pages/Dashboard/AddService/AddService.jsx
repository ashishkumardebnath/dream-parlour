import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url =
    "https://api.imgbb.com/1/upload?key=f2697be2e7aedb606d636fa78da25071";

  console.log(img_hosting_url);
  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, details } = data;
          const itemData = {
            name,
            image: imgURL,
            price: parseFloat(price),
            details,
          };
          console.log(itemData);
          fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(itemData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Item added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };
  return (
    <div>
      <div className="bg-white text-xl flex justify-between px-4 py-3">
        <h2>Add Service</h2>
        <h2>{user?.displayName}</h2>
      </div>
      <div className="lg:ms-8 mx-2 lg:mt-8 mt-6 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white lg:w-[390px] rounded-md p-8">
            <input
              type="text"
              {...register("name", { required: true, maxLength: 80 })}
              placeholder="Service Title"
              className="input bg-white input-bordered w-full lg:max-w-xs"
            />
            <input
              type="number"
              {...register("price", { required: true, maxLength: 80 })}
              placeholder="Service Price"
              className="input bg-white input-bordered w-full my-2 lg:max-w-xs"
            />
            <textarea
              {...register("details", { required: true, maxLength: 80 })}
              className="textarea bg-white  w-full lg:max-w-xs  textarea-bordered"
              placeholder="Service Details"
            ></textarea>
            <input
              type="file"
              {...register("image", { required: true, maxLength: 80 })}
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
