import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className="frame-parent1">
      <div className="crashalert-container">
        <div className="crashalert3">CrashAlert</div>
      </div>
      <nav className="frame-nav">
        <div className="home-wrapper1">
          <div className="home3" onClick={onHomeTextClick}>
            Home
          </div>
        </div>
        <div className="services-wrapper1">
          <div className="services3">Services</div>
        </div>
        <div className="about-wrapper1">
          <div className="about5" onClick={onAboutTextClick}>
            About
          </div>
        </div>
        <button className="contact7">
          <div className="contact-box2" />
          <div className="contact8">Contact</div>
        </button>
      </nav>
    </div>
  );
};

export default FrameComponent;
