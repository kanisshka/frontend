import React from 'react'
import './Home.css';
import dino from '../assets/dino.png';
const Home = () => {
  return (
    <>
    <div className='main'>
      <h1>THE RUN</h1>
      <img src={dino} alt="" />
      <button>PLAY</button>
      <h2 className='blink-soft'>PRESS ENTER TO PLAY</h2>
      </div>
      </>
  )
}

export default Home