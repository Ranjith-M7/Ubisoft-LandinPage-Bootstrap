import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <a href="https://www.ubisoft.com/en-gb/" className="navbar-brand">
          UBISOFT
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#" className="nav-link">
                PLAY
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                SHOP
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                EXPLORE
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                HELP
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
