"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Array di esempio per le skills
const skillsList = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS',
    'Node.js', 'Figma', 'GitHub'
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="relative z-10 py-12 sm:py-16 w-[95%] mx-auto my-[30px] px-4">
            <div className="container mx-auto ">


                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-12 text-white will-change-transform force-gpu"
                >
                    My Skills
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skillsList.map((skill, index) => (
                        // Badge per la Skill
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-full shadow-lg 
                         transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:text-white 
                          border-gray-800 [box-shadow:10px_-10px_10px_rgba(0,0,0,0.3)] "
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center text-gray-300 max-w-2xl mx-auto"
                >
                    These are the main technologies I work with on a daily basis. Continuous training is essential to stay up-to-date.
                </motion.p>
            </div>
        </section>
    );
};

export default Skills;