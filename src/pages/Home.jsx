import React from 'react'
import './Home.css';
import {Link } from "react-router-dom";
import dino from '../assets/dino.png';
const Home = () => {
  return (
    <>
    <div className='main'>
      <h1>THE RUN</h1>
      <img className="dino" src={dino} alt="" />
      <Link to="/dashboard">
      <button >PLAY</button>
      </Link>
      <h2 className='blink-soft'>PRESS ENTER TO PLAY</h2>
      </div>
      </>
  )
}

export default Home