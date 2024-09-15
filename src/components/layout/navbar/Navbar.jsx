import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import { Link } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to={"/"} style={{textDecoration:"none"}}>
            <span>socialapp</span>
          </Link>
            <HomeOutlinedIcon/>
            <DarkModeOutlinedIcon/>
            <GridViewOutlinedIcon/>
            <div className="search">
              <SearchOutlinedIcon/>
              <input type="text" placeholder="Search..." />
            </div>
        </div>
        <div className="right">
          <PersonOutlinedIcon/>
          <EmailOutlinedIcon/>
          <NotificationsOutlinedIcon/>
          <div className="user">
            {/* <img src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}
            <span>John Doe</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
