import React, { useState } from 'react'
import Marketcard from './Marketcard'
import Modal from './Modal';

const Powerup = () => {
  const [titl,setTitl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [body, setBody] = useState(false);

const [im,setIm]=useState("");
  return (
    <>
    <a className='modalclass'
      onClick={() => {
        setModalOpen(true);
        console.log("true");
        setTitl("2X SCORE");
        setBody("This powerup will double your score");

        setIm("https://res.cloudinary.com/rohangotwal/image/upload/v1668778466/Blog/2_2_fysmhp.png");
      }} >
      <Marketcard
      title={"2X SCORE"} /> 
      </a>
      <a className='modalclass'
      onClick={() => {
        setModalOpen(true);
        console.log("true");
        setBody("This powerup will double your coins");
        setIm("https://res.cloudinary.com/rohangotwal/image/upload/v1668778467/Blog/2_3_votqeu.png");

        setTitl("2X COIN")
      }} ><Marketcard title={"2X COIN"} />   </a>
      {modalOpen && <Modal title1={titl} Im1={im} body1={body} setOpenModal={setModalOpen} />}
    </>
  )
}

export default Powerup