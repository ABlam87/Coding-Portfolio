import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" end>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/project-gallery" end>Projects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" end>Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}

export default Header