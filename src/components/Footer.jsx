import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__reserved">
        &#169; 2022 Taskify &#8482;. All rights reserved{" "}
      </div>
      <div className="footer__spacer"></div>
      <div className="footer__items">About</div>
      <div className="footer__items">Privacy Policy</div>
      <div className="footer__items">Licensing</div>
    </footer>
  );
};

export default Footer;
