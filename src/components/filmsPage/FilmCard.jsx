import React, { useState } from "react";
import { People } from "./People";

import "./filmCard.scss";

export const FilmCard = ({ film, people }) => {
  const [showPeople, setShowPeople] = useState(false);
  const mainClass = "film-card";

  const peopleListClass = `${mainClass}__people-list`;
  return (
    <div className={mainClass}>
      <h1>{film.title}</h1>
      <h2>{film.release_date}</h2>
      <h3>{film.episode_id}</h3>
      <button onClick={() => setShowPeople(!showPeople)}>Show people</button>
      {showPeople ? (
        <People className={peopleListClass} people={people} film={film} />
      ) : null}
    </div>
  );
};
