
import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "G. Pullaiah College of Engineering and Technology, Kurnool",
      score: "CGPA: 8.9",
      duration: "Aug 2023 – July 2027",
      status: "current"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College, Kurnool",
      score: "Score: 88.2%",
      duration: "2023",
      status: "completed"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Education
        </h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className={`relative p-8 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
              edu.status === 'current' 
                ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30 hover:border-blue-400/50' 
                : 'bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-500/30 hover:border-green-400/50'
            }`}>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  edu.status === 'current' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                    : 'bg-gradient-to-r from-green-500 to-blue-600'
                }`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-gray-300 mb-3">{edu.institution}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold">{edu.score}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">{edu.duration}</span>
                    </div>
                  </div>
                </div>
                
                {edu.status === 'current' && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full animate-pulse">
                      Current
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
