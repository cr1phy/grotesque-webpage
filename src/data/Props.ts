export interface TeamMemberProps {
  firstName: string;
  lastName: string;
  age: number;
  hobbies: string[];
  role: string;
  nickname: string;
  telegramUrl?: string;
  githubUrl?: string;
  vkUrl?: string;
  discordUrl?: string;
}

interface Author {
  firstName: string;
  lastName: string;
  nickname: string;
}

export interface ProjectInfoProps {
  title: string;
  description: string;
  status: "active" | "completed" | "planned";
  technologies: string[];
  projectUrl?: string;
  photoUrl?: string;
  authors: Author[];
}
