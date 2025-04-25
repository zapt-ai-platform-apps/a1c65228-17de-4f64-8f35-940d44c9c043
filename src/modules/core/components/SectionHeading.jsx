import React from 'react';

export default function SectionHeading({ title, subtitle, centered = false, light = false }) {
  return (
    <div className={`mb-10 ${centered ? 'text-center mx-auto' : ''}`}>
      <h2 className={`section-title ${light ? 'text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${light ? 'text-gray-200' : ''} ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}