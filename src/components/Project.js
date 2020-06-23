import React from "react";

function Project(props) {
  return (
      <div className={props.active}>
        <a target="_blank" href={props.location}>
          <img src={props.image} className="d-block w-100" alt={props.name} /></a>
        <div className="carousel-caption d-none d-md-block">
          <h4><a target="_blank" href={props.location}>{props.name}</a></h4>
          <p>{props.description}</p>
        </div>
      </div>
  );
}

export default Project;
