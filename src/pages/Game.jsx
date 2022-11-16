import React from 'react'
import './Game.css'
import Topbar from '../components/Topbar'
const Game = () => {
  return (
    <>
    <div className="head">
                    <Topbar />
                </div>
    <div className="game-loading">
    <div className="counter"><h1>3</h1></div>
    <div className="powerups-bottombar">
      <p>2x Speed</p>
      <p>2x Jump</p>
      <p>2x Health</p>
    </div>
    </div>
    </>
  )
}

export default Game