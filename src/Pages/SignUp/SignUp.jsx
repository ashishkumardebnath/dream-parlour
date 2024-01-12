import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUp, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUp(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  console.log(errors);
  return (
    <div className="py-20 bg-white  flex justify-center items-center">
      <div className="p-3 bg-pink-50 shadow-xl rounded-lg">
        <h2 className="text-2xl text-center mb-4 font-semibold">
          Create an account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-72">
            <div className="label">
              <span className="label-text">What is your name?</span>
            </div>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true, maxLength: 80 })}
              className="input bg-white input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your email?</span>
            </div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true, maxLength: 80 })}
              className="input bg-white input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true, maxLength: 80 })}
              className="input bg-white input-bordered w-full max-w-xs"
            />
          </label>

          <input className="btn bg-[#F63E7B] w-full mt-4" type="submit" />
        </form>
        <p className="text-center my-4">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-[#F63E7B]">Login.</span>
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
