import { Link } from "react-router-dom";
import navbarImg from "../../../assets/image/navbar-logo.png";
// import { useState } from "react";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
// import ToggleButton from "../../../components/ToggleButton/ToggleButton";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };

  const isAdmin = false;
  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link to="ourservices">Our Services</Link>
      </li>
      <li>
        <Link to="team">Our Team</Link>
      </li>
      <li>
        <Link to="contact">Contact Us</Link>
      </li>
      {isAdmin ? (
        <>
          <li>
            <Link to="dashboard/orderlist">Dashboard</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="dashboard/book">Dashboard</Link>
          </li>
        </>
      )}
    </>
  );

  // const [stickyNav, setStickyNav] = useState(false);
  // window.addEventListener("scroll", function () {
  //   if (this.window.screenY > 1000) {
  //     setStickyNav(true);
  //   } else {
  //     setStickyNav(false);
  //   }
  // });

  // className={stickyNav ? "activeNav" : ""}
  return (
    <div>
      <div className="navbar fixed z-10 top-0 opacity-80  lg:px-28  bg-pink-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
              <button className="btn px-8 bg-[#F63E7B] text-white">
                <Link to="/login">Login</Link>
              </button>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={navbarImg} alt="" />
            <h2 className="justify-center">Dream-Parlour</h2>
          </Link>{" "}
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal font-semibold px-1">
              {navItems}
            </ul>
            {/* <ToggleButton /> */}
            {user ? (
              <>
                <button
                  onClick={handleLogOut}
                  className="btn px-8 bg-[#F63E7B] text-white"
                >
                  LogOut
                </button>
              </>
            ) : (
              <>
                <button className="btn px-8 bg-[#F63E7B] text-white">
                  <Link to="/login">Login</Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
