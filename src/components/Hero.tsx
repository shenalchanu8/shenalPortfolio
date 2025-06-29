import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import shenal from './../images/shenal.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent dark:from-blue-900/10"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse dark:bg-purple-900/20"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000 dark:bg-blue-900/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Left side - Content */}
          <div className="lg:w-1/2 text-left animate-fade-in-up">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium mb-2">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight mb-4">
              Shenal De Silva
            </h1>
            <div className="relative inline-block">
              <span className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 font-semibold relative z-10">
                Full Stack Developer
              </span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-purple-400/30 dark:bg-purple-600/30 -z-0 transform translate-y-1"></span>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mt-6 mb-8 leading-relaxed max-w-lg">
              I craft exceptional digital experiences with modern web technologies. 
              Passionate about building clean, efficient, and user-centered applications.
            </p>

            {/* Social Links */}
            <div className="flex space-x-5 mb-10">
              <a
                href="https://github.com/shenalchanu8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-purple-400"
                aria-label="GitHub"
              >
                <Github size={22} className="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/shenal-de-silva-0a7670278/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-purple-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} className="text-blue-600 dark:text-blue-400" />
              </a>
              <a
                href="mailto:shenalchanuka3@gmail.com"
                className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-purple-400"
                aria-label="Email"
              >
                <Mail size={22} className="text-red-500 dark:text-red-400" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02] font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-blue-500/20"
              >
                <span>About Me</span>
                <ChevronDown size={18} />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] font-medium shadow-sm hover:shadow-md"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Image container with elegant border and shadow */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl z-10">
                <img
                  src={shenal}
                  alt="Shenal De Silva"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl border-8 border-purple-400/20 dark:border-purple-600/20 z-0"></div>
              <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl border-8 border-blue-400/20 dark:border-blue-600/20 z-0"></div>
              
              {/* Floating tech stack badges (optional) */}
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md z-20 border border-gray-200 dark:border-gray-700">
                
              </div>
              <div className="absolute -top-5 -right-5 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md z-20 border border-gray-200 dark:border-gray-700">
         
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            aria-label="Scroll down"
          >
            <ChevronDown size={24} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;