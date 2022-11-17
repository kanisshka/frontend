import React, { useState } from 'react'
import Marketcard from './Marketcard'
import Modal from './Modal';
const Powerup = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <a className='modalclass'
      onClick={() => {
        setModalOpen(true);
        console.log("true");
      }} >
      <Marketcard
      title={"2X SPEED"} /> 
      </a>
      <Marketcard title={"2X HEALTH"} />
      {modalOpen && <Modal title1={"Get 2x Health"} body1={"Buy this to get double heath"} setOpenModal={setModalOpen} />}
    </>
  )
}

export default Powerup