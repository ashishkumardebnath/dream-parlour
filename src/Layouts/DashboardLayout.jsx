import { Link, Outlet } from "react-router-dom";
import logoImg from "../assets/image/logo-img3.png";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

const DashboardLayout = () => {
  const isAdmin = false;
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col bg-slate-100">
          <label
            htmlFor="my-drawer-2"
            className="bg-black bg-opacity-5 px-6 py-3 drawer-button lg:hidden mb-2"
          >
            <div className="flex items-center justify-between">
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
              <a href="/">
                <img className="w-24" src={logoImg} alt="" />
              </a>
            </div>
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-white">
            {/* Sidebar content here */}
            <div className="lg:w-32 md:w-32 w-24 cursor-pointer lg:ml-9 mx-auto">
              <Link className="flex " to="/">
                <img className="w-98" src={logoImg} alt="" />
              </Link>
            </div>
            <div className="border my-4"></div>
            {isAdmin ? (
              <>
                <li>
                  <Link
                    className="text-lg flex items-center gap-2 focus:text-[#F63E7B] hover:text-[#F63E7B] mb-2 font-semibold"
                    to="orderlist"
                  >
                    <FaBookReader /> Order List
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg flex items-center gap-2 focus:text-[#F63E7B] hover:text-[#F63E7B] mb-2 font-semibold"
                    to="addservice"
                  >
                    <MdOutlineShoppingCart />
                    Add Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg flex items-center gap-2 focus:text-[#F63E7B] hover:text-[#F63E7B] mb-2 font-semibold"
                    to="makeadmin"
                  >
                    <MdOutlineRateReview /> Make Admin
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg flex items-center gap-2 focus:text-[#F63E7B] hover:text-[#F63E7B] mb-2 font-semibold"
                    to="review"
                  >
                    <MdOutlineRateReview /> Manage Service
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="text-lg flex items-center gap-2 focus:text-[#F63E7B] hover:text-[#F63E7B] mb-2 font-semibold"
                    to="book"
                  >
                    <FaBookReader /> Book
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg flex items-center gap-2 focus:text-[#F63E7B] hover:text-[#F63E7B] mb-2 font-semibold"
                    to="servicelist"
                  >
                    <MdOutlineShoppingCart />
                    Service List
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    className="text-lg flex items-center gap-2 focus:text-[#F63E7B] hover:text-[#F63E7B] mb-2 font-semibold"
                    to="review"
                  >
                    <MdOutlineRateReview /> Review
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
