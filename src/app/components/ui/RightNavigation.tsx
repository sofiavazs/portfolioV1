"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

const RightNavigation: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <NavLinks $isHomePage={isHomePage}>
      {isHomePage ? (
        <>
          <BigNavLink href="/about">
            <span>01</span> About
          </BigNavLink>
          <BigNavLink href="/experience">
            <span>02</span> Experience
          </BigNavLink>
          <BigNavLink href="/projects">
            <span>03</span> Projects
          </BigNavLink>
          <BigNavLink
            href="mailto:sofiavazs@protonmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact"
          >
            <span>04</span> Contact
          </BigNavLink>
        </>
      ) : (
        <>
          <NavLink href="/" className="home-link">
            Home
          </NavLink>
        </>
      )}
    </NavLinks>
  );
};

const NavLinks = styled.div<{ $isHomePage: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  text-transform: uppercase;
  padding-bottom: 150px;

  @media (max-width: 991px) {
    width: calc(100vw - 275px);
    text-align: left;
  }

  @media (max-width: 767px) {
    width: 100%;
    gap: 1.5rem;
    padding-top: 2rem;
  }
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.primaryColor};
  text-decoration: none;
  font-family: "Cormorant", sans-serif;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;

  &.contact {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  &.home-link {
    font-size: 1rem;
    writing-mode: sideways-lr;
    text-orientation: mixed;
    padding: 1rem 0;
  }
`;

const BigNavLink = styled(Link)`
  color: ${(props) => props.theme.primaryColor};
  text-decoration: none;
  font-family: "Antic Didone", sans-serif;
  font-size: 7.5rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  line-height: 1.1;
  border-bottom: 1px solid transparent;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${(props) => props.theme.primaryColor};
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }

  span {
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
  }

  @media (max-width: 991px) {
    font-size: 5rem;
  }

  @media (max-width: 767px) {
    max-width: 100vw;
    font-size: 3rem;
  }
`;

export default RightNavigation;
