"use client";
import React from "react";
import Header from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import BackgroundAnimation from "@/app/Components/BackgroundAnimation";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import atdheLushaImage from "@/app/Assets/Atdhe Lusha.png";
import leonMuqajImage from "@/app/Assets/Leon Muqaj.jpg";
import daniellGjokaImage from "@/app/Assets/Daniell Gjoka.png";
import arberRexhaImage from "@/app/Assets/Arber Rexha.jpg";
import gabrielDemajImage from "@/app/Assets/Gabriel Denaj.jpg";
import flavianKarricaImage from "@/app/Assets/flavian-karrica.jpg";
import qendrimHasiImage from "@/app/Assets/Qendrim Hasi.png";
import artZherkaImage from "@/app/Assets/art-zherka.png";
import vesaBardhiImage from "@/app/Assets/Vesa Bardhi.jpg";
import berlindaFrrokajImage from "@/app/Assets/Berlinda Frrokaj.png";
import dionAbrashiImage from "@/app/Assets/Dion Abrashi.png";
import {
  FaLightbulb,
  FaTrophy,
  FaUsers,
  FaShieldAlt,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const AboutUsPage: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: FaLightbulb,
      title: t("aboutUsValue1Title"),
      description: t("aboutUsValue1Desc"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaTrophy,
      title: t("aboutUsValue2Title"),
      description: t("aboutUsValue2Desc"),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FaUsers,
      title: t("aboutUsValue3Title"),
      description: t("aboutUsValue3Desc"),
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: FaShieldAlt,
      title: t("aboutUsValue4Title"),
      description: t("aboutUsValue4Desc"),
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const teamMembers = [
    {
      name: "Atdhe Lusha",
      roleKey: "teamRoleFullStackDeveloper",
      facebook: "#",
      linkedin: "#",
      image: atdheLushaImage,
    },
    {
      name: "Leon Muqaj",
      roleKey: "teamRoleFrontendDeveloper",
      facebook: "#",
      linkedin: "#",
      image: leonMuqajImage,
    },
    {
      name: "Daniell Gjoka",
      roleKey: "teamRoleBackendDeveloper",
      facebook: "#",
      linkedin: "#",
      image: daniellGjokaImage,
    },
    {
      name: "Arber Rexha",
      roleKey: "teamRoleIOSDeveloper",
      facebook: "#",
      linkedin: "#",
      image: arberRexhaImage,
    },
    {
      name: "Gabriel Demaj",
      roleKey: "teamRoleAndroidDeveloper",
      facebook: "#",
      linkedin: "#",
      image: gabrielDemajImage,
    },
    {
      name: "Flavian Karrica",
      roleKey: "teamRoleSoftwareEngineer",
      facebook: "#",
      linkedin: "#",
      image: flavianKarricaImage,
    },
    {
      name: "Qendrim Hasi",
      roleKey: "teamRoleSalesManager",
      facebook: "#",
      linkedin: "#",
      image: qendrimHasiImage,
    },
    {
      name: "Art Zherka",
      roleKey: "teamRoleCoordinator",
      facebook: "#",
      linkedin: "#",
      image: artZherkaImage,
    },
    {
      name: "Vesa Bardhi",
      roleKey: "teamRoleEmailMarketing",
      facebook: "#",
      linkedin: "#",
      image: vesaBardhiImage,
    },
    {
      name: "Berlinda Frrokaj",
      roleKey: "teamRoleAdministrator",
      facebook: "#",
      linkedin: "#",
      image: berlindaFrrokajImage,
    },
    {
      name: "Dion Abrashi",
      roleKey: "teamRoleSEOSpecialist",
      facebook: "#",
      linkedin: "#",
      image: dionAbrashiImage,
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
                {t("aboutUsMainTitle")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("aboutUsMainDesc")}
              </p>
            </motion.div>

            {/* Story Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6">
                {t("aboutUsStoryTitle")}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                {t("aboutUsStoryDesc")}
              </p>
            </motion.div>

            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6">
                {t("aboutUsMissionTitle")}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                {t("aboutUsMissionDesc")}
              </p>
            </motion.div>

            {/* Values Section */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
                {t("aboutUsValuesTitle")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="relative bg-white dark:bg-black rounded-2xl p-5 sm:p-6 border-1 border-gray-300 dark:border-gray-700 h-full flex flex-col overflow-hidden transition-colors duration-300">
                        {/* Gradient Background on Hover */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}
                        />

                        {/* Icon */}
                        <div className="relative z-10 mb-4">
                          <div
                            className={`bg-gradient-to-br ${value.gradient} p-3 rounded-xl w-fit`}
                          >
                            <IconComponent className="text-white" size={24} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex-1 flex flex-col">
                          <h3
                            className={`text-xl font-bold mb-3 transition-all duration-300 text-gray-900 dark:text-white group-hover:bg-gradient-to-r ${value.gradient} group-hover:bg-clip-text group-hover:text-transparent`}
                          >
                            {value.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                            {value.description}
                          </p>
                        </div>

                        {/* Decorative Gradient Line */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-12 sm:mb-16">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mb-8 sm:mb-12"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6">
                  {t("aboutUsTeamTitle")}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
                  {t("aboutUsTeamDesc")}
                </p>
              </motion.div>

              {/* Team Members Grid */}
              <div>
                {/* First 8 Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-8">
                  {teamMembers.slice(0, 8).map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="relative bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
                        {/* Profile Picture */}
                        <div className="relative mb-4">
                          {member.image ? (
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden">
                              <Image
                                src={member.image}
                                alt={member.name}
                                width={112}
                                height={112}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                              <FaUsers className="text-white text-4xl sm:text-5xl" />
                            </div>
                          )}
                        </div>

                        {/* Name */}
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {member.name}
                        </h3>

                        {/* Role */}
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 font-medium uppercase tracking-wide">
                          {t(member.roleKey)}
                        </p>

                        {/* Social Media Links */}
                        <div className="flex items-center gap-3 mt-auto">
                          <a
                            href={member.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                            aria-label="Facebook"
                          >
                            <FaFacebook size={16} />
                          </a>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                            aria-label="LinkedIn"
                          >
                            <FaLinkedin size={16} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Last 3 Members - Centered */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl">
                    {teamMembers.slice(8).map((member, index) => (
                      <motion.div
                        key={index + 8}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.7 + (index + 8) * 0.1,
                        }}
                        className="relative group"
                      >
                        <div className="relative bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
                          {/* Profile Picture */}
                          <div className="relative mb-4">
                            {member.image ? (
                              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden">
                                <Image
                                  src={member.image}
                                  alt={member.name}
                                  width={112}
                                  height={112}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                <FaUsers className="text-white text-4xl sm:text-5xl" />
                              </div>
                            )}
                          </div>

                          {/* Name */}
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {member.name}
                          </h3>

                          {/* Role */}
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 font-medium uppercase tracking-wide">
                            {t(member.roleKey)}
                          </p>

                          {/* Social Media Links */}
                          <div className="flex items-center gap-3 mt-auto">
                            <a
                              href={member.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                              aria-label="Facebook"
                            >
                              <FaFacebook size={16} />
                            </a>
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                              aria-label="LinkedIn"
                            >
                              <FaLinkedin size={16} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
