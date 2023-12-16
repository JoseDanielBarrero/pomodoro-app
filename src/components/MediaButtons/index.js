import React from 'react';
import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import "./MediaButtons.css"

function MediaButtons() {
  return (
    <section className='media-buttons-container'>
      <div className='media-button media-button--play'><FaPlay className='icon icon--media'/></div>
      <div className='media-button media-button--pause'><FaPause className='icon icon--media'/></div>
      <div className='media-button media-button--stop'><FaStop className='icon icon--media'/></div>
    </section>
  )
}

export default MediaButtons