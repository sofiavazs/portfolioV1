"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";

import { useDetectScroll } from "@/app/utils/useDetectScroll";
import IconGithub from "public/assets/icon-github.png";
import IconLinkedin from "public/assets/icon-linkedin.png";
import IconEmail from "public/assets/icon-email.png";

interface SocialSidebarProps {
  links?: string[];
}

const VerticalSidebar: React.FC<SocialSidebarProps> = ({ links }) => {
  const scrolled = useDetectScroll();
  const iconsArray = [
    { keyword: "github.com", icon: IconGithub, alt: "GitHub" },
    { keyword: "linkedin.com", icon: IconLinkedin, alt: "LinkedIn" },
    { keyword: "mailto:", icon: IconEmail, alt: "Email" },
  ];

  return (
    <SidebarContainer $isBlurred={scrolled > 0}>
      <SocialLinks>
        {links?.map((link) => {
          const icon = iconsArray.find((icon) => link.includes(icon.keyword));
          return (
            <StyledLink
              key={link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon && (
                <Image src={icon.icon} alt={icon.alt} width={25} height={25} />
              )}
            </StyledLink>
          );
        })}

        <VerticalLine />
      </SocialLinks>
      <Copyright>© {new Date().getFullYear()}</Copyright>
    </SidebarContainer>
  );
};

export default VerticalSidebar;

const SidebarContainer = styled.div<{ $isBlurred: boolean }>`
  position: fixed;
  left: 2rem;
  top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 1000;

  @media (max-width: 767px) {
    top: 2rem;
    flex-direction: row;

    ${({ $isBlurred }) =>
      $isBlurred &&
      css`
        padding: 1rem;
        background-color: rgba(255, 255, 255, 0.3);
        -webkit-backdrop-filter: blur(4px);
        -moz-backdrop-filter: blur(4px);
        backdrop-filter: blur(8px);
        -webkit-box-shadow: px 4px 10px rgba(157, 147, 156, 0.1);
        -moz-box-shadow: px 4px 10px rgba(157, 147, 156, 0.1);
        box-shadow: 0px 4px 10px rgba(157, 147, 156, 0.1);
        border-radius: 1rem;
      `}
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 767px) {
    flex-direction: row;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.primaryColor};
  font-size: 0.75rem;
  font-weight: 300;
  transition: all 0.3s ease;
  writing-mode: sideways-lr;
  text-orientation: mixed;
  letter-spacing: 0.1em;
  text-decoration: none;
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 90px;
  background-color: ${(props) => props.theme.primaryColor};

  @media (max-width: 767px) {
    width: 65px;
    height: 1px;
  }
`;

const Copyright = styled.div`
  color: ${(props) => props.theme.primaryColor};
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
  font-weight: 300;
  opacity: 0.7;
  writing-mode: sideways-lr;
  text-orientation: mixed;
  letter-spacing: 0.1em;
  pointer-events: none;

  @media (max-width: 767px) {
    display: none;
  }
`;
