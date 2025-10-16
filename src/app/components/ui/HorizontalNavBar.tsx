"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface HorizontalNavBarProps {
  darkColored?: boolean;
}

const HorizontalNavBar: React.FC<HorizontalNavBarProps> = ({
  darkColored = false,
}) => {
  return (
    <Container>
      <StyledLink $darkColored={darkColored} href={"/"}>
        HOME
      </StyledLink>
      <VerticalLine $darkColored={darkColored} />
    </Container>
  );
};

export default HorizontalNavBar;

const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  z-index: 1000;
`;

const StyledLink = styled(Link)<{ $darkColored?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.$darkColored ? props.theme.primaryColor : props.theme.secondaryColor};
  font-size: 0.75rem;
  font-weight: 300;
  transition: all 0.3s ease;
  text-decoration: none;
`;

const VerticalLine = styled.div<{ $darkColored?: boolean }>`
  width: 90px;
  height: 1px;
  background-color: ${(props) =>
    props.$darkColored ? props.theme.primaryColor : props.theme.secondaryColor};
`;
