import React from "react";
import { useCountDown } from "../useCountDown/useCountDown";

const ClockContext = React.createContext();

function ClockProvider({children}){
    
    const [period, setPeriod] = React.useState(0);
    const [focus, setFocus] = React.useState(true);
    const [totalPeriod, setTotalPeriod] = React.useState(4);
    const [focusTime, setFocusTime] = React.useState(25);
    const [restTime, setRestTime] = React.useState(5);
    const [longBreak, setLongBreak] = React.useState(20);

    React.useEffect(() => {
        getInitValues();
    }, []);

    const defaulValues = {
        totalPeriod: 4,
        focusTime: 25,
        restTime: 5,
        longBreak: 20
    }
    const getInitValues = () => {
        const localStorageParams = localStorage.getItem("Pomodoro-params");
        if(!localStorageParams)
        {
            localStorage.setItem("Pomodoro-params", JSON.stringify(defaulValues))
            return defaulValues;
        }
        else {
            let parsedParams = JSON.parse(localStorage.getItem("Pomodoro-params"));
            saveParams(parsedParams);
            return parsedParams;
        }
    }


    
    const saveParams = (parsedParams) => {
        setTotalPeriod(parsedParams.totalPeriod)
        setFocusTime(parsedParams.focusTime)
        setRestTime(parsedParams.restTime)
        setLongBreak(parsedParams.longBreak)
        localStorage.setItem("Pomodoro-params", JSON.stringify(parsedParams))
    }
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
                stopClock,
                saveParams,
                getInitValues
            }}>
            {children}
        </ClockContext.Provider>
    )
}

export {ClockContext, ClockProvider}