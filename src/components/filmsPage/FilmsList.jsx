import React from "react";
import { FilmCard } from ".";

import "./filmsList.scss";

export const FilmsList = ({ films }) => {
  return (
    <div>
      {films.map((film) => {
        return <FilmCard film={film} key={film.episode_id} />;
      })}
    </div>
  );
};
