import "./Navbar.css";
import { menu, close } from "../assets";
import { useState } from "react";

const Navbar = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  console.log(children);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__brand">SOURCERER</div>
        <ul className="navbar__list">
          {children.map((child) => (
            <li className="navbar__item">{child.title}</li>
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
          {children.map((child) => (
            <li className="navbar__item--mobile">{child.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
