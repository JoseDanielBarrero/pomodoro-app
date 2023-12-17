import React from "react";
import { useCountDown } from "../useCountDown/useCountDown";

const ClockContext = React.createContext();

function ClockProvider({children}){
    
    const [period, setPeriod] = React.useState(0);
    const [focus, setFocus] = React.useState(true);
    const [focusTime, setFocusTime] = React.useState(25);
    const [restTime, setRestTime] = React.useState(5);
    
    function getSeconds(){
        return seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
        })
    }

    function startClock() {
        const timer = setTimeout(() => {

        },1000)
    }

    /* React.useEffect( () => {
        setTimeout(() => {
        if(seconds == 0)
        {
            if(minutes == 0)
            {
                setPeriod(period+1);
                if(focus)
                {
                    setMinutes(restTime);
                    setFocus(!focus);
                }
                else{
                    setMinutes(focusTime);
                    setFocus(!focus);
                }
                
            }
            else{
                setMinutes(minutes-1);
                setSeconds(59);
            }
            
        }
        else {
            setSeconds(seconds-1)
        }
        },100)
        
    }) */
    
    return(
        <ClockContext.Provider value={
            {
                period,
                setPeriod,
                focus,
                setFocus,
                focusTime,
                setFocusTime,
                restTime,
                setRestTime
            }}>
            {children}
        </ClockContext.Provider>
    )
}

export {ClockContext, ClockProvider}