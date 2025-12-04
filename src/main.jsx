import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Root from "./Routes/Root"
import ErrorPage from "./error-page";
import About from "./Components/About.jsx";
import Home1 from "./Components/Home1.jsx";
import Contact from "./Components/Contact.jsx";
import Indcar from "./Components/Indcar.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import Booking from "./Components/Booking.jsx";
import Cardata from "./Components/Cardata.jsx";
import Success from "./Components/Success.jsx";
import Wishlist from "./Components/Wishlist.jsx";
import ThemeProvider from "./context/DarkLightmode.jsx";

import AdminHome from "./Admin/AdminHome.jsx";
import AdminRoute from "./Routes/AdminRoute.jsx";
import AdminDashboard from "./Admin/AdminDashboard";
import ManageCars from "./Admin/ManageCars";
import ManageBookings from "./Admin/ManageBookings";




const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
{
        index: true,        // 👈 Loads Home by default
        element: <Home1 />
      },

      {
        path: "/home",
        element: <Home1 />,
        errorElement: <ErrorPage />
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />
      },

      {
        path: "/cars",
        element: <Cardata />,
        errorElement: <ErrorPage />,

      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,

      },
      {
  path: "/cars/:type",
  element: <Cardata />,
},
      {
        path: "/car/:id",
        element: <Indcar />,
        errorElement: <ErrorPage />
      },
      {
  path: "/wishlist",
  element: <Wishlist />,
   errorElement: <ErrorPage />
},
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,

      },
      {
        path: "/signup",
        element: <Signup />,
        errorElement: <ErrorPage />,

      },
      {
        path: "/booking",
        element: <Booking />,
        errorElement: <ErrorPage />,

      },
      {
        path: "/success",
        element: <Success />,
        errorElement: <ErrorPage />,

      }]
  },
      {
        path: "/admin/dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
        children: [
    { path: "home", element: <AdminHome /> },
    { path: "manage-cars", element: <ManageCars /> },
    { path: "manage-bookings", element: <ManageBookings /> },
  ]
      },

      
      

    
    ]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <ThemeProvider>
    <RouterProvider router={router} />
 </ThemeProvider>
);
export default router;