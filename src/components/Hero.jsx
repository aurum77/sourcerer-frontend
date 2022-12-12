import "./Hero.css";
import { mars } from "../assets";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__msg">
        <div>Easy</div>
        <div>Tasks?</div>
        <div>That's</div>
        <div>Sourcerer</div>
      </div>
      <img src={mars} className="hero__img" />
    </div>
  );
};

export default Hero;
