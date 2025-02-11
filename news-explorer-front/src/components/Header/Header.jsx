import React from "react";
import "./header.css";
import { Link, useLocation } from "react-router";
import logOut from "../../images/logout.png";
import logOutB from "../../images/logoutb.png";
import MobileNav from "../MobileNav/MobileNav";

function Header(props) {
  const location = useLocation();

  function signIn() {
    props.signIn();
  }

  function signOut() {
    props.signOut();
  }

  function handleLocation() {
    if (location.pathname === "/") {
      if (innerWidth < 600) {
        return (
          <MobileNav
            isLoggedIn={props.loggedIn}
            signOut={signOut}
            signIn={signIn}
            name={props.name}
          />
        );
      } else {
        return (
          <div className="header__wraper">
            <p className="header__text header__selected">Inicio</p>
            <Link to="/saved-news" className="header__text header__link">
              Artículos guardados
            </Link>
            <button className="header__btn" onClick={signOut}>
              {props.name}
              <img src={logOut} alt="" />
            </button>
          </div>
        );
      }
    }
    if (location.pathname === "/saved-news") {
      if (innerWidth < 600) {
        return (
          <MobileNav
            isLoggedIn={props.loggedIn}
            signOut={signOut}
            signIn={signIn}
            name={props.name}
          />
        );
      } else {
        return (
          <div className="header__wraper">
            <Link to="/" className="header__text header__link">
              Inicio
            </Link>
            <p className="header__text header__selected-user">
              Artículos guardados
            </p>
            <button className="header__btn  header__btn-user" onClick={signOut}>
              {props.name}
              <img src={logOutB} alt="" />
            </button>
          </div>
        );
      }
    }
  }

  function handleMobile() {
    if (innerWidth < 600) {
      return (
        <MobileNav
          isLoggedIn={props.loggedIn}
          signOut={signOut}
          signIn={signIn}
          name={props.name}
        />
      );
    } else {
      return (
        <div className="header__wraper">
          <p className="header__text header__selected">Inicio</p>
          <button className="header__btn" onClick={signIn}>
            Iniciar sesion
          </button>
        </div>
      );
    }
  }

  return (
    <>
      <header className="header">
        <h2 className="header__tittle">NewsExplorer</h2>

        {props.loggedIn ? handleLocation() : handleMobile()}
      </header>
    </>
  );
}

export default Header;
