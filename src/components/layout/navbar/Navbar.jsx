import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import useDarkMode from "../../../context/darkModeContext";
import useAuth from "../../../context/authContext";

function Navbar() {
  const { darkMode, toggle } = useDarkMode();
  const { currentUser } = useAuth();

  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <span>socialapp</span>
          </Link>
          <HomeOutlinedIcon />
          {darkMode ? (
            <DarkModeOutlinedIcon onClick={toggle} />
          ) : (
            <WbSunnyOutlinedIcon onClick={toggle} />
          )}
          <GridViewOutlinedIcon />
          <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="right">
          <PersonOutlinedIcon />
          <EmailOutlinedIcon />
          <NotificationsOutlinedIcon />
          <div className="user">
            <img src={currentUser.profilePic} alt="profile not found" />
            <span>{currentUser.name}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
