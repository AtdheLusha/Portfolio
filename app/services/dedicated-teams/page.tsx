"use client";
import React from "react";
import Header from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import BackgroundAnimation from "@/app/Components/BackgroundAnimation";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { motion } from "framer-motion";
import { FaUsers, FaClock, FaChartLine, FaCog, FaHandshake, FaRocket } from "react-icons/fa";

const DedicatedTeamsPage: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: FaUsers,
      title: t("dedicatedTeamsFeature1Title"),
      description: t("dedicatedTeamsFeature1Desc"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaClock,
      title: t("dedicatedTeamsFeature2Title"),
      description: t("dedicatedTeamsFeature2Desc"),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FaChartLine,
      title: t("dedicatedTeamsFeature3Title"),
      description: t("dedicatedTeamsFeature3Desc"),
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: FaCog,
      title: t("dedicatedTeamsFeature4Title"),
      description: t("dedicatedTeamsFeature4Desc"),
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: FaHandshake,
      title: t("dedicatedTeamsFeature5Title"),
      description: t("dedicatedTeamsFeature5Desc"),
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: FaRocket,
      title: t("dedicatedTeamsFeature6Title"),
      description: t("dedicatedTeamsFeature6Desc"),
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const benefits = [
    t("dedicatedTeamsBenefit1"),
    t("dedicatedTeamsBenefit2"),
    t("dedicatedTeamsBenefit3"),
    t("dedicatedTeamsBenefit4"),
    t("dedicatedTeamsBenefit5"),
    t("dedicatedTeamsBenefit6"),
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
                {t("dedicatedTeams")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("dedicatedTeamsDesc")}
              </p>
            </motion.div>

            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-16"
            >
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                {t("dedicatedTeamsMainDesc")}
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                {t("dedicatedTeamsServicesTitle")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="relative bg-white dark:bg-black rounded-2xl p-6 border-1 border-gray-300 dark:border-gray-700 h-full flex flex-col overflow-hidden transition-colors duration-300">
                        {/* Gradient Background on Hover */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}
                        />

                        {/* Icon */}
                        <div className="relative z-10 mb-4">
                          <div
                            className={`bg-gradient-to-br ${feature.gradient} p-3 rounded-xl w-fit`}
                          >
                            <IconComponent className="text-white" size={24} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex-1 flex flex-col">
                          <h3 className={`text-xl font-bold mb-3 transition-all duration-300 text-gray-900 dark:text-white group-hover:bg-gradient-to-r ${feature.gradient} group-hover:bg-clip-text group-hover:text-transparent`}>
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                            {feature.description}
                          </p>
                        </div>

                        {/* Decorative Gradient Line */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
                {t("dedicatedTeamsBenefitsTitle")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {benefit}
              </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default DedicatedTeamsPage;

