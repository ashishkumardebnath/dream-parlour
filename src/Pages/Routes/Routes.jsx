import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Review from "../Dashboard/Review/Review";
import Book from "../Dashboard/Book/Book";
import PrivateRoutes from "./PrivateRoutes";
import AddService from "../Dashboard/AddService/AddService";
import NotFound from "../../Layouts/NotFound";
import Services from "../Home/Services/Services";
import Contact from "../Home/Contact/Contact";
import AllServices from "../Home/Services/AllServices";
import OrderList from "../Dashboard/OrderList/OrderList";
import ServiceList from "../Dashboard/ServiceList/ServiceList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "ourservices",
        element: <Services></Services>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "allservices",
        element: <AllServices></AllServices>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "review",
        element: <Review></Review>,
      },
      {
        path: "book",
        element: <Book></Book>,
      },
      {
        path: "servicelist",
        element: <ServiceList></ServiceList>,
      },
      // admin route
      {
        path: "addservice",
        element: <AddService></AddService>,
      },
      {
        path: "orderlist",
        element: <OrderList></OrderList>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
