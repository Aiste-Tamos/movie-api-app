import React from "react";

import "./people.scss";

export const People = ({ film, people }) => {
  const mainClass = "people";
  const titleClass = `${mainClass}__title`;
  const tableClass = `${mainClass}__table`;

  return (
    <div className={mainClass}>
      <table className={tableClass}>
        <caption className={titleClass}>People in {film.title}:</caption>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Birth year</th>
            <th>Gender</th>
            <th>Mass</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, id) => {
            return (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{person.name}</td>
                <td>{person.birth_year}</td>
                <td>{person.gender}</td>
                <td>{person.mass} kg</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
