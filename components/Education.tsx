import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap, Trophy, Award, TrendingUp, BookOpen, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section title="Education" subtitle="Academic background">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          
          {/* Header Banner with Logo */}
          <div className="bg-slate-50 p-8 border-b border-slate-100">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
              <div className="flex-shrink-0 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                {/* Assuming user saved the logo as ju-logo.png */}
                <img 
                  src="ju-logo.png" 
                  alt="Jadavpur University Logo" 
                  className="w-20 h-20 object-contain"
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/80?text=JU";
                  }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{EDUCATION.institution}</h3>
                <p className="text-lg text-blue-600 font-medium mt-1">{EDUCATION.degree}</p>
                <div className="flex items-center justify-center md:justify-start mt-3 text-slate-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{EDUCATION.period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-slate-100 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            {/* SGPA */}
            <div className="p-6 text-center hover:bg-blue-50/50 transition-colors group">
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-900">8.10</div>
              <div className="text-sm text-slate-500 font-medium mt-1">Current SGPA (Sem 4)</div>
            </div>

            {/* Rank */}
            <div className="p-6 text-center hover:bg-purple-50/50 transition-colors group">
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-900">902</div>
              <div className="text-sm text-slate-500 font-medium mt-1">WBJEE Rank (Top 0.7%)</div>
            </div>

            {/* Gold Medal */}
            <div className="p-6 text-center hover:bg-yellow-50/50 transition-colors group relative overflow-hidden">
               {/* Shine effect background */}
               <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-100 rounded-full blur-2xl opacity-50"></div>
              <div className="flex justify-center mb-3 relative z-10">
                <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
              </div>
              <div className="text-xl font-bold text-slate-900 mt-1">Gold Medal</div>
              <div className="text-sm text-slate-500 font-medium mt-2">NPTEL Top 5% (Elite)</div>
            </div>

          </div>

          {/* Coursework & Additional Info */}
          <div className="p-8 bg-white">
            <h4 className="font-semibold text-slate-900 flex items-center mb-6">
              <BookOpen className="w-5 h-5 mr-2 text-slate-500" />
              Core Coursework
            </h4>
            
            <div className="flex flex-wrap gap-2">
              {[
                "Applied Mathematics",
                "Linear Algebra",
                "Statistics & Probability",
                "Control Systems", 
                "Digital Signal Processing", 
                "Machine Learning", 
                "Deep Learning", 
                "Data Structures & Algorithms"
              ].map((course, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 transition-colors">
                  {course}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Education;