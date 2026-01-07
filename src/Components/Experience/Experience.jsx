import "./Experience.css";
import image1 from "../../assets/Images/ladyGlasses.svg";
import image2 from "../../assets/Images/tower.svg";
import image3 from "../../assets/Images/dottedImage.svg";
import image4 from "../../assets/Images/starImage.svg";
import image5 from "../../assets/Images/conference.svg";
import image6 from "../../assets/Images/exprImage.svg";
import Button from "../Button/Button";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="eperience_Top">
          <div className="tower">
            <img src={image1} alt="image" id="imagee1" />
            <div className="tower2">
              <img src={image2} alt="image2" id="imagee2" />
              <img src={image3} alt="image3" id="imagee3" />
            </div>
          </div>
          <img src={image4} alt="image3" className="star" />
        </div>

        <div className="our_about">
          <div className="eperience_Down">
            <img src={image5} alt="section_image1" id="imagee4" />
            <img src={image6} alt="section_image2" id="imagee5" />
          </div>

          <div className="learnSkill">
            <h3>OUR ABOUT US</h3>
            <div className="skill">
              Learn & Grow Your Skills <br /> From AnyWhere
            </div>
            <div className="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris..
            </div>
            <div className="flexible">
              <div>
                <h2>FLEXIBLE CLASSNAMEES</h2>
                <p>
                  Suspendisse ultrice gravida dictum fusce placerat ultricies
                  integer quis auctor elit sed vulputate mi sit.
                </p>
              </div>
              <div>
                <h2>FLEXIBLE CLASSNAMEES</h2>
                <p>
                  Suspendisse ultrice gravida dictum fusce placerat ultricies
                  integer quis auctor elit sed vulputate mi sit.
                </p>
              </div>
            </div>
            <Button variant="secondary">Load More </Button>
          </div>
        </div>
        <div className="learnSkill_banner"></div>
      </div>
    </>
  );
};

export default Experience;