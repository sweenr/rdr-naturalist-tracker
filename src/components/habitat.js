import React from "react";

const Habitat = (props) => (
  <a href={`/habitat/${props.id}`} className="habitat card">
    {/* TODO add image */}
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <p>{`Stamped: ${props.stamped} of ${props.total}`}</p>
  </a>
);

export default Habitat;
