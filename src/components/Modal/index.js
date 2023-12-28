import React from 'react';
import { ClockContext } from '../ClockContext';
import "./modal.css";

function Modal(param) {

    const {
        saveParams,
        getInitValues
    } = React.useContext(ClockContext);
    
    const [totalPeriod, setTotalPeriod] = React.useState(getInitValues().totalPeriod);
    const [focusTime, setFocusTime] = React.useState(getInitValues().focusTime);
    const [restTime, setRestTime] = React.useState(getInitValues().restTime);
    const [longBreak, setLongBreak] = React.useState(getInitValues().longBreak);

    const saveNewparams = () => {
        const newValues = {
            totalPeriod: Number(totalPeriod) ,
            focusTime: Number(focusTime),
            restTime: Number(restTime),
            longBreak: Number(longBreak)
        }
        saveParams(newValues)
    }

  return (
      <div className='modal-settings-background' onClick={() => {
        param.setOpenModal(false)
      }
      }>
        <div className='modal-settings' onClick={(e) => {
            e.stopPropagation()
        }}>
            <div className='modal-settings-item'>
                <span>Focus Time:</span>
                <input type="number" value={focusTime} onChange={(e) => {
                    setFocusTime(e.target.value)
                }}></input><span>min.</span> 
            </div>
            <div className='modal-settings-item'>
                <span>Rest Time:</span>
                <input type="number" value={restTime} onChange={(e) => {
                    setRestTime(e.target.value)
                }}></input><span>min.</span> 
            </div>
            <div className='modal-settings-item'>
                <span>Long Break:</span>
                <input type="number" value={longBreak} onChange={(e) => {
                    setLongBreak(e.target.value)
                }}></input><span>min.</span> 
            </div>
            {/* <div className='modal-settings-item'>
                <span># of periods:</span>
                <input type="number" value={totalPeriod} onChange={(e) => {
                    setTotalPeriod(e.target.value)
                }}></input><span>times.</span> 
            </div> */}
            <div className='modal-settings-item'>
                <div className='modal-settings-button modal-settings-button__accept' onClick={() => {
                    saveNewparams();
                    param.setOpenModal(false)
                }}>Accept</div>
                <div className='modal-settings-button modal-settings-button__cancel'
                onClick={() => {
                    param.setOpenModal(false)
                }}>Cancel</div>
            </div>
        </div>
      </div>
    
  )
}

export default Modal