"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaMoon,
  FaSun,
  FaGlobe,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useDarkModeContext } from "../providers/DarkModeProvider";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
  const [snowflakes, setSnowflakes] = useState<
    Array<{
      id: number;
      left: number;
      animationDuration: number;
      size: number;
      opacity: number;
      delay: number;
    }>
  >([]);

  const { language, setLanguage, t } = useLanguage();
  const languageMenuRefDesktop = useRef<HTMLDivElement>(null);
  const languageMenuRefMobile = useRef<HTMLDivElement>(null);
  const servicesMenuRef = useRef<HTMLLIElement>(null);
  const companyMenuRef = useRef<HTMLLIElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const companyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { mode, changeMode } = useDarkModeContext();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Genera fiocchi di neve
  useEffect(() => {
    const generateSnowflakes = () => {
      const flakes: Array<{
        id: number;
        left: number;
        animationDuration: number;
        size: number;
        opacity: number;
        delay: number;
      }> = [];
      const flakeCount = 30; // Numero di fiocchi

      for (let i = 0; i < flakeCount; i++) {
        flakes.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: 3 + Math.random() * 4,
          size: 4 + Math.random() * 6,
          opacity: 0.3 + Math.random() * 0.7,
          delay: Math.random() * 5,
        });
      }

      setSnowflakes(flakes);
    };

    // Aggiungi l'animazione CSS prima di generare i fiocchi
    if (typeof document !== "undefined") {
      const styleId = "snow-animation-style";
      // Rimuovi lo stile esistente se presente per ricrearlo
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }

      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes snowfall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(1000px) rotate(360deg);
            opacity: 0;
          }
        }
        @media (max-width: 768px) {
          .snowflake-mobile {
            font-size: 0.15em !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Genera i fiocchi dopo che lo stile è stato aggiunto
    generateSnowflakes();
  }, []);

  // Traccia lo stato attuale del tema
  useEffect(() => {
    const updateThemeState = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkTheme(isDark);
    };

    // Aggiorna lo stato iniziale
    updateThemeState();

    // Osserva i cambiamenti della classe dark
    const observer = new MutationObserver(updateThemeState);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [mode]);

  const toggleTheme = () => {
    // Determina lo stato attuale del tema guardando il DOM
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    // Cambia al tema opposto, salvando esplicitamente come "light" o "dark"
    changeMode(isCurrentlyDark ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Chiudi i sottomenu quando si chiude il menu mobile
    if (isMobileMenuOpen) {
      setIsServicesMenuOpen(false);
      setIsCompanyMenuOpen(false);
    }
  };

  // Blocca solo lo scroll della pagina quando il menu mobile è aperto (senza spostare i contenuti)
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Blocca solo lo scroll senza spostare i contenuti
      document.body.style.overflow = "hidden";
    } else {
      // Ripristina lo scroll
      document.body.style.overflow = "";
    }

    return () => {
      // Cleanup: ripristina sempre lo scroll quando il componente si smonta
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const languages = [
    { code: "en" as const, name: "English", flag: "🇬🇧" },
    { code: "it" as const, name: "Italiano", flag: "🇮🇹" },
    { code: "al" as const, name: "Shqip", flag: "🇦🇱" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  // Chiudi i menu quando si clicca fuori (solo per desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const isClickInsideDesktop =
        languageMenuRefDesktop.current?.contains(target);
      const isClickInsideMobile =
        languageMenuRefMobile.current?.contains(target);
      const isClickInsideServices = servicesMenuRef.current?.contains(target);
      const isClickInsideCompany = companyMenuRef.current?.contains(target);

      if (!isClickInsideDesktop && !isClickInsideMobile) {
        setIsLanguageMenuOpen(false);
      }
      // Chiudi i menu Services e Company solo su desktop (non su mobile quando il menu mobile è aperto)
      if (!isMobileMenuOpen) {
        if (!isClickInsideServices) {
          setIsServicesMenuOpen(false);
        }
        if (!isClickInsideCompany) {
          setIsCompanyMenuOpen(false);
        }
      }
    };

    if (
      isLanguageMenuOpen ||
      (isServicesMenuOpen && !isMobileMenuOpen) ||
      (isCompanyMenuOpen && !isMobileMenuOpen)
    ) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
      if (companyTimeoutRef.current) {
        clearTimeout(companyTimeoutRef.current);
      }
    };
  }, [
    isLanguageMenuOpen,
    isServicesMenuOpen,
    isCompanyMenuOpen,
    isMobileMenuOpen,
  ]);

  const handleLanguageChange = (langCode: "en" | "it" | "al") => {
    setLanguage(langCode);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="relative bg-white/70 dark:bg-black/70 backdrop-blur-md py-4 px-4 md:px-8 lg:px-12 xl:px-16 sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-mono text-gray-900 dark:text-white tracking-wider">
          <a href="/">ALCODE</a>
        </h1>

        {/* Desktop Navigation (CENTRATO) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center space-x-6">
            <li className="flex items-center">
              <a
                href="/"
                className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 font-normal whitespace-nowrap"
              >
                {t("home")}
              </a>
            </li>
            <li
              className="relative flex items-center"
              ref={servicesMenuRef as React.RefObject<HTMLLIElement>}
            >
              <button
                onClick={() => {
                  if (servicesTimeoutRef.current) {
                    clearTimeout(servicesTimeoutRef.current);
                  }
                  setIsCompanyMenuOpen(false);
                  setIsServicesMenuOpen(!isServicesMenuOpen);
                }}
                onMouseEnter={() => {
                  if (servicesTimeoutRef.current) {
                    clearTimeout(servicesTimeoutRef.current);
                  }
                  setIsCompanyMenuOpen(false);
                  setIsServicesMenuOpen(true);
                }}
                onMouseLeave={() => {
                  servicesTimeoutRef.current = setTimeout(() => {
                    setIsServicesMenuOpen(false);
                  }, 150);
                }}
                className="flex items-center text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 font-normal whitespace-nowrap"
                type="button"
              >
                <span>{t("services")}</span>
              </button>
              {isServicesMenuOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-[100] p-4 md:p-6"
                  onMouseEnter={() => {
                    if (servicesTimeoutRef.current) {
                      clearTimeout(servicesTimeoutRef.current);
                    }
                  }}
                  onMouseLeave={() => {
                    setIsServicesMenuOpen(false);
                  }}
                >
                  {/* Caret/Arrow pointing up */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 transform rotate-45"></div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative z-10">
                    {[
                      {
                        titleKey: "dedicatedTeams",
                        descKey: "dedicatedTeamsShort",
                        href: "/services/dedicated-teams",
                      },
                      {
                        titleKey: "mobileDevelopment",
                        descKey: "mobileDevelopmentShort",
                        href: "/services/mobile-development",
                      },
                      {
                        titleKey: "technologyConsulting",
                        descKey: "technologyConsultingShort",
                        href: "/services/technology-consulting",
                      },
                      {
                        titleKey: "uiUxDesign",
                        descKey: "uiUxDesignShort",
                        href: "/services/ui-ux-design",
                      },
                      {
                        titleKey: "softwareTesting",
                        descKey: "softwareTestingShort",
                        href: "/services/software-testing",
                      },
                      {
                        titleKey: "webDevelopment",
                        descKey: "webDevelopmentShort",
                        href: "/services/web-development",
                      },
                    ].map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-sm leading-normal">
                          {t(service.titleKey)}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                          {t(service.descKey)}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li
              className="relative flex items-center"
              ref={companyMenuRef as React.RefObject<HTMLLIElement>}
            >
              <button
                onClick={() => {
                  if (companyTimeoutRef.current) {
                    clearTimeout(companyTimeoutRef.current);
                  }
                  setIsServicesMenuOpen(false);
                  setIsCompanyMenuOpen(!isCompanyMenuOpen);
                }}
                onMouseEnter={() => {
                  if (companyTimeoutRef.current) {
                    clearTimeout(companyTimeoutRef.current);
                  }
                  setIsServicesMenuOpen(false);
                  setIsCompanyMenuOpen(true);
                }}
                onMouseLeave={() => {
                  companyTimeoutRef.current = setTimeout(() => {
                    setIsCompanyMenuOpen(false);
                  }, 150);
                }}
                className="flex items-center text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 font-normal whitespace-nowrap"
                type="button"
              >
                <span>{t("company")}</span>
              </button>
              {isCompanyMenuOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-[100] p-4 md:p-6"
                  onMouseEnter={() => {
                    if (companyTimeoutRef.current) {
                      clearTimeout(companyTimeoutRef.current);
                    }
                  }}
                  onMouseLeave={() => {
                    setIsCompanyMenuOpen(false);
                  }}
                >
                  {/* Caret/Arrow pointing up */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 transform rotate-45"></div>

                  {/* Company Grid - Single Column */}
                  <div className="grid grid-cols-1 gap-6 relative z-10">
                    {[
                      {
                        titleKey: "aboutUs",
                        descKey: "aboutUsDesc",
                        href: "/about-us",
                      },
                      {
                        titleKey: "howWeWork",
                        descKey: "howWeWorkDesc",
                        href: "/how-we-work",
                      },
                      {
                        titleKey: "careers",
                        descKey: "careersDesc",
                        href: "/careers",
                      },
                    ].map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setIsCompanyMenuOpen(false)}
                      >
                        <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-sm leading-normal">
                          {t(item.titleKey)}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                          {t(item.descKey)}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li className="flex items-center">
              <a
                href="/projects"
                className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 font-normal whitespace-nowrap"
              >
                {t("projects")}
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="/clients"
                className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 font-normal whitespace-nowrap"
              >
                {t("clients")}
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="/contact"
                className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 font-normal whitespace-nowrap"
              >
                {t("contact")}
              </a>
            </li>
          </ul>
        </nav>

        {/* Icone Social Desktop + Theme Toggle + Language Selector */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative" ref={languageMenuRefDesktop}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLanguageMenuOpen(!isLanguageMenuOpen);
              }}
              className="flex items-center space-x-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Select language"
              type="button"
            >
              <span className="text-sm font-semibold">
                {currentLanguage?.code.toUpperCase()}
              </span>
              <FaChevronDown size={12} />
            </button>

            {isLanguageMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-[100]"
                onClick={(e) => e.stopPropagation()}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleLanguageChange(lang.code);
                    }}
                    type="button"
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2 ${
                      language === lang.code
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {isDarkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        {/* Mobile Button + Theme Toggle + Language Selector */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Language Selector Mobile */}
          <div className="relative" ref={languageMenuRefMobile}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLanguageMenuOpen(!isLanguageMenuOpen);
              }}
              className="flex items-center space-x-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 p-2 rounded-lg"
              aria-label="Select language"
              type="button"
            >
              <span className="text-sm font-semibold">
                {currentLanguage?.code.toUpperCase()}
              </span>
              <FaChevronDown size={12} />
            </button>

            {isLanguageMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-[100]"
                onClick={(e) => e.stopPropagation()}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleLanguageChange(lang.code);
                    }}
                    type="button"
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2 ${
                      language === lang.code
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 p-2 rounded-lg"
            aria-label="Toggle theme"
          >
            {isDarkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-900 dark:text-gray-100 focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <>
          {/* Menu mobile */}
          <nav className="fixed top-16 left-0 right-0 md:hidden bg-white/70 dark:bg-black/70 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 shadow-2xl z-50">
            <div className="max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="px-4 py-6 space-y-2">
                {/* Home */}
                <a
                  href="/"
                  className="block px-4 py-3 rounded-xl text-gray-900 dark:text-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200 font-medium text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("home")}
                </a>

                {/* Services Dropdown Mobile */}
                <div>
                  <button
                    onClick={() => {
                      setIsServicesMenuOpen(!isServicesMenuOpen);
                      setIsCompanyMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-900 dark:text-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200 font-medium text-base"
                    type="button"
                  >
                    <span>{t("services")}</span>
                    {isServicesMenuOpen ? (
                      <FaChevronUp
                        size={12}
                        className="text-blue-600 dark:text-blue-400"
                      />
                    ) : (
                      <FaChevronDown
                        size={12}
                        className="text-blue-600 dark:text-blue-400"
                      />
                    )}
                  </button>
                  {isServicesMenuOpen && (
                    <div className="mt-2 space-y-2 pl-4 border-l-2 border-blue-200 dark:border-blue-800">
                      {[
                        {
                          titleKey: "dedicatedTeams",
                          descKey: "dedicatedTeamsShort",
                          href: "/services/dedicated-teams",
                        },
                        {
                          titleKey: "mobileDevelopment",
                          descKey: "mobileDevelopmentShort",
                          href: "/services/mobile-development",
                        },
                        {
                          titleKey: "technologyConsulting",
                          descKey: "technologyConsultingShort",
                          href: "/services/technology-consulting",
                        },
                        {
                          titleKey: "uiUxDesign",
                          descKey: "uiUxDesignShort",
                          href: "/services/ui-ux-design",
                        },
                        {
                          titleKey: "softwareTesting",
                          descKey: "softwareTestingShort",
                          href: "/services/software-testing",
                        },
                        {
                          titleKey: "webDevelopment",
                          descKey: "webDevelopmentShort",
                          href: "/services/web-development",
                        },
                      ].map((service, index) => (
                        <a
                          key={index}
                          href={service.href}
                          className="block px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-200 group"
                          onClick={() => {
                            setIsServicesMenuOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {t(service.titleKey)}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">
                            {t(service.descKey)}
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Company Dropdown Mobile */}
                <div>
                  <button
                    onClick={() => {
                      setIsCompanyMenuOpen(!isCompanyMenuOpen);
                      setIsServicesMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-900 dark:text-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200 font-medium text-base"
                    type="button"
                  >
                    <span>{t("company")}</span>
                    {isCompanyMenuOpen ? (
                      <FaChevronUp
                        size={12}
                        className="text-blue-600 dark:text-blue-400"
                      />
                    ) : (
                      <FaChevronDown
                        size={12}
                        className="text-blue-600 dark:text-blue-400"
                      />
                    )}
                  </button>
                  {isCompanyMenuOpen && (
                    <div className="mt-2 space-y-2 pl-4 border-l-2 border-blue-200 dark:border-blue-800">
                      {[
                        {
                          titleKey: "aboutUs",
                          descKey: "aboutUsDesc",
                          href: "/about-us",
                        },
                        {
                          titleKey: "howWeWork",
                          descKey: "howWeWorkDesc",
                          href: "/how-we-work",
                        },
                        {
                          titleKey: "careers",
                          descKey: "careersDesc",
                          href: "/careers",
                        },
                      ].map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-200 group"
                          onClick={() => {
                            setIsCompanyMenuOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {t(item.titleKey)}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">
                            {t(item.descKey)}
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Projects */}
                <a
                  href="/projects"
                  className="block px-4 py-3 rounded-xl text-gray-900 dark:text-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200 font-medium text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("projects")}
                </a>

                {/* Contact */}
                <a
                  href="/contact"
                  className="block px-4 py-3 rounded-xl text-gray-900 dark:text-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200 font-medium text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("contact")}
                </a>

                {/* Clients */}
                <a
                  href="/clients"
                  className="block px-4 py-3 rounded-xl text-gray-900 dark:text-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-200 font-medium text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("clients")}
                </a>
              </div>
            </div>
          </nav>
        </>
      )}

      {/* Animazione Neve sotto il Navbar */}
      <div className="absolute top-full left-0 right-0 h-[800px] pointer-events-none z-0 overflow-hidden">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute top-0 text-blue-600 dark:text-gray-300 select-none will-change-transform snowflake-mobile"
            style={{
              left: `${flake.left}%`,
              fontSize: `${flake.size}px`,
              opacity: flake.opacity,
              animation: `snowfall ${flake.animationDuration}s linear infinite`,
              animationDelay: `${flake.delay}s`,
              animationFillMode: "both",
            }}
          >
            ❄
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
