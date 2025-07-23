"use client";
import React, { useState } from "react";
import styled from "styled-components";
import experience from "../../api/experience.json";
import Section from "../Section";
import Link from "next/link";

const Experience: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Section sectionId="experience" header="Experience">
        <Wrapper>
          {experience.map((job, i) => {
            const hasProjects = job.projects.length > 0;
            return (
              <Card key={i}>
                <CardHeader>
                  <h3>{job.company}</h3>
                  <p className="subheading">{job.date}</p>
                  <p className="subheading">{job.title}</p>
                  <p>{job.description}</p>
                </CardHeader>
                {hasProjects && (
                  <Button onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? "View Projects" : "Close"}
                  </Button>
                )}
                <hr />
                {isOpen && (
                  <CardBody>
                    <>
                      {job.projects?.map((project, i) => (
                        <div key={i}>
                          <h4>{project.name}</h4>
                          <p className="project-subheader">{project.dates}</p>
                          <p className="project-subheader">{project.title}</p>
                          <p>{project.description}</p>
                        </div>
                      ))}
                    </>
                  </CardBody>
                )}
              </Card>
            );
          })}
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            View full resume
          </Link>
        </Wrapper>
      </Section>
    </>
  );
};
export default Experience;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  row-gap: 1.5rem;

  .resume-link {
    width: fit-content;
    padding: 1rem;
    margin-top: 6px;
    border: 1px solid ${(props) => props.theme.tertiaryColor};
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.tertiaryColor};
    font-size: 1rem;
    font-family: monospace;
    box-shadow: 3px 3px 0 0 ${(props) => props.theme.tertiaryColor};
    text-decoration: none;

    &:hover,
    :active {
      box-shadow: none;
      transform: translate(4px, 4px);
    }
  }
`;

const Card = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.card.background};
  border-radius: 16px;
  box-shadow: ${(props) => props.theme.card.boxShadow};
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border: ${(props) => props.theme.card.border};

  h3 {
    color: ${(props) => props.theme.primaryColor};
    font-size: 2rem;
    margin: 0;
  }

  hr {
    width: 100%;
    border: 0;
    height: 1px;
    margin: 1rem;
    background-image: linear-gradient(
      to right,
      rgba(249, 247, 247, 0),
      rgba(58, 10, 146, 0.402),
      rgba(237, 237, 237, 0)
    );
  }

  button {
    align-self: flex-end;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;

  p {
    color: ${(props) => props.theme.primaryColor};
    font-size: 1rem;
    line-height: 1.75rem;
  }

  .subheading {
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 1.5rem;
    text-indent: 4px;
    letter-spacing: 1.5px;
    margin: 0;

    @media (max-width: 768px) {
      h3 {
        font-size: 2rem;
      }
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
  }

  .project-subheader {
    color: #15275c;
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 1.75rem;
    letter-spacing: 1.5px;
    margin: 0;
  }
`;

const Button = styled.button`
  width: fit-content;
  padding: 10px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.tertiaryColor};
  cursor: pointer;
  border-radius: 4px;
  color: ${(props) => props.theme.tertiaryColor};
  font-size: 1rem;
  font-family: monospace;
  text-align: center;
  box-shadow: 3px 3px 0 0 ${(props) => props.theme.tertiaryColor};

  &:hover,
  :active {
    box-shadow: none;
    transform: translate(4px, 4px);
    transition: all 0.3s ease;
  }
`;
