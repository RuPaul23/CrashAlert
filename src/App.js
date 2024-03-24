import { useState, useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import OutputImages from "./pages/output/OutputImages";
import UploadingPage from "./pages/uploading/UploadingPage";
import Preloader from "./preloading/Preloader";

function App() {
  const [loading, setLoading] = useState(true); // State to track loading status
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about1":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/contact1":
        title = "";
        metaDescription = "";
        break;
      case "/output-images":
        title = "";
        metaDescription = "";
        break;
      case "/uploading-page":
        title = "";
        metaDescription = "";
        break;
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }

    // Simulating a delay to mimic loading process
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after delay
    }, 5000); // Adjust the time as needed

    return () => clearTimeout(timeout); // Clear timeout on unmount or dependency change
  }, [pathname]);

  // Render preloader if still loading
  if (loading) {
    return <Preloader />;
  }

  // Render Routes when loading is finished
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about1" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact1" element={<Contact />} />
      <Route path="/output-images" element={<OutputImages />} />
      <Route path="/uploading-page" element={<UploadingPage />} />
    </Routes>
  );
}

export default App;
