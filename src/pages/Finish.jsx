import React from 'react'
import Topbar from '../components/Topbar';
import './Finish.css'
import {Link, useNavigate } from "react-router-dom";

const Finish = () => {
const navigate = useNavigate();

const nav = () =>{
  navigate("/game");
}
const rev = () =>{
  navigate("/dashboard");
}
  return (
    <>
    <div className="finish">
      <div className="head">
      </div>
      <div className="finish-head"><h1>GAME OVER</h1></div>
      <div className="twobuttons">
      <button onClick={nav} className='restart'>Restart</button>
      <button onClick={rev}className='restart'>Dashboard</button></div>
      <div className="scoreboard">
        <p className="score">SCORE:{12}</p>
        <p className="coins1">COINS:{6}</p>
      </div>
    </div>
      
    </>

  )
}
export default Finish
