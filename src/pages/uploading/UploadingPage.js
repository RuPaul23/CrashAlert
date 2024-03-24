import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadingPage.css";

const UploadingPage = () => {
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState(null);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onTryNowClick = useCallback((event) => {
    const file = event.target.files[0]; // Get the first file from input
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        setUploadedImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const onUseItClick = useCallback((event) => {
    const placeholderImage = "/placeholder-image.png";
    setUploadedImage(placeholderImage);
    navigate("/apx");
  }, [navigate]);

  return (
    <div className="uploading-page">
      <img
        className="backgroundimage-icon4"
        loading="lazy"
        alt=""
        src="/isometric-city11920x1080-1@2x.png"
      />
      <header className="uploading-page-inner">
        <div className="crash-alert-msg-parent">
          <div className="crash-alert-msg">
            <div className="crashalert2">CrashAlert</div>
          </div>
          <div className="frame-div">
            <div className="home-frame">
              <div className="home2" onClick={onHomeTextClick}>
                Home
              </div>
            </div>
            <div className="services-frame">
              <div className="services2">Services</div>
            </div>
            <div className="about-frame">
              <div className="about4" onClick={onAboutTextClick}>
                About
              </div>
            </div>
            <button className="contact5">
              <div className="contact-box1" />
              <div className="contact6">Contact</div>
            </button>
          </div>
        </div>
      </header>
      <main className="outer-box-wrapper">
        <section className="upload-image-box-wrapper">
          <div className="upload-image-box">
            {uploadedImage && (
              <img className="uploaded-image" src={uploadedImage} alt="Uploaded" />
            )}
          </div>
        </section>
        <div className="try-now-button">
          <label htmlFor="imageUpload" className="try-now">
            <div className="try-now-box" />
            <div className="try-now1">Try Now</div>
          </label>
          <input
            type="file"
            id="imageUpload"
            style={{ display: "none" }}
            onChange={onTryNowClick}
          />
        </div>
        <div className="use-it-button">
          <button className="useItUpload" onClick={onUseItClick}>
            <div className="use-it-box" />
            <div className="use-it-text">Use It</div>
          </button>
        </div>
        <div className="upload-your-images">Upload your Images</div>
      </main>

    </div>
  );
};

export default UploadingPage;
