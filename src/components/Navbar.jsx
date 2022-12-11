import "./Navbar.css";

const Hero = () => {
  return (
    <navbar>
      <div className="navbar">
        <div className="navbar__brand">SOURCERER</div>
        <div className="navbar__spacer" />
        <div className="navbar__item">Sign in</div>
        <div className="navbar__item">Sign up</div>
      </div>
    </navbar>
  );
};

export default Hero;
