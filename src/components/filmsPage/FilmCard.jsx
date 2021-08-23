import React, { useState } from "react";
import { People } from "./People";

import "./filmCard.scss";

export const FilmCard = ({ film }) => {
  const [showPeople, setShowPeople] = useState(false);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const mainClass = "film-card";
  const mainInfoClass = `${mainClass}__main-info`;
  const titleClass = `${mainClass}__title`;
  const dateClass = `${mainClass}__date`;
  const episodeClass = `${mainClass}__episode`;
  const buttonClass = `${mainClass}__button`;
  const peopleListClass = `${mainClass}__people-list`;

  async function fetchPerson() {
    if (!clicked) {
      let ids = [];
      film.characters.forEach((character) => {
        ids.push(character.split("/")[5]);
      });
      ids.map((id) => {
        id = Number(id);
        return fetch(`https://swapi.dev/api/people/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setLoading(true);
            people.push(data);
            people.sort((a, b) => a.url.split("/")[5] - b.url.split("/")[5]);
            setPeople(people);
            setLoading(false);
          });
      });
    }
  }

  const onShowPeopleClick = () => {
    setShowPeople(!showPeople);

    if (!showPeople) {
      fetchPerson();
      setLoading(false);
      setClicked(true);
    }
  };

  return (
    <div className={mainClass}>
      <div className={mainInfoClass}>
        <h1 className={titleClass}>{film.title}</h1>
        <h2 className={dateClass}>Release date: {film.release_date}</h2>
        <h3 className={episodeClass}>Episode id: {film.episode_id}</h3>
        <button className={buttonClass} onClick={onShowPeopleClick}>
          Show people
        </button>
      </div>
      {showPeople ? (
        loading ? (
          <p> Loading...</p>
        ) : (
          <People className={peopleListClass} people={people} film={film} />
        )
      ) : null}
    </div>
  );
};
