
import React from 'react';
import { Code, Brain, Globe, Cog } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["C", "C++ (with DSA)", "Python (with DSA)", "JavaScript (Basics)"],
      color: "blue"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["Artificial Intelligence", "Machine Learning", "AI Prompt Engineering", "AI Tools Exploration"],
      color: "purple"
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      color: "green"
    },
    {
      icon: Cog,
      title: "Automation & Hardware",
      skills: ["Blue Prism", "UiPath", "Microchip Programming", "RPA Tools"],
      color: "orange"
    }
  ];

  const colorMap = {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
    green: "from-green-500 to-emerald-500",
    orange: "from-orange-500 to-red-500"
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-700/30 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className={`w-12 h-12 bg-gradient-to-r ${colorMap[category.color]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${colorMap[category.color]} rounded-full`}></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
