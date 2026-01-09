"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiUser } from "react-icons/fi";
import { useLanguage } from "@/app/contexts/LanguageContext";

const WelcomeModal: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Mostra il modal solo se è la prima visita (nessun nome salvato)
    if (typeof window !== "undefined") {
      const savedName = localStorage.getItem("userName");
      
      // Se non c'è un nome salvato, mostra il modal per chiederlo
      if (!savedName) {
        setIsOpen(true);
      } else {
        // Se c'è già un nome, mostra il messaggio di benvenuto
        setUserName(savedName);
        setShowWelcome(true);
        setTimeout(() => {
          setShowWelcome(false);
        }, 4000);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const name = inputValue.trim();
      setUserName(name);
      localStorage.setItem("userName", name);
      // Dispatch custom event per aggiornare altri componenti
      window.dispatchEvent(new Event("userNameSaved"));
      setIsOpen(false);
      setShowWelcome(true);
      setTimeout(() => {
        setShowWelcome(false);
      }, 4000);
    }
  };

  const getWelcomeMessage = () => {
    const messages: Record<string, string> = {
      en: `Welcome, ${userName}! We're glad to have you here.`,
      it: `Benvenuto, ${userName}! Siamo felici di averti qui.`,
      al: `Mirë se vini, ${userName}! Jemi të lumtur që jeni këtu.`,
    };
    return messages[language] || messages.en;
  };

  const getPlaceholder = () => {
    const placeholders: Record<string, string> = {
      en: "Enter your name...",
      it: "Inserisci il tuo nome...",
      al: "Shkruani emrin tuaj...",
    };
    return placeholders[language] || placeholders.en;
  };

  const getButtonText = () => {
    const texts: Record<string, string> = {
      en: "Continue",
      it: "Continua",
      al: "Vazhdo",
    };
    return texts[language] || texts.en;
  };

  const getTitle = () => {
    const titles: Record<string, string> = {
      en: "Welcome to Alcode!",
      it: "Benvenuto in Alcode!",
      al: "Mirë se vini në Alcode!",
    };
    return titles[language] || titles.en;
  };

  const getSubtitle = () => {
    const subtitles: Record<string, string> = {
      en: "Please tell us your name to personalize your experience",
      it: "Per favore, dicci il tuo nome per personalizzare la tua esperienza",
      al: "Ju lutemi na tregoni emrin tuaj për të personalizuar përvojën tuaj",
    };
    return subtitles[language] || subtitles.en;
  };

  return (
    <>
      {/* Welcome Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black border border-white/5 rounded-3xl p-10 sm:p-12 max-w-lg w-full relative overflow-hidden"
            >
              {/* Minimalist border effect */}
              <div className="absolute inset-0 rounded-3xl border border-white/5" />
              
              <div className="relative z-10">
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-6"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-white/10 flex items-center justify-center bg-white/5">
                      <FiUser className="w-10 h-10 text-white/60" />
                    </div>
                    <h2 className="text-4xl font-light text-white mb-3 tracking-tight">
                      {getTitle()}
                    </h2>
                    <p className="text-white/50 text-base font-light">
                      {getSubtitle()}
                    </p>
                  </motion.div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={getPlaceholder()}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors text-lg font-light"
                      autoFocus
                    />
                  </motion.div>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    type="submit"
                    whileHover={{ opacity: 0.8 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={!inputValue.trim()}
                    className="w-full bg-white text-black font-medium py-4 px-8 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed text-lg"
                  >
                    {getButtonText()}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Welcome Toast Notification */}
      <AnimatePresence>
        {showWelcome && userName && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[100]"
          >
            <motion.div
              className="bg-black border border-white/10 rounded-full px-8 py-4 shadow-lg backdrop-blur-sm"
            >
              <p className="text-white text-base font-light tracking-wide">
                {getWelcomeMessage()}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WelcomeModal;

