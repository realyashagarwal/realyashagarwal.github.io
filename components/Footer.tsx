import React from 'react';
import { SOCIALS, PROFILE } from '../constants';
import { Github, Linkedin, Mail, BadgeCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Github className="h-5 w-5" />;
      case 'linkedin': return <Linkedin className="h-5 w-5" />;
      case 'mail': return <Mail className="h-5 w-5" />;
      case 'credly': return <BadgeCheck className="h-5 w-5" />;
      default: return null;
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">{PROFILE.name}</h2>
            <p className="text-slate-400 mt-2 max-w-sm">{PROFILE.tagline}</p>
          </div>
          
          <div className="flex space-x-6">
            {SOCIALS.map((social) => (
              <a 
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"
                title={social.platform}
              >
                {getIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Yash Agarwal. Built with React, Tailwind & Gemini AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;