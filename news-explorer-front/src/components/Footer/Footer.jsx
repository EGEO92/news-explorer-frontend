import React, { useEffect, useState } from "react";
import "./footer.css";
import gitLogo from "../../images/github.png";
import fbLogo from "../../images/fb.png";
import { Link, useLocation } from "react-router";

function Footer() {
  const location = useLocation();
  const [isSvdNews, setIsSvdNews] = useState(false);

  useEffect(() => {
    if (location.pathname === "/saved-news") {
      setIsSvdNews(true);
    } else {
      setIsSvdNews(false);
    }
  }, [location.pathname]);
  return (
    <footer className={`footer ${isSvdNews ? "footer__svd-news" : ""}`}>
      <p className="footer__text">&copy; 2024 EGEO92</p>
      <div className="footer__contact">
        <Link to="/" className="footer__link">
          Inicio
        </Link>
        <a href="https:\\tripleten.com" className="footer__link">
          Tripleten
        </a>
        <a href="https://github.com/EGEO92" className="footer__link">
          <img src={gitLogo} alt="logo de github" className="footer__logo" />
        </a>
        <a
          href="https://www.facebook.com/emanuelgerardo.escalanteoceguera"
          className="footer__link"
        >
          <img src={fbLogo} alt="logo de Facebook" className="footer__logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
