import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

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

  return (
    <StyledProjects>
    <div className='box'>
      <p>{quote}</p>
      <p>{`- ${author}`}</p>
      <button onClick={populateData}>get random quote</button>
      </div>
    </StyledProjects>
  );
}

export default Quote;

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
    
    `
