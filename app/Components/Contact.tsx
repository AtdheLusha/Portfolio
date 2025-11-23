"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [isSent, setIsSent] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        // Clear error when user starts typing
        if (errors[id as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [id]: '' }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            name: '',
            email: '',
            message: ''
        };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            setIsSent(true);
            // Reset form
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <section id="contact" className="relative bg-black/15 z-10 py-12 sm:py-16 w-[95%]
        mx-auto my-[30px] flex justify-center px-4 rounded-[15px]
         [box-shadow:10px_-10px_10px_rgba(0,0,0,0.3)]">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-12 text-white will-change-transform force-gpu"
                >
                    Get In Touch
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto ">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex-1 rounded-[15px] p-8 bg-black/15 border border-gray-800"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                        <p className="text-gray-300 mb-4">
                            Feel free to reach out for collaborations or just a friendly hello.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-300">
                                <span className="font-bold text-blue-500 mr-2">Email:</span>
                                <a href="mailto:contact@example.com" className="hover:text-white">atdhelusha0@gmail.com</a>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <span className="font-bold text-blue-500 mr-2">Phone:</span>
                                <span className="hover:text-white cursor-pointer">+39 389 110 5454</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <span className="font-bold text-blue-500 mr-2">Location:</span>
                                <span>Rome, Italy</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex-1 p-8 bg-black/15 rounded-[15px] border border-gray-800 relative overflow-hidden"
                    >
                        {isSent ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 z-20 text-center p-6"
                            >
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-300 mb-8">Thank you for reaching out. I'll get back to you shortly.</p>
                                <button
                                    onClick={() => setIsSent(false)}
                                    className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition duration-300 border border-gray-700"
                                >
                                    Send Another
                                </button>
                            </motion.div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                                <div>
                                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full rounded-lg px-4 py-3 text-white focus:outline-none  transition border bg-transparent ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
                                        placeholder="Your Name"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full rounded-lg px-4 py-3 text-white focus:outline-none  transition border bg-transparent ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                                        placeholder="Your Email"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full rounded-lg px-4 py-3 text-white focus:outline-none  transition border bg-transparent ${errors.message ? 'border-red-500' : 'border-gray-600'}`}
                                        placeholder="Your Message"
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-800 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
