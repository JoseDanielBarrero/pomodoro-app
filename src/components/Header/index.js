import React from 'react';
import "./Header.css";
import { IoMdSettings } from "react-icons/io";
import { GiTomato } from "react-icons/gi";

function Header() {
  return (
    <div className='Header-Container'>
        <section className='Head-Container__Title'>
            <GiTomato className='icon icon--title'/>
            <h1> Pomodoro App</h1>
        </section>
        
        <IoMdSettings className='icon icon--header'/>
    </div>
  )
}

export default Header