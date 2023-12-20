import React from 'react';
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { ClockContext } from '../ClockContext/index';
import "./MediaButtons.css"

function MediaButtons() {

  const {
    pauseClock,
    initClock,
    focusTime
  } = React.useContext(ClockContext)

  return (
    <section className='media-buttons-container'>
      <div className='media-button media-button--play'><FaPlay className='icon icon--media'
       onClick={() => {
         pauseClock()
       }}/></div>
      <div className='media-button media-button--pause'><FaPause className='icon icon--media'
      onClick={() => {
        pauseClock()
      }}/></div>
      <div className='media-button media-button--stop'><FaStop className='icon icon--media'
      onClick={() => {
        initClock(focusTime)
      }}/></div>
    </section>
  )
}

export default MediaButtons