import React from 'react';
import { PROFILE } from '../constants';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50/50">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100/50 blur-3xl opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 font-semibold text-sm mb-6">
              Available for Research & Systems Engineering Roles
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
              Hello, I'm <span className="text-blue-600">{PROFILE.name}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-slate-600 font-medium mb-6">
              {PROFILE.role}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PROFILE.bio}
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all hover:-translate-y-1 flex items-center"
              >
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
              <a 
                href={PROFILE.website} 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 bg-slate-800 text-white font-medium rounded-lg shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-1 flex items-center"
              >
                View GitHub <Github className="ml-2 h-4 w-4" />
              </a>
              <a 
                href={`mailto:${PROFILE.email}`}
                className="px-6 py-3 bg-white text-slate-700 border border-slate-200 font-medium rounded-lg hover:bg-slate-50 transition-all flex items-center"
              >
                Contact Me <Mail className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex justify-center lg:justify-start items-center space-x-6">
              <a href={PROFILE.website} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/yashagarwal2004" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
               <a href="mailto:y2907ash@gmail.com" className="text-slate-400 hover:text-red-600 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative flex-shrink-0">
             <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src="profile.jpg" 
                  alt="Yash Agarwal" 
                  className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white z-10"
                />
                {/* Decorative status indicator */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-6 h-6 bg-green-500 border-4 border-white rounded-full z-20" title="Online / Working"></div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;