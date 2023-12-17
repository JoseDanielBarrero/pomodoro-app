import React from 'react';
import "./Clock.css";
import { GiTomato } from "react-icons/gi";
import { useCountDown } from '../useCountDown/useCountDown';

function Clock() {

  const {
      minutesLeft,
      getSeconds,
      startClock,
      pauseClock,
      unpauseClock,
      stopClock
  } = useCountDown();

  return (
    <section className='clock'>
        <div className='clock__timer'>
          <div className='clock_timer-container'>
            <span>{minutesLeft}:</span><span>{getSeconds()}</span>
          </div>
          <div className='period-counter'>
            <ul>
              <li><GiTomato className='icon-period' onClick={() => {
                startClock(1)
              }}/></li>
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