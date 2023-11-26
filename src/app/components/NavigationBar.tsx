"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { usePathname, useParams } from "next/navigation";

const NavigationBar: React.FC = () => {
  const hash = usePathname();
  // const hash = window.location.hash;
  console.log(hash)


  return (
    <NavBar>
      <StyledLink href="/" className={hash === "" ? "active" : ""}>Home</StyledLink>
      <StyledLink href="/#about" className={hash === "#about" ? "active" : ""}>About</StyledLink>
      <StyledLink href="/experience">Experience</StyledLink>
      <StyledLink href="/projects">Projects</StyledLink>
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
`

const StyledLink = styled(Link)`
  display: flex;
  margin: 20px;
  flex: 0 1 calc(2% - 40px);
  text-decoration: none;
  color: #191975c9;
  border-bottom: 2px solid transparent;
  &.active {
    border-bottom: 2px solid #e90ec8;
  }
  &:hover {
    border-bottom: 2px solid #e90ec8;
  }
`

export default NavigationBar;