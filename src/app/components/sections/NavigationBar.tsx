"use client"
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const NavigationBar: React.FC = () => {
  const [path, setPath] = useState<string>("/");

  return (
    <NavBar>
      <StyledLink href="/" onClick={() => setPath("/")} className={path === "/" ? "active" : ""}>Bio</StyledLink>
      <StyledLink href="/#about" onClick={() => setPath("#about")} className={path === "#about" ? "active" : ""}>About</StyledLink>
      <StyledLink href="/#experience" onClick={() => setPath("#experience")} className={path === "#experience" ? "active" : ""}>Experience</StyledLink>
      {/* <StyledLink href="/#projects" onClick={() => setPath("#projects")} className={path === "#projects" ? "active" : ""}>Projects</StyledLink> */}
      <StyledLink href="mailto:sofiavazs@protonmail.com" target="_blank" rel="noopener noreferrer">Contact</StyledLink>
      <StyledLink href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">Resume</StyledLink>
    </NavBar>
  );
};

const NavBar = styled.nav`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  align-items:center;
  top:0;
  background-color: rgba(255, 255, 255, 0);
    -o-backdrop-filter: blur(4px);
    -moz-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
  div {
    display:flex ;
    padding-right: 1rem;
  }
  z-index:1000;
`

const StyledLink = styled(Link)`
  display: flex;
  margin: 20px;
  flex: 0 1 calc(2% - 40px);
  text-decoration: none;
  color: #191975c9;
  border-bottom: 2px solid transparent;
  &.active {
    border-bottom: 1px solid #e90ec8;
    color: #e90ec8;
    transition:all .3s ease;
  }
  &:hover {
    color: #e90ec8;
    transition: all .3s ease;
  }

  &.resume-link {
    width: fit-content;
    padding: 10px;
    margin-right: 30px;
    border: 1px solid #e90ec8;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    color: #e90ec8;
    font-size: 1rem;
    font-family: monospace;
    box-shadow: 3px 3px 0 0 #e90ec8;

  &:hover, :active {
    box-shadow: none;
    transform: translate(4px, 4px);
  }
}
`;

export default NavigationBar;