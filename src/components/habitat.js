import React from "react";

const Habitat = (props) => {
  const image = require(`../images/habitats/${props.id}.jpg`);
  return (
    <a href={`/habitat/${props.id}`} className="habitat card">
      <img src={image} alt={`${props.title} scenery`} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{`Stamped: ${props.stamped} of ${props.total}`}</p>
    </a>
  );
};

export default Habitat;
