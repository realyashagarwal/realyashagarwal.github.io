import React from 'react';
import Section from './Section';
import { CERTIFICATIONS } from '../constants';
import { Award, ShieldCheck, Terminal, Globe, BookOpen } from 'lucide-react';

const Certifications: React.FC = () => {
  const getIcon = (issuer: string) => {
    if (issuer.includes("Google")) return <Terminal className="h-6 w-6" />;
    if (issuer.includes("United Nations") || issuer.includes("1M1B")) return <Globe className="h-6 w-6" />;
    if (issuer.includes("Udemy") || issuer.includes("NPTEL")) return <BookOpen className="h-6 w-6" />;
    return <Award className="h-6 w-6" />;
  };

  return (
    <Section title="Certifications & Honors" subtitle="Recognized expertise">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <div key={index} className="flex flex-col p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all h-full">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mr-3">
                {getIcon(cert.issuer)}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {cert.issuer.split('(')[0].trim()}
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{cert.name}</h3>
            
            <p className="text-blue-600 font-medium text-xs mb-3 flex-grow">
               {cert.issuer}
            </p>
            
            {cert.details && (
              <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-3 mt-auto">
                {cert.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;