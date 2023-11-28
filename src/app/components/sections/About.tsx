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
`;