import React from "react";
import Data from "./data.json";
import LocalData from "./localData.json";
import HabitatsPage from "./pages/habitatsPage";
import AnimalsPage from "./pages/animalsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./scss/main.scss";

function App() {
  const combinedLocalHabitats = LocalData.habitats.map((habitat) => {
    const localHab = localStorage.getItem(habitat.id);
    if (localHab) {
      return JSON.parse(localHab);
    }
    return habitat;
  });
  console.log(combinedLocalHabitats);
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <HabitatsPage
            habitats={Data.habitats}
            localHabitats={combinedLocalHabitats}
          />
        </Route>
        <Route
          path="/habitat/:habitat"
          render={({ match }) => (
            <AnimalsPage
              habitat={Data.habitats.find(
                (habitat) => habitat.id === match.params.habitat
              )}
              localHabitat={combinedLocalHabitats.find(
                (habitat) => habitat.id === match.params.habitat
              )}
            />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
