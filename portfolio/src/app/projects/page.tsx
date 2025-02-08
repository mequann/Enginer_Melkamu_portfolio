// src/app/projects/page.js
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Smart Home Automation',
    description: 'Designed and developed an IoT-based smart home system.',
    link: '/projects/smart-home',
  },
  {
    title: 'Power System Analysis Tool',
    description: 'Developed a tool for simulating power flow in electrical grids.',
    link: '/projects/power-system',
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto p-6 mt-16 h-min-screen ">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
