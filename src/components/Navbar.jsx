import "./Navbar.css";
import { navlinks } from "../constants";
import { menu, close } from "../assets";
import { useState } from "react";

const Hero = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__brand">SOURCERER</div>
        <ul className="navbar__list">
          {navlinks.map((nav) => (
            <li className="navbar__item" key={nav.id}>
              {nav.title}
            </li>
          ))}
        </ul>
        <div className="navbar__hamburger">
          <img
            className="navbar__hamburgerimg"
            src={toggle ? close : menu}
            onClick={() => setToggle((toggle) => !toggle)}
          />
        </div>
      </nav>
      <div className={`navbar__mobile ${toggle ? "" : "hidden"}`}>
        <ul className="navbar__list--mobile">
          {navlinks.map((nav) => (
            <li className="navbar__item--mobile" key={nav.id}>
              {nav.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Hero;
