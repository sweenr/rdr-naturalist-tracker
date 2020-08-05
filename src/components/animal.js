import React, { useState, useEffect } from "react";

const Animal = (props) => {
  const [stamped, setStamped] = useState(props.stamped || false);
  const [samples, setSamples] = useState(props.samples || 0);

  const { id, title, updateAnimal } = props;

  useEffect(() => {
    updateAnimal(id, stamped, samples);
  }, [stamped, samples]);

  const loadImage = (image) => {
    try {
      const image = require(`../images/animals/${props.id}.png`);
      return image;
    } catch (error) {
      const undiscovered = require(`../images/animals/undiscovered.png`);
      return undiscovered;
    }
  };

  return (
    <div className="animal card">
      <img src={loadImage(props.id)} alt={`${props.title}`} />
      <h2>{title}</h2>
      <div className="stamped">
        <input
          type="checkbox"
          checked={stamped}
          onChange={() => setStamped(!stamped)}
        />
        <label htmlFor={`${props.title}Stamped`}> Stamped</label>
      </div>
      <div className="samples">
        <p>Number of samples: {samples}</p>
        <button
          onClick={() => {
            if (samples > 0) setSamples(samples - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setSamples(samples + 1);
          }}
        >
          +
        </button>
      </div>
      {/* TODO add additioanl categories for animal (killed, skinned, photo, etc) */}
    </div>
  );
};

export default Animal;
