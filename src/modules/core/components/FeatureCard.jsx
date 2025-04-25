import React from 'react';
import { Link } from 'react-router-dom';

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  color = 'primary', 
  link,
  linkText = 'Pelajari Lebih Lanjut'
}) {
  const colorClasses = {
    primary: 'from-primary-500 to-primary-700',
    secondary: 'from-secondary-500 to-secondary-700',
    accent: 'from-accent-500 to-accent-700',
    purple: 'from-purple-500 to-purple-700',
    blue: 'from-blue-500 to-blue-700',
    green: 'from-green-500 to-green-700',
    red: 'from-red-500 to-red-700',
    orange: 'from-orange-500 to-orange-700',
  };

  const iconColorClass = colorClasses[color] || colorClasses.primary;

  return (
    <div className="card hover:translate-y-[-5px] transition-all duration-300">
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${iconColorClass} flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-dark-600">{title}</h3>
      <p className="text-dark-400 mb-4">{description}</p>
      {link && (
        <Link to={link} className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
          {linkText}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </Link>
      )}
    </div>
  );
}