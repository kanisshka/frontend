import React, { useState } from 'react'
import Marketcard from './Marketcard'
import Modal from './Modal';
const Powerup = () => {
  const [titl,setTitl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <a className='modalclass'
      onClick={() => {
        setModalOpen(true);
        console.log("true");
        setTitl("2X SPEED");
      }} >
      <Marketcard
      title={"2X SPEED"} /> 
      </a>
    <a className='modalclass'
      onClick={() => {
        setModalOpen(true);
        console.log("true");
        setTitl("2X HEALTH")
      }} ><Marketcard title={"2X HEALTH"} />   </a>
      {modalOpen && <Modal title1={titl} body1={"Buy this to get double heath"} setOpenModal={setModalOpen} />}
    </>
  )
}

export default Powerup