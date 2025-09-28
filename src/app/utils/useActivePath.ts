import { useEffect, useState } from "react";
import { useDetectScroll } from "./useDetectScroll";

export const useActivePath = (offset: number = 200) => {
  const scrollY = useDetectScroll();
  const [path, setPath] = useState("/");

  useEffect(() => {
    // Highlight the active link based on scroll position
    const sections = document.querySelectorAll("section");
    let currentPath = "/";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom >= offset) {
        const id = section.getAttribute("id");
        if (id) {
          currentPath = `#${id}`;
        }
      }
    });

    setPath(currentPath);
  }, [scrollY, offset]);

  return path;
};
