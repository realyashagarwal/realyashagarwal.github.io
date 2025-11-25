import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import { CheckCircle2, Sigma, Cpu, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes("Math")) return <Sigma className="h-6 w-6 text-blue-600" />;
    if (category.includes("Robotics") || category.includes("Learning")) return <Cpu className="h-6 w-6 text-blue-600" />;
    return <Terminal className="h-6 w-6 text-blue-600" />;
  };

  return (
    <Section title="Technical Proficiency" subtitle="Toolkit & Foundations">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup, index) => (
          <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col h-full">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 rounded-lg mr-3">
                 {getIcon(skillGroup.category)}
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {skillGroup.category}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skillGroup.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 shadow-sm">
                  <CheckCircle2 className="w-3 h-3 text-green-500 mr-2" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;