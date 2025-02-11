import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import menuImg from "../../images/menu.png";
import menuLoggedIn from "../../images/menuLoggedIn.png";
import closeBtn from "../../images/back.png";
import logOut from "../../images/logout.png";
import "./mobile-nav.css";

function MobileNav(props) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  function signOut() {
    props.signOut();
  }

  function signIn() {
    props.signIn();
  }

  function handleLoggedIn() {
    if (props.isLoggedIn) {
      return (
        <div className="mobile-nav">
          <p className="mobile__link">Inicio</p>
          <Link to="/saved-news" className="mobile__link">
            Artículos guardados
          </Link>
          <button className="mobile__btn" onClick={signOut}>
            {props.name}
            <img src={logOut} alt="" />{" "}
          </button>
        </div>
      );
    }
    return (
      <div>
        <p className="mobile__link">Inicio</p>
        <button className="mobile__btn" onClick={signIn}>
          Iniciar sesión
        </button>
      </div>
    );
  }

  function handleLocation() {
    if (location.pathname === "/") {
      return isMenuOpen ? (
        <div className="mobile__menu">
          <div className="mobile__wraper">
            <h2 className="mobile__tittle">NewsExplorer</h2>
            <button className="mobile__close" onClick={handleCloseMenu}>
              <img src={closeBtn} alt="" className="mobile__close" />
            </button>
          </div>
          {handleLoggedIn()}
        </div>
      ) : (
        <img
          src={menuImg}
          alt="Boton de menu"
          className={`mobile__img ${isMenuOpen ? "hidden" : ""}`}
          onClick={handleMenuClick}
        />
      );
    }
    if (location.pathname === "/saved-news") {
      return isMenuOpen ? (
        <div className="mobile__menu mobile__menu-saved">
          <div className="mobile__wraper">
            <h2 className="mobile__tittle">NewsExplorer</h2>
            <button className="mobile__close" onClick={handleCloseMenu}>
              <img src={closeBtn} alt="" className="mobile__close" />
            </button>
          </div>
          <Link to="/" className="mobile__link">
            Inicio
          </Link>
          <p to="/saved-news" className="mobile__link">
            Artículos guardados
          </p>
          <button className="mobile__btn" onClick={signOut}>
            {props.name}
            <img src={logOut} alt="" />{" "}
          </button>
        </div>
      ) : (
        <img
          src={menuLoggedIn}
          alt="Boton de menu"
          className={`mobile__img ${isMenuOpen ? "hidden" : ""}`}
          onClick={handleMenuClick}
        />
      );
    }
  }

  return <section className="mobile">{handleLocation()}</section>;
}

export default MobileNav;
