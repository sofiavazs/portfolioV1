import styled from "styled-components";

export const GrainyBackground = styled.div`
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 20% 50%,
      rgba(139, 90, 90, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(212, 165, 116, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 20%,
      rgba(74, 44, 42, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 60% 70%,
      rgba(107, 68, 68, 0.3) 0%,
      transparent 50%
    );

  /* Base gradient background */
  /* background: linear-gradient(
    135deg,
    #2c1810 0%,
    #4a2c2a 25%,
    #6b4444 50%,
    #8b5a5a 75%,
    #d4a574 100%
  ); */
`;
