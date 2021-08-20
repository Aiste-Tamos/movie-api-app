import React from "react";
import { Link } from "react-router-dom";

import "./navigation.scss";

export const Navigation = () => {
  const mainClass = "navigation";
  const listClass = `${mainClass}__list`;
  const linkClass = `${mainClass}__link`;
  return (
    <nav className={mainClass}>
      <ul className={listClass}>
        <Link to="/about" className={linkClass}>
          About
        </Link>
        <Link to="/films" className={linkClass}>
          Films
        </Link>
      </ul>
    </nav>
  );
};
