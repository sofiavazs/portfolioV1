"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import featuredProjects from "../../api/featuredProjects.json";
import Section from "../Section";
import Image from "next/image";
import IconGithub from "public/assets/icon-link-github.svg";
import IconExternalLink from "public/assets/icon-external-link.svg";

const Projects: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const projectsPerPage = 6;
  const end = projectsPerPage * page;
  const projectsForDisplay = featuredProjects.slice(0, end);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Section sectionId="projects" header="Projects">
        <Subtitle>
          Most of these projects are hobby projects or from the Technigo Web
          development bootcamp, professional projects are not included.
        </Subtitle>
        <Wrapper>
          {projectsForDisplay.map((project, i) => {
            return (
              <Card key={i}>
                <CardHeader>
                  <h1>{project.name}</h1>
                  <span>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={IconGithub}
                        alt="github link"
                        width={25}
                        height={25}
                      />
                    </Link>
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={IconExternalLink}
                          alt="external link"
                          width={25}
                          height={25}
                        />
                      </Link>
                    )}
                  </span>
                </CardHeader>
                <CardBody>
                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>{project.description}</p>
                    </Link>
                  ) : (
                    <p>{project.description}</p>
                  )}
                </CardBody>
                <CardFooter>
                  <ul>
                    {project.tags.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            );
          })}
        </Wrapper>
        {end <= featuredProjects.length && (
          <Button type="button" onClick={handleLoadMore}>
            Show More
          </Button>
        )}
      </Section>
    </>
  );
};
export default Projects;

const Subtitle = styled.p`
  margin: 0;
  padding-top: 2rem;
  text-indent: 4px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  padding: 2rem 0;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }

  @media screen and (min-width: 600px) and (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
`;

const Card = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  background: ${(props) => props.theme.card.background};
  border-radius: 16px;
  box-shadow: ${(props) => props.theme.card.boxShadow};
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border: ${(props) => props.theme.card.border};

  &:hover {
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    transition: all 0.5s ease-in-out;
  }
`;

const CardHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  word-wrap: break-word;

  h1 {
    color: ${(props) => props.theme.primaryColor};
    margin: 0 1rem 0 0;
  }

  span {
    display: flex;

    a:first-child {
      margin-right: 1rem;
    }

    :hover {
      transform: translateY(-2px);
      transition: transform 0.3s ease-in-out;
    }
  }
`;

const CardBody = styled.div`
  h4 {
    color: ${(props) => props.theme.primaryColor};
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  p {
    color: ${(props) => props.theme.primaryColor};
    font-size: 1rem;
    line-height: 1.75rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

const CardFooter = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }

  li {
    font-size: 0.75rem;
    border-radius: 6px;
    color: #15275c;
    margin: 4px;
    padding: 4px;
    list-style: none;
    background-color: rgba(111, 159, 218, 0.3);
  }
`;

const Button = styled.button`
  width: fit-content;
  align-self: center;
  padding: 1rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.button.primary.color};
  cursor: pointer;
  border-radius: 4px;
  color: ${(props) => props.theme.button.primary.color};
  font-size: 1rem;
  font-family: monospace;
  text-align: center;
  box-shadow: 3px 3px 0 0 ${(props) => props.theme.button.primary.color};

  &:hover,
  :active {
    box-shadow: none;
    transform: translate(4px, 4px);
    transition: all 0.3s ease;
  }
`;
