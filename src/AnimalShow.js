import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import { useState } from 'react';
import './AnimalShow.css';


const svgMap = {
  bird,cat,cow,dog,gator,horse
}

function AnimalShow ({type}){
  const [clicks, setClicks] = useState(0);
  const handleClickAnimal = () =>{
    setClicks(clicks+1);
  };

  return (
  <div className='animal-show' onClick={handleClickAnimal}> 
    <img className='animal' alt="animal" src={svgMap[type]} />
    <img
      className='heart' 
      alt="heart"  
      src={heart}
      style={{width: 10+10*clicks +'px'}}
    />
  </div>
  );
}

export default AnimalShow;