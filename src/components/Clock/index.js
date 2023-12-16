import React from 'react';
import "./Clock.css";
import { GiTomato } from "react-icons/gi";
function Clock() {
  return (
    <section className='clock'>
        <div className='clock__timer'>
          <div className='clock_timer-container'>
            <span>25:</span><span>00</span>
          </div>
          <div className='period-counter'>
            <ul>
              <li><GiTomato className='icon-period'/></li>
              <li><GiTomato className='icon-period'/></li>
              <li><GiTomato className='icon-period'/></li>
              <li><GiTomato className='icon-period'/></li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default Clock