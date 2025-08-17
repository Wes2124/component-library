"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface TextLoopProps {
  children: React.ReactNode[];
  className?: string;
  interval?: number;
  transition?: any;
  variants?: any;
}

export function TextLoop({
  children,
  className = "",
  interval = 2000,
  transition,
  variants,
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, interval);

    return () => clearInterval(timer);
  }, [children.length, interval]);

  const defaultVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const defaultTransition = {
    duration: 0.25,
    ease: "easeInOut",
  };

  return (
    <span className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          variants={variants || defaultVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition || defaultTransition}
          className="inline-block"
        >
          {children[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
