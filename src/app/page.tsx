"use client";
import styled from "styled-components";

import Bio from "./components/Bio";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <>
      <SectionWrapper>
        <Bio />
        <About />
        <Experience />
        <Projects />
      </SectionWrapper>
    </>
  );
}

const SectionWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
