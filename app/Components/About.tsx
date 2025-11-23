"use client";
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
    const articles = [
        {
            title: "Coding",
            image: "/about-coding.png",
            description: "I write clean, efficient, and maintainable code using the latest standards and best practices. My focus is on building scalable applications that perform well across all devices."
        },
        {
            title: "Design",
            image: "/about-design.png",
            description: "I believe that good design is about more than just aesthetics. It's about creating intuitive and enjoyable user experiences that solve real problems."
        },
        {
            title: "Problem Solving",
            image: "/about-problem-solving.png",
            description: "I approach every challenge with a logical and analytical mindset. I enjoy breaking down complex problems into manageable solutions and continuously learning new techniques."
        }
    ];

    return (
        <section id="about" className="relative mt-10 md:mt-[115px] z-10 py-12 sm:py-16 w-[95%]
        mx-auto my-[30px] flex justify-center px-4 rounded-[15px]
         bg-black/15 
         [box-shadow:10px_-10px_10px_rgba(0,0,0,0.3)]">
            <div className="container mx-auto ">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-12 text-white will-change-transform force-gpu"
                >
                    About Me
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-black/15 border border-gray-800 rounded-[15px] p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:bg-black/30 shadow-lg "
                        >
                            <div className="relative w-24 h-24 mb-6">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-contain drop-shadow-lg"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{article.title}</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {article.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
