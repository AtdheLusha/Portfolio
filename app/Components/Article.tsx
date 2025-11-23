import React from "react";

interface ArticleProps {
    title: string;
    description: string;
    linkText?: string;
    linkUrl?: string;
    imageSrc?: string;
}

const Article: React.FC<ArticleProps> = ({
    title,
    description,
    linkText = "Vedi Dettagli →",
    linkUrl = "#",
    imageSrc,
}) => {
    return (
        <div className="border border-gray-800 bg-black/15
        rounded-[15px] p-6 
        transform transition duration-500 hover:scale-[1.03]
        w-[100%] my-5 mx-0
        h-full sm:h-auto
        flex flex-col [box-shadow:10px_-10px_10px_rgba(0,0,0,0.3)]
        sm:overflow-hidden"> {/* Heqim overflow-hidden si baze, e vendosim vetem per desktop/tablet */}

            {imageSrc && (
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                </div>
            )}

            <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>

            {/* Përdorim overflow-y-auto per tekstin e gjate nese ka */}
            <p className="text-gray-400 mb-4 overflow-y-auto">{description}</p>

            <a
                href={linkUrl}
                className="inline-block mt-auto px-6 py-2 bg-blue-800 hover:bg-blue-600
                text-sm font-bold text-white rounded-full transition-all duration-300  
                border border-gray-800 [box-shadow:10px_-10px_10px_rgba(0,0,0,0.3)] 
                w-full sm:w-fit text-center"
            >
                {linkText}
            </a>
        </div>
    );
};

export default Article;
