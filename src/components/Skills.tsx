import React from 'react';
import { Award, Database, Code, Cloud, Server, PenTool as Tool, Shield } from 'lucide-react';

interface SkillsProps {
  currentRole: 'cloud' | 'software';
}

const Skills: React.FC<SkillsProps> = ({ }) => {
  const softwareSkills = [
    // Cloud Skills
    {
      category: 'AWS Services',
      icon: <Cloud className="text-blue-600" size={24} />,
      items: [
        'IAM & Security',
        'EC2 & EBS',
        'S3 & EFS',
        'VPC & Route 53',
        'RDS & DynamoDB',
        'CloudWatch',
        'SNS & SQS'
      ]
    },
    {
      category: 'Azure Services',
      icon: <Server className="text-blue-600" size={24} />,
      items: [
        'Azure AD',
        'VM & Managed Disks',
        'Blob Storage',
        'VNet & DNS',
        'Azure Monitor',
        'Queue Storage',
        'SendGrid'
      ]
    },
    {
      category: 'DevOps Tools',
      icon: <Tool className="text-blue-600" size={24} />,
      items: [
        'Docker',
        'Kubernetes',
        'Jenkins',
        'Terraform',
        'CI/CD Pipelines',
        'Infrastructure as Code'
      ]
    },
    {
      category: 'Security & Monitoring',
      icon: <Shield className="text-blue-600" size={24} />,
      items: [
        'Identity Management',
        'Network Security',
        'Cloud Security',
        'Performance Monitoring',
        'Log Analysis',
        'Security Compliance'
      ]
    },
    
    // Software Skills
    {
      category: 'Programming Languages',
      icon: <Code className="text-purple-600" size={24} />,
      items: [
        'Python',
        'Java',
        'C/C++',
        'JavaScript/TypeScript',
        'HTML/CSS',
        'SQL'
      ]
    },
    {
      category: 'Web Technologies',
      icon: <Server className="text-purple-600" size={24} />,
      items: [
        'Node.js',
        'React.js',
        'RESTful APIs',
        'Web Security',
        'Progressive Web Apps',
        'Frontend Optimization'
      ]
    },
    {
      category: 'Databases',
      icon: <Database className="text-purple-600" size={24} />,
      items: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Database Design',
        'Query Optimization',
        'Data Modeling'
      ]
    },
    {
      category: 'Development Tools',
      icon: <Tool className="text-purple-600" size={24} />,
      items: [
        'Git',
        'Docker',
        'Jenkins',
        'VS Code',
        'Postman',
        'Development Tools'
      ]
    }
  ];
  

  const skills = softwareSkills;

  return (
    <section className="py-12">
      <div className="mb-12">
        <div className="bg-white rounded-lg p-8 shadow-md mb-8">
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://www.credly.com/badges/bc1aaba3-912d-4fbb-aa04-fa48be354dc9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 border rounded-lg hover:border-blue-500 transition-colors"
            >
              <Award className="text-blue-600" size={32} />
              <div>
                <h4 className="font-semibold">AWS Solutions Architect Associate</h4>
                <p className="text-gray-600">Amazon Web Services</p>
              </div>
            </a>
            <a 
              href="https://www.credly.com/badges/c9a3662e-2b58-4d8a-89f6-83bda482ffc9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 border rounded-lg hover:border-blue-500 transition-colors"
            >
              <Award className="text-blue-600" size={32} />
              <div>
                <h4 className="font-semibold">Azure Administrator</h4>
                <p className="text-gray-600">Microsoft AZ-104</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-2 mb-4">
              {skillGroup.icon}
              <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
            </div>
            <ul className="space-y-3">
              {skillGroup.items.map((skill) => (
                <li
                  key={skill}
                  className="text-gray-600 flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;