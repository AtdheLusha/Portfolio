"use client";
import React from "react";
import { motion } from "framer-motion";
import { useDarkModeContext } from "../providers/DarkModeProvider";

const BackgroundAnimation: React.FC = () => {
  const { mode } = useDarkModeContext();

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute w-full h-full opacity-30 dark:opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Light mode gradients */}
          <linearGradient id="grad1-light" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#3b82f6", stopOpacity: 0 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#3b82f6", stopOpacity: 0.5 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#3b82f6", stopOpacity: 0 }}
            />
          </linearGradient>
          <linearGradient id="grad2-light" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#9333ea", stopOpacity: 0 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#9333ea", stopOpacity: 0.5 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#9333ea", stopOpacity: 0 }}
            />
          </linearGradient>

          {/* Dark mode gradients */}
          <linearGradient id="grad1-dark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#9ca3af", stopOpacity: 0 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#9ca3af", stopOpacity: 0.4 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#9ca3af", stopOpacity: 0 }}
            />
          </linearGradient>
          <linearGradient id="grad2-dark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#d1d5db", stopOpacity: 0 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#d1d5db", stopOpacity: 0.4 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#d1d5db", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>

        {/* Moving Line 1 (Blue) */}
        <motion.g
          animate={{
            x: [-1000, 1000],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.path
            d="M-100,100 Q400,300 800,100 T1600,100"
            fill="none"
            stroke={mode === "dark" ? "url(#grad1-dark)" : "url(#grad1-light)"}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.g>

        {/* Moving Line 2 (Purple) */}
        <motion.g
          animate={{
            x: [-1000, 1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        >
          <motion.path
            d="M-100,500 Q400,300 800,500 T1600,500"
            fill="none"
            stroke={mode === "dark" ? "url(#grad2-dark)" : "url(#grad2-light)"}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          />
        </motion.g>

        {/* Moving Line 3 (Blue - Diagonal) */}
        <motion.path
          d="M0,800 L1600,0"
          fill="none"
          stroke={mode === "dark" ? "url(#grad1-dark)" : "url(#grad1-light)"}
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </svg>
    </div>
  );
};

export default BackgroundAnimation;
