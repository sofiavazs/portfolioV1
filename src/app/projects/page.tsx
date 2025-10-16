"use client";
import React from "react";
import { useState } from "react";
import { useAppData } from "@/app/context/AppContext";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import IconGithub from "public/assets/icon-link-github.png";
import IconExternalLink from "public/assets/icon-external-link.png";
import Section from "../components/ui/Section";
import { PageContainer } from "../components/ui/PageContainer";
import FadeInAnimation from "../components/ui/FadeInAnimation";
import HorizontalNavBar from "../components/ui/HorizontalNavBar";

const ProjectPage: React.FC = () => {
  const { projects } = useAppData();
  const [page, setPage] = useState<number>(1);

  const projectsPerPage = 6;
  const end = projectsPerPage * page;
  const projectsForDisplay = projects?.slice(0, end);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <FadeInAnimation>
      <HorizontalNavBar />
      <StyledPageContainer>
        <Section header="Projects">
          <Subtitle>
            Most of these projects are hobby projects or from the Technigo Web
            development bootcamp, professional projects are not included.
          </Subtitle>
          <Wrapper>
            {projectsForDisplay?.map((project, i) => {
              return (
                <Card key={i}>
                  <CardHeader>
                    <h1>{project.name}</h1>
                    <span>
                      {project.github && (
                        <Link
                          href={project?.github}
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
                      )}
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
                      {project.tags?.map((tag, i) => (
                        <li key={i}>{tag}</li>
                      ))}
                    </ul>
                  </CardFooter>
                </Card>
              );
            })}
          </Wrapper>
          {end <= projects?.length && (
            <Button type="button" onClick={handleLoadMore}>
              Show More
            </Button>
          )}
        </Section>
      </StyledPageContainer>
    </FadeInAnimation>
  );
};
export default ProjectPage;

const StyledPageContainer = styled(PageContainer)`
  background-color: #260413;
  color: ${(props) => props.theme.secondaryColor};
  justify-content: center;
  padding: 5rem 5rem 5rem 5rem;

  @media (max-width: 767px) {
    padding: 5rem 2rem;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  padding-top: 2rem;
  text-indent: 4px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
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
  background: #38061b;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.primaryColor};
`;

const CardHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  word-wrap: break-word;

  h1 {
    color: ${(props) => props.theme.secondaryColor};
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
    color: ${(props) => props.theme.secondaryColor};
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  p {
    color: ${(props) => props.theme.secondaryColor};
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
    color: ${(props) => props.theme.secondaryColor};
    margin: 4px;
    padding: 4px;
    list-style: none;
    background-color: #d5cdc469;
  }
`;

const Button = styled.button`
  width: fit-content;
  align-self: center;
  color: ${(props) => props.theme.secondaryColor};
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  text-align: center;
  text-decoration: underline;
  border: none;
  background-color: transparent;
`;
