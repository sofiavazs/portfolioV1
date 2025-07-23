"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

import portrait from "./../../../../public/assets/portrait.jpg";
import Section from "../Section";

const About: React.FC = () => {
  return (
    <>
      <Section sectionId="about" header="About">
        <Wrapper>
          <div>
            <p>
              Hello! I&apos;m Sofia, a software developer with a 12-year
              background in healthcare, having worked previously as a nurse.
            </p>
            <p>
              Growing up surrounded by MS-DOS and command lines, programming has
              always been a part of my life - anything from loading my favourite
              games through MS-DOS when I was 5 years old to adding sparkly
              widgets with HTML and CSS to my blog when I was a teenager - so
              transitioning from nursing to software development was just a
              natural step for me, driven by my passion of problem-solving and
              making people&apos;s lives easier through software.
            </p>
            <p>
              This transition from healthcare allows me to seamlessly integrate
              skills honed from my previous career on my approach to software
              development and project leadership.
            </p>
            <p>On my free time, I&apos;m also an avid VR games player. :)</p>
            <p>Some of the technologies I&apos;ve been working with lately:</p>
            <ul>
              <li>Typescript</li>
              <li>Javascript (ES6+)</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Styled Components</li>
              <li>Ruby on Rails (currently learning)</li>
            </ul>
          </div>
          <picture>
            <Image src={portrait} width={300} height={300} alt="headshot" />
          </picture>
        </Wrapper>
      </Section>
    </>
  );
};
export default About;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  padding: 2rem;
  border: 1px solid white;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(4px);
  -moz-backdrop-filter: blur(4px);
  backdrop-filter: blur(8px);
  -webkit-box-shadow: 0px 4px 10px rgba(233, 14, 200, 0.1);
  -moz-box-shadow: 0px 4px 10px rgba(233, 14, 200, 0.1);
  box-shadow: 0px 4px 10px rgba(233, 14, 200, 0.1);

  img {
    border-radius: 6px;
    margin: 1.25rem 0 0 1.25rem;
    padding: 5px;
    border: 1px solid ${(props) => props.theme.tertiaryColor};
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 250px));
    gap: 0px 10px;
    padding: 1.5rem;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: square;

    li {
      font-size: 1rem;
      letter-spacing: 1.25px;
      color: ${(props) => props.theme.primaryColor};
      line-height: 2rem;
    }
  }

  div {
    width: 75%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;

    img {
      width: 200px;
      height: 200px;
    }
  }
`;
