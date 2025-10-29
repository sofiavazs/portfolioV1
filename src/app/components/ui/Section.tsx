"use client";
import React from "react";
import styled, { css } from "styled-components";

interface SectionProps {
  sectionId?: string;
  header?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({
  sectionId,
  header,
  children,
  fullWidth,
}) => {
  return (
    <>
      <Container id={sectionId} $fullWidth={fullWidth}>
        <h2>{header}</h2>
        {children}
      </Container>
    </>
  );
};
export default Section;

const Container = styled.section<{ $fullWidth?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 1400px;
  margin: 0 auto;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      max-width: 100%;
    `}

  h2 {
    font-size: 8rem;
    font-family: "Antic Didone", sans-serif;
    font-weight: 400;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 3.5rem;
    }
  }

  p {
    line-height: 1.5rem;
  }
`;
