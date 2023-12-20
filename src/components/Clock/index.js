import React from 'react';
import "./Clock.css";
import { GiTomato } from "react-icons/gi";
import { useCountDown } from '../useCountDown/useCountDown';
import {  ClockContext } from '../ClockContext/index';

function Clock() {

  const {
    totalPeriod,
    setTotalPeriod,
    focus,
    setFocus,
    focusTime,
    setFocusTime,
    restTime,
    setRestTime,
    initClock,
    pauseClock,
    minutesLeft,
    getSeconds
  } = React.useContext(ClockContext);

  React.useEffect(() => {
    initClock(focusTime);
    console.log(focus)
  },[])


  return (
    <section className='clock'>
        <div className='clock__timer'>
          <div className='clock_timer-container'>
            <span>{minutesLeft}:</span><span>{getSeconds()}</span>
          </div>
          <div className='period-counter'>
            <ul>
              <li><GiTomato className='icon-period' onClick={() => {
                initClock(1)
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