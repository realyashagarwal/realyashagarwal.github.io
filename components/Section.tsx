import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = "", id }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
          {subtitle && (
            <div className="mt-2 w-20 h-1 bg-blue-600 rounded-full"></div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;