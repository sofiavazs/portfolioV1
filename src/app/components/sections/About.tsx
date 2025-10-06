"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { PortableText } from "@portabletext/react";

import { useAppData } from "@/app/context/AppContext";
import { urlFor } from "@/app/utils/imageUrlBuilder";
import portrait from "./../../../../public/assets/portrait.jpg";
import Section from "../Section";

const About: React.FC = () => {
  const { about } = useAppData();
  const { tech, picture } = about[0];

  if (!about[0]) return null;

  return (
    <>
      <Section sectionId="about" header="About">
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
    </>
  );
};
export default About;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  padding: 2rem;
  border: 1px solid white;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(4px);
  -moz-backdrop-filter: blur(4px);
  backdrop-filter: blur(8px);
  -webkit-box-shadow: 0px 4px 10px rgba(233, 14, 200, 0.1);
  -moz-box-shadow: 0px 4px 10px rgba(233, 14, 200, 0.1);
  box-shadow: 0px 4px 10px rgba(233, 14, 200, 0.1);

  img {
    border-radius: 6px;
    margin: 1.25rem 0 0 1.25rem;
    padding: 5px;
    border: 1px solid ${(props) => props.theme.tertiaryColor};
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 250px));
    gap: 0px 10px;
    padding: 1.5rem;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: square;

    li {
      font-size: 1rem;
      letter-spacing: 1.25px;
      color: ${(props) => props.theme.primaryColor};
      line-height: 2rem;
    }
  }

  div {
    width: 75%;

    @media (max-width: 768px) {
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
