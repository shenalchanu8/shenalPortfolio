import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, logo: '⚛️' },
        { name: 'TypeScript', level: 90, logo: '📘' },
        { name: 'Tailwind CSS', level: 90, logo: '🎨' },
        { name: 'Flutter', level: 80, logo: '💙' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, logo: '🟢' },
        { name: 'Python', level: 85, logo: '🐍' },
        { name: 'Express.js', level: 88, logo: '🚀' },
        { name: 'REST APIs', level: 92, logo: '🔗' },
      ],
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 80, logo: '🍃' },
        { name: 'AWS', level: 75, logo: '☁️' },
        { name: 'Docker', level: 70, logo: '🐳' },
        { name: 'Firebase', level: 82, logo: '🔥' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, logo: '📝' },
        { name: 'VS Code', level: 95, logo: '💙' },
        { name: 'Figma', level: 75, logo: '🎨' },
        { name: 'Jest', level: 80, logo: '🃏' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.logo}</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stack Visualization */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Technology Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {[
                { name: 'React', emoji: '⚛️' },
                { name: 'Node.js', emoji: '🟢' },
                { name: 'TypeScript', emoji: '📘' },
                { name: 'Python', emoji: '🐍' },
                { name: 'Flutter', emoji: '💙' },
                { name: 'Express.js',emoji: '🚀' },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <div className="text-4xl mb-2">{tech.emoji}</div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;