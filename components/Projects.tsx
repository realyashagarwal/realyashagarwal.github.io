import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { ExternalLink, Layers, Brain, Cpu } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section title="Research & Projects" subtitle="Building the future">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg ${project.category === 'Research' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                  {project.category === 'Research' ? <Brain className="h-6 w-6" /> : <Cpu className="h-6 w-6" />}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;