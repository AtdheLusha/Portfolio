"use client";
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <svg className="absolute w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
                        <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#9333ea', stopOpacity: 0 }} />
                        <stop offset="50%" style={{ stopColor: '#9333ea', stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 0 }} />
                    </linearGradient>
                </defs>

                {/* Moving Line 1 (Blue) */}
                <motion.path
                    d="M-100,100 Q400,300 800,100 T1600,100"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: [-1000, 1000]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Moving Line 2 (Purple) */}
                <motion.path
                    d="M-100,500 Q400,300 800,500 T1600,500"
                    fill="none"
                    stroke="url(#grad2)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: [-1000, 1000]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2
                    }}
                />

                {/* Moving Line 3 (Blue - Diagonal) */}
                <motion.path
                    d="M0,800 L1600,0"
                    fill="none"
                    stroke="url(#grad1)"
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
                        delay: 5
                    }}
                />
            </svg>
        </div>
    );
};

export default BackgroundAnimation;
