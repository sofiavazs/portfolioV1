"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

const NavigationBar: React.FC = () => {
  const [path, setPath] = useState<string>("/");
  const [isBlurred, setIsBlurred] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsBlurred(window.scrollY > 50);
      // Highlight the active link based on scroll position
      const sections = document.querySelectorAll("section");
      let currentPath = "/";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          const id = section.getAttribute("id");
          if (id) {
            currentPath = `#${id}`;
          }
        }
      });
      setPath(currentPath);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavBar $isBlurred={isBlurred}>
      <StyledLink
        id="link-bio"
        href="/"
        onClick={() => setPath("/")}
        className={path === "/" ? "active" : ""}
      >
        Bio
      </StyledLink>
      <StyledLink
        id="link-about"
        href="/#about"
        onClick={() => setPath("#about")}
        className={path === "#about" ? "active" : ""}
      >
        About
      </StyledLink>
      <StyledLink
        id="link-experience"
        href="/#experience"
        onClick={() => setPath("#experience")}
        className={path === "#experience" ? "active" : ""}
      >
        Experience
      </StyledLink>
      <StyledLink
        id="link-projects"
        href="/#projects"
        onClick={() => setPath("#projects")}
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
  width: 100vw;
  height: 85px;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  align-items: center;
  top: 0;
  background-color: transparent;
  transition: all 0.5s ease-in-out;

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
