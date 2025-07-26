import React from 'react';

const TechIcon = ({ component }) => {
  const Component = component;
  
  return (
    <div className="text-4xl text-white/70 hover:text-white transition-colors">
      <Component />
    </div>
  );
};

export default TechIcon;
