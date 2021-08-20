import React, { useCallback, useEffect, useState } from "react";
import { FilmsList } from "./FilmsList";

import "./filmsPage.scss";

export const FilmsPage = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  const mainClass = "films-page";

  const fetchPeople = useCallback(
    (url = "https://swapi.dev/api/people/?page=1") =>
      fetch(url)
        .then(async (res) => {
          const response = await res.json();
          setPeople((prevState) => prevState.concat(response.results));
          if (response.next) {
            fetchPeople(response.next.replace("http://", "https://"));
          } else {
            console.log("Finish !");
          }
        })
        .catch((err) => {
          throw err;
        }),
    []
  );

  useEffect(() => {
    async function fetchFilms() {
      let res = await fetch("https://swapi.dev/api/films");
      let data = await res.json();
      setFilms(data.results);
    }

    fetchFilms();
    fetchPeople();
    setLoading(false);
  }, [fetchPeople]);

  let peopleUrlList = people.map((person) => person.url);

  peopleUrlList.forEach((url) => {
    if (films.map((film) => film.url.includes(url))) {
      console.log("match");
    }
  });

  console.log("these are people");
  console.log(people);

  return (
    <div className={mainClass}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <FilmsList films={films} people={people} />
        </>
      )}
    </div>
  );
};
