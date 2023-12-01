"use client"
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import featuredProjects from "../../api/featuredProjects.json";
import Section from "../Section";
import Link from "next/link";
import Image from 'next/image';
import IconGithub from "public/assets/icon-link-github.svg";
import IconExternalLink from "public/assets/icon-external-link.svg";


const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const projectsForDisplay = expanded ? featuredProjects : featuredProjects.slice(0, 6)
  return (
    <>
      <Section sectionId="projects" header="Projects">
        <p>Most of these projects are from the Technigo Web development bootcamp, professional projects are not included.</p>
        <Wrapper>
          {projectsForDisplay.map((project, i) => {
            return (
              <Card key={i}>
                <CardHeader>
                  <h1>{project.name}</h1>
                  <span>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={IconGithub}
                        alt="github link"
                        width={25}
                        height={25}
                      />
                    </Link>
                    {project.url &&
                      <Link href={project.url} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={IconExternalLink}
                          alt="external link"
                          width={25}
                          height={25}
                        />
                      </Link>
                    }
                  </span>
                </CardHeader>
                <CardBody>
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    <p>{project.description}</p>
                  </Link>
                </CardBody>
                <CardFooter>
                  <ul>
                    {project.tags.map((tag, i) => (
                      <li key={i}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            )
          })}
        </Wrapper>
        <Button type="button" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Show More"}
        </Button>
      </Section >
    </>
  );
};
export default Projects;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(30%, 1fr));
  padding-top: 2rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill,minmax(100%, 1fr));
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(auto-fill,minmax(50%, 1fr));
  }
`;

const Card = styled.div`
  display: flex;
  padding: 2rem;
  margin: 1rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.175);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border: 1px solid rgba(255, 255, 255, 0.51);

  &:hover {
    transform: translateY(-10px);
    transition: all 0.3s ease-in-out;
  }
`;

const CardHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  word-wrap: break-word;
  h1 {
    color: #15275c;
    margin: 0;
  }
  a:first-child {
    margin-right: 1rem;
  }
`;

const CardBody = styled.div`
  h4 {
    color: #15275c;
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  p {
    color: #15275c;
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
      color:#15275c;
      margin: 4px;
      padding: 4px;
      list-style: none;
      background-color: rgba(111, 159, 218, 0.3);
    }
`;

const Button = styled.button`
  width: fit-content;
  align-self: center;
  padding: 10px;
  background: transparent;
  border: 1px solid #e90ec8;
  cursor: pointer;
  border-radius: 4px;
  color: #e90ec8;
  font-size: 1rem;
  font-family: monospace;
  text-align: center;
  box-shadow: 3px 3px 0 0 #e90ec8;

  &:hover, :active {
    box-shadow: none;
    transform: translate(4px, 4px);
    transition: all .3s ease;
  }
`;