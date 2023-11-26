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
        <Button>Check my resume!</Button>
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
    color: #e90ec8;
    font-size: 1rem;
    font-family: menlo;
    font-weight: 200;
    margin-bottom: 1rem;
  }

  h2 {
    color: #191975c9;
    font-size: 4rem;
  }

  h3 {
    color:#15275c;
    font-size: 2rem;
  }

  p {
    color: #15275c;
    max-width: 550px;
    line-height: 1.5rem;
  }
`;

const Button = styled.button`
  width: fit-content;
  height: 50px;
  border-radius: 4px;
  background: transparent;
  border: 2px solid #e90ec8;
  cursor: pointer;
  color: #e90ec8;
  font-size: 1rem;
  font-family: menlo;

  &:hover {
    outline: none;
    box-shadow: 4px 4px 0 0 #e90ec8 ;
    transform: translate(-5px, -5px);
  }
`