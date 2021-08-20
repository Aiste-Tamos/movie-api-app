import React, { useState } from "react";
import { People } from "./People";

import "./filmCard.scss";

export const FilmCard = ({ film, people }) => {
  const [showPeople, setShowPeople] = useState(false);
  const mainClass = "film-card";
  const mainInfoClass = `${mainClass}__main-info`;
  const titleClass = `${mainClass}__title`;
  const dateClass = `${mainClass}__date`;
  const episodeClass = `${mainClass}__episode`;
  const buttonClass = `${mainClass}__button`;
  const peopleListClass = `${mainClass}__people-list`;

  return (
    <div className={mainClass}>
      <div className={mainInfoClass}>
        <h1 className={titleClass}>{film.title}</h1>
        <h2 className={dateClass}>Release date: {film.release_date}</h2>
        <h3 className={episodeClass}>Episode id: {film.episode_id}</h3>
        <button
          className={buttonClass}
          onClick={() => setShowPeople(!showPeople)}
        >
          Show people
        </button>
      </div>
      {showPeople ? (
        <People className={peopleListClass} people={people} film={film} />
      ) : null}
    </div>
  );
};
