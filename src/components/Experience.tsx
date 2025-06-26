
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Virtual Internship",
      company: "Eduskills",
      description: "Gained hands-on experience in Robotic Process Automation and Embedded Systems basics",
      tools: ["Blue Prism", "UiPath", "Microchip"],
      focus: "Robotic Process Automation and Embedded Basics",
      type: "RPA & Embedded"
    },
    {
      role: "Virtual Internship",
      company: "Plasmid",
      description: "Explored AI fundamentals and machine learning applications in real-world scenarios",
      tools: ["AI Tools", "Machine Learning", "Python"],
      focus: "AI Fundamentals, Machine Learning Applications",
      type: "AI & ML"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className={`relative p-8 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                exp.type === 'RPA & Embedded'
                  ? 'bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-indigo-500/30 hover:border-indigo-400/50'
                  : 'bg-gradient-to-r from-pink-900/30 to-red-900/30 border-pink-500/30 hover:border-pink-400/50'
              }`}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    exp.type === 'RPA & Embedded'
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600'
                      : 'bg-gradient-to-r from-pink-500 to-red-600'
                  }`}>
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-gray-300">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        exp.type === 'RPA & Embedded'
                          ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                          : 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Focus Area:</h4>
                      <p className="text-gray-300">{exp.focus}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Tools Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool, toolIndex) => (
                          <span key={toolIndex} className={`px-3 py-1 rounded-full text-xs ${
                            exp.type === 'RPA & Embedded'
                              ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                              : 'bg-pink-500/10 text-pink-300 border border-pink-500/20'
                          }`}>
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
