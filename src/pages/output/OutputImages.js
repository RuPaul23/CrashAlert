import FrameComponent4 from "../../components/FrameComponent4";
import "./OutputImages.css";

const OutputImages = () => {
  return (
    <div className="output-images">
      <img
        className="backgroundimage-icon3"
        loading="lazy"
        alt=""
        src="/isometric-city11920x1080-1@2x.png"
      />
      <FrameComponent4 />
      <main className="frame-main">
        <section className="outerbox-parent">
          <div className="outerbox2" />
          <div className="processing-box" />
          <div className="original-box" />
          
        </section>
        <div className="original-images">Original Images</div>
        <div className="processing-images-parent">
          <div className="processing-images">Processing Images</div>
          <div className="download-wrapper">
            <button className="download">
              <div className="download-child" />
              <div className="download1">Download</div>
            </button>
          </div>          
        </div>
      </main>
    </div>
  );
};

export default OutputImages;
