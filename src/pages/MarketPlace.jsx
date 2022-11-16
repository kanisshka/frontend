import React, { useState } from 'react'
import './MarketPlace.css';
import Topbar from '../components/Topbar';
import { Link } from 'react-router-dom';
const MarketPlace = () => {
const [present,setPresent] = useState("powerup");
  return (
    <>
      <div className="head">
                    <Topbar />
                </div>
      <div className='nav'>
        <ul>
        <li class="active"><a onClick={()=>setPresent("powerup")}>Power-Up</a></li> 
          <li><a onClick={()=>setPresent("sprite")} href="">Sprite</a></li>
          <li><a onClick={()=>setPresent("charactertistics")} href="">Characteristics</a></li>
        </ul>
      </div>
      <div className='compont'>
         
      </div>
    </>
  )
}

export default MarketPlace