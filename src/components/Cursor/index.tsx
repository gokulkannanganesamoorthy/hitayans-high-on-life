import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Cursor.scss';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isLink = target.tagName.toLowerCase() === 'a' || target.closest('a');
      const isButton = target.tagName.toLowerCase() === 'button' || target.closest('button');
      const isDrag = target.hasAttribute('data-cursor-drag');
      const viewText = target.getAttribute('data-cursor-view');

      if (isLink || isButton || isDrag || viewText) {
        setIsHovered(true);
        if (viewText) setCursorText(viewText);
        else if (isDrag) setCursorText("DRAG");
        else setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      height: 12,
      width: 12,
      backgroundColor: "var(--color-accent)",
      mixBlendMode: "difference" as const
    },
    hover: {
      x: mousePosition.x - (cursorText ? 40 : 24),
      y: mousePosition.y - (cursorText ? 40 : 24),
      height: cursorText ? 80 : 48,
      width: cursorText ? 80 : 48,
      backgroundColor: cursorText ? "var(--color-accent)" : "transparent",
      border: cursorText ? "none" : "1px solid var(--color-accent)",
      mixBlendMode: "normal" as const
    }
  };

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate={isHovered ? "hover" : "default"}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
    >
      {cursorText && <span className="cursor-text">{cursorText}</span>}
    </motion.div>
  );
}
