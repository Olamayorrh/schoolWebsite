// import "../../themes/global.css";
import "./PageHeader.css";

// import facebook from '../../assets/icons/facebook.svg?react'
import phoneLogo from "../../assets/Images/telephone.svg";
import mail from "../../assets/Images/mail.svg";
import location from "../../assets/Images/location.svg";
import facebook from "../../assets/Images/facebook.svg";
import linkedin from "../../assets/Images/linkedInn.svg";
import instagram from "../../assets/Images/instagram.svg";
import youtube from "../../assets/Images/youTube.svg";

const PageBanner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_contactInfo">
            <div className="banner_contactInfo-logo banLogo">
              <img src={phoneLogo} alt="phoneLogo" className="bannerLogo" />
              <p>(00)875 784 5682</p>
            </div>
            <div className="banner_contactInfo-logo">
              <img src={mail} alt="phoneLogo" className="bannerLogo" />
              <p>pacargoin@gmail.com</p>
            </div>
            <div className="banner_contactInfo-logo">
              <img src={location} alt="phoneLogo" className="bannerLogo" />
              <p>238,Arimantab,Moska-USA</p>
            </div>
        </div>

        <div className="socials">
          {/* <facebook className="icon" /> */}
          <img src={facebook} alt="phoneLogo" className="socLogo" id="fLogo"/>
          <img src={linkedin} alt="phoneLogo" className="socLogo" />
          <img src={instagram} alt="phoneLogo" className="socLogo" />
          <img src={youtube} alt="phoneLogo" className="socLogo" />
        </div>
      </div>
    </>
  );
};

export default PageBanner;
