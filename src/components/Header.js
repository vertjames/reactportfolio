import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={require("./assets/images/stallone-logo.png")} width="auto" height="30" alt="Stallone Logo" />
        </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-item nav-link" href="/">Home<span className="sr-only"></span></a>
          <a className="nav-item nav-link" href="portfolio">Portfolio</a>
          <a className="nav-item nav-link" href="contact">Contact</a>
        </div>
      </div>
    </nav>

    );
  }
}

export default Navbar;
