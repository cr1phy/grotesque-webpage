import React from "react";
import { TeamMemberProps } from "../data/Props";

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  firstName,
  lastName,
  age,
  hobbies,
  role,
  nickname,
  telegramUrl,
  githubUrl,
  vkUrl,
  discordUrl,
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      {/* Карточка */}
      <div className="flex flex-row w-full max-w-screen-xl mx-auto px-4">
        {/* Левая часть с изображением */}
        <div className="flex-1 flex items-center justify-center">
          <div className="border-2 border-white shadow-lg p-1">
            <img
              src={`/photos/${nickname}.png`}
              alt={`${firstName} ${lastName}`}
              className="w-full h-auto object-cover"
              style={{ maxHeight: "600px" }}
            />
          </div>
        </div>

        {/* Правая часть с текстом */}
        <div className="flex-1 px-6 flex flex-col justify-center">
          {/* Заголовок */}
          <h1 className="text-3xl font-playfair font-semibold mb-2">
            {firstName} {lastName}{" "}
            <span className="text-gray-400 text-2xl font-marxianaItalic">
              ({age})
            </span>
          </h1>
          <p className="text-gray-400 text-lg font-marxianaItalic mb-4">
            @{nickname}
          </p>

          {/* Роль */}
          <p className="text-2xl font-southern mb-4">{role}</p>

          {/* Разделитель */}
          <div className="w-full border-t border-gray-600 my-4"></div>

          {/* Увлечения */}
          <div>
            <h2 className="text-xl font-playfair font-semibold mb-3">
              Увлечения.
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg font-marxiana">
              {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>

          {/* Разделитель */}
          <div className="w-full border-t border-gray-600 my-4"></div>

          {/* Ссылки на соцсети */}
          <div className="flex space-x-5 mt-4">
            {telegramUrl && (
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src="/icons/telegram.svg"
                  alt="Telegram"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src="/icons/github.svg"
                  alt="GitHub"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>
            )}
            {vkUrl && (
              <a href={vkUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src="/icons/vk.svg"
                  alt="VK"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>
            )}
            {discordUrl && (
              <a href={discordUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src="/icons/discord.svg"
                  alt="Discord"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
