
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-4xl mx-auto">
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl animate-pulse">
            SM
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 animate-fade-in">
          Sadhanandha Murthy
        </h1>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
            <Mail className="w-5 h-5" />
            <span>sadhanandhamurthi@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors">
            <Phone className="w-5 h-5" />
            <span>+91 9949024167</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
            <MapPin className="w-5 h-5" />
            <span>Kurnool, Andhra Pradesh</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-6">
          <a href="#" className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
            <Github className="w-6 h-6 text-white" />
          </a>
          <a href="#" className="p-3 bg-gray-800 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25">
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        </div>
        
        <div className="mt-12">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
