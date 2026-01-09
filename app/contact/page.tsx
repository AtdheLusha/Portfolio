"use client";
import React from "react";
import Header from "@/app/Components/Navbar";
import Contact from "@/app/Components/Contact";
import Footer from "@/app/Components/Footer";
import BackgroundAnimation from "@/app/Components/BackgroundAnimation";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black bg-fixed relative transition-colors duration-300">
      <BackgroundAnimation />
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
