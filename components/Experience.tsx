import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section title="Professional Experience" subtitle="My industry journey">
      <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white border-4 border-blue-600 group-hover:scale-125 transition-transform duration-300"></div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                  <div className="text-blue-600 font-medium text-lg">{job.company}</div>
                </div>
                <div className="flex flex-col sm:items-end mt-2 sm:mt-0 text-sm text-slate-500 space-y-1">
                   <div className="flex items-center">
                     <Calendar className="w-4 h-4 mr-1" /> {job.period}
                   </div>
                   <div className="flex items-center">
                     <MapPin className="w-4 h-4 mr-1" /> {job.location}
                   </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {job.description.map((desc, i) => (
                  <li key={i} className="flex items-start text-slate-600">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-blue-400 rounded-full"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;