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
      <div className="finish-head"><h1>GAME OVER</h1></div>
      <div className="scoreboard">
        <p className="score">SCORE:{12}</p>
        <p className="coins1">COINS:{6}</p>
      </div>
    </div>
      
    </>

  )
}
export default Finish
