import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, Download, Code, Briefcase, GraduationCap, User, MessageCircle, Award } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const languagesFrameworks = [
    { name: 'Python', icon: '🐍' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express.js', icon: 'EX' },
    { name: 'Bootstrap', icon: 'B' }
  ];

  const databaseTools = [
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MYSQL', icon: '🐬' },
    { name: 'Tableau', icon: '📊' },
    { name: 'Github', icon: '🐙' },
    { name: 'Excel', icon: '📊' }
  ];

  const projects = [
    {
      title: 'E-COMMERCE (FRONT-END)',
      description: 'Modern e-commerce website with responsive design and user-friendly interface',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      buildWith: ['HTML', 'CSS', 'JavaScript'],
      libraries: ['Bootstrap'],
      github: 'https://github.com/Rahul62063157',
      live: '#'
    },
    {
      title: 'Chatbot with API',
      description: 'Interactive chatbot implementation using advanced APIs',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      buildWith: ['Python','HTML','CSS', 'JavaScript'],
      libraries: ['API Integration'],
      github: 'https://github.com/Rahul62063157',
      live: '#'
    },
    {
      title: 'Calculator',
      description: 'A functional calculator application with modern UI',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      buildWith: ['HTML', 'CSS', 'JavaScript'],
      libraries: ['Vanilla JS'],
      github: 'https://github.com/Rahul62063157',
      live: '#'
    },
    {
      title: 'Employee Management System',
      description: 'Comprehensive system for managing employee data and operations',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      buildWith: [ 'SQL',],
      libraries: ['Database Management'],
      github: 'https://github.com/Rahul62063157',
      live: '#'
    },
    {
      title: 'Amazon Clone',
      description: 'E-commerce website clone with modern features and functionality',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
      buildWith: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      libraries: ['React Components'],
      github: 'https://github.com/Rahul62063157',
      live: '#'
    }
  ];

  const certifications = [
    {
      title: 'Python 3 programming ',
      provider: '(Coursera)',
      year: '2023'
    },
    {
      title: 'Java Script ',
      provider: 'Infosys Springboard',
      year: '2024'
    },
    {
      title: 'React.Js',
      provider: 'Infosys Springboard',
      year: '2024'
    },
    {
      title: 'Excel Basics for Data Analysis ',
      provider: '(Coursera)',
      year: '2024'
    }
  ];

  const interpersonalSkills = [
    {
      title: 'Teamwork',
      description: 'Excellent collaboration and team coordination abilities'
    },
    {
      title: 'Decision Making',
      description: 'Strong analytical and problem-solving capabilities'
    },
    {
      title: 'Self-awareness',
      description: 'Deep understanding of personal strengths and growth areas'
    }
  ];

  const languages = ['English', 'Hindi'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-gray-800">Rahul Kumar</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'home', label: 'HOME', icon: User },
                  { id: 'skills', label: 'SKILL', icon: Code },
                  { id: 'projects', label: 'PROJECTS', icon: Briefcase },
                  { id: 'education', label: 'EDUCATION', icon: GraduationCap },
                  { id: 'contact', label: 'CONTACT', icon: MessageCircle }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      activeSection === id
                        ? 'text-indigo-600 border-b-2 border-indigo-600'
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-indigo-600 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'HOME', icon: User },
                { id: 'skills', label: 'SKILL', icon: Code },
                { id: 'projects', label: 'PROJECTS', icon: Briefcase },
                { id: 'education', label: 'EDUCATION', icon: GraduationCap },
                { id: 'contact', label: 'CONTACT', icon: MessageCircle }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 w-full px-3 py-2 text-base font-medium transition-all duration-200 ${
                    activeSection === id
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-16 h-0.5 bg-indigo-600 mr-4"></div>
                <span className="text-indigo-600 font-medium tracking-wide">Rahul Kumar</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-6 leading-tight">
                Python
                <br />
                <span className="font-normal">Developer</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Passionate software developer pursuing MCA from Chandigarh University. 
                Skilled in Python, JavaScript, and modern web technologies with strong problem-solving abilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="inline-flex items-center px-8 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <Download className="w-5 h-5 mr-2" />
                  <a className='no-underline' href="https://drive.google.com/file/d/1cMpM0TK8qe4eewqnMbWf60SDb1S1U9UB/view?usp=drive_link">View Resume</a>
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center px-8 py-3 border-2 border-gray-800 text-gray-800 font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="/aaaa.jpg" 
                    alt="Rahul Kumar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/20 to-purple-600/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-0.5 bg-indigo-600 mr-4"></div>
              <span className="text-indigo-600 font-medium tracking-wide">01</span>
            </div>
            <h2 className="text-5xl font-light text-gray-800 mb-4">My Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Languages & Frameworks */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">PROGRAMMING LANGUAGES</h3>
              <div className="grid grid-cols-3 gap-4">
                {languagesFrameworks.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database & Tools */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">DATABASE & TOOLS</h3>
              <div className="grid grid-cols-3 gap-4">
                {databaseTools.map((tool, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="text-2xl mb-2">{tool.icon}</div>
                    <span className="text-sm font-medium text-gray-700">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Interpersonal Skills */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Interpersonal Skills</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {interpersonalSkills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{skill.title}</h4>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Languages */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Languages Known</h3>
            </div>
            
            <div className="flex justify-center space-x-8">
              {languages.map((language, index) => (
                <div key={index} className="bg-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-lg font-medium text-gray-800">{language}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-8">
              My
              <br />
              Projects
            </h2>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded font-medium hover:bg-indigo-700 transition-colors duration-200">
              ALL
            </button>
          </div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Build With</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.buildWith.map((tech, techIndex) => (
                              <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Libraries used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.libraries.map((lib, libIndex) => (
                              <span key={libIndex} className="text-sm text-gray-600">
                                {lib}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded font-medium hover:bg-indigo-700 transition-colors duration-200 w-fit">
                      View Site
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-0.5 bg-indigo-600 mr-4"></div>
              <span className="text-indigo-600 font-medium tracking-wide">03</span>
            </div>
            <h2 className="text-5xl font-light text-gray-800 mb-4">My Education And Certification</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Education Timeline */}
            <div className="relative pl-8 pb-12">
              <div className="absolute left-0 top-0 w-4 h-4 bg-indigo-600 rounded-full"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-indigo-200"></div>
              
              <div className="ml-4">
                <div className="bg-gray-800 text-white px-4 py-2 rounded inline-block mb-4">
                  August 2023 - june 2025
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg text-gray-600 mb-2">Chandigarh University, Punjab</h3>
                  <h4 className="text-xl font-semibold text-indigo-600 mb-2">Master Of Computer Applications (MCA)</h4>
                  <p className="text-gray-600">CGPA: 7.20</p>
                </div>
                <div className="ml-4">
                <div className="bg-gray-800 text-white px-4 py-2 rounded inline-block mb-4">
                 May 2014 - June 2018
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg text-gray-600 mb-2"> Lalit Narayan Mithila University ,Bihar</h3>
                  <h4 className="text-xl font-semibold text-indigo-600 mb-2">Bachelor of Science(B.SC)</h4>
                  <p className="text-gray-600">Percentage: 64.3%</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <Award className="w-6 h-6 text-indigo-600 mr-3" />
                      <h4 className="text-lg font-semibold text-gray-800">{cert.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-2">{cert.provider}</p>
                    <p className="text-sm text-gray-500">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-0.5 bg-indigo-600 mr-4"></div>
              <span className="text-indigo-600 font-medium tracking-wide">04</span>
            </div>
            <h2 className="text-5xl font-light text-gray-800 mb-4">Contact Me</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Phone Number</h3>
                <p className="text-gray-600">+91 9525969744</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Email</h3>
                <p className="text-gray-600">Rahul62063157@gmail.com</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Social Network</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/rahul-kumar-8088b4314/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-white rounded flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/Rahul62063157" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-white rounded flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="mailto:Rahul62063157@gmail.com" className="w-10 h-10 bg-gray-800 text-white rounded flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  placeholder="Your E-mail"
                />
              </div>
              
              <div>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  placeholder="Phone Number"
                />
              </div>
              
              <div>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Rahul Kumar. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://github.com/Rahul62063157" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/rahul-kumar-8088b4314/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:Rahul62063157@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
