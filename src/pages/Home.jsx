import React , {useEffect}from 'react'
import './Home.css';
import {Link, Navigate } from "react-router-dom";
import dino from '../assets/dino.png';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'Enter') {
        event.preventDefault();
        navigate('/dashboard');
      }
    };
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

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