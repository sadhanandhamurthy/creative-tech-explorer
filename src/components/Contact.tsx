
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sadhanandhamurthi@gmail.com",
      href: "mailto:sadhanandhamurthi@gmail.com",
      color: "blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9949024167",
      href: "tel:+919949024167",
      color: "green"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kurnool, Andhra Pradesh, India",
      href: "#",
      color: "purple"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "sadhanandhamurthy",
      href: "#",
      color: "gray"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "sadhanandhamurthy",
      href: "#",
      color: "blue"
    }
  ];

  const colorMap = {
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
    purple: "from-purple-500 to-pink-500",
    gray: "from-gray-600 to-gray-800"
  };

  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Let's Connect!
        </h2>
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="w-6 h-6 text-cyan-400" />
            <p className="text-xl text-gray-300">
              I'm always open to learning, collaboration, and working on impactful projects.
            </p>
          </div>
          <p className="text-lg text-cyan-400 font-semibold">
            Let's connect and build something amazing!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6 text-blue-400" />
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a key={index} href={contact.href} className="group block">
                  <div className="p-4 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-xl border border-gray-700/30 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${colorMap[contact.color]} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{contact.label}</div>
                        <div className="text-white font-medium">{contact.value}</div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Github className="w-6 h-6 text-purple-400" />
              Social Links
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="group block">
                  <div className="p-4 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-xl border border-gray-700/30 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${colorMap[social.color]} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{social.label}</div>
                        <div className="text-white font-medium">{social.username}</div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
            <p className="text-gray-300 mb-6">
              Whether you have a project idea, want to discuss technology, or just want to connect - I'd love to hear from you!
            </p>
            <a href="mailto:sadhanandhamurthi@gmail.com" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
