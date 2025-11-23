// Hero.tsx
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Hero: React.FC = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch('https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json')
            .then(response => response.json())
            .then(data => setAnimationData(data));
    }, []);

    return (
        <section id="home" className="relative w-full min-h-[600px] flex items-center overflow-hidden">
            {/* Background Elements (Optional: Add a subtle pattern or gradient if needed) */}
            <div className="absolute inset-0 from-[#1e1e24] via-[#2a2a35] to-[#1e1e24] opacity-80 z-0"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">

                {/* Left Content */}
                <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-500 leading-tight mb-6"
                    >
                        Hey! I am <br />
                        <span className="text-white text-blue-500">Atdhe Lusha</span><br />
                        <span className="text-blue-500 text-[22px] mt-2 text-purple-500">FrontEnd Developer</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-monotext-gray-400 text-lg md:text-xl mb-8 bg-black/30 inline-block px-4 py-2 rounded-md"
                    >
                        <span className="text-purple-500">&lt;code&gt;</span> I build amazing web experiences <span className="text-purple-500">&lt;/code&gt;</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <button className="bg-gradient-to-r from-blue-800 to-purple-900 text-white font-bold py-4 px-8 rounded-sm transition duration-300 text-lg tracking-wide hover:opacity-90">
                            EXPLORE NOW
                        </button>
                    </motion.div>
                </div>

                {/* Right Content: Animation */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative flex justify-center md:justify-end"
                >
                    <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] lg:translate-y-[100px] lg:translate-x-[100px]">
                        {animationData && <Lottie animationData={animationData} loop={true} />}
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Hero