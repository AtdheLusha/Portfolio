"use client";
// App.tsx
import React from 'react';
import Header from '@/app/Components/Header';
import Hero from '@/app/Components/Hero';
import Skills from '@/app/Components/Skills'; // <--- Nuovo Import
import Footer from './Components/Footer';
import Article from '@/app/Components/Article'
import About from '@/app/Components/About'
import Testimonials from '@/app/Components/Testimonials';
import Contact from '@/app/Components/Contact';
import { motion } from 'framer-motion';
import Dri from './Assets/dri.jpg';
import ToDoList from './Assets/ToDoList.jpg';

// Importa altre sezioni (Progetti, Contatti) quando le crei

import BackgroundAnimation from '@/app/Components/BackgroundAnimation';

const App: React.FC = () => {
  return (
    // Definiamo lo sfondo nero per l'intera app
    <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 bg-fixed relative">
      <BackgroundAnimation />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-12 sm:py-16 w-[95%] mx-auto my-[30px] flex justify-center px-4 rounded-[15px] bg-black/15 [box-shadow:10px_-10px_10px_rgba(0,0,0,0.3)]"
        >
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-white will-change-transform force-gpu"
            >
              My Projects
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.1 }} viewport={{ once: true }}>
                <Article
                  title="To do list"
                  description="Breve descrizione del progetto e delle tecnologie usate (React, Node.js)."
                  linkText="More..."
                  linkUrl="http://192.168.1.45:3001/"
                  imageSrc={ToDoList.src}
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }}>
                <Article
                  title="Restaurant n'Dri"
                  description="A unique culinary experience with the best traditional fish dishes."
                  linkText="More..."
                  linkUrl="https://dri-5rvhunlal-atdhes-projects-6c0f9625.vercel.app/"
                  imageSrc={Dri.src}
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.3 }} viewport={{ once: true }}>
                <Article
                  title="Nome Project 3"
                  description="Breve descrizione del progetto e delle tecnologie usate (React, Node.js)."
                  linkText="More..."
                  linkUrl="/dettagli"
                  imageSrc="https://picsum.photos/id/3/400/300"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.4 }} viewport={{ once: true }}>
                <Article
                  title="Nome Project 4"
                  description="Breve descrizione del progetto e delle tecnologie usate (React, Node.js)."
                  linkText="More..."
                  linkUrl="/dettagli"
                  imageSrc="https://picsum.photos/id/4/400/300"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.5 }} viewport={{ once: true }}>
                <Article
                  title="Nome Project 5"
                  description="Breve descrizione del progetto e delle tecnologie usate (React, Node.js)."
                  linkText="More..."
                  linkUrl="/dettagli"
                  imageSrc="https://picsum.photos/id/5/400/300"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.6 }} viewport={{ once: true }}>
                <Article
                  title="Nome Project 6"
                  description="Breve descrizione del progetto e delle tecnologie usate (React, Node.js)."
                  linkText="More..."
                  linkUrl="/dettagli"
                  imageSrc="https://picsum.photos/id/6/400/300"
                />
              </motion.div>

              {/* ... altri Article ... */}
            </div>

          </div>
        </motion.section>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;