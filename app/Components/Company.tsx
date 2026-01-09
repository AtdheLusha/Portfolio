"use client";
import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { motion, useInView, useAnimation } from "framer-motion";

const Company: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      number: 16,
      suffix: "+",
      labelKey: "companySize",
    },
    {
      number: 50,
      suffix: "+",
      labelKey: "projectsReleased",
    },
    {
      number: 2023,
      suffix: "",
      labelKey: "founded",
    },
  ];

  const CountUpNumber: React.FC<{
    end: number;
    suffix: string;
    duration?: number;
  }> = ({ end, suffix, duration = 2 }) => {
    const [count, setCount] = React.useState(0);
    const countRef = useRef(0);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
      if (isInView) {
        const startTime = Date.now();
        const startValue = 0;
        const endValue = end;

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / (duration * 1000), 1);

          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(
            startValue + (endValue - startValue) * easeOutQuart
          );

          setCount(currentValue);
          countRef.current = currentValue;

          if (progress < 1) {
            animationRef.current = requestAnimationFrame(animate);
          } else {
            setCount(endValue);
          }
        };

        animationRef.current = requestAnimationFrame(animate);
      }

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [isInView, end, duration]);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-3"
      >
        {count}
        {suffix && <span>{suffix}</span>}
      </motion.div>
    );
  };

  return (
    <motion.section
      id="company"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 py-20 sm:py-24 w-full mx-auto px-4 md:px-8 lg:px-12 xl:px-16"
      ref={ref}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-b from-gray-400 to-black dark:from-white dark:to-gray-500 bg-clip-text text-transparent"
            style={{ lineHeight: "1.1", paddingBottom: "0.2em" }}
          >
            {t("ourCompany")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
          >
            {t("companyDescription")}
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="text-center"
            >
              <CountUpNumber
                end={stat.number}
                suffix={stat.suffix}
                duration={2}
              />
              <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                {t(stat.labelKey)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Company;
