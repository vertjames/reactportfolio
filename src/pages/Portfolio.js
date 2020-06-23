import React, { Component } from "react"
import Project from "../components/Project"
import projects from "../components/projects.json"
import "../components/assets/css/style.css"

class Portfolio extends Component {
  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-text"><center>
                <h1>All The Works That Matter</h1>
                <p>
                  There's a lot of web dev on the internets. Here's all that's worth checking out, created by yours truly.
                </p></center>
              </div>
            </div>
            
            <div className="row mx-auto">
              <div className="col-md-12">
                <div id="carouselExampleCaptions" className="carousel slide portfolio" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">

                    {projects.map((item) => (
                      <Project
                        active={item.active}
                        name={item.name}
                        image={item.image}
                        location={item.location}
                        description={item.description}
                      />
                    ))}

                </div>
                  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
