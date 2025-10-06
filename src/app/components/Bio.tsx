"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { useAppData } from "../context/AppContext";
import IconGithub from "public/assets/icon-github.svg";
import IconLinkedin from "public/assets/icon-linkedin.svg";
import IconEmail from "public/assets/icon-email.svg";

const Bio: React.FC = () => {
  const { about } = useAppData();
  const { intro, upperText, title, subtitle, links } = about[0];

  if (!about[0]) return null;

  const iconsArray = [
    { keyword: "github.com", icon: IconGithub, alt: "GitHub" },
    { keyword: "linkedin.com", icon: IconLinkedin, alt: "LinkedIn" },
    { keyword: "mailto:", icon: IconEmail, alt: "Email" },
  ];

  return (
    <>
      <StyledHeroContainer>
        <h1>{upperText}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{intro}</p>
        <StyledSocialsWrapper>
          {links?.map((link) => {
            const icon = iconsArray.find((icon) => link.includes(icon.keyword));
            return (
              <Link
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon && (
                  <Image
                    src={icon.icon}
                    alt={icon.alt}
                    width={50}
                    height={50}
                  />
                )}
              </Link>
            );
          })}
        </StyledSocialsWrapper>
      </StyledHeroContainer>
    </>
  );
};
export default Bio;

const StyledHeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  min-height: 100vh;
  height: 100vh;

  h1,
  h2,
  h3 {
    margin: 0;
  }

  h1 {
    color: #e90ec8;
    font-size: 1rem;
    font-family: monospace;
    font-weight: 200;
    margin-bottom: 1rem;
  }

  h2 {
    color: #191975c9;
    font-size: 4rem;
  }

  h3 {
    color: #15275c;
    font-size: 2rem;
  }

  p {
    color: #15275c;
    max-width: 550px;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem 0 2rem;
    justify-content: flex-start;
  }
`;

const StyledSocialsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  a {
    padding: 8px;
    cursor: pointer;

    &:hover {
      transform: translateY(-10px);
      transition: all 0.3s ease-in-out;
    }
  }
`;
