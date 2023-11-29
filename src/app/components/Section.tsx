"use client"
import React from "react";
import styled from "styled-components";

interface SectionProps {
  sectionId?: string;
  header?: string;
  children?: React.ReactNode;
}


const Section: React.FC<SectionProps> = ({ sectionId, header, children }) => {
  return (
    <>
      <Container id={sectionId}>
        <h2>
          {header}
          <Divider />
        </h2>
        {children}
      </Container>
    </>

  );
};
export default Section;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  margin-bottom: 5rem;
  scroll-margin-top: 120px;
  max-height: 100vh;

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

const Divider = styled.span`
  display: block;
  height: 1px;
  background-image: linear-gradient( to right, rgba(58, 10, 146, 0.502), rgba(237, 237, 237, 0));
`;