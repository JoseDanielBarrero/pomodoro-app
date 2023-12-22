import React from 'react';
import "./Clock.css";
import { GiTomato } from "react-icons/gi";
import { useCountDown } from '../useCountDown/useCountDown';
import {  ClockContext } from '../ClockContext/index';
import sound from "./notificaicon.mp3";

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
    getSeconds,
    finish,
    setPeriod,
    period,
    runClock,
    longBreak,
  } = React.useContext(ClockContext);

  React.useEffect(() => {
    initClock(focusTime);
    
  },[])

  React.useEffect(() => {
    if(finish){
      if(period<totalPeriod){
        // Change Focus time => rest time or rest time >= focus time
        if(focus){
          let newPeriod = period + 1;
          setPeriod(newPeriod);
        }
        changeTimers();
      }
      else{
        setPeriod(0);
        changeTimers()
      }
      sendNotificationSound();
      if(verifyNotificationPermission())
      {
        notify();
      }
    }
  },[finish])



  const notify = () => {
    if(focus)
    {
      new Notification("Good Job! Let's take some time to rest.")
    }
    else{
      new Notification("Let's Back To Work!");
    }
    
  }
  const sendNotificationSound = () => {
    let notificationSound = new Audio(sound)
    notificationSound.play();
  }
  const verifyNotificationPermission = () => {
    if(Notification.permission === "granted")
      {
        return true;
      }
      else{
        Notification.requestPermission().then((res) => {
          if(res === "granted"){
            return true;
          }
          else {
            return false;
          }
        })
      }
  }
  const changeTimers = () => {
    if(focus)
    {
      if(period === (totalPeriod-1))
      {
        initClock(longBreak);
      }
      else{
        initClock(restTime);
      }
      runClock();
      setFocus(!focus)
    }
    else{
      initClock(focusTime);
      runClock();
      setFocus(!focus)
    }
  }

  return (
    <section className='clock'>
        <div className={`clock__timer ${!focus && 'clock__timer--rest'}`}>
          <div className='clock_timer-container'>
            <span>{minutesLeft}:</span><span>{getSeconds()}</span>
          </div>
          <div className='period-counter'>
            <ul>
              <li onClick={() => {
                initClock(1)
              }}><GiTomato className= {`icon-period ${(period>=1) && "period-completed"}`} /></li>
              <li><GiTomato className= {`icon-period ${(period>=2) && "period-completed"}`}/></li>
              <li><GiTomato className= {`icon-period ${(period>=3) && "period-completed"}`}/></li>
              <li><GiTomato className= {`icon-period ${(period>=4) && "period-completed"}`}/></li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default Clock