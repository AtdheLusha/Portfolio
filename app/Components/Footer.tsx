"use client";
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLanguage } from "@/app/contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { key: "home", href: "/#home" },
    { key: "services", href: "/#services" },
    { key: "company", href: "/#company" },
    { key: "projects", href: "/projects" },
    { key: "about", href: "/#about" },
    { key: "contact", href: "/#Contact" },
  ];

  return (
    <footer
      id="Contact"
      className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-300 py-16 px-4 md:px-8 lg:px-12 xl:px-16 relative transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-12">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              ALCODE
            </h4>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-sm">
              {t("companyDescription")}
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/atdhe-lusha-6495351a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://github.com/AtdheLusha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://wa.me/393891105454"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:bg-green-500 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("home")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("services")}
            </h4>
            <ul className="space-y-3">
              {[
                {
                  titleKey: "dedicatedTeams",
                  href: "/services/dedicated-teams",
                },
                {
                  titleKey: "mobileDevelopment",
                  href: "/services/mobile-development",
                },
                {
                  titleKey: "technologyConsulting",
                  href: "/services/technology-consulting",
                },
                {
                  titleKey: "uiUxDesign",
                  href: "/services/ui-ux-design",
                },
                {
                  titleKey: "softwareTesting",
                  href: "/services/software-testing",
                },
                {
                  titleKey: "webDevelopment",
                  href: "/services/web-development",
                },
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {t(service.titleKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("company")}
            </h4>
            <ul className="space-y-3">
              {[
                {
                  titleKey: "aboutUs",
                  href: "#about",
                },
                {
                  titleKey: "howWeWork",
                  href: "#about",
                },
                {
                  titleKey: "careers",
                  href: "#careers",
                },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {t(item.titleKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("contacts")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaPhone
                  className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                  size={16}
                />
                <a
                  href="tel:+393891105454"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  +39 389 110 5454
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope
                  className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                  size={16}
                />
                <a
                  href="mailto:atdhelusha0@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm break-all"
                >
                  atdhelusha0@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt
                  className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                  size={16}
                />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  Rome, Italy
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Alcode. {t("madeWithCare")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
