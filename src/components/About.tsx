import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1682695794947-170c92542009?auto=format&fit=crop&w=987&q=80"
            alt="DevOps and software development"
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Sai Ram Peruri</h3>
          <p className="text-gray-600 mb-6">
            I am a passionate engineer with a strong foundation in both Software Development and Cloud Infrastructure. 
            I’ve worked on designing and building robust cloud environments using AWS, implemented secure and scalable CI/CD pipelines, 
            and developed end-to-end solutions that bridge DevOps with clean application architecture.
          </p>

          <p className="text-gray-600 mb-4">
            I’ve also served as a Teaching Assistant at the University of Massachusetts Lowell:
          </p>
          <ul className="text-gray-600 list-disc ml-5 mb-6 space-y-2">
            <li>
              <strong>AWS Cloud Computing (Aug 2024 – Dec 2024):</strong> Graded 10+ hands-on cloud assignments and capstone projects focused on infrastructure design using AWS services like EC2, S3, Lambda, IAM, and CloudFormation.
            </li>
            <li>
              <strong>C/C++ Programming (Jan 2025 – May 2025):</strong> Currently evaluating assignments and quizzes in Gradescope and Blackboard, offering detailed feedback on C/C++ code quality and logic.
            </li>
          </ul>

          <div className="flex space-x-4">
            <a
              href="https://github.com/SaiRam-Peruri"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sairamperuri/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:sairam.peruri.work@gmail.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
