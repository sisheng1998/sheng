import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      data-scroll-section
      className="ss-projects-section container pb-16"
    >
      <h2 className="mb-24 text-7xl leading-tight tracking-tight xl:mb-20 xl:text-6xl lg:mb-16 lg:text-5xl md:mb-8 md:text-4xl">
        Featured Projects
      </h2>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            src={project.src}
            alt={project.alt}
            url={project.url}
            links={project.links}
            skills={project.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
