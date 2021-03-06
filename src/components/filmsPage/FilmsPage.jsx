import React, { useEffect, useState } from "react";
import { FilmsList } from "./FilmsList";

import "./filmsPage.scss";

export const FilmsPage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  const mainClass = "films-page";

  useEffect(() => {
    async function fetchFilms() {
      let res = await fetch("https://swapi.dev/api/films");
      let data = await res.json();
      setFilms(data.results);
    }

    fetchFilms();
    setLoading(false);
  }, []);

  return (
    <div className={mainClass}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <FilmsList films={films} />
        </>
      )}
    </div>
  );
};
