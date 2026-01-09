"use client";
import React from "react";
import Header from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import BackgroundAnimation from "@/app/Components/BackgroundAnimation";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  FaDollarSign,
  FaClock,
  FaGraduationCap,
  FaHeartbeat,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";

const CareersPage: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: FaDollarSign,
      text: t("careersBenefit1"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaClock,
      text: t("careersBenefit2"),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FaGraduationCap,
      text: t("careersBenefit3"),
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: FaHeartbeat,
      text: t("careersBenefit4"),
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: FaUsers,
      text: t("careersBenefit5"),
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: FaBriefcase,
      text: t("careersBenefit6"),
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="bg-white dark:bg-black bg-fixed relative transition-colors duration-300">
      <BackgroundAnimation />
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 py-20 sm:py-24 w-full mx-auto px-4 md:px-8 lg:px-12 xl:px-16"
        >
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-b from-gray-400 to-black dark:from-white dark:to-gray-500 bg-clip-text text-transparent leading-normal">
                {t("careersMainTitle")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("careersMainDesc")}
              </p>
            </motion.div>

            {/* Why Join Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6">
                {t("careersWhyJoinTitle")}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                {t("careersWhyJoinDesc")}
              </p>
            </motion.div>

            {/* Benefits Section */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
                {t("careersBenefitsTitle")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="relative bg-white dark:bg-black rounded-2xl p-6 border-1 border-gray-300 dark:border-gray-700 h-full flex items-start space-x-4 overflow-hidden transition-colors duration-300">
                        {/* Gradient Background on Hover */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}
                        />

                        {/* Icon */}
                        <div className="relative z-10 flex-shrink-0">
                          <div
                            className={`bg-gradient-to-br ${benefit.gradient} p-3 rounded-xl`}
                          >
                            <IconComponent className="text-white" size={20} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex-1">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {benefit.text}
                          </p>
                        </div>

                        {/* Decorative Gradient Line */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Open Positions Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6">
                {t("careersOpenPositionsTitle")}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-6 sm:mb-8">
                {t("careersNoPositions")}
              </p>
              <div className="text-center">
                <motion.a
                  href="mailto:careers@alcode.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t("careersSendCV")}
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
