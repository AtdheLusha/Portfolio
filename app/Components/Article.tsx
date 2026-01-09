"use client";
import React from "react";
import Link from "next/link";

interface ArticleProps {
  title: string;
  description?: string;
  imageSrc?: string;
  imageSrc2?: string;
  gradient?: string;
  href?: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  description,
  imageSrc,
  imageSrc2,
  gradient = "from-blue-500 to-cyan-500",
  href,
}) => {
  const content = (
    <div className="group relative bg-white dark:bg-black rounded-2xl overflow-hidden border-1 border-gray-300 dark:border-gray-700 transition-all duration-300 h-full flex flex-col md:flex-row cursor-pointer">
      {/* Gradient Background on Hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}
      />

      {/* Left Side - Title and Description */}
      <div className="relative z-10 w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
        <h3
          className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-300 text-gray-900 dark:text-white group-hover:bg-gradient-to-r ${gradient} group-hover:bg-clip-text group-hover:text-transparent`}
        >
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Right Side - Two Images */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-4 p-4 md:p-6">
        {/* Desktop Image */}
        {imageSrc && (
          <div className="hidden md:block relative w-full h-56 overflow-hidden rounded-lg">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        {/* Mobile Image */}
        {imageSrc2 && (
          <div className="block md:hidden relative w-full h-48 overflow-hidden rounded-lg">
            <img
              src={imageSrc2}
              alt={`${title} - Mobile`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
      </div>

      {/* Decorative Gradient Line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export default Article;
