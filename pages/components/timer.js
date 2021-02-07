/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(420)
  const [isActive, setIsActive] = useState(false)

  function toggle() {
    setIsActive(!isActive)
  }

  function reset() {
    setSeconds(420)
    setIsActive(false)
  }

  function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60
    if (seconds < 0) {
      return '0:00'
    } else {
      return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
    }
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1)
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  const Container = css`
    display: flex;
    justify-content: center;
    flex-direction: column;

    .time {
      font-size: 8rem;
      padding: 10px;
      text-align: center;
      color: var(--white);
      font-weight: bold;
    }

    @media (min-width: 650px) {
      .time {
        font-size: 18rem;
        padding: 3px;
      }
    }
  `

  const Button = css`
    padding: 0.6rem 1.5rem;
    margin: 10px;
    border-radius: 30px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;

    .row {
      text-align: center;
    }

    .button:focus {
      outline-width: 0;
    }

    .button-primary:hover {
      background-color: var(--lightGray);
      border: 2px solid var(--darkGray);
    }

    .button-primary-active {
      background-color: var(--lightPink);
      border: 2px solid var(--darkPink);
      color: white;
    }

    .button-primary-inactive {
      background-color: var(--lightPink);
      border: 2px solid var(--darkPink);
      color: white;
    }
  `

  return (
    // <StyledTimer>
    <div css={Container}>
      <div className='app'>
        <div className='time'> {displayTimeLeft(seconds)}</div>
        <div className='row' css={Button}>
          <button
            className={`button button-primary button-primary-${
              isActive ? 'active' : 'inactive'
            }`}
            onClick={toggle}
          >
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button className='button' onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
    // <StyledTimer />
  )
}

export default Timer

// green: 'rgb(100,182,93)',
// purple: 'rgb(129,94,221)',
// blue: 'rgb(74,139,244)',
// red: 'rgb(229,69,60)',
// orange: 'rgb(227,140,78)',
// black: 'rgb(14, 17, 22)',
