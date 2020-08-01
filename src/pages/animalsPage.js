import React, { useState } from "react";
import Animal from "../components/animal";

const AnimalsPage = (props) => {
  const [animalsList, setAnimalsList] = useState(props.localHabitat.animals);

  const updateAnimal = (id, stamped, samples) => {
    console.log("saving animals");
    let newAnimalsList = [...animalsList];
    const index = newAnimalsList.findIndex((animal) => animal.id === id);
    newAnimalsList[index] = { id: id, stamped: stamped, samples: samples };
    console.log(newAnimalsList);
    setAnimalsList(newAnimalsList);

    localStorage.setItem(
      props.habitat.id,
      JSON.stringify({ id: props.habitat.id, animals: newAnimalsList })
    );
  };

  const animals = props.habitat.animals.map((animal) => {
    const localAnimal = props.localHabitat.animals.find(
      (localAnimal) => localAnimal.id === animal.id
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
      <h1>{props.habitat.name}</h1>
      <div className="animals-container card-container">{animals}</div>
    </>
  );
};

export default AnimalsPage;
