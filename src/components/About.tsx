
import React from 'react';
import { Lightbulb, Zap, Brain } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Bio</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I am a highly creative and innovative learner with a passion for exploring technology and solving real-world problems. 
                As a quick learner with strong analytical thinking, I enjoy turning ideas into actionable projects using my skills in programming, AI, and web technologies.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Current Focus</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing B.Tech in Electronics and Communication Engineering with a CGPA of 8.9. 
                My technical interests span across programming languages, AI/ML, and automation tools.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl border border-green-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-semibold text-white">Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Whether it's building intelligent systems or developing web interfaces, I'm always eager to dive into new challenges 
                and learn emerging tools and frameworks. I believe in continuous growth and using technology to make a meaningful impact.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-gradient-to-b from-blue-900/30 to-transparent rounded-xl border border-blue-500/10">
                <div className="text-3xl font-bold text-blue-400 mb-2">8.9</div>
                <div className="text-gray-400 text-sm">CGPA</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-b from-purple-900/30 to-transparent rounded-xl border border-purple-500/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">2027</div>
                <div className="text-gray-400 text-sm">Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
