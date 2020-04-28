import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(420);
    const [isActive,  setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(420);
        setIsActive(false);
    }

    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
         interval = setInterval(() => {
             setSeconds(seconds => seconds - 1);
         }, 1000);
         
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);
    

        return (
            <div className="container">
            <div className="app">
                <div className='time'> {displayTimeLeft(seconds)}</div>

                <div className="row">
                    <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                    </button>
                    <button className="button" onClick={reset}>Reset
                    </button>
                </div>
            </div>
        

<style jsx>{`
.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.time {
  font-size: 7rem;
  padding: 2rem;
  text-align: center;
  color: #f0f6f7;
  font-weight: bold;
}

.button {
  padding: .6rem 1.5rem;
  margin: .4rem;
  border-radius: 30px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: .8rem;
  
}

.row {
    text-align: center;
}

.button:focus {
  outline-width: 0;
}

.button-primary:hover {
  background-color: #d3d4d7;
  border: 2px solid #86817c;
}

.button-primary-active {
  background-color: #fc9292;
  border: 2px solid #e06c77;
  color: white;
}

.button-primary-inactive {
  background-color: #fc9292;
  border: 2px solid #e06c77;
  color: white;
}
`}</style>
</div>
);
};


export default Timer;
