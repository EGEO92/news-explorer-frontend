import React from "react";
import Header from "../Header/Header";
import "./SavedNews.css";
import Card from "../Cards/Cards.jsx";
import "../SearchResults/search-results.css";
import lista from "../../utils/listaDeImagenes.jsx";

function SavedNews(props) {
  console.log(lista.pic1);
  function signOut() {
    props.signOut();
  }

  return (
    <section className="saved-news">
      <Header loggedIn={props.loggedIn} signOut={signOut} name={props.name} />
      <div className="saved-news__wraper">
        <p className="saved-news__text">Artículos guardados</p>
        <h2 className="saved-news__tittle">
          {`${props.name}, tienes ${
            props.cards /*.length*/
          } articulos guardados`}
        </h2>
        <p className="saved-news__tags">
          Por palabras clave:{" "}
          <span className="saved-news__tags-span">
            Naturaleza, Yellowstone, y 2 más
          </span>
        </p>
      </div>
      <div className="saved-news__news search-results__cards">
        <Card
          pic={lista.pic1}
          date="4 de noviembre de 2020"
          tittle="Todo el mundo necesita un lugar de reflexión en la naturaleza."
          description='Desde que leí el influyente libro de Richard Louv, "El último niño en el bosque", la idea de tener un "lugar de reflexión" especial para mi se me ha quedado grabada. Este consejo, que...'
          source="treehugger"
        />
        <Card
          pic={lista.pic2}
          date="19 de febrero de 2019"
          tittle="La naturaleza te hace mejor"
          description="Milenios atrás ya nos percatamos de ello: el sonido del océano, los aromas de un bosque, la forma en que la luz del sol moteada baila entre las hojas."
          source="national geographic"
        />
        <Card
          pic={lista.pic3}
          date="19 de octubre de 2020"
          tittle="El Grand Teton renueva el histórico Camino de la Cresta"
          description='"La unión de los senderos de la Cascada y del Cañón de la Muerte en sus picos tuvo lugar el 1 de octubre de 1933, y marcó el primer paso en la realización de un plan por el que el...'
          source="National parks traveler"
        />
        <Card
          pic={lista.pic4}
          date="19 de octubre de 2020"
          tittle="Fotos nostálgicas hechas por turistas en los parques nacionales de Estados Unidos"
          description="Uri Løvevild Golman y Helle Løvevild Golman son exploradores de National Geographic y fotógrafos de conservación que acaban de completar un proyecto y un libro que llaman su..."
          source="national geographic"
        />
        <Card
          pic={lista.pic5}
          date="16 de marzo de 2020"
          tittle="Los científicos no saben por qué la estrella polar es tan extraña"
          description="Los seres humanos se han basado durante mucho tiempo en el cielo estrellado para adentrarse hacia nuevas fronteras, navegar hasta el fin del mundo y encontrar el camino de vuelta..."
          source="treehugger"
        />
      </div>
    </section>
  );
}

export default SavedNews;
