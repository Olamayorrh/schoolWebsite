import StarIcon from "@mui/icons-material/Star";
import Button from "../Button/Button";
import "./Courses.css";
import image1 from "../../assets/Images/laptopLady.svg";
import image2 from "../../assets/Images/studentsWrite.svg";
import image3 from "../../assets/Images/studentPC.svg";
import image4 from "../../assets/Images/studentPC.svg";
import image5 from "../../assets/Images/studentGist.svg";
import image6 from "../../assets/Images/studentGroup.svg";
import pix1 from "../../assets/Images/profile1.svg";
import pix2 from "../../assets/Images/profile2.svg";
import pix3 from "../../assets/Images/profile3.svg";
import pix4 from "../../assets/Images/profile4.svg";
import pix5 from "../../assets/Images/profile5.svg";
import pix6 from "../../assets/Images/profile6.svg";
import backGround from "../../assets/Images/backgroundImg.svg";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PersonIcon from "@mui/icons-material/Person";
import EastIcon from "@mui/icons-material/East";

const Courses = () => {
  const courseDetail = [
    {
      id: 1,
      picture: image1,
      title: "IT Statistics Data science and \n Business Analysis",
      pix: pix1,
      name: "Samantha",
    },

    {
      id: 2,
      picture: image2,
      title: "Beginner Adobe Illustrator For\n Graphic Design",
      pix: pix2,
      name: "Charles",
    },

    {
      id: 3,
      picture: image3,
      title: "Starting SEO As Your Home Based \n Business",
      pix: pix3,
      name: "Morgan",
    },

    {
      id: 4,
      picture: image4,
      title: "IT Statistics Data science and \n Business Analysis",
      pix: pix4,
      name: "Brian Brewer",
    },

    {
      id: 5,
      picture: image5,
      title: "Beginner Adobe Illustrator For \n Graphic Design",
      pix: pix5,
      name: "Rodriquez",
    },

    {
      id: 6,
      picture: image6,
      title: "Starting SEO As Your Home Based \n Business",
      pix: pix6,
      name: "Morgan",
    },
  ];
  return (
    <>
      <div className="courses">
        <h3>TOP POPULAR COURSE</h3>
        <div className="courses_EduCourse">
          <div className="courses_EduCourse-phrase">
            Edunity Course Student Can <br /> Join With Us
          </div>
          <div>
            <Button variant="secondary">Load More Course </Button>
          </div>
        </div>

        <div className="courses_cardHolder">
          {courseDetail.map((course) => {
            return (
              <div key={course.id} className="courses_cardHolder-card">
                <div className="courses_cardHolder-card_image">
                  <img src={course.picture} alt="course_image" id="course_image" />
                  <div className="courses_cardHolder-card_nameTag">
                    Digital Marketing
                  </div>
                </div>

                <div className="courses_cardHolder-card_detail">
                  <div className="background">
                    <img src={backGround} alt="background_image" />
                  </div>
                  <div className="courses_cardHolder-card_review">
                    <div className="courses_cardHolder-card_star">
                      <div className="courses_cardHolder-card_stars">
                        <StarIcon sx={{ color: "#FC6441", fontSize: 20 }} />{" "}
                        <StarIcon
                          sx={{
                            color: "#FC6441",
                            marginLeft: "-0.7rem",
                            fontSize: 20,
                          }}
                        />{" "}
                        <StarIcon
                          sx={{
                            color: "#FC6441",
                            marginLeft: "-0.7rem",
                            fontSize: 20,
                          }}
                        />{" "}
                        <StarIcon
                          sx={{
                            color: "#FC6441",
                            marginLeft: "-0.7rem",
                            fontSize: 20,
                          }}
                        />
                        <StarIcon
                          sx={{
                            color: "#FC6441",
                            marginLeft: "-0.7rem",
                            fontSize: 20,
                          }}
                        />
                      </div>
                      <p>4.5K</p>
                    </div>
                    <div className="dols">$50.00</div>
                  </div>
                  <div id="course_title">
                    <h2 className="course_title">{course.title}</h2>
                  </div>

                  <div className="lesson">
                        <div className="duration"> <DescriptionOutlinedIcon />  <span>Lesson 10</span></div>
                        <div className="duration"> <WatchLaterIcon /> <span>19h 30m</span> </div>
                        <div className="duration"> <PersonIcon /> <span>Students 20+</span></div>
                  </div>
                  
                  <div className="enroll">
                          <div className="authour">
                             <img src={course.pix} alt="authour_image" />
                             <p>{course.name}</p>
                          </div>
                          
                         <button>Enroll <EastIcon /></button>
                          
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
