"use client";
import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

import { useDetectScroll } from "../utils/useDetectScroll";
import { useActivePath } from "../utils/useActivePath";

const NavigationBar: React.FC = () => {
  const scrolled = useDetectScroll();
  const path = useActivePath(200);
  const isBlurred = scrolled > 50;

  return (
    <NavBar $isBlurred={isBlurred}>
      <StyledLink
        id="link-bio"
        href="/"
        className={path === "/" ? "active" : ""}
      >
        Bio
      </StyledLink>
      <StyledLink
        id="link-about"
        href="/#about"
        className={path === "#about" ? "active" : ""}
      >
        About
      </StyledLink>
      <StyledLink
        id="link-experience"
        href="/#experience"
        className={path === "#experience" ? "active" : ""}
      >
        Experience
      </StyledLink>
      <StyledLink
        id="link-projects"
        href="/#projects"
        className={path === "#projects" ? "active" : ""}
      >
        Projects
      </StyledLink>
      <StyledLink
        id="link-contact"
        href="mailto:sofiavazs@protonmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </StyledLink>
      <StyledLink
        href="/sofia-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        Resume
      </StyledLink>
    </NavBar>
  );
};

interface NavBarProps {
  $isBlurred: boolean;
}

const NavBar = styled.nav<NavBarProps>`
  width: 85vw;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  align-items: center;
  top: 1rem;
  background-color: transparent;
  transition: all 0.5s ease-in-out;
  margin: 0 auto;

  ${({ $isBlurred }) =>
    $isBlurred &&
    css`
      background-color: rgba(255, 255, 255, 0.3);
      -webkit-backdrop-filter: blur(4px);
      -moz-backdrop-filter: blur(4px);
      backdrop-filter: blur(8px);
      -webkit-box-shadow: 0px 4px 10px rgba(233, 14, 200, 0.1);
      -moz-box-shadow: 0px 4px 10px rgba(233, 14, 200, 0.1);
      box-shadow: 0px 4px 10px rgba(233, 14, 200, 0.1);
      border-radius: 1rem;
    `}

  div {
    display: flex;
    padding-right: 1rem;
  }
  z-index: 1000;
`;

const StyledLink = styled(Link)`
  display: flex;
  margin: 20px;
  flex: 0 1 calc(2% - 40px);
  text-decoration: none;
  color: ${(props) => props.theme.secondaryColor};
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom: 1px solid ${(props) => props.theme.tertiaryColor};
    color: ${(props) => props.theme.tertiaryColor};
    transition: all 0.3s ease;
  }

  &:hover {
    color: ${(props) => props.theme.tertiaryColor};
    transition: all 0.3s ease;
  }

  &.resume-link {
    width: fit-content;
    padding: 10px;
    margin-right: 30px;
    border: 1px solid ${(props) => props.theme.tertiaryColor};
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.tertiaryColor};
    font-size: 1rem;
    font-family: monospace;
    box-shadow: 3px 3px 0 0 ${(props) => props.theme.tertiaryColor};

    &:hover,
    :active {
      box-shadow: none;
      transform: translate(4px, 4px);
    }
  }
`;

export default NavigationBar;
