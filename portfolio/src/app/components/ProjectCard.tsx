// src/app/components/ProjectCard.tsx

interface Project {
    title: string;
    description: string;
    link: string;
  }
  
  interface ProjectCardProps {
    project: Project;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ project: { title, description, link } }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <a href={link} className="text-blue-500 mt-4 inline-block">Learn More</a>
      </div>
    );
  };
  
  export default ProjectCard;
  