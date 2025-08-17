"use client";

import { motion } from "framer-motion";
import React from "react";

interface TextShimmerProps {
  children: string;
  duration?: number;
  className?: string;
}

export function TextShimmer({
  children,
  duration = 2,
  className = "",
}: TextShimmerProps) {
  return (
    <motion.div
      className={`inline-block overflow-hidden ${className}`}
      initial={{ backgroundPosition: "-200% 0" }}
      animate={{ backgroundPosition: "200% 0" }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </motion.div>
  );
}
