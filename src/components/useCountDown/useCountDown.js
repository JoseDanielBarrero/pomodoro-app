import React from "react";

function useCountDown () {

    const [minutesLeft, setMinutesLeft] = React.useState(0);
    const [secondsLeft, setSecondsLeft] = React.useState(0);

    React.useEffect( () => {
        if(minutesLeft == 0 && secondsLeft==0)
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
    },[minutesLeft, secondsLeft])

    const getSeconds = () =>{
        return secondsLeft.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
        })
    }

    const startClock = (minutesStart) => {
        setMinutesLeft(minutesStart);
    }

    const pauseClock = () => {
        /* clearTimeout(CountDown); */
    }

    const unpauseClock = () => {
        /* clearTimeout(CountDown); */
    }
    const stopClock = () => {
        setMinutesLeft();
        /* clearTimeout(CountDown); */
    }

    return {
        minutesLeft,
        getSeconds,
        startClock,
        pauseClock,
        unpauseClock,
        stopClock
    };
}

export {useCountDown}