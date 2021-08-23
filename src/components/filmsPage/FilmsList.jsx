import React from "react";
import { FilmCard } from ".";

import "./filmsList.scss";

export const FilmsList = ({ films }) => {
  const mainClass = "films-list";

  return (
    <div className={mainClass}>
      {films.map((film) => {
        return <FilmCard film={film} key={film.episode_id} />;
      })}
    </div>
  );
};
