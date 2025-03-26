import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  currentRole: 'cloud' | 'software';
}
const Projects: React.FC<ProjectsProps> = () => {

  const softwareProjects = [
    {
      title: 'Biryani Food Ordering Platform',
      description: 'Developed a full-stack food ordering website using React and Node.js, featuring secure payment integration and real-time order tracking.',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
      tags: ['React', 'Node.js', 'Payment Integration'],
      links: {
        demo: '#',
        code: 'https://github.com/SaiRam-Peruri/Biryani-Food-Ordering-Platform'
      }
    },
    {
      title: 'Secure File Transfer System',
      description: 'Built a web-based secure file transfer and storage solution with encryption and user authentication features.',
      image: 'https://images.unsplash.com/photo-1568027762272-e4da8b386fe9',
      tags: ['Security', 'File Transfer', 'Web Interface'],
      links: {
        demo: '#',
        code: '#'
      }
    },
    {
      title: 'Keystroke Recognition System',
      description: 'Developed an Android app using TensorFlow to analyze accelerometer & gyroscope data for keystroke authentication, identifying security vulnerabilities in mobile typing.',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
      tags: ['Pattern Recognition', 'Sensor Data', 'Security'],
      links: {
        demo: '#',
        code: 'https://github.com/yojengrover/KeyStrokeRecoginition'
      }
    },
    {
      title: 'Predicting-Exam-Grade-using-Multimodal-Physiological-data',
      description: 'Created a machine learning model for predicting exam grades using multimodal physiological data, achieving 15% higher accuracy than baseline models.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
      tags: ['Machine Learning', 'Data Pipeline', 'Analysis'],
      links: {
        demo: '#',
        code: 'https://github.com/SaiRam-Peruri/Predicting-Exam-Grade-using-Multimodal-Physiological-data'
      }
    }
  ];

  const projects = softwareProjects;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.links.code}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github size={20} />
                <span>Code</span>
              </a>
              <a
                href={project.links.demo}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;