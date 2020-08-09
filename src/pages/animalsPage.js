import React, { useState } from "react";
import Animal from "../components/animal";

const AnimalsPage = (props) => {
  const [animalsList, setAnimalsList] = useState(props.localHabitat.animals);

  const updateAnimal = (id, stamped, samples) => {
    let newAnimalsList = [...animalsList];
    const index = newAnimalsList.findIndex((animal) => animal.id === id);
    newAnimalsList[index] = { id: id, stamped: stamped, samples: samples };
    setAnimalsList(newAnimalsList);

    localStorage.setItem(
      props.habitat.id,
      JSON.stringify({ id: props.habitat.id, animals: newAnimalsList })
    );
  };

  const resetStamps = () => {
    let newAnimalsList = animalsList.map((animal) => {
      return { ...animal, stamped: false };
    });
    setAnimalsList(newAnimalsList);

    localStorage.setItem(
      props.habitat.id,
      JSON.stringify({ id: props.habitat.id, animals: newAnimalsList })
    );
  };

  const resetHabitat = () => {
    let newAnimalsList = animalsList.map((animal) => {
      return { ...animal, stamped: false, samples: 0 };
    });
    setAnimalsList(newAnimalsList);

    localStorage.setItem(
      props.habitat.id,
      JSON.stringify({ id: props.habitat.id, animals: newAnimalsList })
    );
  };

  const animals = animalsList.map((localAnimal) => {
    const animal = props.habitat.animals.find(
      (animal) => animal.id === localAnimal.id
    );
    return (
      <Animal
        key={animal.name}
        id={animal.id}
        title={animal.name}
        stamped={localAnimal.stamped}
        samples={localAnimal.samples}
        updateAnimal={updateAnimal}
      />
    );
  });
  return (
    <>
      <div className="header">
        <h1>{props.habitat.name}</h1>
        <div className="buttons">
          <button
            onClick={() => {
              if (
                window.confirm(
                  "This will reset the stamped field on all animals"
                )
              )
                resetStamps();
            }}
          >
            Turn in collection
          </button>
          <button
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure? This will reset all stamps and samples for all animals in this collection."
                )
              )
                resetHabitat();
            }}
          >
            Reset Collection
          </button>
        </div>
      </div>

      <div className="animals-container card-container">{animals}</div>
    </>
  );
};

export default AnimalsPage;
