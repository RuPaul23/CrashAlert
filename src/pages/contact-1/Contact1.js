import FrameComponent3 from "../../components/FrameComponent3";
import FrameComponent2 from "../../components/FrameComponent2";
import "./Contact1.css";

const Contact = () => {
  return (
    <div className="contact4">
      <img
        className="backgroundimage-icon2"
        loading="lazy"
        alt=""
        src="/isometric-city11920x1080-1@2x.png"
      />
      <FrameComponent3 />
      <main className="outer-box1">
        <section className="outerbox1" />
        <FrameComponent2 />
        <div className="contact-us">Contact-Us</div>
      </main>
    </div>
  );
};

export default Contact;
