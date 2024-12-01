import React, { useState } from "react";
import { ProjectInfoProps } from "../data/Props";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard: React.FC<ProjectInfoProps> = ({
  title,
  description,
  status,
  technologies,
  projectUrl,
  photoUrl,
  authors,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="border border-white overflow-hidden mb-8 cursor-pointer relative"
    >
      <div
        className={`flex items-center bg-black text-white relative transition-all duration-500 ease-in-out`}
        style={{
          padding: expanded ? "16px" : "10px",
          borderRadius: "10px",
          border: expanded ? "1px solid #666" : "1px solid transparent",
          transition: "border 0.5s ease-in-out, padding 0.5s ease-in-out",
        }}
      >
        <div
          className={`w-32 h-32 bg-gray-800 flex items-center justify-center relative transition-all duration-500 ease-in-out`}
          style={{
            transform: expanded ? "scale(1)" : "scale(0.9)",
            opacity: expanded ? 1 : 0.8,
            transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
          }}
        >
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={`${title} image`}
              className="object-cover w-full h-full transition-all duration-500 ease-in-out"
            />
          ) : (
            <span className="text-gray-500">Фото</span>
          )}
          {expanded && projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 left-2 text-white hover:text-gray-400 transition-all duration-300"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
        <div
          className={`flex-1 pl-4 transition-all duration-500 ease-in-out relative`}
          style={{
            opacity: expanded ? 1 : 1,
            transform: expanded ? "scale(1)" : "scale(0.95)",
            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
          }}
        >
          <div
            className={`transition-all duration-500 ease-in-out relative`}
            style={{
              opacity: expanded ? 1 : 1,
              transform: expanded ? "scale(1)" : "scale(0.95)",
              transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            }}
          >
            <h3 className="text-xl font-bold font-playfair">{title}</h3>
            <p className="text-gray-400 italic font-marxianaItalic">
              {description}
            </p>
          </div>

          {expanded && (
            <>
              <hr className="border-t-1 border-gray-500 mb-3" />
              <p className="mb-0.5 font-playfair text-xl">
                <strong>Технологии:</strong>{" "}
                <span className="text-gray-300 font-marxianaItalic">
                  {technologies.join(", ")}.
                </span>
              </p>
              <p className="mb-0.5 font-playfair text-xl">
                <strong>Статус:</strong>{" "}
                <span className="text-gray-300 font-marxianaItalic">
                  {status === "completed" && "Завершён"}
                  {status === "active" && "Активен"}
                  {status === "planned" && "Запланирован"}.
                </span>
              </p>
              <p className="mb-0.5 font-playfair text-xl">
                <strong>Авторы:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-200 font-marxianaItalic">
                {authors.map((author, index) => (
                  <li key={index}>
                    {author.firstName} {author.lastName} (@{author.nickname})
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
