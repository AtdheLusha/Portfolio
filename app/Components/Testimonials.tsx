"use client";
import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      rating: 4,
      feedback:
        "ALCODE is an exceptional developer. He delivered our project on time and exceeded our expectations. The quality of work is outstanding.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      rating: 5,
      feedback:
        "Working with ALCODE was a pleasure. His ability to solve complex problems made the process smooth and efficient.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Emily Davis",
      role: "Designer",
      rating: 4,
      feedback:
        "I loved how he translated my designs into pixel-perfect code. The animations are exactly what we envisioned.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "David Wilson",
      role: "CTO at WebFlow",
      rating: 5,
      feedback:
        "Clean code, great communication, and fast delivery. Highly recommended for any frontend work.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Jessica Brown",
      role: "Marketing Director",
      rating: 5,
      feedback:
        "The new website has significantly increased our conversion rates. Fantastic job!",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      name: "Robert Martinez",
      role: "Founder at StartupX",
      rating: 4,
      feedback:
        "ALCODE transformed our vision into reality. Professional, creative, and always on time.",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "text-black dark:text-white fill-current"
                : "text-gray-300 dark:text-gray-600 fill-current"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 py-20 sm:py-24 w-full mx-auto px-4 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
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
            {t("whatClientsSay")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            {t("dontJustTake")}
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-black rounded-2xl p-8 border-1 border-gray-300 dark:border-gray-700 flex flex-col overflow-hidden transition-colors duration-300 h-full">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
              {/* Quote Icon */}
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-black dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Feedback */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1 leading-relaxed italic">
                &quot;{testimonial.feedback}&quot;
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                    <h4 className={`text-lg font-bold mb-1 transition-all duration-300 text-gray-900 dark:text-white group-hover:bg-gradient-to-r ${testimonial.gradient} group-hover:bg-clip-text group-hover:text-transparent`}>
                  {testimonial.name}
                </h4>
                <p className="text-gray-400 dark:gray-300 text-sm font-medium">
                  {testimonial.role}
                </p>
                  </div>
              </div>

              {/* Decorative Gradient Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
