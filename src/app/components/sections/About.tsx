"use client"
import React from "react";
import styled from "styled-components";
import Image from 'next/image'
import portrait from "./../../../../public/assets/portrait.jpg";


const About: React.FC = () => {
  return (
    <>
      <Container id="about">
        <h2>
          About me
        </h2>
        <Wrapper>
          <div>
            <p>
              Hello!
              I'm Sofia, a software developer with a 12-year background in healthcare, having worked previously as a nurse.
            </p>
            <p>
              Growing up surrounded by MS-DOS and command lines, programming has always been a part of my life - anything from loading my favourite games through MS-DOS when I was 5 years old
              to adding sparkly widgets with HTML and CSS to my blog when I was a teenager -
              so transitioning from nursing to software development was just a natural step for me, driven by my passion of problem-solving and making people’s lives easier through software.
            </p>
            <p>This transition from healthcare allows me to seamlessly integrate skills honed from my previous career on my approach to software development and project leadership.</p>
            <p>On my free time, I'm also an avid VR games player. :)</p>
            <p>Some of the technologies I've been working with lately:</p>
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
            <Image
              src={portrait}
              width={300}
              height={300}
              alt="headshot" />
          </picture>
        </Wrapper>
      </Container>
    </>

  );
};
export default About;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  margin-bottom: 15rem;
  scroll-margin-top: 120px;

  h2 {
    color: #191975c9;
    font-size: 4rem;
    margin: 0;
  }

  p {
    color: #15275c;
    max-width: 550px;
    line-height: 1.5rem;
  }
`;

const Wrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;

  img {
    border-radius: 6px;
    margin-left: 2rem;
    padding: 5px;
    border: 1px solid #e90ec8;
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
      line-spacing: 1.25px;
      color: #15275c;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;