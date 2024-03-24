import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../../components/FrameComponent2";
import "./About1.css";

const About1 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="about2">
      <img
        className="backgroundimage-icon1"
        loading="lazy"
        alt=""
        src="/isometric-city11920x1080-1@2x.png"
      />
      <header className="about-inner">
        <div className="crash-alert-message-parent">
          <div className="crash-alert-message">
            <div className="crashalert1">CrashAlert</div>
          </div>
          <div className="frame-container">
            <div className="home-container">
              <div className="home1" onClick={onHomeTextClick}>
                Home
              </div>
            </div>
            <div className="services-container">
              <div className="services1">Services</div>
            </div>
            <div className="about-container">
              <div className="about3">About</div>
            </div>
            <button className="contact2">
              <div className="contact-box" />
              <div className="contact3">Contact</div>
            </button>
          </div>
        </div>
      </header>
      <main className="outer-box">
        <section className="outerbox" />
        <FrameComponent2 />
        <div className="about-us1">About Us</div>
      </main>
    </div>
  );
};

export default About1;
