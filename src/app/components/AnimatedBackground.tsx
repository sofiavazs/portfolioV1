"use client";
import styled, { keyframes } from "styled-components";

// Animation
const moveAndWobbleAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 1px) rotate(0deg) scale(1);
  }
  50% {
    transform: translate3d(0, 0, 1px) rotate(180deg) scale(1.05);
  }
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg) scale(1);
  }
`;

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: radial-gradient(at right center, #96bae0, #fde4fdb4);
  background-blend-mode:
    screen, screen, lighten, overlay, lighten, difference, normal;
  overflow: hidden;
  z-index: -1;
`;

const Ball = styled.span`
  position: absolute;
  width: 200px;
  height: 200px;
  backface-visibility: hidden;
  animation: ${moveAndWobbleAnimation} 60s linear infinite;
  background-color: transparent;
  filter: blur(2px);
  opacity: 0.7;

  box-shadow:
    inset -10px -10px 30px rgba(255, 255, 255, 0.4),
    inset 10px 10px 20px rgba(255, 255, 255, 0.1),
    0 0 20px 10px rgba(255, 255, 255, 0.25),
    0 10px 30px rgba(0, 0, 0, 0.1);
`;

const floatingBalls = [
  {
    top: "10%",
    left: "80%",
    duration: "30s",
    delay: "-3s",
    origin: "10vw 0vh",
    color:
      "radial-gradient(circle at 30% 30%,rgba(255, 192, 203, 0.9),rgba(155, 89, 182, 0.4) 70%,rgba(108, 52, 131, 0.3) 100%)",
  },
  {
    top: "50%",
    left: "10%",
    duration: "45s",
    delay: "-10s",
    origin: "5vw 0vh",
    color:
      "radial-gradient(circle at 30% 30%, rgba(173, 216, 230, 0.9), rgba(100, 149, 237, 0.4) 70%, rgba(70, 130, 180, 0.3) 100%)",
  },
  {
    top: "70%",
    left: "60%",
    duration: "40s",
    delay: "-5s",
    origin: "15vw 10vh",
    color:
      "radial-gradient(circle at 30% 30%, rgba(144, 238, 144, 0.9), rgba(60, 179, 113, 0.4) 70%, rgba(46, 139, 87, 0.3) 100%)",
  },
  {
    top: "10%",
    left: "30%",
    duration: "50s",
    delay: "-2s",
    origin: "10vw 5vh",
    color:
      "radial-gradient(circle at 30% 30%, rgba(248, 213, 86, 0.95), rgba(247, 184, 37, 0.7) 70%, rgba(199, 134, 5, 0.5) 100%)",
  },
];

const AnimatedBackground = () => {
  return (
    <Background>
      {floatingBalls.map((ball, index) => (
        <Ball
          key={index}
          style={{
            top: ball.top,
            left: ball.left,
            animationDuration: ball.duration,
            animationDelay: ball.delay,
            transformOrigin: ball.origin,
            borderRadius: "50%",
            background: ball.color,
          }}
        />
      ))}
    </Background>
  );
};

export default AnimatedBackground;
