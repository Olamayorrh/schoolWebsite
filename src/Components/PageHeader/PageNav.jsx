import sitelogo from "../../assets/Images/edunityLogo.svg";
import Button from "../button/button.jsx";
import "./pageHeader.css";

const PageNav = () => {
  return (
    <div className="nav">
      <div className="nav_child">
        <div className="nav_logo">
          <img src={sitelogo} alt="siteLogo" />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="nav_button">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default PageNav;
