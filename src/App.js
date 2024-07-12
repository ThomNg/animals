import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css';

function getRandomAnimal(){
  const ani = ['bird','dog','cat','cow','gator','horse'];
  return ani[Math.floor(Math.random()* ani.length)];
}

function App (){

  const[animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, idx) =>
    {
      return <AnimalShow type={animal} key={idx} />
    }
  );
  
  return (
    <div className="app">
      <button onClick={handleClick}> Add Animal </button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;