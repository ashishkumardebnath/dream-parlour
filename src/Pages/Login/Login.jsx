import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    login(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };
  console.log(errors);
  return (
    <div className="py-20 bg-white flex justify-center items-center">
      <div className="p-3 bg-pink-50 shadow-xl rounded-lg">
        <h2 className="text-2xl text-center mb-4 font-semibold">Login</h2>
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
          Don’t have an account?{" "}
          <Link to="/signup">
            {" "}
            <span className="text-[#F63E7B]">Create an account.</span>
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
