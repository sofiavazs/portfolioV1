"use client"
import React from "react";
import Link from "next/link";
import Image from 'next/image';
import styled from "styled-components";

import IconGithub from "public/assets/icon-github.svg";
import IconLinkedin from "public/assets/icon-linkedin.svg";
import IconEmail from "public/assets/icon-email.svg";

const Bio: React.FC = () => {
  return (
    <>
      <StyledHeroContainer>
        <h1>
          hello, my name is
        </h1>
        <h2>Sofia Vaz Sousa.</h2>
        <h3>I build things with code.</h3>
        <p>I’m software developer with a 12-year background in healthcare that transitioned into tech.
          Currently, I'm building human-centered products within e-health.
        </p>
        <StyledSocialsWrapper>
          <Link href="https://github.com/sofiavazs" target="_blank" rel="noopener noreferrer">
            <Image
              src={IconGithub}
              alt="Github logo"
              width={50}
              height={50}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/sofiavazsousa/" target="_blank" rel="noopener noreferrer">
            <Image
              src={IconLinkedin}
              alt="Linkedin logo"
              width={50}
              height={50}
            />
          </Link>
          <Link href="mailto:sofiavazs@protonmail.com" target="_blank" rel="noopener noreferrer">
            <Image
              src={IconEmail}
              alt="Email logo"
              width={50}
              height={50}
            />
          </Link>
        </StyledSocialsWrapper>
      </StyledHeroContainer>
    </>
  );
};
export default Bio;

const StyledHeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 9rem 5rem;
  margin-bottom: 15rem;

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

const StyledSocialsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  a {
    padding: 8px;
    cursor: pointer;
  }
`;