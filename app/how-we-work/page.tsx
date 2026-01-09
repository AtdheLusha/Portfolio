"use client";
import React from "react";
import Header from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import BackgroundAnimation from "@/app/Components/BackgroundAnimation";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaClipboardList,
  FaPalette,
  FaCode,
  FaVial,
  FaRocket,
} from "react-icons/fa";

const HowWeWorkPage: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: FaSearch,
      title: t("howWeWorkStep1Title"),
      description: t("howWeWorkStep1Desc"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaClipboardList,
      title: t("howWeWorkStep2Title"),
      description: t("howWeWorkStep2Desc"),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FaPalette,
      title: t("howWeWorkStep3Title"),
      description: t("howWeWorkStep3Desc"),
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: FaCode,
      title: t("howWeWorkStep4Title"),
      description: t("howWeWorkStep4Desc"),
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: FaVial,
      title: t("howWeWorkStep5Title"),
      description: t("howWeWorkStep5Desc"),
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: FaRocket,
      title: t("howWeWorkStep6Title"),
      description: t("howWeWorkStep6Desc"),
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
          <div className="container mx-auto ">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-b from-gray-400 to-black dark:from-white dark:to-gray-500 bg-clip-text text-transparent leading-normal">
                {t("howWeWorkMainTitle")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("howWeWorkMainDesc")}
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
                {t("howWeWorkProcessTitle")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="relative bg-white dark:bg-black rounded-2xl p-6 border-1 border-gray-300 dark:border-gray-700 h-full flex flex-col overflow-hidden transition-colors duration-300">
                        {/* Step Number */}
                        <div className="absolute top-4 right-4 text-4xl font-extrabold text-gray-200 dark:text-gray-800">
                          {index + 1}
                        </div>

                        {/* Gradient Background on Hover */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}
                        />

                        {/* Icon */}
                        <div className="relative z-10 mb-4">
                          <div
                            className={`bg-gradient-to-br ${step.gradient} p-3 rounded-xl w-fit`}
                          >
                            <IconComponent className="text-white" size={24} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex-1 flex flex-col">
                          <h3
                            className={`text-xl font-bold mb-3 transition-all duration-300 text-gray-900 dark:text-white group-hover:bg-gradient-to-r ${step.gradient} group-hover:bg-clip-text group-hover:text-transparent`}
                          >
                            {step.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                            {step.description}
                          </p>
                        </div>

                        {/* Decorative Gradient Line */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Methodology Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6">
                {t("howWeWorkMethodologyTitle")}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                {t("howWeWorkMethodologyDesc")}
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default HowWeWorkPage;

