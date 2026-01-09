"use client";
import React from "react";
import Header from "@/app/Components/Navbar";
import Testimonials from "@/app/Components/Testimonials";
import Footer from "@/app/Components/Footer";
import BackgroundAnimation from "@/app/Components/BackgroundAnimation";

const ClientsPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black bg-fixed relative transition-colors duration-300">
      <BackgroundAnimation />
      <Header />
      <main>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default ClientsPage;

