"use client"
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
                {hasProjects &&
                  <Button onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? "View Projects" : "Close"}
                  </Button>
                }
                <hr />
                {isOpen && (
                  <CardBody>
                    <>
                      {job.projects.map((project, i) => (
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
            )
          })}
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link">
            View full resume
          </Link>
        </Wrapper>
      </Section>
    </>
  );
};
export default Experience;

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  .resume-link{
    width: fit-content;
    padding: 10px;
    margin-right: 30px;
    border: 1px solid #e90ec8;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    color: #e90ec8;
    font-size: 1rem;
    font-family: monospace;
    box-shadow: 3px 3px 0 0 #e90ec8;
    text-decoration: none;

    &:hover, :active {
      box-shadow: none;
      transform: translate(4px, 4px);
    }
  }

`;

const Card = styled.div`
  width: 65%;
  padding: 2rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.175);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border: 1px solid rgba(255, 255, 255, 0.51);

  h3 {
    color: #15275c;
    font-size: 2rem;
    margin: 0;
  }

  hr {
    width: 100%;
    border: 0;
    height: 1px;
    margin: 1rem;
    background-image: linear-gradient( to right, rgba(249, 247, 247, 0), rgba(58, 10, 146, 0.402), rgba(237, 237, 237, 0));
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
    color: #15275c;
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