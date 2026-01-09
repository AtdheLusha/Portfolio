"use client";
import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: "dedicatedTeams",
      descriptionKey: "dedicatedTeamsDesc",
      href: "/services/dedicated-teams",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      titleKey: "mobileDevelopment",
      descriptionKey: "mobileDevelopmentDesc",
      href: "/services/mobile-development",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      titleKey: "technologyConsulting",
      descriptionKey: "technologyConsultingDesc",
      href: "/services/technology-consulting",
      gradient: "from-orange-500 to-red-500",
    },
    {
      titleKey: "uiUxDesign",
      descriptionKey: "uiUxDesignDesc",
      href: "/services/ui-ux-design",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      titleKey: "softwareTesting",
      descriptionKey: "softwareTestingDesc",
      href: "/services/software-testing",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      titleKey: "webDevelopment",
      descriptionKey: "webDevelopmentDesc",
      href: "/services/web-development",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 py-20 sm:py-24 w-full mx-auto px-4 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="container mx-auto max-w-7xl">
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
            className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-b from-gray-400 to-black dark:from-white dark:to-gray-500 bg-clip-text text-transparent"
            style={{ lineHeight: "1.1", paddingBottom: "0.2em" }}
          >
            {t("ourServices")}
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-white dark:bg-black rounded-xl p-6 border-1 border-gray-300 dark:border-gray-700 h-full flex flex-col overflow-hidden transition-colors duration-300 cursor-pointer">
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className={`text-xl font-bold mb-3 transition-all duration-300 text-gray-900 dark:text-white group-hover:bg-gradient-to-r ${service.gradient} group-hover:bg-clip-text group-hover:text-transparent`}>
                {t(service.titleKey)}
              </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                {t(service.descriptionKey)}
              </p>
                  </div>

                  {/* Decorative Element */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
