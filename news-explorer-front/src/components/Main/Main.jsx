import React, { useState } from "react";
import "./main.css";
import Header from "../Header/Header.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import About from "../About/About.jsx";

function Main(props) {
  const [isSearch, letIsSearch] = useState(false);

  function signIn() {
    props.signIn();
  }

  function signOut() {
    props.signOut();
  }

  function handleSearchWindow() {
    if (isSearch === false) {
      return <About />;
    }
    if (isSearch === true) {
      return (
        <>
          <SearchResults loggedIn={props.loggedIn} />
          <About />
        </>
      );
    }
  }

  function handleSearchButton(e) {
    e.preventDefault();
    letIsSearch(true);
  }

  return (
    <>
      <main className="main" id="main">
        <Header
          loggedIn={props.loggedIn}
          signIn={signIn}
          signOut={signOut}
          name={props.name}
        />
        <div className="main__wraper">
          <h2 className="main__tittle">¿Qué está pasando en el mundo?</h2>
          <p className="main__text">
            Encuentra las últimas noticias sobre cualquier tema y guárdalas en
            tu cuenta personal.
          </p>
          <form className="main__form form" onSubmit={handleSearchButton}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Introduce un tema"
              className="main__search"
            ></input>
            <span className="main__span" onClick={handleSearchButton}>
              Buscar
            </span>
          </form>
        </div>
      </main>
      {handleSearchWindow()}
    </>
  );
}

export default Main;
