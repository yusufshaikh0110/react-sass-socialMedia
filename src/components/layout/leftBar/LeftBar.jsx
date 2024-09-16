import "./leftbar.scss";
import Friends from "../../../assets/1.png";
import Groups from "../../../assets/2.png";
import Market from "../../../assets/3.png";
import Watch from "../../../assets/4.png";
import Memories from "../../../assets/5.png";
import Events from "../../../assets/6.png";
import Gaming from "../../../assets/7.png";
import Gallery from "../../../assets/8.png";
import Videos from "../../../assets/9.png";
import Messages from "../../../assets/10.png";
import Tutorials from "../../../assets/11.png";
import Courses from "../../../assets/12.png";
import Fund from "../../../assets/13.png";
import useAuth from "../../../context/authContext";

const LeftBar = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="leftBar">
        <div className="container">
          <div className="menu">
            <div className="user">
              <img src={currentUser.profilePic} alt="profile not found" />
              <span>{currentUser.name}</span>
            </div>
            <div className="item">
              <img src={Friends} alt="not found" />
              <span>Friends</span>
            </div>
            <div className="item">
              <img src={Groups} alt="not found" />
              <span>Groups</span>
            </div>
            <div className="item">
              <img src={Market} alt="not found" />
              <span>Market</span>
            </div>
            <div className="item">
              <img src={Watch} alt="not found" />
              <span>Watch</span>
            </div>
            <div className="item">
              <img src={Memories} alt="not found" />
              <span>Memories</span>
            </div>
          </div>
          <hr />
          <div className="menu">
            <span>Your Shortcuts</span>
            <div className="item">
              <img src={Events} alt="not found" />
              <span>Events</span>
            </div>
            <div className="item">
              <img src={Gaming} alt="not found" />
              <span>Gaming</span>
            </div>
            <div className="item">
              <img src={Gallery} alt="not found" />
              <span>Gallery</span>
            </div>
            <div className="item">
              <img src={Videos} alt="not found" />
              <span>Videos</span>
            </div>
            <div className="item">
              <img src={Messages} alt="not found" />
              <span>Messages</span>
            </div>
          </div>
          <hr />
          <div className="menu">
            <span>Others</span>
            <div className="item">
              <img src={Tutorials} alt="not found" />
              <span>Tutorials</span>
            </div>
            <div className="item">
              <img src={Courses} alt="not found" />
              <span>Courses</span>
            </div>
            <div className="item">
              <img src={Fund} alt="not found" />
              <span>Fund</span>
            </div>
            <div className="item">
              <img src={Fund} alt="not found" />
              <span>Fund</span>
            </div>
            <div className="item">
              <img src={Fund} alt="not found" />
              <span>Fund</span>
            </div>
            <div className="item">
              <img src={Fund} alt="not found" />
              <span>Fund</span>
            </div>
            <div className="item">
              <img src={Fund} alt="not found" />
              <span>Fund</span>
            </div>
            <div className="item">
              <img src={Fund} alt="not found" />
              <span>Fund</span>
            </div>
            <div className="item">
              <img src={Fund} alt="not found" />
              <span>Fund</span>
            </div>
            <div className="item">
              <img src={Fund} alt="not found" />
              <span>Fund</span>
            </div>
            <div className="item">
              <img src={Fund} alt="not found" />
              <span>Fund</span>
            </div>
            <div className="item">
              <img src={Fund} alt="not found" />
              <span>Fund</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
