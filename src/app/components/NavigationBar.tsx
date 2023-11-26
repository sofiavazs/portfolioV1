"use client"
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

const NavigationBar: React.FC = () => {
  const path = usePathname();
  console.log(path)
  return (
    <NavBar>
      <StyledLink href="/" className={path === "/" ? "active" : ""}>Home</StyledLink>
      <StyledLink href="/about" className={path === "/about" ? "active" : ""}>About</StyledLink>
      <StyledLink href="/experience">Experience</StyledLink>
      <StyledLink href="/projects">Projects</StyledLink>
    </NavBar>
  );
};

const NavBar = styled.nav`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  align-items:center;
  top:0;
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