"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
    // Add more dummy testimonials to make the slider interesting
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO at TechStart",
            feedback: "Alcode is an exceptional developer. He delivered our project on time and exceeded our expectations."
        },
        {
            name: "Michael Chen",
            role: "Product Manager",
            feedback: "Working with Alcode was a pleasure. His ability to solve complex problems made the process smooth."
        },
        {
            name: "Emily Davis",
            role: "Designer",
            feedback: "I loved how he translated my designs into pixel-perfect code. The animations are exactly what we envisioned."
        },
        {
            name: "David Wilson",
            role: "CTO at WebFlow",
            feedback: "Clean code, great communication, and fast delivery. Highly recommended for any frontend work."
        },
        {
            name: "Jessica Brown",
            role: "Marketing Director",
            feedback: "The new website has significantly increased our conversion rates. Fantastic job!"
        }
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-scroll effect
    React.useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const getTestimonialStyle = (index: number) => {
        const position = (index - currentIndex + testimonials.length) % testimonials.length;

        let diff = (index - currentIndex);
        // Adjust diff to be shortest path
        if (diff > testimonials.length / 2) diff -= testimonials.length;
        if (diff < -testimonials.length / 2) diff += testimonials.length;

        if (isMobile) {
            // Mobile view: Show only center item
            const isVisible = diff === 0;

            let x = '0%';
            let scale = 0.8;
            let opacity = 0;
            let zIndex = 0;

            if (diff === 0) {
                x = '0%';
                scale = 1;
                opacity = 1;
                zIndex = 10;
            } else {
                x = diff < 0 ? '-100%' : '100%';
                opacity = 0;
                zIndex = 0;
            }
            return { x, scale, opacity, zIndex, isVisible };
        }

        // Desktop view: Show 5 items
        const isVisible = Math.abs(diff) <= 2;

        let x = '0%';
        let scale = 0.8;
        let opacity = 0;
        let zIndex = 0;

        if (diff === 0) {
            x = '0%';
            scale = 1.1;
            opacity = 1;
            zIndex = 10;
        } else if (diff === -1) {
            x = '-40%';
            scale = 0.9;
            opacity = 0.7;
            zIndex = 5;
        } else if (diff === 1) {
            x = '40%';
            scale = 0.9;
            opacity = 0.7;
            zIndex = 5;
        } else if (diff === -2) {
            x = '-75%';
            scale = 0.7;
            opacity = 0.4;
            zIndex = 2;
        } else if (diff === 2) {
            x = '75%';
            scale = 0.7;
            opacity = 0.4;
            zIndex = 2;
        } else {
            x = diff < 0 ? '-100%' : '100%';
            opacity = 0;
            zIndex = 0;
        }

        return { x, scale, opacity, zIndex, isVisible };
    };

    return (
        <section id="testimonials" className="relative z-10 py-12 sm:py-16 w-[95%] mx-auto my-[0px] px-4">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-0 text-white"
                >
                    What Clients Say
                </motion.h2>

                <div className="relative w-full max-w-6xl mx-auto h-[400px] flex items-center justify-center overflow-hidden">
                    {testimonials.map((item, index) => {
                        const style = getTestimonialStyle(index);
                        // Only render if it's one of the relevant items to avoid clutter, 
                        // but for animation we might need them present. 
                        // Let's render all but animate properties.

                        return (
                            <motion.div
                                key={index}
                                className="absolute w-[300px] md:w-[400px]"
                                initial={false}
                                animate={{
                                    x: style.x,
                                    scale: style.scale,
                                    opacity: style.opacity,
                                    zIndex: style.zIndex
                                }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <div className="h-full transform transition duration-300 shadow-lg rounded-[20px] p-[1px] bg-black/10">
                                    <div className="bg-black/25 backdrop-blur-sm rounded-[25px] p-8 h-full flex flex-col justify-between text-center min-h-[250px]">
                                        <p className="text-gray-300 italic mb-6 text-lg">"{item.feedback}"</p>
                                        <div>
                                            <h4 className="text-xl font-bold text-white">{item.name}</h4>
                                            <p className="text-blue-500 text-sm">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
