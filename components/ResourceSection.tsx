import React from 'react';
import { RESOURCES } from '../constants';

const ResourceSection: React.FC = () => {
  return (
    <section id="resources" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">常用資源連結</h2>
          <p className="mt-4 text-lg text-slate-600">
            華地產會員專屬的工具箱，整合所有您需要的表單與系統
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((resource, index) => (
            <a
              key={resource.id}
              href={resource.link}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-colors duration-300 ${
                    index % 3 === 0 ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
                    index % 3 === 1 ? 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white' :
                    'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white'
                }`}>
                  <i className={resource.iconClass}></i>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-slate-100 group-hover:text-slate-500 transition-colors">
                    <i className="fas fa-external-link-alt text-xs"></i>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                {resource.title}
              </h3>
              <p className="text-slate-500 leading-relaxed flex-grow">
                {resource.subtitle}
              </p>
              
              <div className="mt-6 pt-6 border-t border-slate-50 flex items-center text-sm font-bold text-slate-400 group-hover:text-primary-600 transition-colors">
                <span>立即前往</span>
                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;