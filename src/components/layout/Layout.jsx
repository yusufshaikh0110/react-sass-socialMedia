import { Outlet } from "react-router-dom";
import LeftBar from "./leftBar/LeftBar";
import Navbar from "./navbar/Navbar";
import RightBar from "./rightBar/RightBar";
import useDarkMode from "../../context/darkModeContext";

const Layout = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    </>
  );
};

export default Layout;
