import React from 'react';
import { Code, Coffee, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '20+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    
    { icon: Users, label: 'Team Projects', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a full-stack developer with over 1 years of experience creating digital experiences 
                that make people's lives easier. I have a passion for developing applications that are 
                not just functional, but also beautiful and intuitive.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge with the developer community. I believe in continuous 
                learning and staying up-to-date with the latest industry trends.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My approach to development focuses on clean, maintainable code and exceptional user 
                experiences. I enjoy working in collaborative environments where I can contribute to 
                meaningful projects that make a real impact.
              </p>

              {/* Skills Preview */}
              <div className="pt-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Node.js', 'TypeScript', 'Python'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Personal Interests */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Beyond Coding
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              When I'm not immersed in code, I enjoy photography, hiking, reading tech blogs, 
              and experimenting with new cuisines. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;