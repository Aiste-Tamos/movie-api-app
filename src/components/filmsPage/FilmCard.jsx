import React from "react";

import "./filmCard.scss";

export const FilmCard = ({ film }) => {
  return (
    <div>
      <h1>{film.title}</h1>
      <h2>{film.release_date}</h2>
      <h3>{film.episode_id}</h3>
    </div>
  );
};
