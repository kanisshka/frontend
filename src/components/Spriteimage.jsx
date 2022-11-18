import React from 'react'
import './Spriteimage.css'
import dino from '../assets/dino.png';
const Spriteimage = () => {
  return (
    <div className="card">
            <div className="card-body">
                <img src={dino}/>
            </div>
        </div>
  )
}

export default Spriteimage