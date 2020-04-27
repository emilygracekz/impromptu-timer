import React, { useState, useEffect } from 'react';
let countdown;


const Timer = () => {
    const [counter, setCounter] = React.useState(420);
    const [isActive,  setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }
    
    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    React.useEffect(() => {
        const countdown = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(countdown);
    }, [counter]);
    
        return (
            <div className="app">
                <div>Countdown: {counter}</div>
            </div>
        );
    }

export default Timer;
