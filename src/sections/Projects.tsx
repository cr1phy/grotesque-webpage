import { projects } from '../data/Data';
import ProjectCard from '../components/ProjectCard'; // Заменил на ProjectInfo

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-10">
      <h2 className="text-4xl font-extrabold text-center mb-8 font-playfair">Проекты</h2>
      <div className="container mx-auto px-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} status={project.status as "active" | "completed" | "planned"} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
