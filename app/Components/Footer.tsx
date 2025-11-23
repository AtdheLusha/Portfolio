import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer id="Contact" className="bg-gray-900 text-gray-300 py-10 relative">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-800 to-purple-900"></div>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                    {/* Contact Section */}
                    <div className="text-center md:text-left space-y-4">
                        <div className="inline-block">
                            <h3 className="text-2xl font-bold text-white mb-2 pb-1">
                                Contacts
                            </h3>
                            <div className="h-[2px] w-full bg-gradient-to-r from-blue-800 to-purple-900"></div>
                        </div>
                        <div className="space-y-2 text-sm sm:text-base">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <span className="font-semibold text-blue-500">Telefoni:</span>
                                <a href="tel:+3891105454" className="hover:text-white transition-colors duration-300">
                                    +39 389 110 5454
                                </a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <span className="font-semibold text-blue-500">Email:</span>
                                <a href="mailto:atdhe.lusha@gmail.com" className="hover:text-white transition-colors duration-300">
                                    atdhelusha0@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <span className="font-semibold text-blue-500">Adresa:</span>
                                <span>Rome, Italy</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Icons Section */}
                    <div className="flex flex-col items-center md:items-end space-y-4">
                        <h3 className="text-xl font-bold text-white mb-2 hidden md:block">
                            Socials
                        </h3>
                        <div className="flex space-x-6">
                            <a
                                href="https://www.linkedin.com/in/atdhe-lusha-6495351a1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-gray-400 hover:text-purple-500 hover:scale-110 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/AtdheLusha"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://wa.me/393891105454"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-gray-400 hover:text-purple-500 hover:scale-110 transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-10 pt-6 text-center text-sm text-gray-500 border-t border-gray-800">
                    &copy; {new Date().getFullYear()} Atdhe Lusha. Made with great care.
                </div>
            </div>
        </footer>
    );
}

export default Footer;