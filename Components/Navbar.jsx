import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-dark text-white">
      <div className="container-fluid">
        <Link className="navbar-brand text-light fw-bold" to="/">
          E-Notebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex">
        <Link className="btn btn-primary mx-2" to="/login">
          Login
        </Link>
        <Link
          style={{ width: "100px", marginRight: "10px" }}
          to="/signup"
          className="btn btn-primary"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
