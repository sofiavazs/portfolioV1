"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import IconGithub from "public/assets/icon-github.svg";
import IconLinkedin from "public/assets/icon-linkedin.svg";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Content>
        <p>© {new Date().getFullYear()} Sofia Vaz Sousa</p>
        <Link
          href="https://github.com/sofiavazs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={IconGithub} alt="Github logo" width={30} height={30} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sofiavazsousa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={IconLinkedin}
            alt="Linkedin logo"
            width={30}
            height={30}
          />
        </Link>
      </Content>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(4px);
  -moz-backdrop-filter: blur(4px);
  backdrop-filter: blur(8px);
  -webkit-box-shadow: 0px 4px 10px rgba(233, 14, 200, 0.1);
  -moz-box-shadow: 0px 4px 10px rgba(233, 14, 200, 0.1);
  box-shadow: 0px 4px 10px rgba(233, 14, 200, 0.1);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-right: 8px;
  }

  a {
    :hover {
      transform: translateY(-2px);
      transition: transform 0.3s ease-in-out;
    }
  }

  img {
    margin: 0 4px;
  }
`;

export default Footer;
