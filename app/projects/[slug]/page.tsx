"use client";
import React from "react";
import Header from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import BackgroundAnimation from "@/app/Components/BackgroundAnimation";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";
import Ndri from "@/app/Assets/1ndri.png";
import ToDoList from "@/app/Assets/ToDoList.jpg";
import {
  FaSearch,
  FaClipboardList,
  FaPalette,
  FaCode,
  FaVial,
  FaRocket,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projectsData: Record<
  string,
  {
    title: string;
    description: string;
    fullDescription: string;
    imageSrc: string | any;
    imageSrc2: string | any;
    gradient: string;
    technologies?: string[];
    currentStep?: number; // 0-5: 0=Discovery, 1=Planning, 2=Design, 3=Development, 4=Testing, 5=Deployment
    websiteUrl?: string; // URL of the live website
  }
> = {
  "to-do-list": {
    title: "To Do List",
    description:
      "A modern task management application built with React and TypeScript.",
    fullDescription:
      "A comprehensive task management application built with React and TypeScript. This project features task creation, editing, deletion, and advanced filtering capabilities. The application provides a clean and intuitive user interface for managing daily tasks efficiently. Built with modern web technologies and best practices for optimal performance and user experience.",
    imageSrc: typeof ToDoList === "string" ? ToDoList : ToDoList.src,
    imageSrc2: typeof ToDoList === "string" ? ToDoList : ToDoList.src,
    gradient: "from-blue-500 to-cyan-500",
    technologies: ["React", "TypeScript", "CSS3", "HTML5"],
    currentStep: 2, // Design (currently working on)
  },
  "restaurant-ndri": {
    title: "Restaurant n'Dri",
    description:
      "A beautiful restaurant website showcasing menu items, reservations, and location.",
    fullDescription:
      "A stunning restaurant website designed to showcase menu items, enable online reservations, and provide location information. Built with modern web technologies, this project features a responsive design that works seamlessly across all devices. The website provides an exceptional user experience with smooth animations and intuitive navigation.",
    imageSrc: typeof Ndri === "string" ? Ndri : Ndri.src,
    imageSrc2: typeof Ndri === "string" ? Ndri : Ndri.src,
    gradient: "from-purple-500 to-pink-500",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    currentStep: 3, // Development (currently working on)
    websiteUrl: "https://dri-5rvhunlal-atdhes-projects-6c0f9625.vercel.app/", // Esempio - sostituire con URL reale
  },
  "project-3": {
    title: "Project 3",
    description:
      "A comprehensive web application featuring modern design patterns and responsive layouts.",
    fullDescription:
      "A comprehensive web application featuring modern design patterns and responsive layouts. Built with cutting-edge technologies, this project demonstrates best practices in web development. The application includes advanced features and smooth user interactions for an optimal user experience.",
    imageSrc: typeof Ndri === "string" ? Ndri : Ndri.src,
    imageSrc2: typeof Ndri === "string" ? Ndri : Ndri.src,
    gradient: "from-orange-500 to-red-500",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  "project-4": {
    title: "Project 4",
    description:
      "An innovative platform designed to streamline workflows and enhance productivity.",
    fullDescription:
      "An innovative platform designed to streamline workflows and enhance productivity. Features intuitive UI and powerful backend capabilities. This project focuses on creating efficient solutions for modern business needs with a focus on user experience and performance.",
    imageSrc: "https://picsum.photos/id/4/800/600",
    imageSrc2: "https://picsum.photos/id/14/800/600",
    gradient: "from-green-500 to-emerald-500",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Django"],
  },
  "project-5": {
    title: "Project 5",
    description:
      "A mobile-first application with seamless user experience across all devices.",
    fullDescription:
      "A mobile-first application with seamless user experience across all devices. Includes advanced features and smooth animations. This project prioritizes mobile usability while maintaining full functionality on desktop platforms. Built with responsive design principles and modern web standards.",
    imageSrc: "https://picsum.photos/id/5/800/600",
    imageSrc2: "https://picsum.photos/id/15/800/600",
    gradient: "from-indigo-500 to-blue-500",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
  },
  "project-6": {
    title: "Project 6",
    description:
      "A robust e-commerce solution with secure payment integration and inventory management.",
    fullDescription:
      "A robust e-commerce solution with secure payment integration and inventory management. Optimized for performance and scalability. This project includes comprehensive features for online shopping, payment processing, and order management. Built with security and performance as top priorities.",
    imageSrc: "https://picsum.photos/id/6/800/600",
    imageSrc2: "https://picsum.photos/id/16/800/600",
    gradient: "from-yellow-500 to-orange-500",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
  },
};

const ProjectPage: React.FC = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const { t } = useLanguage();

  const project = projectsData[slug];

  const processSteps = [
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

  if (!project) {
    return (
      <div className="bg-white dark:bg-black bg-fixed relative transition-colors duration-300">
        <BackgroundAnimation />
        <Header />
        <main className="relative z-10 py-20 sm:py-24 w-full mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300">
              The project you're looking for doesn't exist.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black bg-fixed relative transition-colors duration-300">
      <BackgroundAnimation />
      <Header />
      <main>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 py-20 sm:py-24 w-full mx-auto px-4 md:px-8 lg:px-12 xl:px-16"
        >
          <div className="container mx-auto ">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-16"
            >
              <h1
                className={`text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent leading-normal`}
              >
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {project.description}
              </p>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 space-y-6"
            >
              {/* Desktop Image */}
              <div className="hidden md:block relative w-full h-96 overflow-hidden rounded-2xl">
                <img
                  src={
                    typeof project.imageSrc === "string"
                      ? project.imageSrc
                      : project.imageSrc
                  }
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Mobile Image */}
              <div className="block md:hidden relative w-full h-64 overflow-hidden rounded-2xl">
                <img
                  src={
                    typeof project.imageSrc2 === "string"
                      ? project.imageSrc2
                      : project.imageSrc2
                  }
                  alt={`${project.title} - Mobile`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                About This Project
              </h2>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-semibold`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Development Process Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                {t("projectProcessTitle")}
              </h2>
              {/* Timeline Container */}
              <div className="relative">
                {/* Horizontal Timeline for Desktop */}
                <div className="hidden md:flex items-start justify-between relative px-4">
                  {/* Connecting Line - positioned at the center of circles (42px from top = center of 84px circle) */}
                  <div className="absolute left-[42px] right-[42px] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 via-green-500 via-indigo-500 to-yellow-500 top-[42px] z-0"></div>

                  {processSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    const isCurrentStep =
                      project.currentStep !== undefined &&
                      project.currentStep === index;
                    const isCompleted =
                      project.currentStep !== undefined &&
                      project.currentStep > index;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="relative z-10 flex flex-col items-center group flex-1"
                      >
                        {/* Icon Circle - fixed height container to ensure alignment */}
                        <div className="h-[84px] flex items-center justify-center mb-3">
                          <div
                            className={`relative bg-white dark:bg-black rounded-full p-4 border-2 ${
                              isCurrentStep
                                ? "border-blue-500 dark:border-blue-400 ring-4 ring-blue-500/30 dark:ring-blue-400/30"
                                : isCompleted
                                ? "border-green-500 dark:border-green-400"
                                : "border-gray-200 dark:border-gray-700"
                            } transition-all duration-300`}
                          >
                            <div
                              className={`bg-gradient-to-br ${
                                step.gradient
                              } p-3 rounded-full ${
                                isCurrentStep
                                  ? "ring-2 ring-blue-500 dark:ring-blue-400"
                                  : ""
                              }`}
                            >
                              <IconComponent className="text-white" size={24} />
                            </div>
                            {/* Active indicator pulse animation */}
                            {isCurrentStep && (
                              <div className="absolute inset-0 rounded-full border-2 border-blue-500 dark:border-blue-400 animate-ping opacity-75"></div>
                            )}
                          </div>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-sm md:text-base font-bold text-center max-w-[120px] ${
                            isCurrentStep
                              ? "text-blue-600 dark:text-blue-400"
                              : isCompleted
                              ? "text-green-600 dark:text-green-400"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {step.title}
                          {isCurrentStep && (
                            <span className="block text-xs text-blue-500 dark:text-blue-400 mt-1 font-normal">
                              {t("projectStepInProgress")}
                            </span>
                          )}
                        </h3>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Vertical Timeline for Mobile */}
                <div className="md:hidden space-y-8">
                  {processSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    const isCurrentStep =
                      project.currentStep !== undefined &&
                      project.currentStep === index;
                    const isCompleted =
                      project.currentStep !== undefined &&
                      project.currentStep > index;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="relative flex items-center group"
                      >
                        {/* Icon Circle */}
                        <div
                          className={`relative bg-white dark:bg-black rounded-full p-4 border-2 mr-4 flex-shrink-0 ${
                            isCurrentStep
                              ? "border-blue-500 dark:border-blue-400 ring-4 ring-blue-500/30 dark:ring-blue-400/30"
                              : isCompleted
                              ? "border-green-500 dark:border-green-400"
                              : "border-gray-200 dark:border-gray-700"
                          } transition-all duration-300`}
                        >
                          <div
                            className={`bg-gradient-to-br ${
                              step.gradient
                            } p-3 rounded-full ${
                              isCurrentStep
                                ? "ring-2 ring-blue-500 dark:ring-blue-400"
                                : ""
                            }`}
                          >
                            <IconComponent className="text-white" size={24} />
                          </div>
                          {/* Active indicator pulse animation */}
                          {isCurrentStep && (
                            <div className="absolute inset-0 rounded-full border-2 border-blue-500 dark:border-blue-400 animate-ping opacity-75"></div>
                          )}
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-base font-bold ${
                            isCurrentStep
                              ? "text-blue-600 dark:text-blue-400"
                              : isCompleted
                              ? "text-green-600 dark:text-green-400"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {step.title}
                          {isCurrentStep && (
                            <span className="block text-xs text-blue-500 dark:text-blue-400 mt-1 font-normal">
                              {t("projectStepInProgress")}
                            </span>
                          )}
                        </h3>

                        {/* Connecting Line (Vertical) - positioned at the center of icon circles (42px = center of 84px circle) */}
                        {index < processSteps.length - 1 && (
                          <div
                            className={`absolute left-[42px] top-[84px] w-0.5 h-8 ${
                              isCompleted || isCurrentStep
                                ? "bg-gradient-to-b from-green-500 via-blue-500 to-purple-500"
                                : "bg-gradient-to-b from-blue-500 via-purple-500 via-orange-500 via-green-500 via-indigo-500 to-yellow-500"
                            }`}
                          ></div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Live Website URL Section */}
              {project.websiteUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-16"
                >
                  <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                      {t("projectLiveSiteTitle")}
                    </h2>
                    <div className="flex flex-col items-center justify-center">
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}
                      >
                        <span>{t("projectViewLiveSite")}</span>
                        <FaExternalLinkAlt size={20} />
                      </a>
                      <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base break-all max-w-2xl text-center">
                        {project.websiteUrl}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
