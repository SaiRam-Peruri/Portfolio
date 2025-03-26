import { Github, Linkedin, Mail, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const HomePage = () => {
  return (
    <div>
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <div className="mt-8">
          <p className="text-4xl md:text-6xl font-bold text-gray-900">
            Hi, I am Sai Ram <br />
            <span className="text-green-600">
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

        {/* Content Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-start">
          {/* Left column – Image and Ericsson */}
          <div className="space-y-10">
            <div>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
              alt="Professional headshot"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            </div>
            {/* Ericsson Experience */}
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center  text-blue-600">
                <Briefcase className="mr-2" /> Professional Experience
              </h4>
              <div className="space-y-4">
                <h5 className="font-semibold">Cloud & DevOps Engineer – Client: Ericsson</h5>
                <p className="text-gray-600">
                  • Managed <strong>18–25 Jira tickets/month</strong>, boosting completion rates and team coordination.<br />
                  • Implemented <strong>CI/CD pipelines</strong> using <strong>Docker</strong>, <strong>Kubernetes</strong>, and <strong>Jenkins</strong> – increased deployment frequency by <strong>25%</strong>.<br />
                  • Resized and provisioned <strong>VMs with dynamic scaling</strong>, cutting infrastructure costs by <strong>20%</strong>.<br />
                  • Deployed services like <strong>ELK</strong>, <strong>SQL databases</strong>, and <strong>object storage</strong> for data and monitoring needs.<br />
                  • Configured <strong>VPCs</strong>, <strong>NSGs</strong>, and <strong>VPC peering</strong> – enabling secure and scalable app deployments.<br />
                  • Implemented <strong>RBAC</strong> for secure user and group access to servers and storage.<br />
                  • Used <strong>Zabbix</strong> and <strong>check_mk</strong> for monitoring, reducing downtime by <strong>20%</strong> and improving reliability by <strong>15%</strong>.<br />
                  • Mentored junior engineers, increasing team productivity and project success rates.
                </p>

              </div>
            </div>
          </div>

          {/* Right column – Overview, Education, Certifications, TA Roles, Socials */}
          <div className="space-y-8">
            {/* Overview */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Professional Overview</h3>
              <p className="text-gray-600 mb-6">
                A versatile professional with expertise in both Cloud Infrastructure and Software Engineering.
                Demonstrated success in optimizing cloud resources, implementing robust DevOps practices,
                and developing innovative software solutions that drive business value.
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xl font-semibold mb-3 flex items-center text-blue-600">
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
              <h4 className="text-xl font-semibold mb-3 flex items-center text-blue-600">
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

            {/* Teaching Assistant Roles */}
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold  text-blue-600">
                  Teaching Assistant – AWS Cloud Computing
                  <br />
                  <span className="text-sm font-normal text-gray-500">
                    University of Massachusetts Lowell · Aug 2024 – Dec 2024
                  </span>
                </h5>
                <p className="text-gray-600">
                  • Graded <strong>10+ AWS-based assignments</strong> including <strong>EC2</strong>, <strong>S3</strong>, <strong>IAM</strong>, <strong>Lambda</strong>, and <strong>CloudFormation</strong>.<br />
                  • Evaluated <strong>capstone projects</strong> for secure, scalable infrastructure deployments.<br />
                  • Delivered feedback via <strong>Blackboard</strong> and <strong>Gradescope</strong>.<br />
                  • Ensured timely and consistent evaluation of technical work.
                </p>

              </div>

              <div>
                <h5 className="font-semibold  text-blue-600">
                  Teaching Assistant – C/C++ Programming
                  <br />
                  <span className="text-sm font-normal text-gray-500">
                    University of Massachusetts Lowell · Jan 2025 – May 2025
                  </span>
                </h5>
                <p className="text-gray-600">
                  • Grading assignments and quizzes on <strong>pointers</strong>, <strong>memory management</strong>, <strong>OOP</strong>, and <strong>data structures</strong>.<br />
                  • Providing detailed inline feedback via <strong>Gradescope</strong> and <strong>Blackboard</strong>.<br />
                  • Supporting students in <strong>debugging</strong>, <strong>performance</strong>, and <strong>code clarity</strong>.<br />
                  • Collaborating with professors to maintain <strong>rubric quality</strong> and fairness.
                </p>

              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/SaiRam-Peruri"
                className="flex items-center space-x-2 text-black hover:text-gray-900 transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sairamperuri/"
                className="flex items-center space-x-2 text-violet-900 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:sairam.peruri.work@gmail.com?subject=Hello&body=Hi%20there,"
                className="flex items-center space-x-2 text-red-900 hover:text-gray-900 transition-colors"
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
