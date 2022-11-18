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
        setTitl("2X SCORE");
      }} >
      <Marketcard
      title={"2X SCORE"} /> 
      </a>
    <a className='modalclass'
      onClick={() => {
        setModalOpen(true);
        console.log("true");
        setTitl("2X COIN")
      }} ><Marketcard title={"2X COIN"} />   </a>
      {modalOpen && <Modal title1={titl} body1={"Buy this to get double heath"} setOpenModal={setModalOpen} />}
    </>
  )
}

export default Powerup