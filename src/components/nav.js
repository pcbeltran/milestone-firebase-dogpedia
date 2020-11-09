import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/">
        All Breeds
      </Link>{" "}
      |{" "}
      <Link className="nav__link" to="/add">
        Add Breeds
      </Link>{" "}
      |{" "}
      <Link className="nav__link" to="/crud">
        CRUD
      </Link>
    </nav>
  );
}

export default Nav;
