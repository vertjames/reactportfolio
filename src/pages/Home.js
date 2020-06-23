import React, { Component } from "react";
import "../components/assets/css/style.css"

class Home extends Component {
  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <div className="hero-text">
                <h1>Your Worst Nightmare</h1>
                <p>
                  That's me, your worst nightmare. But only if you're a bad guy. If you're a good guy then I'm your best friend. And I'll be here when you need me most. Because that's what heros do.
                </p>
                <p>
                  Oh, and you'll need a way to get in touch when you <em>are</em> ready, so here:
                </p>
                <p><br />
                  <a href="contact"><button type="button" className="btn btn-info">Contact Your Worst Nightmare</button></a>
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <img src={require("../components/assets/images/rambo.png")} alt="Rambo" className="rambo-pic" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
