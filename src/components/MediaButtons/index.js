import React from 'react';
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { ClockContext } from '../ClockContext/index';
import "./MediaButtons.css"

function MediaButtons() {

  const {
    pauseClock,
    stopClock
  } = React.useContext(ClockContext)

  return (
    <section className='media-buttons-container'>
      <div className='media-button media-button--play'onClick={() => {
         pauseClock()
       }}><FaPlay className='icon icon--media'
       /></div>
      <div className='media-button media-button--pause'onClick={() => {
        pauseClock()
      }}><FaPause className='icon icon--media'
      /></div>
      <div className='media-button media-button--stop'onClick={() => {
        stopClock()
      }}><FaStop className='icon icon--media'
      /></div>
    </section>
  )
}

export default MediaButtons