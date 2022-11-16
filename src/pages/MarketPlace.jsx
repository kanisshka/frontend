import React from 'react'
import './MarketPlace.css';
import Topbar from '../components/Topbar';
import Powerup from '../components/Powerup';
const MarketPlace = () => {

  return (
    <>
      <div className="head">
                    <Topbar />
                </div>
      <div className='nav'>
        <ul>
          <li class="active"><a>Power-Up</a></li>
          <li><a href="">Sprite</a></li>
          <li><a  href="">Characteristics</a></li>
        </ul>
      </div>
    </>
  )
}

export default MarketPlace