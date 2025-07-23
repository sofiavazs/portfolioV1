"use client";
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

  h2 {
    color: ${(props) => props.theme.secondaryColor};
    font-size: 4rem;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 3.5rem;
    }
  }

  p {
    color: ${(props) => props.theme.primaryColor};
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const Divider = styled.span`
  display: block;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(58, 10, 146, 0.502),
    rgba(237, 237, 237, 0)
  );
`;
