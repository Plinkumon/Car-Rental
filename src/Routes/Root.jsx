import Navbar1 from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import "./Root.css"



export default function Root() {
  return (
    <>

      <Navbar1 />

   
        <Outlet />
      

      <Footer /> 
    </>
  );
}
