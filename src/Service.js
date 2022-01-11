import React from "react";
import { Link, Outlet } from "react-router-dom";
export default class Service extends React.Component {
  render() {
    return (
      <div>
        <h1>Nos services</h1>
        <nav className="nav">
          <Link className="nav__link" to={"/services/marketing"}>
            Service de marketing
          </Link>
          <Link className="nav__link" to={"/services/developpement"}>
            Service de developpement
          </Link>
        </nav>
        <Outlet />
      </div>
    );
  }
}
