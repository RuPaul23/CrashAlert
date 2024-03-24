import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <header className="output-images-inner">
      <div className="crash-alert-box-parent">
        <div className="crash-alert-box">
          <div className="crashalert6">CrashAlert</div>
        </div>
        <div className="home-services-about-parent">
          <div className="home-services-about">
            <div className="home6" onClick={onHomeTextClick}>
              Home
            </div>
          </div>
          <div className="home-services-about1">
            <div className="services6">Services</div>
          </div>
          <div className="home-services-about2">
            <div className="about9" onClick={onAboutTextClick}>
              About
            </div>
          </div>
          <button className="contact12">
            <div className="contact-box4" />
            <div className="contact13">Contact</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent4;
