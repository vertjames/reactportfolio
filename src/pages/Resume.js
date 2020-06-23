import React, { Component } from "react";
import "../components/assets/css/style.css"

class Resume extends Component {
  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-md-16 mx-auto hero-text">
              <h3><strong>Résumé:</strong> The only thing I'm <em>resuming</em> is my war on bad guys...</h3>
              <embed src={require("../components/assets/images/First-Blood.pdf")} width="800px" height="2100px" className="Resume"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume;
