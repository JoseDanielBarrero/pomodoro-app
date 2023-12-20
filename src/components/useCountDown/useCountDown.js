import React from "react";

function useCountDown () {

    const [minutesLeft, setMinutesLeft] = React.useState(0);
    const [secondsLeft, setSecondsLeft] = React.useState(0);
    const [running, setRunning] = React.useState(false);

    React.useEffect( () => { 
        if((minutesLeft == 0 && secondsLeft==0) || !running)
        {
            return;
        }
        const CountDown = setTimeout(() => {
        if(secondsLeft == 0)
        {
            setMinutesLeft(minutesLeft-1);
            setSecondsLeft(59);
        }
        else {
            setSecondsLeft(secondsLeft-1)
        }
        },1000)
        
        return () => clearTimeout(CountDown);
    },[minutesLeft, secondsLeft, running])

    const getSeconds = () =>{
        return secondsLeft.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
        })
    }

    // Also works as a STOP Clock method

    const initClock = (minutesStart) => {
        setMinutesLeft(minutesStart);
        setSecondsLeft(0);
        setRunning(false);
    }

    const pauseClock = () => {
        setRunning(!running)
    }

    const runClock = () => {
        setRunning(true);
    }


    return {
        minutesLeft,
        getSeconds,
        initClock,
        pauseClock,
        runClock
    };
}

export {useCountDown}