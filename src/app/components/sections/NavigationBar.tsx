"use client"
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const NavigationBar: React.FC = () => {
  const [path, setPath] = useState<string>("/");


  return (
    <NavBar>
      <div>
        <StyledLink href="/" onClick={() => setPath("/")} className={path === "/" ? "active" : ""}>Home</StyledLink>
        <StyledLink href="/#about" onClick={() => setPath("#about")} className={path === "#about" ? "active" : ""}>About</StyledLink>
        <StyledLink href="/#experience" onClick={() => setPath("#experience")} className={path === "#experience" ? "active" : ""}>Experience</StyledLink>
        <StyledLink href="/#projects" onClick={() => setPath("#projects")} className={path === "#projects" ? "active" : ""}>Projects</StyledLink>
        <StyledLink href="/#contact" onClick={() => setPath("#contact")} className={path === "#contact" ? "active" : ""}>Contact</StyledLink>
      </div>
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
    transition:all .3s ease;
  }
`

export default NavigationBar;