import { Github, Linkedin, Mail, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const HomePage = () => {
  return (
    <div>
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <div className="mt-8">
          <p className="text-4xl md:text-6xl font-bold text-gray-900">
            Hi, I am Sai Ram <br />
            <span className="text-indigo-600">
              <Typewriter
                words={[
                  'I develop software',
                  'I build infrastructure',
                  'I migrate services from on-prem to cloud',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </p>
          <p className="mt-4 text-xl text-gray-600">{'Software Engineer'}</p>
        </div>

        {/* Rest of your content stays unchanged */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
              alt="Professional headshot"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-8">
            {/* Professional Overview */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Professional Overview</h3>
              <p className="text-gray-600 mb-6">
                A versatile professional with expertise in both Cloud Infrastructure and Software Engineering.
                Demonstrated success in optimizing cloud resources, implementing robust DevOps practices,
                and developing innovative software solutions that drive business value.
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xl font-semibold mb-3 flex items-center">
                <GraduationCap className="mr-2" /> Education
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold">University of Massachusetts Lowell</h5>
                  <p className="text-gray-600">Master of Science in Computer Science</p>
                  <p className="text-gray-500 text-sm">Jan 2024 – May 2025</p>
                </div>
                <div>
                  <h5 className="font-semibold">Sri Chandrasekharendra Saraswathi Viswa Maha Vidyalaya</h5>
                  <p className="text-gray-600">Bachelor of Engineering in Mechanical</p>
                  <p className="text-gray-500 text-sm">Aug 2017 – May 2021</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xl font-semibold mb-3 flex items-center">
                <Award className="mr-2" /> Certifications
              </h4>
              <div className="space-y-2">
                <a
                  href="https://www.credly.com/badges/bc1aaba3-912d-4fbb-aa04-fa48be354dc9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  • AWS Solutions Architect Associate
                </a>
                <a
                  href="https://www.credly.com/badges/c9a3662e-2b58-4d8a-89f6-83bda482ffc9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  • Microsoft Azure Administrator (AZ-104)
                </a>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-xl font-semibold mb-3 flex items-center">
                <Briefcase className="mr-2" /> Experience
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold">Client - Ericsson</h5>
                  <p className="text-gray-600">
                    • Managed 18-25 Jira tickets per month, improving task completion rates and team coordination. <br />
                    • Implemented automated CI/CD pipelines with Docker, Kubernetes & Jenkins, increasing deployment frequency by 25%. <br />
                    • Provisioned, resized, and managed VMs with dynamic scaling, reducing infrastructure costs by 20%. <br />
                    • Created and extended support for storage services like ELK, SQL databases, and object storage. <br />
                    • Configured VPCs, Network Security Groups, and VPC peering, securing app engines for business needs. <br />
                    • Created user roles and implemented RBAC for secure server and storage access. <br />
                    • Worked with monitoring tools like Zabbix and check_mk, reducing downtime by 20% and increasing system reliability by 15%. <br />
                    • Provided hands-on mentorship, boosting project completion rates by 30% and team productivity by 25%.
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
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
                href="mailto:sairam.peruri.work@gmail.com?subject=Hello&body=Hi%20there,"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
