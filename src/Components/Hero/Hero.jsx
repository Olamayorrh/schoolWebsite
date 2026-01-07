import "./Hero.css";
import Button from "../Button/Button";
import heroImage from "../../assets/Images/heroImage.svg";
import dashedline from "../../assets/Images/dashedLine.svg";
import blackpolo from "../../assets/Images/blackPolo.png";
import bluejacket from "../../assets/Images/bluejacket.png";
import greenshirt from "../../assets/Images/greenShirt1.png";
import redHoodie from "../../assets/Images/redHoodie.png";
import plus from "../../assets/Images/plus.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero_Content">
          <h4>WELCOME TO EDUNITY ONLINE COURSES</h4>
          <h2>
            Achieving Your Dreams <br /> Through Education
          </h2>
          <p className="experiencee">
            We are experienced in educational platform and skilled strategies{" "}
            <br /> for the success of our online learning
          </p>

          <Button variant="primary" size="size">
            Find Courses{" "}
          </Button>
          <img src={dashedline} alt="dashedline image" id="dashed" />

          <div id="instructor">
            <p id="instruct">
              200+ <span>Instructor</span>
            </p>
            <div className="image">
              <div className="img">
                <img src={bluejacket} className="imgg imgg1" />
              </div>
              <div className="img">
                <img src={greenshirt} className="imgg imgg2" />
              </div>
              <div className="img">
                <img src={redHoodie} className="imgg imgg3" />
              </div>
              <div className="img">
                <img src={blackpolo} className="imgg imgg4" />
              </div>
              <div className="img img5">
                <img src={plus} className="imgg imgg5" />
              </div>
            </div>
          </div>

          <div className="cate">
            <p id="cate">CATEGORIES</p>
          </div>
        </div>

        <div className="hero_Image">
          <img src={heroImage} alt="heroImage" />
        </div>
      </div>
    </>
  );
};

export default Hero;
