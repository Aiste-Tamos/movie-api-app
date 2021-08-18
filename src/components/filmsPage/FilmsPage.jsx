import React, { useEffect, useState } from "react";
import { FilmsList } from "./FilmsList";

import "./filmsPage.scss";

export const FilmsPage = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFilms() {
      let res = await fetch("https://swapi.dev/api/films");
      let data = await res.json();
      setFilms(data.results);
    }

    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people");
      let data = await res.json();
      setPeople(data.results);
    }

    fetchFilms();
    fetchPeople();
    setLoading(false);
  }, []);

  return <div>{loading ? <p>Loading...</p> : <FilmsList films={films} />}</div>;
};
