"use client";

import { motion } from "framer-motion";
import React from "react";

interface TextEffectProps {
  children: string;
  per?: "word" | "char";
  preset?: "fade" | "slide" | "scale" | "blur";
  className?: string;
}

const presetVariants = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
};

export function TextEffect({
  children,
  per = "word",
  preset = "fade",
  className = "",
}: TextEffectProps) {
  const words = children.split(" ");
  const variants = presetVariants[preset];

  if (per === "char") {
    const chars = children.split("");
    return (
      <motion.div
        className={`inline-block ${className}`}
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.05,
        }}
      >
        {chars.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={variants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`inline-block ${className}`}
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.1,
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={variants}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
