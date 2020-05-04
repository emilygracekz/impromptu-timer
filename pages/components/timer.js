import React, { useState, useEffect } from "react";
import styled from "styled-components";


const Timer = () => {
  const [seconds, setSeconds] = useState(420);
  const [isActive, setIsActive] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

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
    return `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
  }

  const fetchData = async () => {
    let data, result;
    try {
      data = await fetch("https://api.quotable.io/random");
      result = await data.json();
    } catch (err) {
      console.log(err);
    }
    return result;
  };

  const populateData = async () => {
    const result = await fetchData();
    setQuote(result.content);
    setAuthor(result.author);
  };

  useEffect(() => {
    populateData();
  }, []);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="container">
      <div className="app">
        <div className="time"> {displayTimeLeft(seconds)}</div>

        <StyledProjects>
          <div className="box">
            <p>{quote}</p>
            <p>{`- ${author}`}</p>
          </div>
        </StyledProjects>

        <ButtonStyling>
        <div className="row">
          <button
            className={`button button-primary button-primary-${
              isActive ? "active" : "inactive"
            }`}
            onClick={toggle, populateData}
          >
            {isActive ? "Pause" : "Start"}
          </button>
          <button className="button" onClick={reset}>
            Reset
          </button>
        </div>
        </ButtonStyling>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .time {
          font-size: 6rem;
          padding: 10px;
          text-align: center;
          color: var(--white);
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

const StyledProjects = styled.div`
  .box {
    text-align: center;
    background-color: #536197;
    max-width: 300px;
    border-radius: 20px;
    padding: 20px;
  }

  p {
    color: var(--white);
    font-size: 20px;
    line-height: 1.2;
  }
`;

const ButtonStyling = styled.div`
        .button {
          padding: 0.6rem 1.5rem;
          margin: 10px;
          border-radius: 30px;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 0.8rem;
        }

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

export default Timer;
