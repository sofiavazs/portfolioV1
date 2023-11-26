"use client"
import React from "react";
import styled from "styled-components";

const Bio: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <h1>
          hello, my name is
        </h1>
        <h2>Sofia Vaz Sousa.</h2>
        <h3>I build things with code.</h3>
        <p>I’m software developer with a 12-year background in healthcare that transitioned into tech.
          Currently, I'm building human-centered products within e-health.
        </p>
        <Button>Resume</Button>
      </HeroContainer>
    </>
  );
};
export default Bio;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  margin-bottom: 3rem;

  h1,h2,h3 {
    margin:0;
  }

  h1 {
    color: #3ef3bb;
    font-size: 1rem;
    font-family: menlo;
    font-weight: 200;
    margin-bottom: 1rem;
  }

  h2 {
    color: #ccd6f6;
    font-size: 4rem;
  }

  h3 {
    color: #8892b0;
    font-size: 2rem;
  }

  p {
    color: #8892b0;
    max-width: 550px;
    line-height: 1.5rem;
  }
`;

const Button = styled.button`
width: 100px;
`;