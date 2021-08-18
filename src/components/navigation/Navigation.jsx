import React from "react";
import { Link } from "react-router-dom";

import "./navigation.scss";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link to="/about">About</Link>
        <Link to="/films">Films</Link>
      </ul>
    </nav>
  );
};
