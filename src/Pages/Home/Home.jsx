import Category from "../../Components/Category/Category";
import Courses from "../../Components/Courses/Courses";
import Experience from "../../Components/Experience/Experience";
import Hero from "../../Components/Hero/Hero";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <PageHeader />
      <Hero />
      <Category />
      <Courses />
      <Experience />
    </div>
  );
};

export default Home;
