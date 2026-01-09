"use client";
import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const { t } = useLanguage();

  const principles = [
    {
      titleKey: "empowerment",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-16 h-16"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
      descriptionKey: "empowermentDesc",
    },
    {
      titleKey: "synergy",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-16 h-16"
        >
          <circle cx="9" cy="12" r="3" />
          <circle cx="15" cy="12" r="3" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
      descriptionKey: "synergyDesc",
    },
    {
      titleKey: "advancement",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-16 h-16"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <path d="M12 14v2" />
          <path d="M9 16h6" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-500",
      descriptionKey: "advancementDesc",
    },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 py-20 px-4 md:px-8 lg:px-12 xl:px-16 sm:py-24 w-full mx-auto overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-white dark:bg-black opacity-50" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-b from-gray-400 to-black dark:from-white dark:to-gray-500 bg-clip-text text-transparent"
            style={{ lineHeight: "1.1", paddingBottom: "0.2em" }}
          >
            {t("ourCoreValues")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
          >
            {t("buildingFuture")}
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-black rounded-2xl p-6 sm:p-8 border-1 border-gray-300 dark:border-gray-700 h-full flex flex-col overflow-hidden transition-colors duration-300">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Icon Container */}
                <div className={`relative mb-6 flex justify-center`}>
                  <div
                    className={`bg-gradient-to-br ${principle.gradient} p-4 rounded-2xl`}
                  >
                    <div className="text-white">{principle.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center transition-all duration-300 text-gray-900 dark:text-white group-hover:bg-gradient-to-r ${principle.gradient} group-hover:bg-clip-text group-hover:text-transparent`}
                  >
                    {t(principle.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                    {t(principle.descriptionKey)}
                  </p>
                </div>

                {/* Decorative Element */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${principle.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
