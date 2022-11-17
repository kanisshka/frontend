import React from 'react'
import './Modal.css';

function Modal({ setOpenModal,title1,body1 }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className='divide'>
        <div className='leftdiv'>
            <img className='booster' src="https://res.cloudinary.com/rohangotwal/image/upload/v1668677235/Blog/dino_j81o8g.png" alt="" />
        </div>
        <div className='rightdiv' >
        <div className="title">
          <h1>{title1}</h1>
        </div>
        <div className="body">
          <p>{body1}</p>
        </div>
        <div className="footer">
          <button>Buy Now</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;