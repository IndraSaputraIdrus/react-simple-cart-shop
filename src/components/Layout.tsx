import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container px-5 mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
