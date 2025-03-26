import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
            alt="Professional headshot"
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Your Name</h3>
          <p className="text-gray-600 mb-6">
            A passionate professional with expertise in both Cloud Infrastructure and Software Engineering.
            [Your brief introduction will go here]
          </p>
          
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