import FrameComponent1 from "../../components/FrameComponent1";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <img
        className="isometric-city1-1920x1080-1"
        loading="lazy"
        alt=""
        src="/isometric-city11920x1080-1@2x.png"
      />
      <FrameComponent1 />
      <main className="information-area">
        <section className="crash-alert-label" />
        <div className="about-us-label">
          <div className="this-website-deals">
            This website deals with the Crash alert
          </div>
        </div>
        <div className="about-us">About us</div>
      </main>
    </div>
  );
};

export default About;
