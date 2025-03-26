import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <div className="py-12">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mt-8">
          Software Engineering Projects
        </h1>
        <h2>Following projects showcase my skills and experience through examples of my work. Each project is briefly described with links to code repositories in it.</h2>
      </div>
      <Projects currentRole="software" />
    </div>
  );
};

export default ProjectsPage;
