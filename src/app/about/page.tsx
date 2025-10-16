"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { PortableText } from "@portabletext/react";

import { useAppData } from "@/app/context/AppContext";
import { urlFor } from "@/app/utils/imageUrlBuilder";
import portrait from "@/../public/assets/portrait.jpg";
import { PageContainer } from "../components/ui/PageContainer";
import Section from "../components/ui/Section";
import FadeInAnimation from "../components/ui/FadeInAnimation";
import HorizontalNavBar from "../components/ui/HorizontalNavBar";

const About: React.FC = () => {
  const { about } = useAppData();
  const { tech, picture } = about[0];

  if (!about[0]) return null;

  return (
    <>
      <FadeInAnimation>
        <HorizontalNavBar />
        <StyledPageContainer>
          <Section header="About">
            <Wrapper>
              <div>
                <PortableText value={about[0]?.about} />
                <ul>
                  {tech?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <picture>
                {picture && (
                  <Image
                    src={urlFor(picture).url() || portrait}
                    width={300}
                    height={300}
                    alt="headshot"
                  />
                )}
              </picture>
            </Wrapper>
          </Section>
        </StyledPageContainer>
      </FadeInAnimation>
    </>
  );
};
export default About;

const StyledPageContainer = styled(PageContainer)`
  height: 100vh;
  background-color: #260413;
  color: ${(props) => props.theme.secondaryColor};
  padding: 5rem 5rem 0rem 5rem;

  @media (max-width: 767px) {
    height: auto;
    padding: 5rem 2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  box-sizing: border-box;

  img {
    border-radius: 6px;
    margin: 1.25rem 0 0 1.25rem;
    padding: 5px;
    border: 1px solid ${(props) => props.theme.secondaryColor};
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 100vw));
    gap: 0px 10px;
    padding: 1rem;
    overflow: hidden;

    li {
      font-size: 1rem;
      letter-spacing: 1.25px;
      color: ${(props) => props.theme.secondaryColor};
      line-height: 2rem;
    }
  }

  div {
    width: 75%;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;

    img {
      width: 200px;
      height: 200px;
    }
  }
`;
