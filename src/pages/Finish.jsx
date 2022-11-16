import React from 'react'
import Topbar from '../components/Topbar';
import './Finish.css'
const Finish = () => {
  return (
    <>
    <div className="finish">
      <div className="head">
        <Topbar />
      </div>
      <div className="finish-head"><h1>Game Over</h1></div>
      <div className="scoreboard">
        <p className="score">Score:{12}</p>
        <p className="coins">Coins::{6}</p>
      </div>
    </div>
      
    </>

  )
}
export default Finish
