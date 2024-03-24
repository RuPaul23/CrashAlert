import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="frame-header">
      <div className="crash-alert-group">
        <div className="crash-alert1">
          <div className="crashalert5">CrashAlert</div>
        </div>
        <div className="frame-parent3">
          <div className="home-wrapper3">
            <div className="home5" onClick={onHomeTextClick}>
              Home
            </div>
          </div>
          <div className="services-wrapper2">
            <div className="services5">Services</div>
          </div>
          <div className="about-wrapper3">
            <div className="about8">About</div>
          </div>
          <button className="contact10">
            <div className="contact-box3" />
            <div className="contact11">Contact</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent3;
