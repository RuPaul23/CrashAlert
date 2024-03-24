import { useEffect } from 'react'
import './PreloaderStyles.css'
import { preLoaderAnim } from "../assets/animation";

const Preloader = () => {

  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span className="text1">Drive,</span>
        <span className="text2">Safe,</span>
        <span className="text3">Arrive.</span>  
      </div>
    </div>
  )
}

export default Preloader