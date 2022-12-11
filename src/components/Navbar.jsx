import "./Navbar.css";
import { navlinks } from "../constants";

const Hero = () => {
  return (
      <nav className="navbar">
        <div className="navbar__brand">SOURCERER</div>
        <ul className="navbar__list">
          {navlinks.map((nav) => (
            <li className="navbar__item" ey={nav.id}>{nav.title}</li>
          ))}
        </ul>
      </nav>
  );
};

export default Hero;
