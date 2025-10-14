"use client";
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
}

const FadeInAnimation = ({ children, direction = "right" }: FadeInProps) => {
  const directions = {
    left: { x: "-50vw", y: 0 },
    right: { x: "50vw", y: 0 },
    up: { x: 0, y: "-50vh" },
    down: { x: 0, y: "50vh" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      // style={{ height: "100vh" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
