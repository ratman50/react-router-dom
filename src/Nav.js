import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link className="nav__link" to={"/"}>
        Accueil
      </Link>
      <Link className="nav__link" to={"/services"}>
        Services
      </Link>
      <Link className="nav__link" to={"/profil/:id"}>
        Profil
      </Link>
    </nav>
  );
}
