import React from "react";

import "./people.scss";

export const People = ({ film, people }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>People in {film.title}</th>
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
