import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const img_upload_token = import.meta.env.VITE_img_upload_token;

const Review = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_upload_token}`;

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
          const { name, country, rating, details } = data;
          const reviewItem = {
            name,
            country,
            image: imgURL,
            details,
            rating: parseFloat(rating),
          };
          fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(reviewItem),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Reviewed successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };

  // const handleSubmitForm = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const country = form.country.value;
  //   const image = form.image.value;
  //   const details = form.details.value;
  //   const ratings = form.rating.value;
  //   const rating = parseInt(ratings);
  //   const reviewItem = { name, country, image, details, rating };
  //   console.log(reviewItem);

  //   // formData.append("image", reviewItem.image[0]);
  //   // fetch(img_hosting_url, {
  //   //   method: "POST",
  //   //   body: formData,
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((imgResponse) => {
  //   //     if (imgResponse.success) {
  //   //       const imgURL = imgResponse.data.display_url;
  //   //       const { name, country, details, rating } = reviewItem;
  //   //       const reviewItem = { name, country, image: imgURL, details, rating };
  //   //       console.log(reviewItem);
  //   //       fetch("http://localhost:5000/reviews", {
  //   //         method: "POST",
  //   //         headers: {
  //   //           "content-type": "application/json",
  //   //         },
  //   //         body: JSON.stringify(reviewItem),
  //   //       })
  //   //         .then((res) => res.json())
  //   //         .then((data) => {
  //   //           if (data.insertedId) {
  //   //             Swal.fire({
  //   //               position: "top-end",
  //   //               icon: "success",
  //   //               title: "User created successfully.",
  //   //               showConfirmButton: false,
  //   //               timer: 1500,
  //   //             });
  //   //           }
  //   //         });
  //   //     }
  //   //   });

  //   // console.log(reviewItem);
  //   // fetch("http://localhost:5000/reviews", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "content-type": "application/json",
  //   //   },
  //   //   body: JSON.stringify(reviewItem),
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     if (data.insertedId) {
  //   //       Swal.fire({
  //   //         position: "top-end",
  //   //         icon: "success",
  //   //         title: "User created successfully.",
  //   //         showConfirmButton: false,
  //   //         timer: 1500,
  //   //       });
  //   //     }
  //   //   });
  // };

  return (
    <div className="w-full">
      <div className="bg-white text-xl flex justify-between px-4 py-3">
        <h2>Review</h2>
        <h2>{user?.displayName}</h2>
      </div>
      <div className="lg:ms-8 mx-2 lg:mt-8 mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="input bg-white input-bordered w-full lg:max-w-xs"
          />
          <br />
          <input
            type="text"
            {...register("country", { required: true })}
            placeholder="Type Your Country Name"
            className="input bg-white input-bordered w-full my-2 lg:max-w-xs"
          />
          <br />
          <input
            type="file"
            {...register("image", { required: true })}
            placeholder="Type here"
            className="input bg-white input-bordered w-full lg:max-w-xs"
          />
          <br />
          <input
            {...register("rating", { required: true })}
            min="1"
            max="5"
            placeholder="Type here"
            className="input bg-white input-bordered mt-2 w-full lg:max-w-xs"
            type="number"
          />
          <br />
          <textarea
            className="textarea  bg-white w-full lg:max-w-xs my-2 textarea-bordered"
            {...register("details", { required: true })}
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
