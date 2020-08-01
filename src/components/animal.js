import React, { useState, useEffect } from "react";

const Animal = (props) => {
  const [stamped, setStamped] = useState(props.stamped || false);
  const [samples, setSamples] = useState(props.samples || 0);

  useEffect(() => {
    props.updateAnimal(props.id, stamped, samples);
  }, [stamped, samples]);

  return (
    <div className="animal card">
      {/* TODO add image */}
      <h2>{props.title}</h2>
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
