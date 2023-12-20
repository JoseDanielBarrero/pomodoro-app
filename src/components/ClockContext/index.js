import React from "react";
import { useCountDown } from "../useCountDown/useCountDown";

const ClockContext = React.createContext();

function ClockProvider({children}){
    
    const [period, setPeriod] = React.useState(0);
    const [totalPeriod, setTotalPeriod] = React.useState(4);
    const [focus, setFocus] = React.useState(true);
    const [focusTime, setFocusTime] = React.useState(25);
    const [restTime, setRestTime] = React.useState(5);
    
    const {
        minutesLeft,
        getSeconds,
        initClock,
        pauseClock,
        runClock
    } = useCountDown();


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
                runClock
            }}>
            {children}
        </ClockContext.Provider>
    )
}

export {ClockContext, ClockProvider}