import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about1");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='isometricCity11920x10801']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="contact">
      <img
        className="isometric-city1-1920x1080-11"
        alt=""
        src="/isometric-city11920x1080-1@2x.png"
        data-scroll-to="isometricCity11920x10801"
      />
      <header className="contact-inner">
        <div className="frame-parent">
          <div className="crashalert-wrapper">
            <div className="crashalert">CrashAlert</div>
          </div>
          <div className="frame-group">
            <div className="home-wrapper">
              <div className="home" onClick={onHomeTextClick}>
                Home
              </div>
            </div>
            <div className="services-wrapper">
              <div className="services">Services</div>
            </div>
            <div className="about-wrapper">
              <div className="about1" onClick={onAboutTextClick}>
                About
              </div>
            </div>
            <div className="rectangle-parent" onClick={onGroupContainerClick}>
              <div className="frame-child" />
              <div className="contact1">Contact</div>
            </div>
          </div>
        </div>
      </header>
      <section className="contact-child" />
    </div>
  );
};

export default Contact;
