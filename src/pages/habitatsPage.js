import React from "react";
import Habitat from "../components/habitat";

const HabitatsPage = (props) => {
  const habitats = props.habitats.map((habitat) => {
    const localHabitat = props.localHabitats.find(
      (localHab) => localHab.id === habitat.id
    );
    return (
      <Habitat
        key={habitat.id}
        id={habitat.id}
        title={habitat.name}
        description={habitat.description}
        stamped={localHabitat.animals.reduce((counter, localAnimal) => {
          if (localAnimal.stamped) {
            counter++;
          }
          return counter;
        }, 0)}
        total={habitat.animals.length}
      />
    );
  });
  return (
    <>
      <h1>Habitats</h1>
      <div className="habitats-container card-container">{habitats}</div>
    </>
  );
};

export default HabitatsPage;
