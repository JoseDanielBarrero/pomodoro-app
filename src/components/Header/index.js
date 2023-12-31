import React from 'react';
import "./Header.css";
import { IoMdSettings } from "react-icons/io";
import { GiTomato } from "react-icons/gi";
import Modal from '../Modal';

function Header() {

  const [openModal, setOpenModal] = React.useState(false);

  const renderModal = () => {
    if(openModal){
      return (<Modal
        openModal={openModal}
        setOpenModal={setOpenModal}/>)
    }
    return (<></>);
  }
  return (
    <div className='Header-Container'>
        <section className='Head-Container__Title'>
            <GiTomato className='icon icon--title'/>
            <h1> Pomodoro App</h1>
        </section>
        <IoMdSettings className='icon icon--header' onClick={()=> {
          setOpenModal(true)
        }}/>
        {renderModal()}
    </div>
  )
}

export default Header