import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import cars from "./data/cars.jsx";
import Root from "./Routes/Root"
import ErrorPage from "./error-page";
import About from "./Components/About.jsx";
import Home1 from "./Components/Home1.jsx";
import Contact from "./Components/Contact.jsx";
import Indcar from "./Components/Indcar.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";




const router = createHashRouter([
  {
    path: "/",
    element: <Root/>,
     errorElement: <ErrorPage />,
     
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
    element: <cars />,
    errorElement: <ErrorPage />,

  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,

  },
  {
    path: "/cars/:id",
    element: <Indcar/>,
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
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
