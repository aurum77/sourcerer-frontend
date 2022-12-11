import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__msg">
        <div>Let's</div>
        <div>build</div>
        <div>a</div>
        <div>heckin</div>
        <div>website</div>
      </div>
      <img src="../public/mars.png" className="hero__img" />
    </div>
  );
};

export default Hero;
