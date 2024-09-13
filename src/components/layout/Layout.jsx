import { Outlet } from "react-router-dom";
import LeftBar from "./leftBar/LeftBar";
import Navbar from "./navbar/Navbar";
import RightBar from "./rightBar/RightBar";

const Layout = () => {
  return (
    <>
      <div className="layout-container">
        <Navbar />
        <div className="layout-items">
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    </>
  );
};

export default Layout;
