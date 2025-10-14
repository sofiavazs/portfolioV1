"use client";
import styled, { keyframes } from "styled-components";

// Pulse animation
const pulsatingAnimation = keyframes`
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.7;
  }
`;

// Morphing shape animation
const morphAnimation = keyframes`
  0% {
    border-radius: 50% 45% 55% 40%;
  }
  25% {
    border-radius: 45% 55% 50% 45%;
  }
  50% {
    border-radius: 55% 40% 45% 55%;
  }
  75% {
    border-radius: 40% 55% 50% 45%;
  }
  100% {
    border-radius: 50% 45% 55% 40%;
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -20px) scale(1.05);
  }
  66% {
    transform: translate(-20px, 30px) scale(0.98);
  }
`;

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background:
    radial-gradient(
      circle at 20% 80%,
      rgba(255, 0, 150, 0.15),
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(0, 255, 255, 0.12),
      transparent 50%
    ),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 0, 0.1), transparent 50%),
    linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 50%, #0a1a1a 100%);
  overflow: hidden;
  z-index: -1;
`;

const GradientBlob = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(30px);
  animation:
    ${pulsatingAnimation} 6s ease-in-out infinite,
    ${morphAnimation} 6s ease-in-out infinite,
    ${floatAnimation} 6s ease-in-out infinite;
  mix-blend-mode: screen;
`;

const gradientBlobs = [
  {
    top: "10%",
    left: "-10%",
    gradient:
      "radial-gradient(circle at 30% 30%, rgba(255, 0, 150, 0.8), rgba(255, 105, 180, 0.6) 70%, rgba(199, 21, 133, 0.3) 100%)",
  },
  {
    top: "55%",
    left: "70%",
    gradient:
      "radial-gradient(circle at 70% 70%, rgba(0, 255, 255, 0.7), rgba(0, 191, 255, 0.5) 70%, rgba(30, 144, 255, 0.3) 100%)",
  },
  {
    top: "80%",
    left: "20%",
    gradient:
      "radial-gradient(circle at 50% 50%, rgba(255, 255, 0, 0.6), rgba(255, 215, 0, 0.4) 70%, rgba(255, 140, 0, 0.2) 100%)",
  },
  {
    top: "-15%",
    left: "40%",
    gradient:
      "radial-gradient(circle at 50% 50%, rgba(120, 255, 147, 0.5), rgba(0, 191, 255, 0.3) 70%, rgba(30, 144, 255, 0.2) 100%)",
  },
];

const AnimatedBackground = () => {
  return (
    <Background>
      {gradientBlobs.map((blob, index) => (
        <GradientBlob
          key={index}
          style={{
            top: blob.top,
            left: blob.left,
            background: blob.gradient,
          }}
        />
      ))}
    </Background>
  );
};

export default AnimatedBackground;
