import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./GroupComponent.css";

const GroupComponent = () => {
  const navigate = useNavigate();

  const onExploreTheFeaturesClick = useCallback(() => {
    navigate("/uploading-page");
  }, [navigate]);

  return (
    <div className="explore-the-features" onClick={onExploreTheFeaturesClick}>
      <div className="explore-the-features-box" />
      <div className="explore-the-features-container">
        <div className="explore-the-features1">Explore the features</div>
      </div>
      <div className="explore-the-features-inner">
        <div className="ellipse-parent">
          <div className="frame-item" />
          <img
            className="arrow-point-to-right"
            loading="lazy"
            alt=""
            src="/arrow-point-to-right@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
