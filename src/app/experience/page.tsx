"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { useAppData } from "@/app/context/AppContext";
import FadeInAnimation from "../components/ui/FadeInAnimation";
import HorizontalNavBar from "../components/ui/HorizontalNavBar";
import Section from "../components/ui/Section";
import { PageContainer } from "../components/ui/PageContainer";

const ExperiencePage: React.FC = () => {
  const { experience } = useAppData();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <FadeInAnimation>
      <HorizontalNavBar darkColored />
      <StyledPageContainer>
        <Section sectionId="experience" header="Experience">
          <Wrapper>
            {experience?.map((job, i) => {
              const hasProjects = !!job.projects?.length;
              return (
                <Card key={i}>
                  <CardHeader>
                    <h3>{job.company}</h3>
                    <p className="subheading">{job.dates}</p>
                    <p className="subheading">{job.jobTitle}</p>
                    <p>{job.description}</p>
                  </CardHeader>
                  {hasProjects && (
                    <Button onClick={() => setIsOpen(!isOpen)}>
                      {!isOpen ? "VIEW PROJECTS" : "CLOSE"}
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
                            <p className="project-subheader">{project.role}</p>
                            <p>{project.description}</p>
                          </div>
                        ))}
                      </>
                    </CardBody>
                  )}
                </Card>
              );
            })}
          </Wrapper>
        </Section>
      </StyledPageContainer>
    </FadeInAnimation>
  );
};
export default ExperiencePage;

const StyledPageContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  height: 100%;
  padding: 5rem 2rem;
`;

const Wrapper = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  row-gap: 1.5rem;
  margin: 0 auto;
`;

const Card = styled.div`
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
      rgba(168, 11, 106, 0.402),
      rgba(237, 237, 237, 0)
    );
  }

  button {
    align-self: flex-end;
  }

  @media (min-width: 992px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    padding: 1.5rem;
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

    @media (max-width: 767px) {
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
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.primaryColor};
  font-size: 1rem;
  text-align: center;
  text-decoration: underline;
`;
