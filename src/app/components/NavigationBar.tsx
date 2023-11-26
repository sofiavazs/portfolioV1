"use client"
import Link from "next/link";
import styled from "styled-components";
import React from "react";

const NavigationBar: React.FC = () => {
  return (
    <NavBar>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/about">About</StyledLink>
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
  top:0;
`

const StyledLink = styled(Link)`
  display: flex;
  margin: 20px;
  flex: 0 1 calc(2% - 40px);
  text-decoration: none;
  color: #fff;
`

export default NavigationBar;