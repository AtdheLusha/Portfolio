"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX, FiSend, FiMinimize2 } from "react-icons/fi";
import { useLanguage } from "@/app/contexts/LanguageContext";

interface Message {
  id: string;
  text: string;
  sender: "user" | "company";
  timestamp: Date;
}

const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  // Rileva se è mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Carica i messaggi salvati al mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(
          parsed.map((msg: { role: string; content: string; timestamp?: string }) => ({
            ...msg,
            timestamp: new Date(msg.timestamp || new Date().toISOString()),
          }))
        );
      } catch (_e) {
        console.error("Error loading messages:", _e);
      }
    }
  }, []);

  // Salva i messaggi quando cambiano
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll automatico ai nuovi messaggi
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const messageText = inputMessage.trim();
    setInputMessage("");
    setIsTyping(true);

    try {
      // Prepara la cronologia della conversazione per il contesto
      const conversationHistory = messages.map((msg) => ({
        text: msg.text,
        sender: msg.sender,
      }));

      // Chiama l'API IA per generare una risposta intelligente
      const aiResponse = await fetch("/api/chat/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageText,
          conversationHistory: conversationHistory,
          language: language, // Passa la lingua corrente
        }),
      });

      if (aiResponse.ok) {
        const data = await aiResponse.json();

        if (data.response) {
          // Salva anche il messaggio nel database (opzionale)
          try {
            await fetch("/api/chat", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                text: messageText,
                sender: "user",
              }),
            });
          } catch (e) {
            // Ignora errori nel salvataggio, non è critico
            console.log("Could not save message to database");
          }

          // Aggiungi la risposta IA
          const companyMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: data.response,
            sender: "company",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, companyMessage]);
          setIsTyping(false);
        } else {
          throw new Error("No response from AI");
        }
      } else {
        const errorData = await aiResponse.json().catch(() => ({}));
        console.error("AI API error:", errorData);
        throw new Error("AI API failed");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Fallback a risposta generica intelligente
      const fallbackResponses = [
        `Grazie per il tuo messaggio! Alcode è specializzata in sviluppo software, design e consulenza tecnologica. Posso aiutarti con informazioni su servizi, prezzi, contatti o progetti. Su cosa vorresti saperne di più?`,
        `Ciao! Sono qui per aiutarti. Alcode offre servizi di sviluppo web, mobile, design UI/UX, testing e consulenza. Come posso assisterti?`,
        `Ottima domanda! Posso fornirti informazioni sui nostri servizi, progetti, contatti o preventivi. Cosa ti interessa di più?`,
      ];

      const responses = fallbackResponses[language] || fallbackResponses.it;
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      const companyMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: "company",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, companyMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
            aria-label={t("openChat")}
          >
            <FiMessageCircle className="w-6 h-6 md:w-7 md:h-7" />
            {messages.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
                {messages.length}
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized
                ? "60px"
                : isMobile
                ? "calc(100vh - 8rem)"
                : "600px",
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100vw-2rem)] md:w-96 max-w-[calc(100vw-2rem)] md:max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <FiMessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{t("chatTitle")}</h3>
                  <p className="text-xs text-white/80">{t("chatSubtitle")}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label={isMinimized ? t("maximize") : t("minimize")}
                >
                  <FiMinimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    // Cancella i messaggi quando si chiude la chat
                    setMessages([]);
                    localStorage.removeItem("chatMessages");
                  }}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label={t("closeChat")}
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800">
                  {messages.length === 0 ? (
                    <div className="text-center py-8">
                      <FiMessageCircle className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-600 mb-3" />
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {t("chatWelcomeMessage")}
                      </p>
                    </div>
                  ) : (
                    messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${
                          message.sender === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                              : "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap break-words">
                            {message.text}
                          </p>
                          <p
                            className={`text-xs mt-1 ${
                              message.sender === "user"
                                ? "text-white/70"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </motion.div>
                    ))
                  )}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white dark:bg-gray-700 rounded-2xl px-4 py-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          />
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={t("chatPlaceholder")}
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={sendMessage}
                      disabled={!inputMessage.trim()}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center"
                      aria-label={t("sendMessage")}
                    >
                      <FiSend className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chat;
