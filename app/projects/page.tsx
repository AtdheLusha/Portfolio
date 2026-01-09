"use client";
import React from "react";
import Header from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import Article from "@/app/Components/Article";
import BackgroundAnimation from "@/app/Components/BackgroundAnimation";
import { motion } from "framer-motion";
import Ndri from "../Assets/ndri.png";
import ToDoList from "../Assets/ToDoList.jpg";
import { useLanguage } from "@/app/contexts/LanguageContext";

const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-black bg-fixed relative transition-colors duration-300">
      <BackgroundAnimation />
      <Header />
      <main>
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 py-20 sm:py-24 w-full mx-auto px-4 md:px-8 lg:px-12 xl:px-16"
        >
          <div className="container mx-auto max-w-7xl">
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
                {t("myProjects")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
              >
                {t("exploreWork")}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Article
                  title="To Do List"
                  description="A modern task management application built with React and TypeScript. Features include task creation, editing, deletion, and filtering capabilities."
                  imageSrc={
                    typeof ToDoList === "string" ? ToDoList : ToDoList.src
                  }
                  imageSrc2={
                    typeof ToDoList === "string" ? ToDoList : ToDoList.src
                  }
                  gradient="from-blue-500 to-cyan-500"
                  href="/projects/to-do-list"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Article
                  title="Restaurant n'Dri"
                  description="A beautiful restaurant website showcasing menu items, reservations, and location. Built with modern web technologies for an exceptional user experience."
                  imageSrc={typeof Ndri === "string" ? Ndri : Ndri.src}
                  imageSrc2={typeof Ndri === "string" ? Ndri : Ndri.src}
                  gradient="from-purple-500 to-pink-500"
                  href="/projects/restaurant-ndri"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Article
                  title="Project 3"
                  description="A comprehensive web application featuring modern design patterns and responsive layouts. Built with cutting-edge technologies."
                  imageSrc="https://picsum.photos/id/3/400/300"
                  imageSrc2="https://picsum.photos/id/13/400/300"
                  gradient="from-orange-500 to-red-500"
                  href="/projects/project-3"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Article
                  title="Project 4"
                  description="An innovative platform designed to streamline workflows and enhance productivity. Features intuitive UI and powerful backend capabilities."
                  imageSrc="https://picsum.photos/id/4/400/300"
                  imageSrc2="https://picsum.photos/id/14/400/300"
                  gradient="from-green-500 to-emerald-500"
                  href="/projects/project-4"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Article
                  title="Project 5"
                  description="A mobile-first application with seamless user experience across all devices. Includes advanced features and smooth animations."
                  imageSrc="https://picsum.photos/id/5/400/300"
                  imageSrc2="https://picsum.photos/id/15/400/300"
                  gradient="from-indigo-500 to-blue-500"
                  href="/projects/project-5"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Article
                  title="Project 6"
                  description="A robust e-commerce solution with secure payment integration and inventory management. Optimized for performance and scalability."
                  imageSrc="https://picsum.photos/id/6/400/300"
                  imageSrc2="https://picsum.photos/id/16/400/300"
                  gradient="from-yellow-500 to-orange-500"
                  href="/projects/project-6"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
