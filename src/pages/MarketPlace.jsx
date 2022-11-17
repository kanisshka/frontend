import React, { useState } from 'react'
import './MarketPlace.css';
import Topbar from '../components/Topbar';
import { Link } from 'react-router-dom';
import Powerup from '../components/Powerup';
import Sprite from '../components/Sprite';
import Characteristics from '../components/Characteristics';
const MarketPlace = () => {
  const [present, setPresent] = useState("powerup");
  let currentCompo;
  if (present == "powerup") {
    currentCompo = <Powerup />;
  }
  else if (present == "sprite") {
    currentCompo = <Sprite />;
  }
  else {
    currentCompo =<Characteristics />
  }

  return (
    <>
      <div className="head">
        <Topbar />
      </div>
      <div className='nav'>
        <ul>
          <li class="active"><a onClick={() => setPresent("powerup")}>Power-Up</a></li>
          <li><a onClick={() => setPresent("sprite")} href="">Sprite</a></li>
          <li><a onClick={() => setPresent("charactertistics")} href="">Characteristics</a></li>
        </ul>
      </div>
      <div className='compont'>
        {currentCompo}
      </div>
    </>
  )
}

export default MarketPlace