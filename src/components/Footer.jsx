import "./Footer.css";
import { footerlinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__reserved">
        &#169; 2022 Taskify &#8482;. All rights reserved{" "}
      </div>
      <ul className="footer__list">
        {footerlinks.map((link) => (
          <li className="footer__item" id={link.id}>
            {link.title}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
