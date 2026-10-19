"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%" | "auto";
  xOffset?: number;
  yOffset?: number;
  scale?: number;
  blur?: number;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  width = "100%",
  xOffset = 0,
  yOffset = 50,
  scale = 1,
  blur = 0,
  duration = 0.8,
  delay = 0,
  className = "",
  once = true
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      style={{ width, willChange: "transform, opacity, filter" }}
      variants={{
        hidden: {
          opacity: 0,
          x: xOffset,
          y: yOffset,
          scale: scale,
          filter: blur > 0 ? `blur(${blur}px)` : "none"
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)"
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Premium quint-out ease
      }}
    >
      {children}
    </motion.div>
  );
}
