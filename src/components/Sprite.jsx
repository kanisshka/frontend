import React ,{useState} from 'react'
import Modal from './Modal';
import Marketcard from './Marketcard'
const Sprite = () => {
  const [titl,setTitl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <a className='modalclass'
      onClick={() => {
        setModalOpen(true);
        console.log("true");
        setTitl("SPRITE 1");
      }} >
    <Marketcard title={"SPRITE 1"}/></a>
    <a className='modalclass'
      onClick={() => {
        setModalOpen(true);
        console.log("true");
        setTitl("SPRITE 2")
      }} ><Marketcard title={"SPRITE 2"}/>
</a>
{modalOpen && <Modal title1={titl} body1={"Buy this to get double heath"} setOpenModal={setModalOpen} />}
</>
  )
}

export default Sprite