"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import { useAppData } from "./context/AppContext";
import { PageContainer } from "./components/ui/PageContainer";
import { GrainyBackground } from "./components/ui/GrainyBackground";
import RightNavigation from "./components/ui/RightNavigation";
import FadeInAnimation from "./components/ui/FadeInAnimation";
import VerticalSidebar from "./components/ui/VerticalSidebar";

const Bio: React.FC = () => {
  const { about } = useAppData();
  const { intro, upperText, title, subtitle } = about[0];
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Check if user came from another route (not direct visit/refresh)
    const navigatedFromAnotherRoute = sessionStorage.getItem("hasNavigated");
    setShouldAnimate(!!navigatedFromAnotherRoute);

    // Mark that user has navigated within the site
    sessionStorage.setItem("hasNavigated", "true");
  }, []);

  if (!about[0]) return null;

  const content = (
    <PageContainer>
      <VerticalSidebar links={about[0]?.links} />
      <GrainyBackground />
      <Wrapper>
        <IntroSection>
          {upperText && <h1>{upperText}</h1>}
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <p>{intro}</p>
          <Link
            href="/sofia-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </Link>
        </IntroSection>
        <RightNavigation />
      </Wrapper>
    </PageContainer>
  );

  return shouldAnimate ? (
    <FadeInAnimation direction="left">{content}</FadeInAnimation>
  ) : (
    content
  );
};
export default Bio;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  max-width: 1300px;
  margin: 0 auto;
  z-index: 10;
  box-sizing: border-box;

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 2.5rem;
    align-items: center;
    gap: 0;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 5rem 2rem;
    align-items: center;
  }
`;

const IntroSection = styled.div`
  max-width: 450px;
  flex: 1;
  padding-bottom: 150px;
  color: ${(props) => props.theme.primaryColor};
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  word-break: break-word;

  h2 {
    font-size: 2.5rem;
    font-family: "Cormorant", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    margin: 0;
  }

  a {
    color: ${(props) => props.theme.primaryColor};
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 991px) {
    max-width: calc(100% - 200px);
    padding-bottom: 60px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    padding: 1.5rem 0;
    text-wrap-style: balance;

    h2 {
      font-size: 1.5rem;
    }
  }
`;
