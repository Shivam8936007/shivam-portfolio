"use client";

import { motion } from "framer-motion";

export const ShinyText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <motion.span
      className={`relative inline-block overflow-hidden ${className}`}
    >
      <span className="invisible">{text}</span>
      <motion.span
        initial={{ backgroundPosition: "200% 0" }}
        animate={{ backgroundPosition: "-200% 0" }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[linear-gradient(110deg,#a1a1aa,45%,#fff,55%,#a1a1aa)] bg-[length:250%_100%] bg-clip-text text-transparent"
      >
        {text}
      </motion.span>
    </motion.span>
  );
};
