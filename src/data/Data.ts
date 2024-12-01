export const participants = [
  {
    firstName: "Сергей",
    lastName: "Мотков",
    nickname: "cr1phy",
    age: 16,
    hobbies: ["Программирование", "Игры", "Фотография", "Дизайн", "Рисование"],
    role: "Разработчик-дизайнер",
    telegramUrl: "https://t.me/cr1phy",
    githubUrl: "https://github.com/cr1phy",
    discordUrl: "https://discord.com/users/1235176326986727427",
  },
  {
    firstName: "Никита",
    lastName: "Чадин",
    nickname: "Nekitos73",
    age: 16,
    hobbies: ["Компьютерные и настольные игры", "Программирование"],
    role: "Разработчик-тестировщик",
    telegramUrl: "https://t.me/Nekitos73",
    vkUrl: "https://vk.com/id592255528",
    discordUrl: "https://discordapp.com/users/971492217313198090/",
  },
  {
    firstName: "Михаил",
    lastName: "Борисов",
    nickname: "anuby",
    age: 16,
    hobbies: ["Игры", "Программирование"],
    role: "Тестировщик",
    telegramUrl: "https://t.me/anuby1",
    discordUrl: "https://discord.com/users/813799404930465833",
  },
];

export const projects = [
  {
    title: "Бот-пенсионер",
    description: "Игровой бот в Telegram, чтобы убить время.",
    status: "completed",
    technologies: ["Python", "TelegramBotAPI", "PostgreSQL"],
    authors: [
      {
        firstName: "Сергей",
        lastName: "Мотков",
        nickname: "cr1phy"
      },
      {
        firstName: "Дима",
        lastName: "Фредович",
        nickname: "fread_night"
      },
    ]
  },
  {
    title: "«Тауни»",
    description: "Это нечто большее, чем обычная игра.",
    status: "planned",
    technologies: ["Rust", "PostgreSQL", "Redis", "Websockets"],
    projectUrl: "https://towny.ru",
    photoUrl: "/photos/towny.jpg",
    authors: [
      {
        firstName: "Сергей",
        lastName: "Мотков",
        nickname: "cr1phy"
      },
      {
        firstName: "Дима",
        lastName: "Фредович",
        nickname: "fread_night"
      },
    ]
  }
]
