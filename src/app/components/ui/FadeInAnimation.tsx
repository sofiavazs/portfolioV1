"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  mobileDisabled?: boolean;
}

const FadeInAnimation = ({
  children,
  direction = "right",
  mobileDisabled = false,
}: FadeInProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const directions = {
    left: { x: "-50vw", y: 0 },
    right: { x: "50vw", y: 0 },
    up: { x: 0, y: "-50vh" },
    down: { x: 0, y: "50vh" },
  };

  if (isMobile || mobileDisabled) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
