"use client"
import React from "react";
import styled from "styled-components";
import experience from "../../api/experience.json";


const Experience: React.FC = () => {
  return (
    <>
      <Container>
        <h2 id="experience">
          Experience
        </h2>
        <Wrapper>
          {experience.map((job) => {
            return (
              <Card>
                <h3>{job.company}</h3>
                <p>{job.date}</p>
                <p>{job.title}</p>
                <p>{job.description}</p>
              </Card>
            )
          })}
          <div>
            <Button>View my full resume</Button>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};
export default Experience;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7rem 5rem;
  scroll-margin-top: 150px;

  h2 {
    color: #191975c9;
    font-size: 4rem;
    margin: 0;
  }
`;

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  img {
    border-radius: 6px;
    margin-left: 2rem;
  }
`;

const Card = styled.div`
  width: 65%;
  padding: 1.5rem;
  margin: 1rem;
  display: flex;
  flex-direction: column ;
  justify-content: center;
  background: rgba(255, 255, 255, 0.175);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border: 1px solid rgba(255, 255, 255, 0.51);
    h3 {
     color: #15275c;
     font-size: 2rem;
     margin: 0
    }

    p {
    color: #15275c;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-indent: 1px;

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