import React from "react";
import { useCountDown } from "../useCountDown/useCountDown";

const ClockContext = React.createContext();

function ClockProvider({children}){
    
    const [period, setPeriod] = React.useState(0);
    const [totalPeriod, setTotalPeriod] = React.useState(4);
    const [focus, setFocus] = React.useState(true);
    const [focusTime, setFocusTime] = React.useState(25);
    const [restTime, setRestTime] = React.useState(5);
    const [longBreak, setLongBreak] = React.useState(15);
    
    const {
        minutesLeft,
        getSeconds,
        initClock,
        pauseClock,
        runClock,
        finish
    } = useCountDown();

    const stopClock = () => {
        initClock(focusTime);
        setFocus(true);
        setPeriod(0);
    }
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
                runClock,
                period,
                setPeriod,
                finish,
                longBreak,
                setLongBreak,
                stopClock
            }}>
            {children}
        </ClockContext.Provider>
    )
}

export {ClockContext, ClockProvider}