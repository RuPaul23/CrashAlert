import FrameComponent from "../../components/FrameComponent";
import GroupComponent from "../../components/GroupComponent";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <img
        className="backgroundimage-icon"
        alt=""
        src="/isometric-city11920x1080-1@2x.png"
        data-scroll-to="backgroundImage"
      />
      <FrameComponent />
      <div className="explore-the-features-wrapper">
        <GroupComponent />
      </div>
    </div>
  );
};

export default Landing;
